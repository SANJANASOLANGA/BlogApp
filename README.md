# Blog App

The Blog App is a web application built using the MERN stack (MongoDB, Express.js, React, and Node.js). It allows users to register, log in, log out, and create, read, update, and delete blog posts.

## Features

- User Authentication: Register, log in, and log out
- CRUD Operations on Blog Posts: Create, read, update, and delete blog posts
- User-specific content: Each user can manage their own posts

## Technologies Used

- **MongoDB**: For database management
- **Express.js**: For backend routing and API handling
- **React**: For frontend development
- **Node.js**: For server-side logic

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB installed and running
  
### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/SANJANASOLANGA/BlogApp.git
    ```

2. Navigate to the project directory:

    ```sh
    cd BlogApp
    ```

3. Install the server dependencies:

    ```sh
    cd Server
    npm install
    ```

4. Install the client dependencies:

    ```sh
    cd ../Client
    npm install
    ```

### Running the Application

1. Start the MongoDB server:

    ```sh
    mongod
    ```

2. Start the backend server:

    ```sh
    cd Server
    npm start
    ```

3. Start the frontend development server:

    ```sh
    cd ../Client
    npm start
    ```

4. Open your browser and navigate to:

    ```sh
    http://localhost:3000
    ```
