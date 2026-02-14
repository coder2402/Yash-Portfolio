## 2024-05-22 - Contact Form Accessibility Pattern
**Learning:** The application uses minimal form styling (transparent backgrounds, only borders) which hides default focus rings and lacks visible labels. This creates a significant accessibility barrier.
**Action:** Always add `aria-label` matching placeholders and implement custom focus states (e.g., `focus:border-cyan-500`) that align with the design system (gradients) to restore usability without breaking the minimalist aesthetic.
