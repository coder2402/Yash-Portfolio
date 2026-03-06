## 2026-03-05 - Add explicit image dimensions to Experience component
**Learning:** Modern browsers use intrinsic width and height attributes to calculate the aspect ratio of an image before it loads. This allows the layout engine to reserve appropriate space, effectively eliminating Cumulative Layout Shift (CLS) even when CSS eventually overrides the display size.
**Action:** Always include intrinsic `width` and `height` attributes on `<img>` tags, especially for lists of icons or assets where dimensions are known at development time.
