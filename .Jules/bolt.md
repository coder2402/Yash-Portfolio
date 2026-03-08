## 2024-05-24 - Placebo useCallbacks
**Learning:** In React, wrapping an event handler in `useCallback` when passed exclusively to a native DOM element (like an `<a>` or `<button>`) provides zero rendering performance benefit because React does not perform shallow comparison of props on native DOM elements. In fact, it adds a small overhead from hook invocation and dependency array allocation.
**Action:** Always identify where a memoized callback is passed. If it's only passed to native HTML elements, remove `useCallback` to simplify code and slightly reduce memory overhead.
## 2024-05-25 - React.lazy Eager Fetching
**Learning:** Unconditionally rendering a `React.lazy` component causes the browser to eagerly fetch the javascript chunk as soon as the component mounts, defeating the purpose of below-the-fold code splitting.
**Action:** Use an `IntersectionObserver` wrapper to defer rendering the `React.lazy` component until the user actually scrolls near it. Ensure that the wrapper `div` has the necessary `id` attribute if the section is a target for hash navigation.
