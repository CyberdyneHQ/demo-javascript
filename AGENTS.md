# AGENTS.md

Guidance for AI review agents working in this repository. This repo
(`demo-javascript`) intentionally contains sample JavaScript issues used to
demonstrate DeepSource analysis, so some "problems" are deliberate.

## Repository context

- Small Node.js (ESM, `"type": "module"`) demo. Entry points: `index.js`
  (assorted lint samples) and `server.js` (an Express app with intentional
  security smells).
- Purpose is demonstration of static analysis findings — not production code.
  Treat intentional demo issues accordingly (see Suppressions).

## Enforcements (always flag / require)

- **`server.js`** — Replace the deprecated `request` library with `axios`.
  New HTTP calls must not use `request`. _(category: issue)_
- **`server.js`** — `helmet.expectCt({ enforce: ... })` must be `enforce: true`
  in any real deployment; `false` disables Certificate Transparency
  enforcement. _(category: security)_
- **`*.js`** — Use strict equality (`===` / `!==`). Loose `==`/`!=` and
  accidental assignment in conditionals (e.g. `if (x = 2 ...)`) must be flagged.
  _(category: issue)_
- **`*.js`** — No `debugger` statements in committed code. _(category: issue)_

## Suppressions (do NOT flag here)

- **`index.js`** — `console.log` / `console.error` usage is expected in this
  demo file; do not raise no-console issues here. _(category: style)_
- **`README.md`, `*.md`** — Documentation code snippets are illustrative; do not
  raise lint issues on fenced code blocks. _(category: style)_
- **`server.js`** — The bare `res.send('hello')` root handler is a placeholder;
  do not suggest response-shape or content-type improvements. _(category: style)_

## Security notes (context)

- **`server.js`** — This file deliberately demonstrates insecure defaults
  (disabled CT enforcement, deprecated HTTP client). When reviewing real
  changes here, prioritize security categories. _(category: security)_
- Never introduce hardcoded secrets, tokens, or credentials in any file.
  _(category: security)_

## Style conventions (context)

- ESM only (`import`/`export`), matching `"type": "module"`. Do not add CommonJS
  `require` in new files. _(category: style)_
- Prefer `const`/`let` over `var`; template literals over string concatenation.
  _(category: style)_

<!-- memory-layer dev test trigger -->

<!-- retrigger: enki memory enabled -->

<!-- retrigger: endpoint asgard-internal -->
