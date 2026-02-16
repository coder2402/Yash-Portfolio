## 2026-02-15 - [Hidden Content Accessibility]
**Learning:** Hiding content off-screen with negative margins completely breaks keyboard accessibility, as users can tab to the element but cannot see what they are interacting with.
**Action:** Always pair `hover` effects that reveal content with `focus-within` or `focus` styles to ensure keyboard users have the same access to information.
