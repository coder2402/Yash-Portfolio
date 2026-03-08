## 2024-05-24 - Focus Management on Navigational Elements and Buttons
**Learning:** Found a widespread pattern of using `focus:ring` across buttons and links, which causes lingering focus rings after a mouse click, degrading the non-keyboard user experience. Additionally, primary navigational links (e.g. in NavBar) lacked focus indicators altogether, hindering keyboard navigability.
**Action:** Consistently replace `focus:ring` with `focus-visible:ring` to assure focus indicators only appear during keyboard navigation, satisfying both mouse and keyboard users. Ensure all interactive links (`<a>`) inherently have `focus-visible` styling if lacking.

## 2024-06-03 - Accessible Hidden Navigation Interfaces
**Learning:** A critical pattern emerged regarding hidden sidebar components (`SocialLinks.jsx`): expanding on mouse hover or element focus alone creates accessibility gaps. While CSS `focus-within:ml-[-10px]` makes the parent visible when keyboard tabbing, the `<a>` tag lacked native focus indicators and context for screen readers since it only contained an icon and text that wasn't consistently descriptive.
**Action:** Ensure that visually hidden sliding navigation elements pair `focus-within` on the parent with `focus-visible` styling on the interactive children. Always provide comprehensive `aria-label` attributes on links that rely heavily on icons for context.

## 2025-03-08 - Accessible Form Labels Over Implicit ARIA labels
**Learning:** Found that while the contact form inputs used `aria-label`s for accessibility, they completely lacked visible `<label>` elements. This is a common anti-pattern that assumes placeholders are sufficient for sighted users, but placeholders disappear upon typing and don't provide a persistent visual context, reducing overall usability.
**Action:** When working with forms, always pair inputs with explicit, visual `<label>` elements using the `htmlFor` attribute that maps to the input's `id`. This improves usability for everyone, not just screen-reader users, and allows `aria-label` to be safely removed or kept as a fallback.
