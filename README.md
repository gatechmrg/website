# The Website

## Local Installation

1. Install [Node.js](https://nodejs.org/en/blog/release/v18.12.0) version 18.x.x
2. Clone this repo
3. From the root of this repo, run `npm install`

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