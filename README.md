# U.S. Web Design System Design Assets

This repository hosts editable, open source design files of the [U.S. Web Design System](https://designsystem.digital.gov/) for government designers or anyone wishing to make use of the UI components or visual style guide in this site. The following file types are available for your use and can be found in their corresponding folders:

## Colors
- Sketch color palette
- Illustrator color palette

## Components
- Adobe Illustrator
- Encapsulated PostScript (EPS)
- Sketch
- Omnigraffle
- PDF

## Fonts
- Font Awesome
- Merriweather
- Source Sans Pro

Preview files have been made available for the Sketch, Omnigraffle, and EPS so you can see how each file is structured and it’s content. 

We encourage and solicit your input. Please leave any feedback in the project’s primary repo, which you’ll find here: https://github.com/uswds/uswds

## Installing the color palettes

You have a few options for working with our color palette: You can either use the color swatches included in the Illustrator and Sketch sticker sheet files, or you can install the ASE or Sketch Palette files. To install the files, follow the directions below, and let us know if you run into any difficulty.

### Sketch

* Begin by adding the Sketch palette plugin, which you can find [here](https://github.com/andrewfiorillo/sketch-palettes).
* Then, from the color picker, select Load Palette... from either the Global Colors or the Document Colors menu. **Please note** that doing this will replace whatever colors are currently in the selected section. If you’re concerned about losing your Global Colors, consider adding our palette to only your Document Colors menu.
* Navigate to WDS.sketchpalette to install the palette.

Some single-function components, such as buttons, have been turned into symbols for easy access from the
symbol menu. Before you alter anything (except text), detach the instance of the symbol so that you don’t change
every instance. We’ve left more complex components, such as footers, as groups.

Wherever appropriate, we’ve created type styles and layer styles to make these components easier to adapt.

Style and symbol names are a compromise between U.S. Web Design System CSS naming conventions (which allow us to
transition Sketch files more easily into development) and names that make sense in the context of
screen design.

### Illustrator

* Begin by opening the Swatches panel.
* In the Swatches menu, select Open Swatch Library and then Other Library.
* Navigate to web-design-system-colors.ase to add the palette.

### Omnigraffle
* Unzip the file to access the Stencil file.
* Open the stencil file and you’ll be asked if you want to move it to your stencil folder.
* Agree to move the stencil, then create a new Omnigraffle file.
* The WDS stencils will be listed as an available library in your stencil panel.

## Generating archive files

To help with the distribution of these assets, the project uses `npm run`
scripts to generate four types of zip archives. These zip archives are used in
the `uswds` documentation website.

Generating these files requires `node`, `npm`, and the `zip` command line tool.
To get started, you need to install the dependencies for this project locally.

```sh
npm install
```

After you’ve installed these dependencies, generate the four zip archives for each
supported release based on file extension: `omnigraffle`, `eps`, `ai`, & `sketch`.

```sh
npm release
```

### Testing the current supported file extensions

To ensure the existence of all of the files necessary to generate a release,
we’ve included some smoke tests in this project. Running the following command
will run the smoke tests to verify that all necessary files for a release are in
the project:

```sh
npm test
```

## Licenses and attribution

### A few parts of this project are not in the public domain

The files in `Fonts/Merriweather.zip` and `Fonts/Source_Sans_Pro.zip` are from [Google Web Fonts](https://www.google.com/fonts#UsePlace:use/Collection:Source+Sans+Pro:400,300,400italic,700,700italic|Merriweather:400,300,400italic,700,700italic), licensed under the [SIL Open Font License](http://scripts.sil.org/cms/scripts/page.php?item_id=OFL).

* The Source Sans Pro fonts are copyright 2010, 2012 [Adobe Systems Incorporated](http://www.adobe.com/), with Reserved Font Name ’Source’. All Rights Reserved. Source is a trademark of Adobe Systems Incorporated in the United States and/or other countries.

* The Merriweather fonts are copyright © 2010-2013, [Sorkin Type Co](www.sorkintype.com) with Reserved Font Name ’Merriweather’.

The files in `Fonts/Font_Awesome.zip` are from [Font Awesome](http://fontawesome.io/) by Dave Gandy under the [SIL Open Font License 1.1](http://scripts.sil.org/OFL).

### The rest of this project is in the public domain

The rest of this project is in the worldwide [public domain](LICENSE.md).

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
