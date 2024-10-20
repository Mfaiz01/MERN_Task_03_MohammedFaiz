# Task 3: Custom Input Component with React Hook Form

## Overview
This task involves creating a **custom input component** using **React Hook Form**. The form handles validation and supports various input types such as text, email, checkbox, and radio buttons. The form is designed to be reusable with a simple API for validation and form handling.

## Features
- Custom input component built with React Hook Form.
- Built-in validation for each input field.
- Supports input types like text, email, checkbox, and radio.
- Displays error messages when validation fails.

## Screenshots

### Custom Input Form Example
![Custom Input Example1](./src/screenshots/s1.png)
![Custom Input Example2](./src/screenshots/s1.png)

## Technologies Used
- **React**
- **React Hook Form** (for form handling)
- **Yup** (for form validation)

## Installation and Setup
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Start the app with `npm start`.

## How to Use
1. Import the `CustomInput` component.
2. Pass in the required field props such as `name`, `type`, and `validation` rules.
3. Form submission is handled automatically by React Hook Form.

## Files
- `CustomInput.js`: Contains the custom input component logic.
- `ValidationSchema.js`: Defines validation rules for each field using **Yup**.

## Future Improvements
- Extend support for file upload and select inputs.
- Add dynamic form generation using configuration objects.
