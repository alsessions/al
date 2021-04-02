# Eleventy starter set (Nunjucks-based)

This is a starter set for the [Eleventy](https://11ty.dev) [static site generator (SSG)](https://staticgen.com); its appearance is based on the appearance of my website at [brycewray.com](https://brycewray.com). It uses the [Tailwind CSS JIT compiler](https://blog.tailwindcss.com/just-in-time-the-next-generation-of-tailwind-css) and, in production mode, features internal (`head`-based) CSS; it also includes [Alpine.js](https://github.com/alpinejs/alpine) for use by the navigation bar. For a version of this starter that **doesn’t** use the experimental JIT compiler (or Alpine, for that matter), see the [eleventy_solo_starter_njk repo](https://github.com/brycewray/eleventy_solo_starter_njk).

See the [online demo](https://eleventy-solo-starter-njk-twjit.vercel.app/).

*This starter set uses Nunjucks templating. For a version that uses JavaScript templating (.11ty.js) but with Tailwind/JIT, see the [eleventy_solo_starter_twjit repo](https://github.com/brycewray/eleventy_solo_starter_twjit).*

## How to use

1. Clone this to a local repo.
2. Make appropriate changes to `/_data/metadata.json` and `_data/siteparams.json` to conform to your site’s parameters.
3. Run `npm install` to load all the dependencies in `package.json`, which includes Eleventy.
4. Run `npm run start` from your terminal app. You can then view the site in [http://localhost:3000](http://localhost:3000) on your computer.
5. Read the sample posts and their Markdown files to see how everything works.
6. Edit the content to make it your own!
7. When ready, [deploy the site](https://www.11ty.dev/docs/tutorials/#put-it-on-the-web) to your chosen host.

## What’s under the hood

- Lazy-loading of some images through use of [lazyload](https://github.com/verlok/vanilla-lazyload).
- Responsive images through my run-time `imgxfm.js` script and `lazypicture` shortcode.
- [PostCSS](https://postcss.org) and [Tailwind CSS](https://tailwindcss.com).
- [Alpine.js](https://github.com/alpinejs/alpine) for the nav menu.
- Internal CSS in production mode, which is better for performance scores because it means one fewer [render-blocking resource](https://web.dev/render-blocking-resources/). In development mode, the CSS comes from a locally called `index.css` file.