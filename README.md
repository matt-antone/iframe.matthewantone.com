# Bugo Site

Blogging with Hugo is a set of Hugo modules for building websites. Bugo Site is the starter for all Bugo websites.

## Features

* Responsive layouts based on modular scale
* Includes Foresty.io templates
* Heros & Video Heros
* Beautiful typography and grid based on modular scale
* CSS Grids for layouts and blocks
* Configurable Sidebar Widgets
* Cloudinary support
* WCAG best practices
* Page/Post level galleries
  * Images
  * Videos

## What is Modular Scale?

Instead of CSS units, Bugo Sites use modular scale. This allows all your font-size,margin & padding to scale based on the base font size of a given breakpoint. You set the base font size and ratio of the scale then specifiy a factor for the given CSS selctor.

Let's say we've setup a breakpoint with a font-size of 18px and a ratio of 1.3. To set the body you'd likely give the body text a factor of 0 which equates to 18px. You might also set your H1 elements to a factor of 3, which equates to 39.546px.

What's the advantage? Using modular scale makes sure that when you scale the elements on your website, you scale in a consistent manner. This in turn gives a visual "rythm" and allows the rendered page to scale based on 100vw or the width of the viewport. Web pages will look and feel like the same website no matter what the size of the viewport is.

## Modules

### Origin Theme
Origins uses modular scale for most of it's measurements, which produces a site that scales beautifaully to a range of different, screens and devices.

### Search
FuseJS searches are blazing fast and relavant.

### Sass Utilities
Small set of useful functions using modular scale and formatting helpers.

## Installation

This is the easiest way to get started. Just click the link below and follow the instructed steps at forestry to get started.

1. **Clone repository and setup site at forestry.io.** Click the "Get Started" to clone this repository and add it to forestry.io in one shot.  **[Get Started]( https://app.forestry.io/quick-start?repo=bugoio/bugo-site&engine=hugo "Get Started")**

1. **Local Installation** Now just clone the repository that was added to your git account.

1. **Install Dependencies** ```npm install```
1. **Test Installation** ```npm start``` You should now have a running website at http://localhost:1313

That's it. You've now got a running installation of Bugo Site.





