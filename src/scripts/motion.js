import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export function initMotion() {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) return;

  const isMobile = window.matchMedia('(max-width: 899px)').matches;

  // WOW 1 «La tirada» — the hero owns its own entrance now. It is pure CSS in
  // Ch01Hero.astro, so it survives this bundle failing to load, and the
  // headline animates per block rather than per character.

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

  // WOW 4 «El carrete» owns its own interaction — see CarreteCasas.astro.
  // CSS handles every transition there; no GSAP timeline to register here.

  // Reveals: CSS + IntersectionObserver in Base.astro owns opacity.
  // Do NOT set GSAP opacity:0 here — that left whole chapters invisible on iOS.
  requestAnimationFrame(() => ScrollTrigger.refresh());
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMotion);
} else {
  initMotion();
}
