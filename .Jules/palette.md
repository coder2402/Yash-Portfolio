## 2024-05-24 - Focus Management on Navigational Elements and Buttons
**Learning:** Found a widespread pattern of using `focus:ring` across buttons and links, which causes lingering focus rings after a mouse click, degrading the non-keyboard user experience. Additionally, primary navigational links (e.g. in NavBar) lacked focus indicators altogether, hindering keyboard navigability.
**Action:** Consistently replace `focus:ring` with `focus-visible:ring` to assure focus indicators only appear during keyboard navigation, satisfying both mouse and keyboard users. Ensure all interactive links (`<a>`) inherently have `focus-visible` styling if lacking.

## 2024-06-03 - Accessible Hidden Navigation Interfaces
**Learning:** A critical pattern emerged regarding hidden sidebar components (`SocialLinks.jsx`): expanding on mouse hover or element focus alone creates accessibility gaps. While CSS `focus-within:ml-[-10px]` makes the parent visible when keyboard tabbing, the `<a>` tag lacked native focus indicators and context for screen readers since it only contained an icon and text that wasn't consistently descriptive.
**Action:** Ensure that visually hidden sliding navigation elements pair `focus-within` on the parent with `focus-visible` styling on the interactive children. Always provide comprehensive `aria-label` attributes on links that rely heavily on icons for context.

## 2026-03-09 - Keyboard Navigation and Hash Links in SPAs
**Learning:** In a single-page application (SPA) using React, standard anchor links (`<a href="#id">`) might scroll the viewport to the target, but they do not automatically move keyboard focus to the target element if the element isn't natively focusable. This breaks keyboard navigation, as subsequent tabs start from the original anchor location.
**Action:** When implementing intra-page navigation (like skip links or NavBars) targeting specific sections (e.g., `#home`, `#about`), ensure the target containers have `tabIndex={-1}` and `focus:outline-none`. This allows programmatic focus transfer without showing a disruptive focus ring on click.
