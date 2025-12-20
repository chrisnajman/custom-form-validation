# Custom Form Validation

<details>
  <summary><strong id="menu">Menu</strong></summary>

- [Description](#description)
- [Features](#features)
- [JavaScript](#javascript)
- [CSS](#css)
- [Accessibility](#accessibility)
- [Code Source](#code-source)
- [Theme Toggling](#theme-toggling)
- [Testing and Compatibility](#testing-and-compatibility)
- [How to Run](#how-to-run)
- [Build & Deployment Setup for `/docs` Folder](#build--deployment-setup-for-docs-folder)

</details>

## Description

This project demonstrates a **custom, accessible form validation pattern** built with semantic HTML, modern CSS, and vanilla JavaScript. It enhances the browser's native constraint validation API with clearer, contextual error messages and improved focus management, while still gracefully falling back to built-in validation when JavaScript is unavailable.

The form is designed to be responsive, keyboard-friendly, and screen-reader compatible, with a strong emphasis on progressive enhancement and minimal dependencies.

[Back to menu](#menu)

---

## Features

- Custom validation messages using the browser's **Constraint Validation API**
- Progressive enhancement — native validation is used when JavaScript is disabled
- Per-field error messaging with contextual placement
- Automatic focus management on first invalid field
- Accessible completion feedback announced via aria-live
- Responsive grid-based layout with minimal markup
- Required field indicators generated via CSS
- Custom styling for radio buttons, checkboxes, and error states

[View on GitHub Pages](https://chrisnajman.github.io/custom-form-validation)

[Back to menu](#menu)

---

## JavaScript

Built with **vanilla ES6 JavaScript**, focusing on modern syntax and browser APIs.

The JavaScript has been split into separate modules, improving code modularity:

- `form-validation.js`:
  - Disables native UI validation using `novalidate` while retaining native validity checks
  - Uses `validity.valid` to determine error states
  - Supports custom error messages via `data-error` attributes
  - Displays error messages inline next to the relevant field or fieldset
  - Validates individual fields on `blur`
  - Validates all fields on submit and focuses the first invalid control
  - Displays a completion message and resets the form on successful submission
  - Uses focus management to move attention to validation errors or success feedback
  - Persists the completion message across a full form submission and page reload, clearing it after the next navigation or when the user refocuses a form control

### Other

- `loader.js`: See [Loader Git repository](https://github.com/chrisnajman/loader)
- `theme.js`: Handles theme toggling (light/dark mode) and local storage management.

[Back to menu](#menu)

---

## CSS

- `form-validation.css`:
  - Uses CSS Grid to create a responsive two-column form layout
  - Ensures layout stability when error messages appear
  - Styles validation states using `:user-invalid`
  - Adds required field indicators via `::after` without additional markup
  - Improves radio and checkbox usability with larger hit areas
  - Makes radio button containers fully clickable
  - Visually distinguishes selected radio options
  - Hides empty error and completion messages automatically
  - Uses modern selectors such as `:has()` for contextual styling

[Back to menu](#menu)

---

## Accessibility

- Semantic HTML form controls and landmarks
- Explicit `<label>` associations for all inputs
- Grouped radio buttons within a `<fieldset>` and `<legend>`
- Inline error messages announced via `aria-live="polite"`
- Completion message announced and programmatically focused
- Keyboard-accessible form controls and buttons
- "Skip to main content" link for keyboard and screen-reader users
- Visual focus styles preserved and enhanced
- No reliance on color alone to convey error states
- Graceful fallback to native browser validation when JavaScript is disabled

[Back to menu](#menu)

---

## Code Source

This page was built by following a two-part YouTube tutorial series by Kevin Powell.

- Part 1: [A deceptively complex form](https://youtu.be/jJgNgNNHqjk?si=9Qp3L9wWGQi9zsZD)
- Part 2: [How to set custom error messages for your HTML forms](https://youtu.be/h5qqmE83Tes?si=pxcN7LAKH3yZISl9)

The implementation diverged in the following ways:

- Changes to color choices to align with my own house style
- Refactored and simplified JavaScript logic
- Improved focus management and completion feedback
- Modularised JavaScript structure
- Additional progressive-enhancement considerations

> [!NOTE]
> The original source code for Parts 1 and 2 is available in the information section beneath the videos.

[Back to menu](#menu)

---

## Theme Toggling

The application includes a dark mode and light mode toggle:

- The current theme state is stored in **local storage** and applied automatically on page reload.
- Accessible buttons with appropriate ARIA attributes are used to improve usability.

> [!IMPORTANT]
> Remember to change `const LOCAL_STORAGE_PREFIX` in `js-modules/theme.js` to a unique identifier.

[Back to menu](#menu)

---

## Testing and Compatibility

The application has been tested on the following platforms and browsers:

- **Operating System**: Windows 11
- **Browsers**:
  - Google Chrome
  - Mozilla Firefox
  - Microsoft Edge

### Device View Testing

The layout and functionality have been verified in both browser and device simulation views to ensure responsiveness and usability.

[Back to menu](#menu)

---

## How to Run

1. Clone or download the repository to your local machine.
2. Open the project folder and start a simple HTTP server (e.g., using `Live Server` in VS Code or Python's `http.server` module).
3. Open the project in a modern browser (e.g., Chrome, Firefox, or Edge).

[Back to menu](#menu)

---

## Build & Deployment Setup for `/docs` Folder

If you want to deploy a minified version of this project to **GitHub Pages**, read on.

### 1. Install Required Packages

Run this once in your project root to install dev dependencies:

```bash
npm install
```

### 2. Run the full build process

> [!IMPORTANT]
> Any assets not described in `package.json` must be added. In the current project we don't have an `img` folder. If you create one and add images to it, you have to add this to `copy:assets`, e.g.

#### Current `package.json`

```
"copy:assets": "shx cp -r  site.webmanifest favicon.ico favicon-16x16.png favicon-32x32.png apple-touch-icon.png android-chrome-192x192.png android-chrome-512x512.png docs/",
```

#### Updated `package.json` with "img"

```
"copy:assets": "shx cp -r  img site.webmanifest favicon.ico favicon-16x16.png favicon-32x32.png apple-touch-icon.png android-chrome-192x192.png android-chrome-512x512.png docs/",
```

etc, etc.

Then in the terminal, run:

```bash
npm run build
```

### 3. Deploy to GitHub Pages

Once you've created a repository and pushed the files,

- go to `https://github.com/[your-name]/[your-project-name]/settings/pages`.
- Under "Build and deployment > Branch" make sure you set the branch to `main` and folder to `/docs`.
- Click "Save".

> [!NOTE]
> For a detailed description of the build process, configuration files and npm packages see my [GitHub Pages Optimised Build](https://github.com/chrisnajman/github-pages-optimised-build).

[Back to menu](#menu)
