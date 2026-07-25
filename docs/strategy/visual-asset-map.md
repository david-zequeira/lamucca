# Lamucca Visual Asset Map
*Campaign: "Your friendly neighborhood place" (2026)*

This document audits and specifies every visual asset required for the new Lamucca digital experience. The visual language must feel strictly **editorial, cinematic, authentic, and human**. 

**Core Visual Principles:**
- **No generic AI food.** Food must feel real, messy, and lived-in.
- **People must feel spontaneous.** Captured mid-conversation, blurred movement, analog film aesthetic.
- **Madrid must feel authentic.** Not tourist postcards, but the texture of the barrios at dusk.
- **Cohesion:** The entire site must feel like a single photo-essay shot over a long, glorious weekend in Madrid.

---

## 1. Hero Video / Ambient Motion (Chapter 01)

* **Purpose:** The immediate vibe-setter on page load. A silent, atmospheric loop behind the main typography.
* **Aspect ratio:** 9:16 (Mobile) and 2.5:1 (Desktop Panoramic).
* **Resolution:** 1080x1920 (Mobile), 2560x1024 (Desktop) @ 60fps.
* **Visual direction:** Analog film grain, shallow depth of field, warm practical lighting.
* **Camera direction:** Handheld, slow pan, observing from a nearby table.
* **Movement:** People clinking glasses, a waiter slicing a pizza, blurred figures passing the camera.
* **Placement:** `Ch01Hero.astro` background field.
* **Production Prompt:** 
  > *Video prompt: Cinematic analog film, 35mm lens, warm tungsten restaurant lighting. A lively Madrid neighborhood restaurant at dusk. Mid-shot, slightly blurred movement in the foreground of people talking and laughing. A waiter confidently places a steaming wood-fired pizza on a wooden table. Rich, natural colors, deep shadows, organic movement, highly authentic, no artificial lighting, 4k, cinematic.*

## 2. Casa Photography (Chapter 04 & Restaurant Details)

* **Purpose:** The architectural identity of each specific house.
* **Aspect ratio:** 4:5 (Card Covers) and 16:9 (Hero Banners).
* **Resolution:** 1200x1500 (Cards), 2880x1620 (Banners).
* **Visual direction:** Editorial architecture. Must show the *soul* of the room, not an empty real estate shot.
* **Lighting:** Natural light (daytime) or low ambient practicals (evening).
* **Placement:** `Ch04Descubre.astro` (Cards) and `[slug].astro` pages.
* **Production Prompt (Placeholder generation):**
  > *Photography prompt: Editorial interior photography of a bustling, stylish Madrid neighborhood restaurant. Industrial chic meets warm vintage. Exposed brick, distressed wood, low ambient pendant lighting. Shot on medium format film, 50mm lens. People are sitting at tables in the background, slightly out of focus, creating a lively atmosphere. Deep rich tones, realistic, highly detailed, architectural digest style.*
  > *(Note: Must be replaced by real location photography).*

## 3. Food Photography (Chapter 05 - La Comida)

* **Purpose:** Sell the "High Low" concept. High product quality, zero pretension.
* **Aspect ratio:** 1:1 and 4:3.
* **Resolution:** 2000x2000.
* **Visual direction:** "Ugly delicious". Messy, half-eaten, real. Crumbs on the table, a fork resting on the plate, a wine glass casting a sharp shadow.
* **Lighting:** Hard flash (Terry Richardson style) or directional window light. High contrast.
* **Placement:** `Ch05Comida.astro` gallery grid.
* **Production Prompt:**
  > *Photography prompt: Flash photography, harsh direct flash, editorial food photography. A half-eaten gourmet wood-fired pizza with wild mushrooms and truffle oil on a rustic wooden table. A glass of red wine next to it. Crumbs on the table, messy, authentic, "ugly delicious" style. Deep shadows, vibrant colors, 35mm film aesthetic, highly realistic, visceral.*

## 4. Madrid Photography (Chapter 03 - La Ciudad)

* **Purpose:** Anchor the brand to the city. Show the barrios.
* **Aspect ratio:** 3:4 and 16:9.
* **Resolution:** 1600x2133.
* **Visual direction:** Street photography. Observational, cinematic, twilight.
* **Camera direction:** Wide shots of street corners, close-ups of old signage.
* **Lighting:** Blue hour, streetlights reflecting on cobblestones.
* **Placement:** `Ch03Madrid.astro` visual assets.
* **Production Prompt:**
  > *Photography prompt: Cinematic street photography of Madrid's Malasaña neighborhood at twilight (blue hour). Narrow cobblestone street, glowing warm light spilling from a corner tavern window onto the street. Analog 35mm film, subtle film grain, moody atmosphere, rich blues and warm oranges, authentic European street scene, no tourists, highly detailed.*

## 5. People & Muckero Photography (Chapter 06 - Los Muckeros)

* **Purpose:** Show the community, the staff, the regulars.
* **Aspect ratio:** Variable (Bento grid masonry).
* **Resolution:** High-res source assets for cropping.
* **Visual direction:** Candid, joyful, raw. Black and white mixed with saturated color.
* **Lighting:** Natural light, documentary style.
* **Placement:** `Ch06Muckeros.astro` community grid.
* **Production Prompt:**
  > *Photography prompt: Candid documentary photography, black and white 35mm film. A group of friends laughing uncontrollably around a crowded restaurant table filled with empty glasses and plates. One person is gesturing wildly. Authentic emotion, slightly grainy, high contrast, raw, spontaneous, shot on Leica.*

## 6. Background Textures & Patterns

* **Purpose:** The tactile feel of "The Press" (La Imprenta) motion system.
* **Aspect ratio:** Tileable.
* **Resolution:** 1024x1024.
* **Visual direction:** Ink halftones, subtle paper grain, newspaper dots.
* **Color:** Monochromatic (Black/Paper).
* **Placement:** Overlays on `hero__campo`, background of the Base layout.
* **Asset Requirement:** SVG patterns or tiny tileable WebP images representing CMYK halftone dots and recycled paper fiber.

## 7. Motion Assets & UI Choreography

* **Purpose:** The transition states and micro-interactions.
* **Asset Requirement:** CSS/JS (Already implemented via GSAP in `motion.js`). Includes:
  * "La Tirada" (Typography mask reveals)
  * "La Mancha" (Section expansion clip-paths)
  * "El Carrete" (Timeline progress bars)

## 8. Icons & Illustrations

* **Purpose:** AI Concierge, Navigation, UI markers.
* **Visual direction:** Sharp, minimal, high-contrast. Emojis for intents (already implemented).
* **Asset Requirement:** SVG path data for the Concierge FAB, Close buttons, Send buttons. (Already inline in `Concierge.astro`).

---
*Note: All AI-generated placeholders must be watermarked internally or replaced before going live to production. Accurate location representation is legally and commercially critical.*