# Shopping Cart

A dynamic and responsive shopping cart application built with:

- **React**
- **TypeScript**
- **Vite**
- **Firebase**
- **RAWG API**
- **Bootstrap**
- **Framer Motion**

## New Changes

### Version 2.0

- **Firebase Integration**: Integrated Firebase for user authentication and personalized cart management.
- **Profile Section**: Added a profile section where users can manage their personal details and view their cart.
- **User-Specific Cart**: Each user now has their own cart, stored and managed securely via Firebase.
- **Error Handling**: Improved error handling for cart operations and authentication processes.
- **Environment Configuration**: Updated project to use environment variables for Firebase configuration.

## Key Features

- **Product Catalog**: Browse and select items from a comprehensive product catalog fetched from the RAWG API.
- **Add to Cart**: Easily add products to the cart with a single click.
- **Dynamic Cart**: Real-time updates and calculations for cart totals and item quantities.
- **User Profiles**: Each user has their own cart, integrated with Firebase for secure and personalized cart management.
- **Responsive Design**: Ensures optimal viewing and interaction experience across a wide range of devices.
- **Smooth Animations**: Enhances user experience with fluid animations powered by Framer Motion.
- **Sorting Options**: Sort products based on various criteria such as price, popularity, or category.
- **Search Functionality**: Search products by name or category within the catalog.
- **Authentication**: Users can sign in with Google using Firebase Authentication for a personalized shopping experience.

## Authentication

The application uses Firebase Authentication to manage user sign-ins and profile management:

- **Google Sign-In**: Users can sign in using their Google accounts, which simplifies the authentication process and allows for a seamless user experience.
- **User Profiles**: Upon signing in, users gain access to their personalized cart and profile section.
- **Secure Storage**: User-specific data, such as cart items, are securely stored in Firebase Firestore and associated with their unique user ID.
- **Handling Unauthorized Access**: The app includes checks to ensure that cart operations and profile access are only available to authenticated users.
