## 2026-02-15 - [Hidden Content Accessibility]
**Learning:** Hiding content off-screen with negative margins completely breaks keyboard accessibility, as users can tab to the element but cannot see what they are interacting with.
**Action:** Always pair `hover` effects that reveal content with `focus-within` or `focus` styles to ensure keyboard users have the same access to information.

## 2026-10-24 - [Semantic HTML for Interactive Elements]
**Learning:** Using `div` with `onClick` for interactive elements (like menu toggles) creates a major accessibility barrier as it lacks keyboard focus and semantic meaning.
**Action:** Always use `<button>` for click interactions and include `aria-label` and `aria-expanded` attributes to communicate state to screen readers.

## 2026-02-18 - [Nested Interactive Controls]
**Learning:** Nesting interactive elements (like `<a>` inside `<button>`) is invalid HTML and creates accessibility issues (confusing role) and usability issues (click target mismatch where button padding is unclickable).
**Action:** Apply button styles directly to the `<a>` tag (using `display: block` or similar) to ensure valid semantics and a consistent, fully clickable hit area.
