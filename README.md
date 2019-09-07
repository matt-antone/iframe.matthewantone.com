# Bugo Site

Blogging with Hugo is a set of Hugo modules for building websites. Bugo Site is the starter for all Bugo websites.

## Features

* Responsive layouts based on modular scale
* Includes Foresty.io templates
* Heros & video heros
* Beautiful typography and grid based on a modular scale
* CSS grids for layouts and blocks
* Configurable sidebar sidgets
* Cloudinary support
* WCAG best practices
* Page/post level galleries
  * Images
  * Videos

## What is Modular Scale?

Instead of CSS units, Bugo Sites use modular scale. This allows all your font-size,margin & padding to scale based on the base font size of a given breakpoint. You set the base font size and ratio of the scale then specifiy a factor for the given CSS selctor.

Let's say we've setup a breakpoint with a font-size of 18px and a ratio of 1.3. To set the body you'd likely give the body text a factor of 0 which equates to 18px. You might also set your H1 elements to a factor of 3, which equates to 39.546px.

What's the advantage? Using modular scale makes sure that when you scale the elements on your website, you scale in a consistent manner. This in turn gives a visual "rythm" and allows the rendered page to scale based on 100vw or the width of the viewport. Web pages will look and feel like the same website no matter what the size of the viewport is.

## Modules

### Origin Theme
Origins uses modular scale for most of it's measurements, which produces a site that scales beautifully to a range of different screens and devices.

### Search
FuseJS searches are blazing fast and relavant.

### Sass Utilities
Small set of useful functions using modular scale and formatting helpers.

## Installation

This is the easiest way to get started. Just click the link below and follow the instructed steps at Forestry.io to get started.

1. **Clone Bugo Site repository and setup site at Forestry.io**
    Click "Get Started" to clone this repository and add it to Forestry.io in one shot.

    **[Get Started]( https://app.forestry.io/quick-start?repo=bugoio/bugo-site&engine=hugo "Get   Started")**

1. **Local Installation**
    Now just clone the repository that was added to your git account.

1. **Install Dependencies**
    ```# npm install```
1. **Test Installation**
    ```# npm start``` You should now have a running website at http://localhost:1313

That's it. You've now got a running installation of Bugo Site.


## What is a modular scale?

> A modular scale is a list of values that share the same relationship. These values are often used to size type and create a sense of harmony in a design. Proportions within modular scales are all around us from the spacing of the joints on our fingers to branches on trees. These natural proportions have been used since the time of the ancient Greeks in architecture and design and can be a tremendously helpful tool to leverage for web designers.

Bugo uses Modularscale's Sass Library. https://github.com/modularscale/modularscale-sass

## Customizing

Bugo Site uses the Bugo Origin Theme. All the SASS varaibles for Origin have been duplicated in ```/src/sass/variables```.

1. Start the server ```# npm start```
2. Modify the values in ```/src/sass/variables```
3. Save the SASS file
4. Open a browser to http://localhost:1313 to see your changes.


