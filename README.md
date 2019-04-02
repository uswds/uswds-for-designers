# USWDS for designers

This repository hosts editable, open source [United States Web Design System](https://designsystem.digital.gov/) design files for government designers or anyone wishing to make use of the USWDS components or visual styles.

With the release of USWDS 2.0, we've made some major changes to the way our assets are structured. **For now, these assets are only available as Sketch files for the Macintosh.** These files have been tested with Sketch 53. We'll be working to provide assets for other formats as soon as possible.

:rocket: We encourage your input. Please leave any feedback as issues in this repo.

## Included design files
### Sketch Libraries
- USWDS block: a layout and design helper tool synchronized to USWDS tokens
- USWDS system colors
- USWDS default theme colors
- Customizable project theme colors
- USWDS system typescale in Public Sans
- USWDS handoff symbols (Beta)
- USWDS Avatars (Beta)

### Sketch project file
This package includes `sketch/project-files/uswds-sketch`: a stickersheet and project file synchronized to USWDS tokens.

### Demo files
The files in `sketch/demo-files` are connected to examples, demos, and other tutorials.

### Fonts
- Font Awesome
- Merriweather
- Public Sans
- Roboto Mono
- Source Sans Pro

## Before you start: Install the fonts

- Unzip the zipped packages in `fonts`.
- Add all the unzipped files (`.ttf` and `.otf` files) to your system by dragging them into the **Font Book** application. If you have older versions of these fonts, you may want to diasable them in Font Book first.

Now the most recent versions of Font Awesome, Merriweather, Public Sans, Roboto Mono, and Source Sans Pro are installed and available to any program.

## Before you start: Install the Sketch libraries

- Clone or download this repo using the green `Clone or download` button in the top-right of the `uswds-for-designers` repo. This will copy the repo files to your computer. If you downloaded the files, unzip the package and move the new files to an accessible spot on your computer.
- Open Sketch > Preferences > Libraries
- Select `Add Library...`
- Select all the files in `sketch/libraries`. You can also add the files in `sketch/libraries/project-libraries`, but they are optional.

Now, all the USWDS libraries are connected to your installation of Sketch, making their styles, symbols, and colors available.

:warning: **Don't directly edit these library files.** All USWDS system and theme libraries are designed to keep your local files in sync with most current USWDS design tokens. Don't customize the library files — rather, use the shared libraries and styles to customize your project files. If you want to create specialized palettes for your project, use copies of the special `project-libraries` libraries, discussed below.

### Updating USWDS libraries
Occasionally, we'll make updates to these USWDS libraries and update our user with an email, a tweet, or a message to our public Slack. When you hear that there's a new release of our design assets, either pull that version from GitHub directly, or download the new assets with the provided link and replace the files manually. When you update the library files with a new USWDS release, Sketch will notify you that there are library updates in any affected files, and you can review and accept those updates. This process keeps your local files in sync with USWDS.

## Using USWDS Sketch assets

### Update nudge settings
USWDS 2.0 uses spacing units that are a multiples of 8px (with a few exceptions — read [more about USWDS spacing units](https://v2.designsystem.digital.gov/design-tokens/spacing-units/)). It's easy to tell Sketch to nudge in multiples of 8px. Open `preferences/canvas` and use `8` for the `Shift-Arrow` value.

<img width="459" alt="sketch-nudge" src="https://user-images.githubusercontent.com/11464021/55423391-a666ee00-5532-11e9-94ec-15efd596ab7f.png">

Now, `shift-arrow` will nudge an element 8px.

## Start a new USWDS project
### Copy the USWDS project files
Copy the `sketch/project-files` folder to a new folder outside the `uswds-for-designers` folder and rename it.

> For the purposes of this example, we'll call our new project `Agency`.

### Create project theme colors
**1.** Rename the files in `agency/project-libraries` by replacing the `project-` prefix with something unique to your project.

<img width="475" alt="agency-files" src="https://user-images.githubusercontent.com/11464021/55425266-de703000-5536-11e9-9f6b-de4981796a2d.png">

**2.** Open any of the project colors you'd like to modify.

<img width="1267" alt="agency-update-primary-1" src="https://user-images.githubusercontent.com/11464021/55425448-59d1e180-5537-11e9-9842-42166f311370.png">

**3.** Select the swatch in any artboard and use the **Appearance** panel to select a new color from the USWDS system swatches.

<img width="1006" alt="agency-update-primary-2" src="https://user-images.githubusercontent.com/11464021/55425691-e67c9f80-5537-11e9-835c-e4558d6b12b1.png">

**4.** Use the eyedropper (`control-c`) to copy your new color to the **Layer styles** swatch below.

<img width="1006" alt="agency-update-primary-3" src="https://user-images.githubusercontent.com/11464021/55425883-568b2580-5538-11e9-8a1a-8759fefeb229.png">

**5.** Then, under **Appearance**, select the style that needs updating and select `Update layer style` from the menu.

<img width="1006" alt="agency-update-primary-4" src="https://user-images.githubusercontent.com/11464021/55426031-a79b1980-5538-11e9-94ca-d0c4786ceace.png">

**6.** Use the same technique for all the swatches you'd like to modify.

<img width="1006" alt="agency-update-primary-5" src="https://user-images.githubusercontent.com/11464021/55426254-2b550600-5539-11e9-95c8-af89cb1d7bac.png">

**7.** Add your updated library to Sketch with `Sketch Preferences > Libraries > Add Library...`.

<img width="517" alt="agency-add-primary-6" src="https://user-images.githubusercontent.com/11464021/55426458-b2a27980-5539-11e9-8273-fe4628abf812.png">

The new colors are now available just like any of other USWDS color token. Use them with layer styles or with **USWDS Block**.

<img width="1006" alt="agency-update-primary-7" src="https://user-images.githubusercontent.com/11464021/55427728-7c1a2e00-553c-11e9-86fa-ab9b790292ec.png">

#### Symbol swapping
Once you have your new project theme colors, you can use the [Symbol Swapper](https://github.com/sonburn/symbol-swapper) plugin to replace instances of the default theme colors with your new project theme colors.

- Download and install Symbol Swapper using the instuctions [here](https://github.com/sonburn/symbol-swapper). (Or install via [Sketch Runner](https://sketchrunner.com/)).
- Open `plugins > Symbol Swapper > Symbol Swap Libraries`
- Select the color library you want to replace. (In this example, it's `uswds-theme-color-primary`.)
- In the dropdown, select the library you want as a replacement. (In this example, it's `agency-color-theme-primary`.)

<img width="423" alt="agency-symbol-swap-1" src="https://user-images.githubusercontent.com/11464021/55428164-635e4800-553d-11e9-96cf-9d0f51ec70fa.png">

- Sketch will prompt you to update symbols.

<img width="430" alt="agency-symbol-swap-2" src="https://user-images.githubusercontent.com/11464021/55428260-943e7d00-553d-11e9-80f0-f79f6f4889ec.png">

After updating, the stickersheet symbols now uses your project colors. :tada:

<img width="1006" alt="agency-symbol-swap-3" src="https://user-images.githubusercontent.com/11464021/55428402-debff980-553d-11e9-8439-497a4226c2a6.png">

> **Note:** This only works with symbols and designs created with **USWDS Block**. Symbol swapper will not update layer styles and it cannot update colored text.

## Updating the USWDS documentation site

These archive files generated by `npm run release` may then be manually copied over to the [files directory](https://github.com/uswds/uswds-site/tree/master/files) of the USWDS Site for distribution on the [For Designers - Getting Started](https://designsystem.digital.gov/getting-started/designers/) page.
