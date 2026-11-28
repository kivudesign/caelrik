# Changelog

All notable changes to Caelrik UI (named Celerik UI until 0.6.0) are listed here, newest first. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and versions follow [Semantic Versioning](https://semver.org/). Before 1.0, a minor version (0.x.0) may include breaking changes; they are listed under **Changed** or **Removed**.

The same version is published on Packagist (`caelrik/ui`) and npm (`@caelrik/ui`); up to 0.6.0, as `celerik/ui` and `@celerikui/ui`.

## [Unreleased]

### Development

- Commit messages and pull request titles start with a tag instead of a Conventional Commits type: `[NEW] grid: column filters`, `[FIX] a11y: focus ring on tabs`. [CONTRIBUTING.md](CONTRIBUTING.md) lists the tags; the pull request labels, the release notes (with new **Enhancements** and **Security** sections), Dependabot and the release commit follow them, and the **Commit tags** check fails a pull request whose title or commits do not start with a tag.

## [0.7.4] - 2026-11-28

The first version of `@caelrik/ui` on npm, and so on jsDelivr (`Assets::cdnUrl()`): the npm step of the 0.7.0 and 0.7.1 releases stopped on a one-time password (EOTP). The code is the same as 0.7.1. There is no 0.7.2 or 0.7.3: the release of 0.7.2 failed before tagging, and the tag of 0.7.3 was deleted.

### Added

- **Publish to npm** workflow (Actions, with a version), for maintainers: it publishes a released tag to npm as it is, when the npm step of its release failed, older tags included. A version older than npm's `latest` goes to the `previous` tag.

### Fixed

- Releases publish `@caelrik/ui` to npm without a one-time password: with npm trusted publishing (GitHub's OIDC token, no secret and no 2FA prompt) or an access token that bypasses two-factor authentication. When npm asks for a one-time password, the run says which token to create.

## [0.7.1] - 2026-11-23

The repository and its documentation follow the rename: they are now `kivudesign/caelrik` and <https://kivudesign.github.io/caelrik/>. The code and the names in it do not change.

### Changed

- The repository is now [kivudesign/caelrik](https://github.com/kivudesign/caelrik) (GitHub redirects the old address), and the documentation is at <https://kivudesign.github.io/caelrik/>: the links in the README, the guides, the package metadata (`composer.json`, `package.json`) and the theme schema follow, and the site is built for `/caelrik/`.

### Fixed

- The changelog page of the documentation renders again: the 0.7.0 migration table has `{{ caelrik_assets() }}`, which the site tried to run as code.

## [0.7.0] - 2026-11-23

Celerik UI is now **Caelrik UI**. This release only renames the project: the packages (`caelrik/ui` on Packagist, `@caelrik/ui` on npm), the PHP namespace, the bundle files and every `caelrik-` name in HTML, CSS and JavaScript. Nothing else changes; the table below lists each name to replace.

### Changed

- **Celerik UI is now Caelrik UI** ([#185](https://github.com/kivudesign/caelrik/issues/185)), a name of its own, apart from other companies and products. This is a breaking change, with no aliases: every name below changes at once.

  | Before | After |
  |---|---|
  | `composer require celerik/ui` | `composer require caelrik/ui` |
  | `npm install @celerikui/ui` | `npm install @caelrik/ui` |
  | `Celerik\Ui\…` (PHP namespace) | `Caelrik\Ui\…` |
  | `public/celerik.js`, `public/celerik.css`, `resources/scss/celerik.scss` | `caelrik.js`, `caelrik.css`, `caelrik.scss` |
  | CSS classes `celerik-*`, CSS custom properties `--celerik-*` | `caelrik-*`, `--caelrik-*` |
  | `data-celerik`, `data-celerik-options` and the other `data-celerik-*` attributes | `data-caelrik*` |
  | Events `celerik:*` (`celerik:ready`, `celerik:change`…) | `caelrik:*` |
  | `window.Celerik` | `window.Caelrik` |
  | Laravel: `CelerikServiceProvider`, `<x-celerik-assets />`, `<x-celerik />`, `vendor:publish --tag=celerik-assets` (and `celerik-elfinder`) | `CaelrikServiceProvider`, `<x-caelrik-assets />`, `<x-caelrik />`, `--tag=caelrik-assets` (`caelrik-elfinder`) |
  | Symfony: `CelerikUiBundle`, `CelerikTwigExtension`, `{{ celerik_assets() }}`, `{{ celerik() }}` | `CaelrikUiBundle`, `CaelrikTwigExtension`, `{{ caelrik_assets() }}`, `{{ caelrik() }}` |
  | `vendor/bin/celerik-theme` | `vendor/bin/caelrik-theme` |

  To migrate, replace `Celerik\Ui` with `Caelrik\Ui` in PHP, and `celerik` with `caelrik` in your own CSS, JavaScript and templates where they use these names. `Assets::cdnUrl()` now points to `@caelrik/ui`, which starts at 0.7.0. The GitHub repository and the documentation site keep their addresses until the repository is renamed; GitHub redirects the old ones then. The old packages stay published at 0.6.0.

## [0.6.0] - 2026-11-23

Phase 8 (Visualization, media and specialized editors): gauges and sparklines, a Gantt chart, a map, an org chart and flowchart diagrams; QR codes and barcodes; a PDF viewer and a media player; and form fields for signatures, Markdown, code and picture editing. The charts, diagrams and codes are drawn by PHP as SVG with text alternatives; PDF.js, Plyr, CodeMirror, marked and DOMPurify are loaded only by pages that use them. It also fixes `Url::safe()`, which let `javascript:0` and `data:1` through, and `Html::tag()` closing `<track>`. Code fields need the page's nonce under a strict Content Security Policy (see the CSP guide).

### Added

- **Image editor** (`Field::file()->imageEditor($ratios, $maxSize)`, native, 9 KB, loaded only by forms that use it): once a picture is chosen, crop it (free or in shapes such as 1:1 or 16:9), rotate and flip it, and the edited picture, at most `$maxSize` pixels, replaces the chosen file in the input. The crop area moves with the pointer (drag it or a corner), with the arrow keys (Shift resizes), or by its position and size in number fields; a status says the size sent. The camera's orientation is applied; the type and name are kept. No CSP change (`createImageBitmap`); without JavaScript the file is sent as chosen. Filerobot Image Editor was evaluated and not used: a beta that bundles React, Konva and styled-components (injected styles), with no keyboard or screen reader way.
- **Code field** (`Field::code()`, with CodeMirror 6, loaded only by forms that use it): line numbers, syntax colors (as classes, 4.5:1 in light and dark mode), brackets, folding, search and Undo, for `language()` javascript, typescript, jsx, php, html, css, json, sql, python, markdown or xml (each grammar loaded on its own). The editor's text is a multi-line text box named by the label, with the field's description, required and error states; an error moves focus to it. Tab moves to the next field (no keyboard trap; Ctrl+] and Ctrl+[ indent), or indents with `tabIndents()` (Escape then Tab leaves), and the text under the editor says which. The textarea keeps the text for validation, submit and reset; without JavaScript it is a plain textarea. Under a CSP, CodeMirror's stylesheet takes the nonce of `<meta name="csp-nonce">`.
- **Markdown field** (`Field::markdown()`): the native textarea stays the field, with a WAI-ARIA toolbar (bold, italic, heading, link, lists, quote, code; one tab stop and the arrow keys; Ctrl+B, Ctrl+I, Ctrl+K) whose buttons style the selection or remove the style, through the browser's editing so Undo works; and Write and Preview tabs, the preview rendered by marked and sanitized by DOMPurify (loaded only by forms with a Markdown field). A field with an error goes back to Write; without JavaScript it is a plain textarea. It submits the Markdown text. EasyMDE was not used: its CodeMirror 5 editor is hard to use with a screen reader.
- **Media player** (`MediaPlayer`, with Plyr 3.8, loaded only by pages that use it): a native `<video>` or `<audio>` element (the browser's player without JavaScript) with sources, a poster, captions, subtitles and audio descriptions (WebVTT), given Plyr's accessible controls (named buttons, seek and volume sliders, keys when focused, controls that stay visible). A figure named by its label; `transcript()` writes the words under the player, each time a button that plays the media from there, the line being spoken marked while it plays. Plyr's icons are bundled (never its CDN); `options(['i18n' => …])` translates Plyr. It never autoplays.
- **PDF viewer** (`PdfViewer`, with PDF.js 6, loaded only by pages that use it): a region named by the document's title, its pages drawn near the visible area, each a group ("Page 2 of 12") with a text layer that screen readers read and the browser's search finds; previous and next, a page number, zoom by steps or by a select ("Fit width" follows the viewer's width), announced page changes, and a download link always there, which is also the fallback without JavaScript and when a document cannot be opened. Works under a strict Content Security Policy (no eval, no inline styles); pages stay white in dark mode. The PDF.js worker is built as a `.js` file, which every server sends as JavaScript.
- **Signature field** (`Field::signature()`): a pad to sign on with a mouse, a finger or a pen (pointer events, smoothed lines, sharp on any screen), and a name input, the way for keyboards and screen readers, whose name is drawn on the pad as handwriting. Either way it submits a 600 × 200 PNG as a data URL; `Field::signatureImage()` checks that it is a PNG and returns its bytes. A required signature needs a drawing or a name; Clear empties it; the pad is named "empty" or "signed"; it stays light with dark ink in dark mode and forced colors. Without JavaScript the typed name is submitted as text. No dependency (Components.md suggested signature_pad).
- **QR code** (`QrCode`) and **barcode** (`Barcode`), drawn by PHP as SVG (no JavaScript, no inline styles, no dependency). The QR code encoder (`Support\QrMatrix`) covers versions 1 to 40, levels L, M, Q and H, numeric, alphanumeric and UTF-8 text, and picks the smallest version and the best mask; barcodes are Code 128 (digits packed two by two) and EAN-13 (the check digit added or checked). Each is an image named by its label, with its value written under it (a link when the QR code holds a web address); codes stay dark on a light tile in dark mode and in forced colors. Every version and level is decoded by an independent reader (ZXing) in the tests.
- **Diagram** (`Diagram`): a flowchart drawn by PHP as an SVG (no JavaScript, no inline styles): boxes, terminals and decisions in six colors, wrapped texts, arrows with labels, downwards or to the right. Steps are placed in ranks; loops are dashed and drawn around the side; an arrow that skips ranks gets its own lane; each rank is ordered to cross fewer arrows. The drawing is an image named by its caption, and "Steps as text" lists every step, its start or end, and where each arrow leads, with links between steps. Mermaid was not used: its `<style>` elements break a strict Content Security Policy.
- **Org chart** (`OrgChart`): people in nested lists, named by the chart, drawn as a tree by CSS (borders for the lines, no inline styles, no JavaScript needed), and as an indented list in a narrow container; wide charts scroll sideways in a named region. People come from `node()` or `fromRows()` (database rows), with a job title, a picture or initials, and a link. `collapsible()` and `expandLevels()` add a button on each manager ("Ada Lovelace's team, 3 people", `aria-expanded`) that shows or hides their team. Unknown managers and loops are reported.
- **Map** (`Map`, with Leaflet): markers with popups, and the same places written as a list under the map, the text alternative, with "Show on map" buttons that bring a marker into view, open its popup and move focus to it. The map is a named region whose keys are described; markers are buttons named after their place; Escape closes a popup wherever focus is in the map, and the zoom and close buttons answer Space. Popups are built from text. Wheel zoom is off unless `scrollZoom()`, animations stop for reduced motion, and Leaflet's controls, popups and attribution follow the page's colors, with darkened tiles in dark mode. OpenStreetMap tiles by default, or `tiles()`.
- **Gantt chart** (`Gantt`): a table of tasks, named by its label, with each task's start and end (`<time>` elements), progress and the tasks it depends on; its last column is the timeline. Each row draws its bar as an SVG sized by attributes, so bars line up with their rows without inline styles. Milestones are diamonds and say "Milestone"; the scale is by day (weekends shaded), week or month; a line marks today. With JavaScript, decorative arrows join each task to the tasks that wait for it, and the first scroll brings today into view. The timeline scrolls sideways in a named, keyboard-scrollable region, with the task names kept in view.
- **Gauges and sparklines**:
  - `Gauge`: a value on a scale, as a semicircle or a bar (`linear()`), drawn by PHP as an SVG. A meter (`role="meter"`) named by its label, whose value text gives the value, its band and the target ("72%, High, target 90%"); colored bands whose name is written next to the value; a target mark; `range()`, `format()`, `decimals()`, sizes; colors kept at 3:1, and system colors in forced-colors mode.
  - `Sparkline`: a line, area or bar chart the size of a word, for text, table cells and record views; an image named after its values' range, or `decorative()` next to the written values. `Stat::sparkline()` now draws with it.

### Fixed

- `Support\Html::tag()` closed `<track>` (and `<wbr>`, `<area>`, `<base>`, `<embed>`), which are void elements.
- `Support\Url::safe()` and the image and link checks of `Card`, `ListView`, `TreeView` and `UserMenu` (now using it) let through a scheme followed only by digits, such as `javascript:0` or `data:1`, which PHP's `parse_url()` reads as a host and a port; they also refused relative paths with a colon, such as `/a:1`. The scheme is now read as browsers read it.

## [0.5.0] - 2026-11-20

Phase 7 (Display and feedback): a record view; stat tiles with trends and sparklines, and dashboard widgets; badges, avatars, chips, tooltips, popovers, progress bars and circles, loaders and skeletons; a timeline and a carousel. It also fixes charts that stopped growing with their container.

### Added

- **Timeline and carousel**:
  - `Timeline`: a named ordered list of events, each with a title, a date in a `<time>` element or a text, a description, a colored marker (with a short text such as "✓"), a link, and a current step (`aria-current="step"` and a ring); `alternate()` uses both sides of the line on wide screens. Plain HTML.
  - `Carousel`: the WAI-ARIA carousel, with picture slides (cropped to a ratio, captioned, lazy after the first) or HTML slides; Previous, Next and a 24px button per slide; the new slide announced; touch swipe; the height of the tallest slide. `autoplay()` comes with a Stop button first, pauses for the pointer and focus, stops once the user picks a slide and does not start for reduced motion (WCAG 2.2.2). Without JavaScript the slides are shown one under the other.

- **Display elements**:
  - `Badge`: a status or count in an AA color, with a text for screen readers only ("3 unread messages").
  - `Avatar`: a picture or initials on a color from the name, named after the person, with a status dot told apart by its shape (online, away, busy, offline); `decorative()` next to a written name.
  - `Chip`: plain; removable (a 24px Remove button that takes its hidden field away, moves focus to the next chip, announces it and fires a cancelable `celerik:remove`); or a filter checkbox posted with its form.
  - `Tooltip`: the WAI-ARIA tooltip, meeting WCAG 1.4.13 (hoverable, Escape hides it without moving focus, persistent); it describes its control and flips or slides to stay on screen.
  - `Popover`: a native disclosure with a titled panel; Escape, focus and clicks elsewhere close it.
  - `Progress`: a native `<progress>` bar or an SVG progressbar circle, determinate or not, with colors kept at 3:1, without inline styles.
  - `Loader` and `Skeleton`: status regions saying what is loading; their animations stop or slow for reduced motion.

- **Stat tiles and dashboards**:
  - `Stat`: a label, a value, a trend against a previous period said in words ("Up 12.5% vs last month", green or red as `goodWhen()` says), a description, a link covering the tile, and a sparkline: an SVG drawn by PHP, named after its values, with colors kept at 3:1 contrast.
  - `Stats`: a named list of stat tiles in 1 to 6 columns.
  - Dashboard widgets: charts, grids and stats in a `TileLayout`; a chart redraws when its tile is resized, and a stat in a tile has no second border.

- **Record view** (`RecordView`, Filament's infolists): a read-only layout of a record's fields, by sections, each a heading and a description list in 1 to 4 columns (one on small screens). The record is an array, an ArrayAccess (an Eloquent model) or an object, read with dot notation. `RecordView\Entry` shows text, e-mail and phone links, safe URLs, dates in `<time>`, formatted numbers, yes or no, colored badges, lists and pictures, with `format()`, `placeholder()`, `help()` and `span()`; empty values show a dash read as "Not set".

### Fixed

- A chart without a fixed height grows again when its container gets wider (a wider window, a widened tile). Its container now keeps the chart's shape with a CSS aspect ratio (2:1, square for round charts) and the chart fills it; Chart.js' own ratio capped the height at the container's, so the chart kept its first width.

## [0.4.0] - 2026-11-19

Phase 6 (Navigation and layout): an admin layout with navigation, breadcrumb and user menu; menu and split buttons, toolbars and context menus; accordion, card, splitter and tile layout. It also brings the Kanban task board, the last item of Phase 5.

### Added

- **Tile layout** (`TileLayout`, the Telerik TileLayout): dashboard tiles, titled regions spanning columns and rows of a grid (one column on small screens). With `reorderable()` and `resizable()`, each tile's Arrange button shows one-click tools (move earlier or later, narrower, wider, shorter, taller), arrow keys move it and Shift arrows resize it, and it can be dragged by its button or its corner. Tiles move in the page, so the reading order follows the screen; each change is announced, kept in the browser with `remember()` and fired as `celerik:change`.
- **Accordion, card and splitter**:
  - `Accordion` (the Telerik PanelBar): WAI-ARIA accordion headings and regions, one panel open at a time or `multiple()`, arrow keys between headings; every panel shown without JavaScript.
  - `Card`: title (a link covering the card, its actions above it), subtitle, text, picture, content and footer.
  - `Splitter`: panes side by side or stacked, resized from WAI-ARIA window splitter dividers with the keyboard (arrows, Home, End, Enter) or any pointer, sizes remembered on request and set without inline styles.

- **Menus and toolbar** (WAI-ARIA menu button and toolbar patterns):
  - `MenuButton`: a button that opens a menu of links, actions and dividers. Arrow keys, Home, End and type-ahead move; Escape returns focus; disabled items. Without JavaScript, a plain list.
  - `SplitButton`: a main action and a "More options" menu.
  - `Toolbar`: a named row of controls with one tab stop and arrow keys between them.
  - `ContextMenu`: a menu for the elements matching a selector, opened by a right click, Shift+F10 or the Menu key, its `{field}`s filled from the element's `data-*` values.
  - `Navigation::horizontal()`: a site's menu bar, its groups dropping down and closing with Escape or when focus leaves.

- **Admin layout**: `AdminLayout` frames an admin screen with a skip link, an app bar, a sidebar and the main content.
  - `Navigation`: links and groups (native disclosures). The current page has `aria-current="page"`, or its section `aria-current="true"`, and its group starts open.
  - `Breadcrumb`: a navigation landmark ending with the current page.
  - `UserMenu`: the user's name and picture or initials, links and actions such as Sign out, in a disclosure that Escape closes.
  - On small screens the sidebar is Bootstrap's offcanvas, opened by the app bar's menu button; without JavaScript it is shown above the content.

- **TaskBoard**: a Kanban board, `TaskBoard::make()->columns([...])->cards($tasks, column: 'status')->moveUrl('/tasks/{id}/move')`.
  - Cards move three ways: dragged (SortableJS), from the keyboard (Space, arrows, Space or Escape, each step announced), or with a Move form on each card that posts without JavaScript and moves cards without dragging (WCAG 2.5.7).
  - Column limits, counts in the column headings, card titles, descriptions, meta texts and links.
  - `TaskBoard::cardMove($_POST)` reads a move (a column of the board and a position); a refused move (`InvalidCardMove`, 422) puts the card back and says why.

### Changed

- The bundle includes SortableJS 1.15 (MIT), loaded only on pages with a task board.

## [0.3.0] - 2026-11-19

Phase 5 (Data): grid filters, actions, selection, columns to show or hide, empty states, totals and groups, inline editing; actions that open a form in a modal; ListView, TreeView and TreeList. It also brings the flat design and field border contrast prepared as 0.2.1, which was not published.

### Added

- **Grid column filters**: `Column::filter()` with `Filter::text()`, `Filter::select([...])`, `Filter::boolean()` and `Filter::dateRange()`. They appear in a filter bar above the table (a `search` landmark with a labelled field per column and a **Clear filters** button) and work client-side, and server-side through `respond()` with `ArrayDataSource`, `EloquentDataSource` and `DoctrineDataSource`. `Grid::labels()` translates the bar.
- **Actions** (`Celerik\Ui\Components\Action`): `Action::link()` and `Action::request()`, buttons usable anywhere.
  - A request action is a form that posts without JavaScript, with `_method` and the CSRF token.
  - With JavaScript, it asks for confirmation in an accessible alert dialog (`confirm()`), sends the request with `fetch`, shows the answer's `message` in a toast, and fires `celerik:action`.
- **Grid row actions**: `Grid::actions()` adds a last column with the actions for each row.
  - Each button is named with its label and the row's title, for example "Delete Ada Lovelace" (`Grid::rowTitle()`).
  - After a request succeeds, a server-side grid reloads its page, and a client-side grid removes a deleted row. Focus moves to the next row's button.
  - Exports leave the column out.
- **TreeList**: a table whose rows nest like a tree, `TreeList::make()->column(...)->rows($rows, 'id', 'parent_id')` or nested `children`.
  - A plain table without JavaScript; with it, a WAI-ARIA treegrid: rows open and close, one tab stop, arrow keys between rows and cells.
  - Expand all and Collapse all, row actions (a deleted row goes with its descendants), indentation by classes for a strict CSP.
- **TreeView**: a WAI-ARIA tree, `TreeView::make()->nodes([...])` or `fromRows($rows, 'id', 'parent_id', 'name')`.
  - Nested lists that work without JavaScript; with it, one tab stop, arrow keys, Home and End, type-ahead and `*`.
  - Nodes can be links, or radio buttons (`selectable()`) or checkboxes (`checkable()`, with mixed parents) posted with the form.
  - `hasChildren` nodes load their children from `url()` when they first open; `TreeView::children()` answers.
- **ListView**: a list of items with a pager, `ListView::make()->title('title')->link('/articles/{id}')->description('summary')->meta('author', 'published')`.
  - Client-side rows, or a server-side endpoint answered with `respond()`.
  - Search, a choice of sorts, a list or cards layout, pictures, actions (with forms) and an empty state.
  - The pager is a named `<nav>`; changing page moves focus to the list and the status says which items are shown.
- **Actions that open a form in a modal**: `Action::request(...)->form($form, 'Edit {name}', 'Save')`, on a page or in a grid's rows.
  - In a grid, the form opens with the row's values and a title for the row; the modal is written once for all rows.
  - The form's own checks run first, then its fields are sent to the action's URL with its method and CSRF token.
  - A 2xx answer closes the modal, shows its message and refreshes the grid; a 422 answer's `errors` are shown on their fields.
  - Focus starts in the first field and returns to the action's button.
- **Grid inline editing**: `Column::editable(Editor::text()|number()|select()|boolean()|date())` lets the user change a cell in place, and `Grid::inlineEdit($url)` says where changes are saved.
  - An edit button per cell, named after the column and the row, opens a labelled field: Enter or leaving it saves, Escape cancels, and focus returns to the button.
  - The browser checks the value with the editor's rules, and `Grid::cellEdit($_POST)` checks it again on the server: only editable columns, typed values. `InvalidCellEdit::toArray()` answers a refused value, which stays in the field with its message.
  - Client-side and server-side grids; client-side totals follow the change.
- **Grid column totals and row groups**: `Column::total('sum'|'avg'|'count'|'min'|'max', $decimals)` adds a total in the footer, and `Grid::groupBy($field)` groups the rows, with a heading row per group that names it, counts its rows and gives its totals.
  - Totals and group counts cover every row that passes the search and filters, not only the page.
  - Server-side, `respond()` asks the data source for them (`DataRequest::$totals` and `$groupBy`), and the Array, Eloquent and Doctrine sources compute them, in the database for the last two. Endpoints answer them in `meta.totals` and `meta.groups`.
  - Translatable labels and number separators (`decimal`, `thousands`).
- **Grid empty states**: `Grid::emptyState($title, $description, $action)` for a grid without rows. When search or filters match nothing, the grid says so, with a **Clear filters and search** button that moves focus back to the search box.
- **Columns the user can show or hide**: `Grid::columnToggle()` adds a Columns menu, a disclosure with a checkbox per column.
  - `Column::toggleable(false)` keeps a column always shown, and `Column::initiallyHidden()` starts one hidden.
  - The choice is kept in `localStorage` per grid, unless `remember: false`.
  - The last shown column cannot be hidden.
- **Grid row selection and bulk actions**: `Grid::selectable($key, $name)` adds a checkbox per row and a box for the page, and `Grid::bulkActions()` adds a bar with the number of rows selected and request actions for them.
  - The selection is kept across pages, filters and sorting.
  - A bulk action posts the selected keys (`ids[]`), and `{count}` in its confirmation is their number.
  - After it succeeds, a server-side grid reloads its page, and a client-side grid removes deleted rows.
  - Without JavaScript, the bulk form posts the checked rows of a client-side grid.
- `DataRequest::$conditions` (`contains`, `gte`, `lt`), read from `filter[...]` by `DataRequest::fromArray(..., filterTypes: [...])`, and `DataRequest::containsPattern()`. The response's `meta` lists them as `conditions`.

### Changed

- A grid without rows, or without matches, shows Celerik's empty states instead of DataTables' "No data available in table" and "No matching records found".
- Column filters find their column by name, so they keep working when a selection column comes first.
- `ArrayDataSource` matches a true/false value with a `1`/`0` filter, as a database does, as well as with "Yes"/"No".
- **The grid runs on DataTables 3** (with the Buttons extension 4) instead of 2. Raw options passed with `Grid::options()` follow DataTables 3. A server-side grid tells DataTables where its endpoint's row counts are (`ajax.dataSrc` on `meta`), as DataTables 3 makes its own requests rather than jQuery's.
- `<html>` gets a `celerik-js` class once the bundle runs, to show what needs JavaScript (such as actions that open a form).
- **A flat design for every component** (`resources/scss/_flat.scss`): 1px borders instead of drop shadows, and no bevels or gradients.
  - Toasts, searchable-select dropdowns and the calendar's popovers and event dialog have borders instead of shadows.
  - The calendar toolbar has outline buttons; the current view and the New event button are filled with the primary color. Weekday names and day numbers are plain text, underlined on hover and focus.
  - The file manager has a light, flat toolbar, sidebar and status bar, and borderless toolbar buttons.
  - The upload area is a plain dashed panel that follows dark mode.
  - Charts use a solid palette (`--celerik-chart-1` to `6`, with 3:1 and more on the page in light and dark mode), and take their text, grid lines and font from Bootstrap. Colors set in PHP still win.
- Field borders have a 3:1 contrast on the page (WCAG 1.4.11) without a custom theme: `--celerik-input-border` (#6c757d light, #8c959f dark) on inputs, selects, checkboxes, searchable selects, the rich text editor and one-time code boxes. Before, Bootstrap's #dee2e6 border (1.3:1) was used unless a custom theme set one.
- A theme's stylesheet no longer fills the calendar's buttons: the calendar follows `--bs-primary` and `--celerik-on-primary` through celerik.css.

## [0.2.0] - 2026-11-16

### Removed

- **The Material and Tailwind looks.** Celerik UI is now Bootstrap only, which keeps it simple to maintain: `celerik-material.css`, `celerik-tailwind.css`, their presets and their SCSS are gone, along with the ThemeBuilder's "Base look" and "Start from a preset" controls and the documentation's look picker. Your own colors, radius, font and shadow still work through a custom theme (`Theme::toCss()`, the ThemeBuilder, `celerik-theme`). To upgrade:
  - Remove `theme: 'material'` / `'tailwind'` from `Assets::tags()`, `<x-celerik-assets>` and `celerik_assets()`; they now throw an exception that explains the change. The `theme` parameter is deprecated: `bootstrap` is its only value.
  - In a saved `theme.json`, remove `"base"` (or keep `"base": "bootstrap"`); a `material` or `tailwind` base is refused with the same explanation. Themes no longer write `base`.
  - `Theme::BASES`, `Theme::base()`, `Theme::getBase()` and `ThemeBuilder::BASE_NAMES` are removed; `Theme::PRESETS` lists the presets (`bootstrap`). `ThemeBuilder::assetsUrl()` is deprecated and has no effect, and `labels()` ignores the `base`, `preset` and `loadPreset` keys.
  - `celerik-theme preset` takes `bootstrap` only, and `build` prints `Wrote <file>.`

### Changed

- A theme's stylesheet starts with `/* Celerik UI theme "Acme". Load it after celerik.css. */` and always binds Bootstrap's components to the theme colors.
- The SCSS entry is `resources/scss/celerik.scss` (it was `resources/scss/themes/bootstrap.scss`).

## [0.1.6] - 2026-11-16

### Added

- Key-value list: `Field::keyValue('headers')` edits pairs (metadata, HTTP headers, settings), a row per pair with Add and Remove. Rows submit as `headers[0][key]` and `headers[0][value]`; `Field::keyValues()` turns them into a `key => value` array, and `value()` takes one. A value needs a key and a key is used once (checked in the browser, the message in its row); `keySuggestions()` and translatable `keyValueLabels()`.
- One-time code field: `Field::otp('code')` is one input shown as a box per character, so phones and browsers can fill the code they received (`autocomplete="one-time-code"`), a pasted `123 456` fills every box, and screen readers hear one text field. `codeLength()` (4 to 10), `alphanumeric()`, and a clear default message.
- Tags input: `Field::tags('skills', ['PHP', 'Laravel'])` takes free-text tags (Enter, a comma or paste) and offers suggestions, local or `remote()`. Submits `skills[]`; `minTags()`, `maxTags()` and a translatable `addText()`. Case-insensitive duplicates are not added, and Enter does not submit the form while a tag is being typed.
- Rating field: `Field::rating('score')` shows 3 to 10 stars (`stars()`), which are native radio buttons: arrow keys, validation and old input work as for a radio group, and no JavaScript is needed. An optional rating has a "No rating" choice; `ratingLabels()` translates the texts.
- Form repeater: `Repeater::make('lines')->schema(...)` repeats a group of fields, submitted as `lines[0][product]`. Users add, remove and (with `reorderable()`) move rows; `min()`, `max()`, `defaultItems()`, `value()` and translatable `labels()`. Row keys are kept, so old input, errors such as `lines.3.qty` and the error summary find their row ([#97](https://github.com/kivudesign/caelrik/pull/97)).

### Development

- Releasing is running the Release workflow with the version: the entries under `[Unreleased]` become the version's section with the date and compare links, committed to `main` by the workflow. A section written beforehand is used as it is.

## [0.1.5] - 2026-11-13

### Added

- Form wizard: `Form::wizard()` shows the form's sections one at a time, with a step indicator and Back and Next buttons. Next checks the step's fields first, Enter means Next, and after a failed submit (browser or server) the form shows the first step with an error. Its texts can be translated ([#95](https://github.com/kivudesign/caelrik/pull/95)).
- Form layout: `Section::make()` (a card with a heading, `collapsible()`) and `Section::fieldset()` group fields; `columns()` on a form or section lays them out in 1 to 6 columns from a breakpoint, and `columnSpan()` widens a field or section. A collapsed section opens by itself when a field inside it has an error ([#95](https://github.com/kivudesign/caelrik/pull/95)).
- Date and time fields: `Field::time()`, `Field::datetime()`, and `Field::dateRange($name, $label, 'date'|'time'|'datetime-local')`, two linked native inputs (`name[start]`, `name[end]`) whose end must be on or after the start ([#94](https://github.com/kivudesign/caelrik/pull/94)).
- Searchable selects ([Tom Select](https://tom-select.js.org)): `Field::select()->searchable()`, `->multiple()` (tags), and `->remote($url)` to load choices from an endpoint as the user types, answered by `$field->respond($source, $_GET)` with any data source ([#92](https://github.com/kivudesign/caelrik/pull/92)).
- Form fields: `Field::radio()` and `Field::checkboxes()` (groups in a fieldset, `inline()`), `Field::switch()`, `Field::range()` (shows its value) and `Field::color()`; `step()` for number, range, date and time fields ([#91](https://github.com/kivudesign/caelrik/pull/91)).

### Changed

- The roadmap aims at Telerik UI's breadth with Filament's depth for admin screens, in phases by family of components. Celerik UI stays free and open source, with no paid or premium editions ([#93](https://github.com/kivudesign/caelrik/pull/93)).

### Fixed

- Client-side validation rejected every time and date-time field with a `min()` or `max()`: Parsley compared them as numbers. Bounds now compare numbers as numbers and ISO dates and times as text, and `17:00:00` equals `17:00` ([#94](https://github.com/kivudesign/caelrik/pull/94)).
- Server errors reported on one item of a field that submits an array (Laravel: `tags.1`, `languages.0`, `photos.0`) were not shown; they now show under the field and in the error summary ([#94](https://github.com/kivudesign/caelrik/pull/94)).

### Development

- Release notes are grouped by kind of change, pull requests are labeled from their title, and a release needs its CHANGELOG section ([#88](https://github.com/kivudesign/caelrik/pull/88)).

## [0.1.3] - 2026-11-12

### Added

- jQuery 4 support: the peer dependency accepts `^3.7.1 || ^4.0.0`, and the tests run on jQuery 4 ([#83](https://github.com/kivudesign/caelrik/pull/83)).

### Changed

- Docs and examples load `jquery@4.0.0` from the CDN ([#83](https://github.com/kivudesign/caelrik/pull/83)).
- The roadmap details Phase 4, forms ([#81](https://github.com/kivudesign/caelrik/pull/81)).

### Development

- Lockfiles are committed, and CI installs from them. A CI job also tests the lowest dependency versions `composer.json` allows ([#63](https://github.com/kivudesign/caelrik/pull/63)).
- Dependabot opens weekly update pull requests for npm, Composer and GitHub Actions ([#63](https://github.com/kivudesign/caelrik/pull/63)).
- Faster browser tests: they wait for animations to finish instead of fixed delays, and run on 4 workers on CI ([#82](https://github.com/kivudesign/caelrik/pull/82)).

## [0.1.1] - 2026-11-11

### Fixed

- Scheduler: day numbers on today's cell were below 4.5:1 contrast. They now use the body text color ([#59](https://github.com/kivudesign/caelrik/pull/59)).

### Development

- GitHub Actions run on Node.js 24 ([#61](https://github.com/kivudesign/caelrik/pull/61)).

## [0.1.0] - 2026-11-11

The first release with the full component set, the prebuilt bundle and the npm package. Version 0.0.2 was published the same day with the same content.

### Added

- **Scheduler** (FullCalendar), with Eloquent and Doctrine event sources ([#19](https://github.com/kivudesign/caelrik/pull/19)).
- **File uploads** (FilePond) and a **rich text editor** (Quill) for forms ([#20](https://github.com/kivudesign/caelrik/pull/20)).
- **Modal**, **Tabs** and **Notification** components ([#21](https://github.com/kivudesign/caelrik/pull/21)).
- **File Manager** (elFinder), with a locked-down configuration ([#22](https://github.com/kivudesign/caelrik/pull/22)).
- Material and Tailwind-inspired themes, dark mode on every theme ([#23](https://github.com/kivudesign/caelrik/pull/23)).
- Accessibility conformance statement and a screen-reader test plan ([#34](https://github.com/kivudesign/caelrik/pull/34)).
- **ThemeBuilder**: theme tokens, `Theme` in PHP, the builder component and the `celerik-theme` CLI ([#45](https://github.com/kivudesign/caelrik/pull/45)).
- Documentation site with live demos, guides and the API reference, on GitHub Pages ([#55](https://github.com/kivudesign/caelrik/pull/55)).
- The bundle is built at release time and published to npm as `@celerikui/ui`, served by jsDelivr (`Assets::cdnUrl()`) ([#56](https://github.com/kivudesign/caelrik/pull/56), [#57](https://github.com/kivudesign/caelrik/pull/57)).

### Changed

- The bundle is split into chunks: each page loads only the code of the components it uses ([#18](https://github.com/kivudesign/caelrik/pull/18)).

### Fixed

- `LIKE` wildcards (`%`, `_`) in Grid search terms are escaped ([#18](https://github.com/kivudesign/caelrik/pull/18)).
- Contrast fixes in dark mode ([#23](https://github.com/kivudesign/caelrik/pull/23)).

## [0.0.1] - 2026-11-04

The Phase 1 MVP ([#11](https://github.com/kivudesign/caelrik/pull/11)).

### Added

- Core: the component contract, registry, assets helper and data layer (`DataRequest`, `DataResult`, `ArrayDataSource`).
- **Grid** (DataTables), **Chart** (Chart.js) and **Form** (Parsley.js and Inputmask) components.
- Laravel adapter (Blade components, Eloquent) and Symfony adapter (bundle, Twig, Doctrine).
- Bootstrap SCSS theme and JS wrappers.
- Examples for plain PHP, Laravel and Symfony.

[Unreleased]: https://github.com/kivudesign/caelrik/compare/v0.7.4...HEAD
[0.7.4]: https://github.com/kivudesign/caelrik/compare/v0.7.1...v0.7.4
[0.7.1]: https://github.com/kivudesign/caelrik/compare/v0.7.0...v0.7.1
[0.7.0]: https://github.com/kivudesign/caelrik/compare/v0.6.0...v0.7.0
[0.6.0]: https://github.com/kivudesign/caelrik/compare/v0.5.0...v0.6.0
[0.5.0]: https://github.com/kivudesign/caelrik/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/kivudesign/caelrik/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/kivudesign/caelrik/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/kivudesign/caelrik/compare/v0.1.6...v0.2.0
[0.1.6]: https://github.com/kivudesign/caelrik/compare/v0.1.5...v0.1.6
[0.1.5]: https://github.com/kivudesign/caelrik/compare/v0.1.3...v0.1.5
[0.1.3]: https://github.com/kivudesign/caelrik/compare/v0.1.1...v0.1.3
[0.1.1]: https://github.com/kivudesign/caelrik/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/kivudesign/caelrik/compare/v0.0.1...v0.1.0
[0.0.1]: https://github.com/kivudesign/caelrik/releases/tag/v0.0.1
