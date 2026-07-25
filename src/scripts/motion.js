import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export function initMotion() {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) return;

  const isMobile = window.matchMedia('(max-width: 899px)').matches;

  // === WOW 1: La Tirada (Cinematic Entrance) ===
  const masterTimeline = gsap.timeline({ delay: 0.1 });

  const rule = document.querySelector('[data-print="rule"]');
  if (rule) {
    gsap.set(rule, { transformOrigin: 'left center' });
    masterTimeline.fromTo(
      rule,
      { scaleX: 0 },
      { scaleX: 1, duration: 0.8, ease: 'expo.out' },
      0
    );
  }

  const rises = document.querySelectorAll('[data-print="rise"]');
  if (rises.length) {
    masterTimeline.fromTo(
      rises,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, stagger: 0.08, ease: 'power3.out' },
      0.1
    );
  }

  const heroLines = document.querySelectorAll('[data-print="line"]');
  if (heroLines.length) {
    if (isMobile) {
      // SplitType + heavy 3D motion clips badly under overflow on small screens
      masterTimeline.fromTo(
        heroLines,
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: 'power3.out' },
        0.2
      );
    } else {
      heroLines.forEach((line, index) => {
        const split = new SplitType(line, { types: 'words, chars' });
        line.style.clipPath = 'none';

        masterTimeline.fromTo(
          split.chars,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.02,
            duration: 1.1,
            ease: 'expo.out',
          },
          0.2 + index * 0.15
        );
      });
    }
  }

  const stamp = document.querySelector('[data-print="sello"]');
  if (stamp) {
    masterTimeline.fromTo(
      stamp,
      { scale: 1.12, opacity: 0, rotation: 0 },
      { scale: 1, opacity: 1, rotation: -6, duration: 0.55, ease: 'back.out(1.7)' },
      0.75
    );
  }

  // === WOW 2: La Mancha ===
  const mancha = document.querySelector('[data-ink-spread]');
  if (mancha) {
    gsap.fromTo(
      mancha,
      { clipPath: 'inset(4% 5% 4% 5% round 28px)' },
      {
        clipPath: 'inset(0% 0% 0% 0% round 0px)',
        ease: 'none',
        scrollTrigger: {
          trigger: mancha,
          start: 'top 90%',
          end: 'top 20%',
          scrub: true,
        },
      }
    );
  }

  // === WOW 3: Cifras ===
  const cifras = document.querySelectorAll('.cifra__n');
  cifras.forEach((cifra) => {
    const endValue = parseInt(cifra.textContent || '0', 10);
    if (!isNaN(endValue)) {
      gsap.fromTo(
        cifra,
        { textContent: 0 },
        {
          textContent: endValue,
          duration: 2.2,
          ease: 'power3.out',
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: cifra,
            start: 'top 90%',
            once: true,
          },
        }
      );
    }
  });

  const familias = document.querySelectorAll('.familia');
  if (familias.length) {
    gsap.fromTo(
      familias,
      { opacity: 0, x: isMobile ? 0 : -24, y: isMobile ? 16 : 0 },
      {
        opacity: 1,
        x: 0,
        y: 0,
        stagger: 0.12,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.familias',
          start: 'top 85%',
          once: true,
        },
      }
    );
  }

  // Chapter titles — simpler on mobile so lines never stay invisible
  const chapterTitles = document.querySelectorAll('.capitulo-title');
  chapterTitles.forEach((title) => {
    if (isMobile) {
      gsap.fromTo(
        title,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: title,
            start: 'top 90%',
            once: true,
          },
        }
      );
      return;
    }

    const split = new SplitType(title, { types: 'lines' });
    gsap.fromTo(
      split.lines,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: title,
          start: 'top 85%',
          once: true,
        },
      }
    );
  });

  // === WOW 4: El Carrete ===
  const carreteWrap = document.querySelector('[data-reel-scope]');
  const carrete = document.querySelector('[data-reel]');
  const progressFill = document.querySelector('[data-reel-progress]');
  const ticks = document.querySelectorAll('[data-reel-tick]');

  if (carreteWrap && carrete && progressFill) {
    carrete.addEventListener('scroll', () => {
      const maxScroll = carrete.scrollWidth - carrete.clientWidth;
      const progress = maxScroll > 0 ? carrete.scrollLeft / maxScroll : 0;
      gsap.to(progressFill, { scaleX: progress, duration: 0.1, ease: 'none' });

      ticks.forEach((tick) => {
        const host = tick.parentElement?.parentElement;
        if (!host) return;
        const tickLeft = host.offsetLeft;
        if (carrete.scrollLeft + carrete.clientWidth * 0.8 > tickLeft) {
          gsap.to(tick, { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(1.5)' });
        } else {
          gsap.to(tick, { opacity: 0.32, scale: 0.72, duration: 0.4, ease: 'power2.out' });
        }
      });
    }, { passive: true });

    gsap.set(progressFill, { scaleX: 0, transformOrigin: 'left center' });
    gsap.set(ticks, { opacity: 0.32, scale: 0.72 });
    carrete.dispatchEvent(new Event('scroll'));
  }

  // Reveals: CSS + IntersectionObserver in Base.astro owns opacity.
  // Do NOT set GSAP opacity:0 here — that left whole chapters invisible on iOS.
  requestAnimationFrame(() => ScrollTrigger.refresh());
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMotion);
} else {
  initMotion();
}
