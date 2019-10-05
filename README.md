# Bugo Site

Blogging with Hugo is a set of Hugo modules for building websites. Bugo Site is the starter for all Bugo websites.

## Features

* Responsive layouts based on modular scale
* Includes Foresty.io templates
* Heros & video heros
* Beautiful typography and grid based on a modular scale
* CSS grids for layouts and blocks
* Configurable sidebar widgets
* Dark Mode Enabled
* Cloudinary CDN support
* WCAG best practices
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

1. **Clone Bugo Site repository and setup site at Forestry.io**
    Click "Get Started" to clone this repository and add it to Forestry.io in one shot.

    **[Get Started]( https://app.forestry.io/quick-start?repo=bugoio/bugo-site&engine=hugo "Get   Started")**

    You can mark all the all the setup process steps as done. Bugo Site comes preconfigured. Images are set to save in ```/static/uploads/```. Bugo is compatible with Forestry.io's Cloudinary setup. If you want to use a CDN with image transforms, you can follow the instructions at https://forestry.io/docs/media/cloudinary/

1. **Local Installation**
    Now just clone the repository that was added to your git account.

1. **Install Dependencies**
    ```# npm install```
1. **Test Installation**
    ```# npm start``` You should now have a running website at http://localhost:1313

That's it. You've now got a running installation of Bugo Site.

## Configuration

You can use Forestry.io to manage the basic Hugo config parameters for a website and a few other Bugo specific paramters.

1. Log into Forestry.io and navigate to your Bugo website
2. Click "Configuration"




## What is a modular scale?

> A modular scale is a list of values that share the same relationship. These values are often used to size type and create a sense of harmony in a design. Proportions within modular scales are all around us from the spacing of the joints on our fingers to branches on trees. These natural proportions have been used since the time of the ancient Greeks in architecture and design and can be a tremendously helpful tool to leverage for web designers.

Bugo uses Modularscale's Sass Library. https://github.com/modularscale/modularscale-sass

## Customizing Your Website

Bugo Site uses the Bugo Origin Theme. All the SASS varaibles for Origin have been duplicated in ```/src/sass/variables```.

1. Start the server ```# npm start```
2. Modify the values in ```/src/sass/variables```
3. Save the SASS file
4. Open a browser to http://localhost:1313 to see your changes.

For more specific documentation on customizing the Bugo Origin Theme go to https://github.com/bugoio/bugo-theme-origin

