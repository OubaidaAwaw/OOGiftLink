
# OOGiftLink

**OOGiftLink** is a full-stack web application designed for users to give away household items they no longer need and find items they want to recycle. The platform connects people who wish to share their goods with those looking for free, pre-owned items. Built with the MERN stack, OOGiftLink offers a seamless experience for users to register, log in, browse listings, and manage their profiles.

## Project Overview

This project was developed as part of a Coursera Capstone course. The goal was to create a full-stack web application with both a client-side React interface and a server-side Node.js backend, utilizing MongoDB for data storage and Express.js for API routes. The application features user authentication, secure login, and an intuitive interface for browsing and managing household items.

## Features

- **User Registration & Authentication**: Secure login and registration system.
- **Item Listings**: View, add, and edit items for donation or exchange.
- **Search & Filter**: Easily search for items based on categories and user preferences.
- **Profile Management**: Users can manage their personal information and listings.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies Used

- **Frontend**: React, Vite, React Router, Redux, React-Redux
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Token (JWT)
- **File Upload**: Multer
- **Security**: Helmet, CORS, Express-Validator, Bcryptjs
- **Other Tools**: Axios, ESLint, GitHub Pages for Deployment

## Installation Instructions

To run the application locally, follow these steps:

### Prerequisites

Make sure you have Node.js and npm installed. Additionally, you will need to install global packages like `nodemon` and `concurrently`.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/OOGiftLink.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd OOGiftLink
   ```

3. **Install dependencies:**
   - For both server and client:
   ```bash
   npm install
   ```

4. **Install global dependencies (if you haven’t already):**
   ```bash
   npm install -g nodemon concurrently gh-pages
   ```

5. **Run the application:**
   In one terminal window:
   ```bash
   npm run server
   ```

   In another terminal window:
   ```bash
   npm run client
   ```

   The application will be available at `http://localhost:3000/GiftLink`.

### Deployment

To deploy the application to GitHub Pages, run the following command:
```bash
npm run deploy
```

## Usage

- **Home Page**: View featured listings and navigate to other sections.
- **Item Listings Page**: Browse available items and add your own to the platform.
- **Search**: Use the search bar to find items by keywords or categories.
- **Profile Page**: Edit your personal details and manage your listings.
- **Login/Register**: Secure authentication for accessing your account.

## Contributing

Contributions are welcome! If you'd like to contribute to OOGiftLink, please fork the repository and create a pull request with your changes. Before submitting your PR, make sure to test your changes and ensure that they align with the project's style guide.

### Steps for Contribution:
1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Test your changes.
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

This project was developed as part of the Coursera Full Stack Web Development Capstone course. The following technologies and resources were used:

- **React** for the frontend user interface.
- **Node.js and Express.js** for the backend API.
- **MongoDB** for the NoSQL database.
- **GitHub Pages** for deployment.