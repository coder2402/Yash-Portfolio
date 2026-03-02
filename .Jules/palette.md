## 2026-03-02 - Focus-Visible for Better Keyboard UX
**Learning:** Using generic `focus:ring` classes can sometimes negatively impact mouse click experiences by leaving a persistent outline after a click. Using Tailwind's `focus-visible:` variants provides a much better UX by only showing the focus ring during keyboard navigation.
**Action:** Default to using `focus-visible` over `focus` for explicit focus indicators (like rings) to maintain clean visual states for mouse users while ensuring strong accessibility for keyboard users.
