# Interviewa Design System

## Typography

* **Headline Font**: Space Grotesk
* **Body Font**: Manrope
* **Label Font**: Manrope

## Color Palette

* **Color Mode**: Dark
* **Background**: `#060e20`
* **Surface**: `#060e20`
* **Surface Container Low**: `#091328`
* **Surface Container High**: `#141f38`
* **Surface Container Highest**: `#192540`
* **Surface Variant**: `#192540`
* **Primary**: `#ba9eff`
* **Primary Container**: `#ae8dff`
* **Primary Dim**: `#8455ef`
* **Secondary**: `#53ddfc`
* **Secondary Container**: `#00687a`
* **Secondary Dim**: `#40ceed`
* **Tertiary**: `#ff86c3`
* **Error**: `#ff6e84`
* **On Surface**: `#dee5ff`
* **Outline**: `#6d758c`
* **Outline Variant**: `#40485d`

---

# Design System Strategy: The Radiant Ethereal Directive

## 1. Overview & Creative North Star
**Creative North Star: "The Neon Curator"**
This design system moves beyond the static web, treating the browser as a multi-dimensional lens. We are not building "pages"; we are orchestrating a series of luminous, floating planes. The aesthetic prioritizes **Dopamine High-Fidelity**—a sensory-rich environment where vibrant "electric" light sources interact with frosted, geometric surfaces.

To break the "template" look, we leverage **Intentional Asymmetry**. While a rigid grid influences the placement, elements should "break" the container, overlapping across layers to create a sense of tactile depth. This is a premium, high-contrast experience designed for 2025-2026, where the UI feels like a physical holographic interface floating in a deep-space void.

---

## 2. Colors & The Luminous Surface
The palette is rooted in a deep, nocturnal base (`#060e20`) to allow the "Dopamine" accents—Electric Blue (`secondary`) and Vibrant Purple (`primary`)—to pop with maximum luminescence.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning. Boundaries must be defined through:
1.  **Tonal Shifts:** Placing a `surface-container-low` section against the `background`.
2.  **Gradients:** Using a subtle transition from `primary` to `primary-container` to define an edge.
3.  **Backdrop Blurs:** Letting the Gaussian blur define the shape of a component against the background noise.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, frosted glass sheets. Use the surface tiers to indicate "elevation" relative to the user:
*   **Base:** `surface` (#060e20) – The infinite void.
*   **Low Layer:** `surface-container-low` – Subtle grouping of content.
*   **Floating Layer:** `surface-container-highest` – Active, interactive panels.
*   **Glassmorphism:** For floating UI, use a semi-transparent `surface-variant` with a 24px–40px `backdrop-filter: blur()`.

### The "Glass & Gradient" Rule
Standard flat buttons are forbidden for primary actions. Use **Signature Textures**:
*   **Primary CTA:** A linear gradient from `primary_dim` (#8455ef) to `primary` (#ba9eff) at 135 degrees.
*   **Neon Accents:** Use `secondary` (#53ddfc) for high-focus micro-interactions (dots, active states, progress bars) to simulate "electric" energy.

---

## 3. Typography: Editorial Authority
We utilize a high-contrast pairing of **Space Grotesk** (Display/Headline) and **Manrope** (Body). 

*   **The Display Scale:** Use `display-lg` (3.5rem) with `-0.04em` letter-spacing. This bold, geometric font should feel like an architectural element.
*   **The Body Scale:** `body-lg` (Manrope) provides a grounded, readable counter-point to the futuristic headlines. 
*   **Hierarchy as Identity:** Always lead with a `display` or `headline` element. Headlines should often overlap the boundary of two background sections to "stitch" the layout together, breaking the traditional horizontal row structure.

---

## 4. Elevation & Depth
Depth is not a shadow; it is a physical relationship between light and glass.

### The Layering Principle
Stacking defines priority. Place a `surface-container-lowest` card inside a `surface-container-high` container to create a "recessed" or "punched-out" effect. This inverted depth creates a more sophisticated visual rhythm than standard "lifted" shadows.

### Ambient Shadows
Shadows must be "light-leaks" rather than dark voids. 
*   **Value:** 0px 20px 40px rgba(0, 0, 0, 0.4). 
*   **The Tint:** For floating elements, add a secondary "glow" shadow: `0px 0px 20px rgba(186, 158, 255, 0.15)` (using the `surface_tint` color). This mimics the way neon light bounces off surfaces.

### The "Ghost Border" Fallback
If a container requires a border for accessibility, use the **Ghost Border**: `outline-variant` (#40485d) at **15% opacity**. It should be barely perceptible, serving as a suggestion of a boundary rather than a hard stop.

---

## 5. Components

### Buttons (The "Holographic" Interaction)
*   **Primary:** Gradient fill (`primary_dim` to `primary`), `xl` (1.5rem) corner radius. On hover, increase the `surface_tint` glow.
*   **Secondary:** Glassmorphism style. Semi-transparent `surface-variant` with a Ghost Border.
*   **Tertiary:** `on_surface` text with an underline that uses the `tertiary` (#ff86c3) color.

### Input Fields
*   **Styling:** Forgo the 4-sided box. Use a `surface-container-high` background with a `full` or `xl` corner radius. 
*   **Active State:** The bottom edge should glow with a 2px `secondary` (#53ddfc) gradient line.

### Cards & Lists
*   **Card Separation:** Use the Spacing Scale (minimum 32px vertical gap) or a shift from `surface-container-low` to `surface-container-high`. **Dividers are strictly prohibited.**
*   **Interactive Cards:** On hover, cards should scale slightly (1.02x) and the `backdrop-blur` should increase, simulating the object moving closer to the user’s eye.

### Floating Navigation (The "Orbital" Menu)
*   Instead of a top-fixed bar, use a floating dock at the bottom or top center. 
*   **Specs:** `surface-container-highest` at 70% opacity, `backdrop-filter: blur(20px)`, `full` (9999px) roundedness.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use "Negative Space" as a structural element. Allow the deep `background` color to breathe between content blocks.
*   **Do** use geometric "Light Orbs." Place large, soft-focus circles of `primary_dim` or `secondary_container` in the background (low opacity) to create tonal depth.
*   **Do** maintain a strict 8px/16px grid for alignment, even when elements are "floating" or "asymmetric."

### Don’t:
*   **Don't** use 100% white (#ffffff). Use `on_surface` (#dee5ff) to maintain the cool, blue-tinted futuristic atmosphere.
*   **Don't** use standard "Drop Shadows" with high opacity. They muddy the glass effect.
*   **Don't** use sharp corners unless for specific geometric decorative elements. Follow the `Roundedness Scale`—typically `xl` or `lg` for interactive components.
*   **Don't** clutter. High-end design is defined by what you leave out. If a component doesn't serve a clear purpose, remove it.
