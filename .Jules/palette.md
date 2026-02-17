## 2026-02-15 - [Hidden Content Accessibility]
**Learning:** Hiding content off-screen with negative margins completely breaks keyboard accessibility, as users can tab to the element but cannot see what they are interacting with.
**Action:** Always pair `hover` effects that reveal content with `focus-within` or `focus` styles to ensure keyboard users have the same access to information.

## 2026-10-24 - [Semantic HTML for Interactive Elements]
**Learning:** Using `div` with `onClick` for interactive elements (like menu toggles) creates a major accessibility barrier as it lacks keyboard focus and semantic meaning.
**Action:** Always use `<button>` for click interactions and include `aria-label` and `aria-expanded` attributes to communicate state to screen readers.
