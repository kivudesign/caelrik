# Contributing Guide

We welcome contributions from developers, designers and AI agents.

## How to Contribute

1. Fork the repo.
2. Create a feature branch (`feature/grid-component`).
3. Implement changes following the [project rules](#project-rules).
4. Add or update documentation in the relevant `.md` file.
5. Write tests (PHPUnit, Jest, axe-core). See [TESTING.md](TESTING.md).
6. Run `composer lint && composer test && npm run lint && npm test`.
7. Add a line under `## [Unreleased]` in [CHANGELOG.md](CHANGELOG.md) if users will notice the change.
8. Submit a pull request with a clear description.

## Pull request titles

Commit messages and pull request titles start with a tag, then the component or area when there is one: `[TAG] scope: summary`, e.g. `[NEW] grid: column filters`, `[FIX] a11y: focus ring on tabs` or `[REL] 0.8.0`. A change of two kinds takes both tags, e.g. `[FIX][SEC] upload: check the file type`. Tags are in capitals.

The **Commit tags** check fails a pull request whose title, or one of whose commits, does not start with a tag from the table below; merge commits are not checked. Fix a title by editing it, and commit messages with `git rebase -i` (reword) and a force-push.

| Tag | Use it for |
|---|---|
| `[NEW]` | A new feature or component. |
| `[ENH]` | An enhancement: no new feature, but things work better (behaviour, performance). |
| `[UI]` | A user interface improvement: a particular detail of the look, feel or interactivity of a component. |
| `[UX]` | A user experience improvement, more general than `[UI]`. |
| `[FIX]` | A bug fix of any sort. |
| `[SEC]` | A security fix. Report the problem privately first, as [SECURITY.md](SECURITY.md) says: never in a public issue or pull request before the fix is out. |
| `[MOD]` | A change that may be disruptive, e.g. a new default value for an option, or a renamed builder method. |
| `[REM]` | The removal of a feature. |
| `[KIL]` | The removal of unused or obsolete files. |
| `[REF]` | Refactoring: the structure of the code changes (cleaner, clearer), its behaviour does not. |
| `[DOC]` | Documentation: the guides, the site, the docblocks, the help given to users and developers. |
| `[TRA]` | Translations of built-in texts. |
| `[UPD]` | An update of third-party libraries (Composer, npm, GitHub Actions). |
| `[DB]` | A change to a database: a schema, a migration or the sample data of the examples. |
| `[BP]` | A back-port from a newer version or branch, usually a cherry-pick. |
| `[MRG]` | A merge of branches. |
| `[REL]` | The release process. |

The title of a pull request labels it, and the label sorts it in the release notes:

| Title | Label | Release notes |
|---|---|---|
| `[MOD]`, `[REM]` | `breaking` | Breaking changes |
| `[NEW]` | `feature` | New features |
| `[ENH]`, `[UI]`, `[UX]`, `[TRA]` | `enhancement` | Enhancements |
| `[SEC]` | `security` | Security |
| `a11y:` scope, e.g. `[FIX] a11y:` | `accessibility` | Accessibility |
| `[FIX]` | `bug` | Bug fixes |
| `[DOC]` | `documentation` | Documentation |
| `[UPD]` | `dependencies` | Dependencies |
| `[REF]`, `[KIL]`, `[DB]`, `[BP]`, `[MRG]`, `[REL]` | `maintenance` | Maintenance |

`[MOD]` and `[REM]` also get the label of the kind of change they make when they have another tag, e.g. `[MOD][NEW]`. Add the `skip-changelog` label to leave a pull request out of the release notes.

## Changelog

[CHANGELOG.md](CHANGELOG.md) is written for users: what they can now do, what changed and what they need to change. Add entries under `## [Unreleased]`, in the sections **Added**, **Changed**, **Deprecated**, **Removed**, **Fixed**, **Security** or **Development** (tooling and CI), with a link to the pull request.

## Building the bundle

The bundle in `public/` is built, not committed: run `npm run build` after `npm install`, and again after changing `resources/`. The examples, the browser tests and the documentation site use it. Path-repository installs (`composer require caelrik/ui:@dev` in an example app) need it too, before publishing the assets.

## Dependencies

`composer.lock` and `package-lock.json` are committed, so CI, releases and every contributor get the same versions: install with `composer install` and `npm ci`. Run `composer update` or `npm update` only to change a dependency, and commit the lockfile with it. The Composer lockfile is resolved for PHP 8.2 (`config.platform.php`), the lowest version we support, so it installs on every PHP version in CI; a separate CI job also tests the lowest versions `composer.json` allows.

Dependabot opens weekly pull requests for npm, Composer and GitHub Actions updates: minor and patch updates grouped, major ones on their own.

## Releasing

Run the **Release** workflow (Actions > Release > Run workflow) with the version, e.g. `0.2.0`.

The entries under `## [Unreleased]` in CHANGELOG.md become the version's section, `## [0.2.0] - 2026-12-01`, with an empty `## [Unreleased]` above it and the compare links updated; the workflow commits that to `main` (`[REL] 0.2.0`) once the checks pass. To write the section yourself, e.g. to reword it, merge it before running the workflow: a section already there for the version is used as it is. The workflow stops if there is neither, so a release always has notes.

`main`'s ruleset must have **GitHub Actions** in its bypass list (Settings > Rules > Rulesets), so the workflow can push the changelog commit. The workflow runs every check on `main`, builds the bundle, commits it on a release commit that only the tag `v0.2.0` points to (Packagist installs tags), creates the GitHub release with the changelog section followed by the pull requests grouped by label, attaches the source maps, and publishes `@caelrik/ui` to npm, with npm trusted publishing (the repository variable `NPM_TRUSTED_PUBLISHING` set to `true`) or an `NPM_TOKEN` secret that bypasses two-factor authentication: [`.github/scripts/npm-publish.sh`](.github/scripts/npm-publish.sh) says how to set either. If the npm step fails, the tag and the release exist: fix the npm access, then run **Actions > Publish to npm** with the same version. Never push a version tag by hand: it would have no bundle.

## Adding a New Component

- Check [Components.md](Components.md) for the chosen library, and check its license (core: MIT, Apache 2.0, BSD only).
- **PHP**
  - Add a class in `src/Components/` extending `Caelrik\Ui\Component`.
  - Register it in `ComponentRegistry::withDefaults()`.
- **JS**
  - Add `resources/js/<name>.js` with an initializer, and register it in `resources/js/index.js`.
  - Keep config building in a pure `<name>-config.js` module so it can be unit-tested.
- **Styles**: add them to `resources/scss/_components.scss` using variables from `_variables.scss`.
- **Tests**
  - Add the component to `tests/js/fixtures/build.php` so axe-core checks its markup.
  - Add PHPUnit and Jest tests.
- **Docs**
  - Add a page in `site/components/`, with a demo in `site/demos/<name>.php` (`<Demo name="…" />` and `<<< @/demos/<name>.php`), and add it to the sidebar in `site/.vitepress/config.mjs`.
  - Add usage examples in `examples/`.
  - Document every public method with PHPDoc: the API reference is generated from it (`npm run docs:reference`).
  - List the library in `THIRD_PARTY_NOTICES.md`.

## Project Rules

- **Code style**
  - PHP: PSR-12 (`composer lint`), `declare(strict_types=1)`, classes `final` unless designed for extension.
  - JavaScript: ESLint recommended rules (`npm run lint`), ES modules.
- **Framework neutrality**: code outside `src/Adapters/` must not depend on Laravel, Symfony, Doctrine or Twig. Those packages are only `require-dev` or `suggest`.
- **Accessibility**: target WCAG 2.1 AA.
  - Tables have captions, form fields have labels, charts have a text alternative.
  - Every component has an axe-core fixture.
- **Performance**: large grids use server-side mode. Page size is capped at 1000 rows.
- **Licensing**: only MIT, Apache 2.0, BSD or ISC libraries in the bundle. List each one in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
- **Security**
  - Escape all output and emit no inline scripts.
  - Only declared fields may be sorted, searched or returned.
  - Forms carry CSRF tokens.
  - Data endpoints are protected by the application's authorization.

## Code Review

- All PRs must pass CI checks.
- Accessibility and performance must be validated.
- At least one maintainer approval is required.

## Community Standards

- Respect the [project rules](#project-rules).
- Keep documentation up to date.
- Be kind and collaborative (see [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)).
