# QR Code App

This is a simple React application that displays a QR code with a brief description. The app is designed to showcase front-end skills using React, `styled-components` for styling, and a custom theme.

## Live Demo

You can view the live version of this project here:

[QR Code App Live Demo](https://enchanting-zuccutto-7ed34e.netlify.app/)

## Features

- Displays a QR code along with a description encouraging users to improve their front-end skills.
- Fully responsive design, adaptable for both mobile and desktop views.
- Utilizes `styled-components` to handle component-level styling.
- Themed using a custom color palette and fonts for consistent styling across the app.

## Technologies Used

- **React**: JavaScript library for building the user interface.
- **Styled Components**: For writing CSS in JavaScript using template literals.
- **TypeScript**: Adds type safety to JavaScript, enhancing the development experience.
- **React Helmet**: For managing document head tags and meta information.

## Project Structure


### Key Components and Files

1. **`components/Cardstyle.ts`**:
   - Defines the styled components used in the application: `Card`, `QrImage`, `Heading`, and `Paragraps`.
   - **Card**: Main container with a white background, shadow, and rounded corners.
   - **QrImage**: Styled image for the QR code, with padding and rounded corners.
   - **Heading**: Text component for the main heading.
   - **Paragraps**: Text component for the description beneath the heading.

2. **`components/GlobalStyles.ts`**:
   - Global CSS styles applied across the app, including margin reset, box-sizing adjustments, and font settings.
   - Uses Flexbox for centering the content on the screen both vertically and horizontally.

3. **`themes/defaultTheme.ts`**:
   - Defines the project's color scheme and font settings.
   - Color variables like `white`, `lightgray`, `blue`, and `darknavy` are used throughout the components.
   - The primary font is set to "Space Mono" for a modern and clean look.

## License

This project is open-source and available under the [MIT License](LICENSE).
