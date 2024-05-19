Project Title: Blog Website

Description:
This repository contains the source code for a dynamic blogging website built using Node.js, Express.js, and MongoDB. The website allows users to create, edit, and delete blog posts, like and dislike posts, comment on posts, and view user profiles. It features authentication using Passport.js, image uploads, and various middleware for route protection and error handling.

Key Features:

1 . User authentication and authorization
2 . CRUD operations for blog posts
3 . User interaction with blog posts (like, dislike, comment)
4 . Image upload for blog post cover images
5 . Responsive design for desktop and mobile devices

Technologies Used:

1. Node.js
2. Express.js
3. MongoDB
4. Mongoose ODM
5. Passport.js
7. EJS templating engine

Project Structure:

1. app.js: Main entry point for the application
2. routes/: Contains route handlers for different parts of the application
3. models/: Defines Mongoose schemas for MongoDB collections
4. views/: Contains EJS templates for rendering HTML views
5. public/: Stores static assets such as CSS stylesheets, client-side JavaScript files, and images
6. middleware/: Custom middleware functions for authentication, file uploads, etc.

Setup Instructions:

1. Clone the repository to your local machine.
2. Install Node.js and MongoDB if not already installed.
3. Run npm install to install dependencies.
4. Configure environment variables (e.g., MongoDB connection URI, session secret).
5. Run npm start to start the server.
Access the website in your browser at http://localhost:3000.
Contributing:
Contributions are welcome! Feel free to submit bug reports, feature requests, or pull requests to help improve the project.

License:
This project is licensed under the MIT License.
