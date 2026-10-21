# Paytm Clone

A full-stack digital wallet web application built with the MERN stack (MongoDB, Express, React, Node.js). This project simulates core financial features like user authentication, live account balance tracking, and peer-to-peer (P2P) money transfers.

## Features
- User Authentication: Secure sign-up and sign-in with password hashing and JSON Web Tokens (JWT).
- Wallet & Balances: Automatically initializes an account with a starting balance upon registration.
- P2P Transfers: Allows users to search for other registered users and securely transfer money.
- Transaction Atomicity: Built with database sessions to ensure money transfers are safe and prevent partial or corrupted transactions if errors occur.

## Tech Stack
- Frontend: React.js, HTML5, CSS3, JavaScript, Axios
- Backend: Node.js, Express.js
- Database: MongoDB & Mongoose

## Project Structure
Paytm_Project/
├── backend/            # Express server, database models, routes, and logic
├── frontend/           # React application and UI components
├── noteforme.txt       # Project notes and documentation
└── package.json        # Dependencies and scripts

## Getting Started Locally

### 1. Clone the Repository
git clone https://github.com/YuktaYBhat/Paytm_Project.git

### 2. Install Dependencies
Install dependencies for both the backend and frontend:

# Install root/backend dependencies
npm install

# Navigate to frontend and install dependencies
cd frontend
npm install
cd ..

### 3. Configure Environment Variables
Create a .env file inside the backend folder and add your configuration:
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

### 4. Run the Application
- Start Backend Server: Navigate to the backend directory and run npm start
- Start Frontend Client: Navigate to the frontend directory and run npm run dev
