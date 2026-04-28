# LYGR Docs

This site is built with [Docusaurus](https://docusaurus.io/) and configured for GitHub Pages deployment.

## Local development

```bash
npm install
npm start
```

## Build

```bash
npm run build
```

The static site is generated into the `build` directory.

## GitHub Pages

The workflow at `.github/workflows/deploy.yml` builds and deploys the site on pushes to `main`.

In GitHub, set:

- Settings > Pages > Source: `GitHub Actions`
- Push this project to the repository that should host the Pages site

The workflow derives these values automatically:

- `SITE_URL`: `https://<owner>.github.io`
- `BASE_URL`: `/<repository-name>/`

For a user or organization Pages repository named `<owner>.github.io`, set `BASE_URL` to `/` in `.github/workflows/deploy.yml`.
