# Blogging with Hugo Site

## Features

* Responsive layouts based on modular scale
* Includes Foresty.io templates
* Heros & video heros
* Beautiful typography and grid based on a modular scale
* CSS grids for layouts and blocks
* Configurable sidebar sidgets
* Cloudinary support
* Page/post level galleries
  * Images
  * Videos

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

That's it.

## What is a modular scale?

> A modular scale is a list of values that share the same relationship. These values are often used to size type and create a sense of harmony in a design. Proportions within modular scales are all around us from the spacing of the joints on our fingers to branches on trees. These natural proportions have been used since the time of the ancient Greeks in architecture and design and can be a tremendously helpful tool to leverage for web designers.

Bugo uses Modularscale's Sass Library. https://github.com/modularscale/modularscale-sass

## Customizing

Bugo Site uses the Bugo Origin Theme. All the SASS varaibles for Origin have been duplicated in ```/src/sass/variables```.

1. Start the server ```# npm start```
2. Modify the values in ```/src/sass/variables```
3. Save the SASS file
4. Open a browser to http://localhost:1313 to see your changes.


