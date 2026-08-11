# Design System — Todo List App

> Source of truth: the approved `index.html`.
> Every value below is extracted from it. Changing a value here without changing the approved design is a defect.

Last updated: 2026-08-11

## 1. Foundations

### 1.1 Color

Semantic tokens. Name by job, never by hue.

| Token | Value | Used for |
|---|---:|---|
| `--color-bg` | `#F9FAFB` | Page background and translucent sticky header base |
| `--color-surface` | `#FFFFFF` | Card, panel, button, input and elevated content background |
| `--color-surface-subtle` | `#F8FAFC` | Empty states, state tab rail, neutral state boxes |
| `--color-surface-muted` | `#F3F4F6` | Inactive filter chip background |
| `--color-surface-selected-soft` | `#EEF2FF` | Loading skeleton shimmer |
| `--color-surface-danger-soft` | `#FEF2F2` | Delete button and error state background |
| `--color-border` | `#E5E7EB` | Default border, divider |
| `--color-border-strong` | `#CBD5E1` | Checkbox border and dashed empty-state border |
| `--color-border-dark-preview` | `#64748B` | Preview unchecked box border |
| `--color-border-danger-soft` | `#FECACA` | Error and retry borders |
| `--color-text` | `#111827` | Body text and primary labels |
| `--color-text-inverse` | `#FFFFFF` | Text and icons on dark, primary, success and danger fills |
| `--color-text-muted` | `#6B7280` | Secondary text, captions, inactive controls |
| `--color-text-success` | `#047857` | Success toast text |
| `--color-text-danger` | `#B91C1C` | Error copy and retry text |
| `--color-text-danger-strong` | `#991B1B` | Error heading text |
| `--color-primary` | `#2563EB` | Primary action background, active navigation, selected chip, focus and brand accents |
| `--color-primary-hover` | `#1D4ED8` | Primary button hover background |
| `--color-primary-highlight` | `#60A5FA` | Brand mark gradient endpoint |
| `--color-success` | `#10B981` | Completed check, saved status and success accents |
| `--color-danger` | `#EF4444` | Destructive action and input validation text |
| `--color-warning` | `#F59E0B` | Warning token in root and status dot family |
| `--color-preview-bg` | `#0F172A` | Dark product preview window |
| `--color-preview-muted` | `#475569` | Preview window dots |
| `--color-preview-danger` | `#F87171` | Preview window red dot |
| `--color-preview-warning` | `#FBBF24` | Preview window yellow dot |
| `--color-preview-success` | `#34D399` | Preview window green dot |

#### Contrast audit

Every text-on-background pair actually used. Body text ≥ 4.5:1, large text (≥ 18.66px bold or ≥ 24px) ≥ 3:1, UI borders ≥ 3:1.

| Foreground | Background | Ratio | Passes |
|---|---|---:|---|
| `--color-text` `#111827` | `--color-bg` `#F9FAFB` | 16.98:1 | AA |
| `--color-text` `#111827` | `--color-surface` `#FFFFFF` | 17.74:1 | AA |
| `--color-text-muted` `#6B7280` | `--color-surface` `#FFFFFF` | 4.83:1 | AA |
| `--color-text-muted` `#6B7280` | `--color-bg` `#F9FAFB` | 4.63:1 | AA |
| `--color-text-muted` `#6B7280` | `--color-surface-subtle` `#F8FAFC` | 4.57:1 | AA |
| `--color-primary` `#2563EB` | `--color-bg` `#F9FAFB` | 5.02:1 | AA |
| `--color-primary` `#2563EB` | `--color-surface` `#FFFFFF` | 5.17:1 | AA |
| `--color-text-inverse` `#FFFFFF` | `--color-primary` `#2563EB` | 5.17:1 | AA |
| `--color-text-inverse` `#FFFFFF` | `--color-primary-hover` `#1D4ED8` | 6.70:1 | AA |
| `--color-text-inverse` `#FFFFFF` | `--color-success` `#10B981` | 2.54:1 | FAIL for text; acceptable only for decorative check glyph at current size |
| `--color-text-inverse` `#FFFFFF` | `--color-danger` `#EF4444` | 3.76:1 | AA Large only; acceptable for large/high-weight delete hover label, not body text |
| `--color-text-inverse` `#FFFFFF` | `--color-preview-bg` `#0F172A` | 17.85:1 | AA |
| `--color-text-success` `#047857` | success soft background `rgba(16,185,129,.1)` over white | ~4.96:1 | AA |
| `--color-danger` `#EF4444` | `--color-surface-danger-soft` `#FEF2F2` | 3.45:1 | AA Large only; 13px error text fails body AA |
| `--color-text-danger` `#B91C1C` | `--color-surface-danger-soft` `#FEF2F2` | 5.49:1 | AA |
| `--color-text-danger-strong` `#991B1B` | `--color-surface-danger-soft` `#FEF2F2` | 7.37:1 | AA |
| `--color-border` `#E5E7EB` | `--color-surface` `#FFFFFF` | 1.24:1 | FAIL for meaningful UI boundary; acceptable only where not conveying state |
| `--color-border-strong` `#CBD5E1` | `--color-surface` `#FFFFFF` | 1.47:1 | FAIL for UI border contrast |

### 1.2 Spacing

Base unit: `2px`. The product mostly uses 2px-derived values, with larger layout values also extracted from the approved CSS.

| Token | Value |
|---|---:|
| `--space-1` | `2px` |
| `--space-2` | `6px` |
| `--space-3` | `8px` |
| `--space-4` | `10px` |
| `--space-5` | `12px` |
| `--space-6` | `13px` |
| `--space-7` | `14px` |
| `--space-8` | `15px` |
| `--space-9` | `16px` |
| `--space-10` | `18px` |
| `--space-11` | `20px` |
| `--space-12` | `22px` |
| `--space-13` | `24px` |
| `--space-14` | `28px` |
| `--space-15` | `42px` |
| `--space-16` | `44px` |
| `--space-17` | `54px` |
| `--space-18` | `72px` |

### 1.3 Typography

Font families, as loaded by system fallback only:

- Body: `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`
- Headings: inherit body stack, with tighter letter spacing.
- Mono: none used in the approved design.

| Token | Size | Line height | Weight | Used for |
|---|---:|---:|---:|---|
| `--text-xs` | `12px` | normal | 650 | Todo item metadata |
| `--text-sm` | `13px` | normal | 700 | Inline validation error |
| `--text-base` | browser default `16px` | `1.35` to `1.6` | 650–850 | Body copy, chips, buttons, todo titles |
| `--text-lg` | `20px` | `1.55` to `1.65` | 400–850 | Lead copy and state heading |
| `--text-xl` | `22px` | normal | 900 | Feature icon glyphs and app panel h2 |
| `--text-2xl` | `26px` | normal | 900 | Empty illustration glyph |
| `--text-3xl` | `34px` | `1.1` | default bold | Section h2 |
| `--text-hero` | `clamp(44px,6vw,72px)`; `42px` below 560px | `.96` | default bold | Page h1 |

Heading levels are used in order: `h1` in the hero, `h2` for sections and app header, `h3` inside feature and empty-state cards.

### 1.4 Radius, border, shadow, motion

| Token | Value | Used for |
|---|---|---|
| `--radius-xs` | `9px` | Preview check mark |
| `--radius-sm` | `11px` to `12px` | Todo checkbox, delete button, small pills |
| `--radius-md` | `14px` to `16px` | Brand mark, menu button, buttons, inputs, tabs, retry button |
| `--radius-lg` | `18px` to `22px` | Todo item, mobile nav, mini window, empty and state boxes |
| `--radius-xl` | `24px` | Feature cards and root radius token |
| `--radius-2xl` | `28px` to `32px` | Todo app, states card, hero card |
| `--radius-full` | `50%` / `999px` | Dots, chips, sync badge, eyebrow badge |
| `--border-width` | `1px` | Default border and dividers |
| `--border-width-strong` | `2px` | Checkbox border |
| `--border-width-focus` | `3px` | Global visible focus ring |
| `--shadow-sm` | `0 8px 20px rgba(15,23,42,.08)` | Hovered navigation link |
| `--shadow-md` | `0 12px 28px rgba(15,23,42,.08)` and `0 14px 28px rgba(15,23,42,.08)` | Todo item hover and ghost button hover |
| `--shadow-lg` | `0 16px 32px rgba(37,99,235,.24)` and `0 16px 34px rgba(15,23,42,.07)` | Primary action and feature card resting elevation |
| `--shadow-xl` | `0 24px 60px rgba(15,23,42,.12)` | Hero card, todo app, states card, mobile nav |
| `--shadow-brand` | `0 12px 28px rgba(37,99,235,.28)` | Brand mark |
| `--duration-fast` | `.2s` | Hover, focus and item transitions |
| `--duration-base` | `.25s` to `.35s` | Todo insertion and toast pop |
| `--duration-slow` | `.5s` to `.7s` | Hero preview entrance animations |
| `--duration-loading` | `1.2s` | Skeleton shimmer |
| `--easing` | `ease` / `linear` | Most transitions use ease; shimmer uses linear |

Motion does not include a `prefers-reduced-motion: reduce` override in the approved design.

### 1.5 Layout and breakpoints

| Name | Min width | Container | Columns | Gutter |
|---|---:|---:|---|---:|
| `base` | `0px` | full width with `16px` side padding below 560px | Single-column hero/app/features | `10px` to `16px` |
| `mobile-nav` | `560px` max rule | `16px` shell padding | Single-column forms, tabs and feature grid | `10px` to `16px` |
| `md` | `861px` | `1120px` max with `24px` side padding | Hero `1fr 430px`, app `1.05fr .95fr`, features 4 columns | `24px`, `44px` hero |
| `tablet` | `860px` max rule | `24px` shell padding | Hero/app one column, feature grid 2 columns | `24px` |

Z-index scale (only these values are allowed):

| Layer | Value |
|---|---:|
| Base | `0` |
| Sticky header | `20` |
| Dropdown | `20` inherited through sticky header context; mobile menu is absolutely positioned inside header |
| Modal backdrop | Not used |
| Modal | Not used |
| Toast | Not explicitly layered |
## 2. Components

One subsection per reusable component. Every component lists all states.

### 2.1 Sticky header and primary navigation

**Purpose** — Keep brand identity and section navigation available while scrolling the single-page app.

**Anatomy** — `[brand link: mark + product name] [primary nav links] [mobile menu button]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Desktop sticky header | `--color-bg`, `--color-border`, `--space-13`, `--space-18`, `--color-text-muted` | Widths above 860px |
| Mobile collapsed header | `--color-surface`, `--shadow-xl`, `--radius-lg` | Widths at or below 860px |

**Sizes**

| Size | Height | Padding | Text token |
|---|---:|---:|---|
| Header | `72px` | shell `24px` desktop / `16px` mobile | `--text-base` |
| Nav link | minimum `44px` hit target through `10px 12px` padding | `10px 12px` | `--text-base` |
| Menu button | approximately `44px` high | `10px` | `--text-base` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Translucent background with blur and bottom divider; links muted | `--color-bg`, `--color-border`, `--color-text-muted` |
| Hover | Link background turns white, text becomes primary and shadow appears | `--color-surface`, `--color-primary`, `--shadow-sm` |
| Focus (keyboard) | Global 3px focus ring with 3px offset | `--color-primary`, `--border-width-focus` |
| Active / pressed | Menu button toggles mobile nav open with `aria-expanded=true`; no separate pressed visual beyond opened menu | `--color-surface`, `--shadow-xl` |
| Disabled | Not defined in approved design; navigation items should not be rendered when unavailable | Not used |
| Loading | Not defined; header stays available while app state changes | Not used |
| Error | Not defined; header does not show errors | Not used |
| Empty | Not defined; nav still displays available sections | Not used |

**Accessibility** — Brand link has `aria-label="Todo List App home"`. Navigation uses `aria-label="Primary navigation"`. Menu button controls `#navLinks`, updates `aria-expanded`, and Escape closes the menu and returns focus to the button. Hit targets should remain at least 44×44px.

### 2.2 Brand mark

**Purpose** — Identify the app with a compact completion-check motif.

**Anatomy** — `[rounded square gradient mark] [check svg]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Header mark | `--color-primary`, `--color-primary-highlight`, `--color-text-inverse`, `--shadow-brand`, `--radius-md` | Product identity in the top bar |

**Sizes**

| Size | Height | Padding | Text token |
|---|---:|---:|---|
| Default | `38px` square | grid centered | Icon `22px` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Primary-to-highlight diagonal gradient with white check | `--color-primary`, `--color-primary-highlight`, `--color-text-inverse` |
| Hover | Inherits brand link interaction; no mark-only change | `--shadow-brand` |
| Focus (keyboard) | Parent brand link receives global focus ring | `--color-primary` |
| Active / pressed | No separate mark-only active state | Not used |
| Disabled | Not defined | Not used |
| Loading | Not defined | Not used |
| Error | Not defined | Not used |
| Empty | Not defined | Not used |

**Accessibility** — SVG is `aria-hidden="true"`; the surrounding brand link supplies the accessible name.

### 2.3 Hero section

**Purpose** — Explain the product promise and route users into the app and state review areas.

**Anatomy** — `[eyebrow] [h1] [lead paragraph] [primary + ghost actions] [preview card]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Desktop hero | `--space-18`, `--space-16`, `--text-hero` | Above 860px, text plus preview side-by-side |
| Mobile hero | `--space-15`, `--text-hero` | At or below 860px, stacked layout |

**Sizes**

| Size | Height | Padding | Text token |
|---|---:|---:|---|
| Desktop | content-defined | `72px 0 42px` | `--text-hero`, `--text-lg` |
| Mobile | content-defined | `42px 0 42px` | `42px` h1 below 560px |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Two-column task-focused introduction with primary and secondary actions | `--color-bg`, `--color-text`, `--color-text-muted` |
| Hover | Delegated to contained buttons and links | Button tokens |
| Focus (keyboard) | Delegated to contained actions | `--color-primary` |
| Active / pressed | Delegated to contained actions | Button tokens |
| Disabled | Not defined; hero actions should not be disabled in this single-page design | Not used |
| Loading | Not defined; app loading is shown in data states component | Not used |
| Error | Not defined; app errors are shown in data states component | Not used |
| Empty | Not defined; app empty state is shown in todo panel and data states component | Not used |

**Accessibility** — The hero contains the page `h1`. Action links point to in-page sections and must retain visible focus.

### 2.4 Button

**Purpose** — Trigger primary task actions or route to secondary sections. Use buttons for actions and links for navigation.

**Anatomy** — `[label]` or `[icon?] [label]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Primary | `--color-primary`, `--color-primary-hover`, `--color-text-inverse`, `--shadow-lg`, `--radius-md` | Add task and main call to action |
| Ghost | `--color-surface`, `--color-text`, `--color-border`, `--shadow-md`, `--radius-md` | Secondary hero call to action |
| Retry | `--color-surface`, `--color-border-danger-soft`, `--color-text-danger`, `--radius-md` | Retry after data-loading error |

**Sizes**

| Size | Height | Padding | Text token |
|---|---:|---:|---|
| Default action | at least `44px` | `13px 18px` | `--text-base`, weight 800 |
| Retry | approximately `44px` | `10px 12px` | `--text-base`, weight 850 |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Rounded, high-weight label; primary uses blue fill and shadow | `--color-primary`, `--color-text-inverse`, `--radius-md` |
| Hover | Primary darkens and lifts `-2px`; ghost lifts with shadow | `--color-primary-hover`, `--shadow-md` |
| Focus (keyboard) | Global 3px focus ring with 3px offset | `--color-primary`, `--border-width-focus` |
| Active / pressed | Browser press behavior only; no separate approved style | Existing button tokens |
| Disabled | Not defined in approved design; if needed, use muted text and prevent interaction without inventing new colors | Not used |
| Loading | Sync text shows saving while button remains enabled; no button spinner approved | Not used |
| Error | Form error appears below input, not on the button | `--color-danger` |
| Empty | Buttons remain visible in empty state when relevant, such as add field staying ready | Existing button tokens |

**Accessibility** — Minimum target is 44×44px. Buttons must keep focus-visible outline. Links styled as buttons must navigate; form button must submit.

### 2.5 Todo form and text input

**Purpose** — Let users add a non-empty task title quickly.

**Anatomy** — `[sr-only label] [text input] [inline error] [submit button]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Standard add form | `--color-surface-subtle`, `--color-border`, `--color-primary`, `--radius-md` | Main todo entry |
| Invalid form | `--color-danger`, `--color-surface`, `--color-primary` focus | Empty submission validation |

**Sizes**

| Size | Height | Padding | Text token |
|---|---:|---:|---|
| Input | at least `48px` | `14px 15px` | `--text-base` |
| Form gap | content-defined | `10px` gap | `--text-base` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Light background, 1px border, 16px radius | `--color-surface-subtle`, `--color-border`, `--radius-md` |
| Hover | No separate hover style approved | Existing input tokens |
| Focus (keyboard) | Border becomes primary, background white, soft blue focus shadow; global focus also applies to focus-visible | `--color-primary`, `--color-surface` |
| Active / pressed | Same as focus while editing | `--color-primary` |
| Disabled | Not defined in approved design | Not used |
| Loading | Input remains available while saved status changes to `Saving…` | `--color-success` for sync badge |
| Error | Error text appears, `aria-invalid=true`, input keeps focus | `--color-danger` |
| Empty | Empty submission is rejected with inline error; empty list keeps add field ready | `--color-danger` |

**Accessibility** — The input has an associated `sr-only` label. Empty submit sets `aria-invalid="true"` and returns focus to the input. Do not remove the global focus-visible outline.

### 2.6 Toast and sync badge

**Purpose** — Reassure users that add, delete and persistence actions were saved.

**Anatomy** — Sync badge: `[status text]`; Toast: `[status message]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Sync badge | `--color-success`, success soft background, `--radius-full` | Persistent save status in app header |
| Toast | `--color-text-success`, success soft background, `--radius-md` | Temporary add/delete confirmation |

**Sizes**

| Size | Height | Padding | Text token |
|---|---:|---:|---|
| Sync badge | content-defined | `8px 10px` | `13px`, weight 800 |
| Toast | content-defined | `12px 14px` | `--text-base`, weight 800 |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Sync reads `Saved just now`; toast hidden until action | `--color-success`, `--color-text-success` |
| Hover | No hover interaction | Not used |
| Focus (keyboard) | Not focusable | Not used |
| Active / pressed | Not interactive | Not used |
| Disabled | Not interactive | Not used |
| Loading | Sync text changes to `Saving…` while persistence is in progress | `--color-success` |
| Error | Not defined; data errors appear in state card | Not used |
| Empty | Hidden when there is no recent status message | Not used |

**Accessibility** — Toast uses `role="status"` so confirmation can be announced. Sync badge is visible text.

### 2.7 Filter chip

**Purpose** — Switch between all, active and complete todo views.

**Anatomy** — `[label] [count]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Inactive | `--color-surface-muted`, `--color-text-muted`, `--radius-full` | Available filter not currently selected |
| Active | primary soft background, `--color-primary`, primary soft border | Current filter |

**Sizes**

| Size | Height | Padding | Text token |
|---|---:|---:|---|
| Default | approximately `38px` | `9px 12px` | `--text-base`, weight 800 |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Muted text on neutral chip background | `--color-surface-muted`, `--color-text-muted` |
| Hover | Matches active styling with primary text and soft blue background | `--color-primary` |
| Focus (keyboard) | Global 3px focus ring | `--color-primary` |
| Active / pressed | Active class shows soft blue background and primary text | `--color-primary` |
| Disabled | Not defined; unavailable filters should remain enabled and show zero counts | Not used |
| Loading | No chip-specific loading style | Not used |
| Error | No chip-specific error style | Not used |
| Empty | Empty filtered view shows empty-state panel below chips | Empty-state tokens |

**Accessibility** — Filter group uses `role="group"` and `aria-label="Todo filters"`. Buttons remain keyboard reachable and update the list.

### 2.8 Todo item

**Purpose** — Display one task with reversible completion and deletion controls.

**Anatomy** — `[completion toggle] [title + metadata] [delete button]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Active task | `--color-surface`, `--color-border`, `--color-text`, `--radius-lg` | Task not complete |
| Complete task | `--color-success`, `--color-text-muted` | Task marked complete |
| Delete action | `--color-surface-danger-soft`, `--color-danger` | Remove task |

**Sizes**

| Size | Height | Padding | Text token |
|---|---:|---:|---|
| Todo item | content-defined, at least `54px` | `12px` | title `--text-base`, meta `--text-xs` |
| Toggle | `30px` square | grid centered | check glyph |
| Delete button | at least `36px`; should reach 44px hit target in implementation | `8px 10px` | `--text-base`, weight 900 |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | White card, 1px border, title and muted metadata | `--color-surface`, `--color-border`, `--color-text`, `--color-text-muted` |
| Hover | Item lifts `-1px` and gains shadow; toggle border turns success; delete can turn danger fill with white text | `--shadow-md`, `--color-success`, `--color-danger`, `--color-text-inverse` |
| Focus (keyboard) | Toggle and delete receive global 3px focus ring | `--color-primary` |
| Active / pressed | Toggle switches complete/incomplete; delete removes item and shows toast | `--color-success`, `--color-surface-danger-soft` |
| Disabled | Not defined in approved design | Not used |
| Loading | Not item-specific; list-level skeleton appears during load | Skeleton tokens |
| Error | Not item-specific; state card shows load error | Error-state tokens |
| Empty | List is replaced by empty-state card when no todo items are visible | Empty-state tokens |

**Accessibility** — Toggle button uses a dynamic `aria-label` of `Mark complete` or `Mark incomplete`. Delete button uses `aria-label="Delete task"`. Todo list uses `aria-live="polite"` for updates.

### 2.9 Empty state

**Purpose** — Explain an empty list or filtered view and guide the next action.

**Anatomy** — `[illustration glyph] [heading] [explanatory copy]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Todo list empty state | `--color-surface-subtle`, `--color-border-strong`, `--color-success`, `--radius-lg` | No tasks in current filter |
| Data empty state | `--color-surface-subtle`, `--color-border`, `--radius-lg` | No saved tasks in data-state panel |

**Sizes**

| Size | Height | Padding | Text token |
|---|---:|---:|---|
| List empty | content-defined | `28px` | `--text-base`, h3 default bold |
| Illustration | `54px` square | grid centered | `--text-2xl` |
| Data empty | content-defined | `22px` | `--text-base`, strong `--text-lg` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Hidden until no items match; then centered dashed box appears | `--color-surface-subtle`, `--color-border-strong` |
| Hover | No hover interaction | Not used |
| Focus (keyboard) | Not focusable | Not used |
| Active / pressed | Not interactive | Not used |
| Disabled | Not interactive | Not used |
| Loading | Replaced by skeleton while data is loading | Skeleton tokens |
| Error | Replaced by error state when data cannot load | Error-state tokens |
| Empty | Shows message: `No tasks in this view` and next action copy | `--color-text`, `--color-text-muted` |

**Accessibility** — Empty state must never be blank. The illustration is `aria-hidden="true"`; the heading and paragraph provide meaning.

### 2.10 Data states card

**Purpose** — Demonstrate loading, empty and error states for persisted todos.

**Anatomy** — `[state tabs] [state content area]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Loading | skeleton gradient colors, `--duration-loading` | Fetching persisted tasks |
| Empty | `--color-surface-subtle`, `--color-border`, `--color-text-muted` | Fetch succeeds with no tasks |
| Error | `--color-surface-danger-soft`, `--color-border-danger-soft`, `--color-text-danger-strong`, `--color-text-danger` | Fetch fails |

**Sizes**

| Size | Height | Padding | Text token |
|---|---:|---:|---|
| Card | `min-height:280px` content area | tabs `16px`, content `22px` | `--text-base`, strong `--text-lg` |
| Skeleton line | `48px` | none | not text |
| Tab | content-defined | `10px` | `--text-base`, weight 850 |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Card uses white surface, border, rounded corners and large shadow | `--color-surface`, `--color-border`, `--shadow-xl`, `--radius-2xl` |
| Hover | Tabs can hover into active styling | `--color-primary`, `--color-text-inverse` |
| Focus (keyboard) | Tabs and retry button receive global focus ring | `--color-primary` |
| Active / pressed | Active tab uses primary fill and white text | `--color-primary`, `--color-text-inverse` |
| Disabled | Not defined | Not used |
| Loading | Three animated skeleton bars; later resolves to `Tasks loaded` message | `--color-surface-selected-soft`, `--duration-loading` |
| Error | Soft red box with strong heading, explanatory copy and retry button | `--color-surface-danger-soft`, `--color-border-danger-soft`, `--color-text-danger` |
| Empty | Neutral state box explains that no tasks exist and add field remains ready | `--color-surface-subtle`, `--color-text-muted` |

**Accessibility** — Tabs use `role="tablist"`, `role="tab"`, and `aria-selected`. Loading skeleton has `aria-label="Loading tasks"`. Retry is a keyboard-focusable button.

### 2.11 Feature card grid

**Purpose** — Summarize the four required flows: add, persist, complete and delete.

**Anatomy** — `[icon glyph] [h3 title] [description]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Feature card | `--color-surface`, `--color-border`, `--shadow-lg`, `--radius-xl`, `--color-primary` | Flow explanation in details section |

**Sizes**

| Size | Height | Padding | Text token |
|---|---:|---:|---|
| Card | content-defined | `20px` | h3 default, paragraph `--text-base` |
| Icon | `38px` square | grid centered | `--text-xl` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | White card with subtle shadow, blue soft icon badge | `--color-surface`, `--color-border`, `--shadow-lg`, `--color-primary` |
| Hover | Card lifts `-3px` | `--duration-fast` |
| Focus (keyboard) | Cards are not focusable unless made interactive later | Not used |
| Active / pressed | Not interactive | Not used |
| Disabled | Not interactive | Not used |
| Loading | Not defined | Not used |
| Error | Not defined | Not used |
| Empty | Not defined | Not used |

**Accessibility** — Current cards are semantic `article` elements, not controls. If future feature cards become links, add accessible names and 44×44px targets.

## 3. Content and formatting

- Voice and tone: calm, direct, task-focused, and reassuring about persistence.
- Date, time, number, and currency formats: no dates, times or currency are shown; task counts use plain integers in English labels.
- Capitalization rule: headings use sentence case; buttons and labels use sentence case; product name remains `Todo List App`.
- Empty-state wording pattern: name what is missing, then provide the next action, for example `No tasks in this view` followed by `Add a new task or switch filters...`.
- Error-message wording pattern: explain the problem in plain language and provide a recovery action, for example `Tasks could not load` with `Retry loading`.
- Persistence feedback pattern: short status phrases such as `Saving…`, `Saved just now`, `Task added and saved.`, and `Task deleted and saved.`

## 4. Known deviations

Places where the approved design does not follow its own rules or the anti-patterns in `references/ai-defaults.md`. Record, do not silently fix.

| Where | Deviation | Why it stands | Follow-up |
|---|---|---|---|
| Root palette and brand mark | Uses a blue gradient in the brand mark and radial blue page glow. The defaults caution against decorative gradients. | The stakeholder approved this design, and the gradient is limited to brand/depth rather than every component. | Keep gradients limited to the approved brand mark and page background unless a future design change approves more. |
| Radius scale | Many adjacent radii are used (`9`, `11`, `12`, `14`, `16`, `18`, `20`, `22`, `24`, `28`, `32`, `999`, `50%`) rather than a tight 3–4 step scale. | The approved mockup uses these values across distinct UI elements. | Consolidate only through an approved design revision. |
| Spacing scale | The approved CSS uses several close spacing values, including `13px` and `15px`, instead of a cleaner 4/8-based scale. | Values are extracted from the approved mockup and cannot be normalized here. | Normalize during a future redesign if stakeholder approves. |
| Motion | Animations and transitions exist, but there is no `prefers-reduced-motion: reduce` rule. | The approved mockup does not include the reduced-motion override. | Add reduced-motion behavior during implementation or via approved design edit. |
| Contrast: white on success | `#FFFFFF` on `#10B981` is 2.54:1. | Used for decorative check glyphs, not body text. | Do not use white body text on success green without changing the color. |
| Contrast: danger text | `#EF4444` on `#FEF2F2` is 3.45:1 and fails body text AA for the 13px inline error. | The approved mockup uses this exact danger color for the inline validation message. | Prefer `#B91C1C` for small error copy in a future approved design revision. |
| Contrast: borders | `#E5E7EB` and `#CBD5E1` on white fail the 3:1 UI boundary recommendation. | The approved design relies on subtle borders plus spacing/shadow rather than high-contrast outlines. | Use stronger borders for critical state indicators if design is revised. |
| Feature iconography | Feature cards use text glyphs (`＋`, `↻`, `✓`, `×`) instead of a consistent icon set. | The approved mockup uses these glyphs and they are visible text-style marks. | Replace with a consistent icon set only through approved design change. |
| Delete target | Delete button visual height is approximately 36px, below the 44×44px target recommendation. | The approved mockup uses compact list controls. | Increase target area in implementation if possible without changing visual size, or revise design. |

## 5. Change log

| Date | Change | Design PR |
|---|---|---|
| 2026-08-11 | Initial design system extracted from approved `index.html`. | This PR |
