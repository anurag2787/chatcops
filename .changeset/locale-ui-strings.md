---
"@chatcops/widget": patch
---

Move hardcoded English UI text and aria-labels into `WidgetLocaleStrings`.

New keys added to `WidgetLocaleStrings`:
- `openChat` – aria-label for the FAB when the panel is closed
- `defaultName` – default branding name shown in the panel header ("AI Assistant")
- `defaultSubtitle` – default branding subtitle ("Online")
- `greetingWithName` – welcome greeting when the visitor's name is known; supports a `{name}` placeholder
- `selectPlaceholder` – default option text for select fields in the pre-chat form; supports a `{label}` placeholder
- `dismissBubble` – aria-label for the welcome bubble dismiss button

The existing `sendButton` and `closeButton` keys are now also used as aria-labels for the send and close buttons respectively.

The bubble dismiss button gains `type="button"` and an `aria-label`.
