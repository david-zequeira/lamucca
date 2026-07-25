import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export function initMotion() {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) return;

  // 1. Initialize Lenis for Smooth Scrolling
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    touchMultiplier: 2,
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  // === WOW 1: La Tirada (Cinematic Entrance) ===
  const masterTimeline = gsap.timeline({ delay: 0.1 });

  // Rule line
  const rule = document.querySelector('[data-print="rule"]');
  if (rule) {
    gsap.set(rule, { transformOrigin: 'left center' });
    masterTimeline.fromTo(rule, 
      { scaleX: 0 }, 
      { scaleX: 1, duration: 0.8, ease: 'expo.out' }, 
      0
    );
  }

  // Header and elements with 'rise'
  const rises = document.querySelectorAll('[data-print="rise"]');
  if (rises.length) {
    masterTimeline.fromTo(rises,
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out' },
      0.1
    );
  }

  // Typography choreography on the hero title
  const heroLines = document.querySelectorAll('[data-print="line"]');
  if (heroLines.length) {
    heroLines.forEach((line, index) => {
      const split = new SplitType(line, { types: 'words, chars' });
      // Remove original clip-path logic to let GSAP handle characters natively
      line.style.clipPath = 'none'; 
      
      masterTimeline.fromTo(split.chars, 
        { y: 50, opacity: 0, rotateX: -30 },
        { 
          y: 0, 
          opacity: 1, 
          rotateX: 0, 
          stagger: 0.02, 
          duration: 1.2, 
          ease: 'expo.out'
        },
        0.2 + (index * 0.15)
      );
    });
  }

  // Stamp / Sello
  const stamp = document.querySelector('[data-print="sello"]');
  if (stamp) {
    masterTimeline.fromTo(stamp,
      { scale: 1.2, opacity: 0, rotation: 0 },
      { scale: 1, opacity: 1, rotation: -6, duration: 0.6, ease: 'back.out(1.7)' },
      0.8
    );
  }

  // Hero Field Cinematic scale down
  const heroField = document.querySelector('.hero__campo .campo');
  if (heroField) {
    masterTimeline.fromTo(heroField, 
      { scale: 0.95, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.6, ease: 'expo.out' },
      0.2
    );

    // Parallax where meaningful (Scroll Storytelling)
    gsap.to(heroField, {
      yPercent: 12,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });
  }

  // === WOW 2: La Mancha (Scroll Storytelling & Image Reveals) ===
  const mancha = document.querySelector('[data-ink-spread]');
  if (mancha) {
    gsap.fromTo(mancha,
      { clipPath: 'inset(4% 5% 4% 5% round 28px)' },
      {
        clipPath: 'inset(0% 0% 0% 0% round 0px)',
        ease: 'none',
        scrollTrigger: {
          trigger: mancha,
          start: 'top 90%',
          end: 'top 20%',
          scrub: true,
        }
      }
    );
  }

  // === WOW 3: Cifras y Familias (Micro-interactions & Organic Reveals) ===
  const cifras = document.querySelectorAll('.cifra__n');
  cifras.forEach((cifra) => {
    const endValue = parseInt(cifra.textContent || '0', 10);
    if (!isNaN(endValue)) {
      gsap.fromTo(cifra, 
        { textContent: 0 }, 
        {
          textContent: endValue,
          duration: 2.5,
          ease: 'power3.out',
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: cifra,
            start: 'top 90%',
            once: true
          }
        }
      );
    }
  });

  const familias = document.querySelectorAll('.familia');
  if (familias.length) {
    gsap.fromTo(familias,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.familias',
          start: 'top 85%',
          once: true
        }
      }
    );
  }

  // Typography Choreography on Chapters
  const chapterTitles = document.querySelectorAll('.capitulo-title');
  chapterTitles.forEach((title) => {
    const split = new SplitType(title, { types: 'lines' });
    gsap.fromTo(split.lines,
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
          once: true
        }
      }
    );
  });

  // === WOW 4: El Carrete (Scroll storytelling) ===
  const carreteWrap = document.querySelector('[data-reel-scope]');
  const carrete = document.querySelector('[data-reel]');
  const progressFill = document.querySelector('[data-reel-progress]');
  const ticks = document.querySelectorAll('[data-reel-tick]');

  if (carreteWrap && carrete && progressFill) {
    // Horizontal scroll progress fills the bar
    carrete.addEventListener('scroll', () => {
      const maxScroll = carrete.scrollWidth - carrete.clientWidth;
      const progress = carrete.scrollLeft / maxScroll;
      gsap.to(progressFill, { scaleX: progress, duration: 0.1, ease: 'none' });
      
      // Illuminate ticks based on scroll
      ticks.forEach((tick, i) => {
        const tickLeft = tick.parentElement.parentElement.offsetLeft;
        if (carrete.scrollLeft + carrete.clientWidth * 0.8 > tickLeft) {
          gsap.to(tick, { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(1.5)' });
        } else {
          gsap.to(tick, { opacity: 0.32, scale: 0.72, duration: 0.4, ease: 'power2.out' });
        }
      });
    });

    // Initial state
    gsap.set(progressFill, { scaleX: 0, transformOrigin: 'left center' });
    gsap.set(ticks, { opacity: 0.32, scale: 0.72 });
    
    // Trigger scroll event once to initialize ticks visibility
    carrete.dispatchEvent(new Event('scroll'));
  }

  // Overriding Native Reveals to prevent conflict
  // We keep the '.is-ready' logic from Base.astro but apply GSAP manually
  const reveals = document.querySelectorAll('[data-reveal]');
  reveals.forEach(el => {
    if (!el.classList.contains('is-in')) {
      gsap.fromTo(el, 
        { opacity: 0, y: 24 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.9, 
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true
          }
        }
      );
    }
  });
}

// Ensure execution when document is parsed
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMotion);
} else {
  initMotion();
}
