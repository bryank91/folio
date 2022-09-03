# FOLIO

A basic Next.JS, TypeScript, React and Server Side Rendering (SSR) application.
The beauty is the used of APIs during build and serving the application as a static web site. The website is not meant to be reusable but explore the steps of building a low cost running static website.

## Setting Up
1. Look at `.env.local.example` for an example of environment variables to set up
2. These are the things to specify:

```bash
TOKEN= /* github token. Generate through Github -> Settings -> Developer -> PAT */
DEPLOYMENT = /* static - host a SSR style website */ 
```

## Development
Run the development server with

```
npm run dev
```

## Testing Deployment
Run the `next build && next export` command

```
npm run build
```

This will build the items on server side to be served as a static website without a node server

## Deploying on Azure Static Website

- Follow the guide here: https://docs.microsoft.com/en-us/azure/static-web-apps/deploy-nextjs
- You will not need to pull the example next.js app
- To setup custom domains, purchase a domain and follow the guide here: https://docs.microsoft.com/en-us/azure/static-web-apps/apex-domain-external

## Notes
- `getStaticProps()` allows for SSR to happen. This is where we acquire the data from API during build. https://nextjs.org/docs/basic-features/data-fetching/get-static-props
- `.github/azure-static-website.yml` is where the actions are stored. this is the based Azure Static Web yaml file provided with environment variables imported
- `/pages` is how next.js handles routing