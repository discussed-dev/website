# discussed.dev

Source for [discussed.dev](https://discussed.dev), the landing page and privacy policy of the [Discussed](https://github.com/discussed-dev/extension) browser extension.

A static [Astro](https://astro.build) site styled with Tailwind CSS v4. It has no backend and ships no client-side JavaScript.

## Development

Requires Node.js 22.22.3 or newer (24.21.0 is pinned in `.node-version`).

```sh
npm install
npm run dev       # http://localhost:4321
npm run verify    # format check, lint, type check, tests, production build
```

`npm run build` writes the static site to `dist/`.

## Deployment

Cloudflare Pages runs `npm run verify` on every push to `main` and deploys only if it passes; a failed check leaves the previous deployment live. GitHub Actions runs the same command on pushes and pull requests. Both use the Node version in `.node-version`. Response headers live in `public/_headers`.

## License

[MIT](LICENSE)
