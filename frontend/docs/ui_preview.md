# Interviewa Frontend Implementation

I have successfully translated the Stitch AI HTML design into a fully modularized Next.js frontend using the latest Tailwind CSS v4!

## What was implemented:
- **Tailwind CSS V4 Configured:** Refactored the `<script>` inline tokens into the modern Tailwind CSS V4 `@theme inline` block syntax inside `globals.css`—ensuring all the colors (`#ba9eff`, `#53ddfc`, etc.) and CSS variables are correctly mapped for future scale.
- **Custom Fonts Set Up:** Implemented `next/font/google` directly inside `layout.tsx` to automatically optimize and preload **Space Grotesk** and **Manrope**.
- **Dark Mode Optimization:** Added the `dark` class to the HTML tag and correctly nested the variables.
- **Background & Animations:** Correctly migrated all the complex gradient animations, floating orbs, backdrop-blurs, and custom keyframes (pulse-glow, float) natively.
- **Modular Components:** The monolithic code has been modularized into neatly organized React components:
    * `Background.tsx`: Handles all atmospheric lights and grid textures.
    * `Navbar.tsx`: Fixed navigation with glassmorphism.
    * `Hero.tsx`: The primary CTA hero banner with floating biometric chips.
    * `Features.tsx`: Responsive grid demonstrating the core simulator features.
    * `Highlight.tsx`: Final CTA with gradient depth logic.
    * `Footer.tsx`: Standardized modular links base.
    
All these connect cleanly in `page.tsx`. 

## Run & Test

A Next.js Dev Server is currently running. Check out the application running locally below!

🔗 [http://localhost:3000](http://localhost:3000)

**Screenshot Preview:**

![AIVision Landing Page Preview](file:///C:/Users/swaru/.gemini/antigravity/brain/3d737aa6-d103-4a8f-a014-25f90a56c947/interviewa_home_final_1775771316658.png)

_Note: If the web app isn't appearing instantly, try waiting another half-second or hot reloading_
