## 2025-02-17 - Lazy Loaded Anchors
**Learning:** React lazy loading breaks standard anchor navigation because the target element doesn't exist until the chunk loads.
**Action:** Wrap lazy components in a persistent parent element (e.g., div) with the target id to ensure deep linking works immediately.
