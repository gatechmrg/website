# The Website

## Design

### TypeScript

Anyone who has used JavaScript and TypeScript will be glad this design decision was made. Little more need be said.

### Next.js

The website is built with [Next.js](https://nextjs.org/), a [React](https://react.dev/) framework which provides a number of utilities that make development simpler and a number of optimizations to improve user experience and SEO.

The organization of code follows a structure a typical when using Next.js. Routes to pages are defined in the `pages` directory and React components are found in the `components` directory, where they can be used in multiple pages.

### Material UI

The website uses the [Material UI](https://mui.com/) CSS framework to simplify the design of the website. MUI provides a baseline for many common components like buttons, headers, or navigation bars that we can then easily build on.

The theme for the website can be found in `styles/theme.ts`. A monochromatic palette was chosen simply because Manuel is no great UI designer and wished to keep things simple. 

As a side note, to have MUI CSS generated server-side in Next.js, changes were made to the `_app.tsx` and `_document.tsx` as can be found in tutorials online.

## Local Installation

1. Install [Node.js](https://nodejs.org/en/blog/release/v18.12.0) version 18.x.x
2. Clone this repo
3. From the root of this repo, run `npm install`

## Local Development

To run a local server, use the command `npm run dev`. The server will run on port 3000, and can be accessed in the browser through `localhost:3000` or `127.0.0.1:3000`. After the server is ran, any changes made to a file will, after saving, be automatically updated on the server.

When testing peformance or determining SEO metrics, it is not recommended to use the development server. Instead, to get a more accurate analysis, you should first use `npm run build` to build static pages locally, and then use `npm run start` to launch the server. Note that in this case, any changes made to files will not automatically be visible on the webiste; you will have to rebuild and restart the server.

## Hosting

We use [Vercel](https://vercel.com/) for hosting. Because this company developed and maintains Next.js, their deployment service integrates smoothly with Next.js projects.

The deployment information for this website can be found [here](https://vercel.com/gatechmrg/gt-mrg). You will need to log in with `gtmrobotics@gmail.com`.

The deployment is linked to this GitHub repo. That means any change to the main branch of this repo will result in a new production deployment. Also, any changes to a different branch will be deployed to a junk url, so you can see those changes online as well. Note that our payment tier (the free hobby tier) does not support using repos from a GitHub org; as a result, this repo is not in the GT MRG GitHub org.

The `gt-mrg.org` domain costs $20 per year. Please ensure that the credit card associated with the Vercel account is of a current org member. The domain is set to auto-renew on September 25.
