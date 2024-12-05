# Cat API Gallery

This is a simple React app that fetches random cat images from The Cat API and displays them in a user-friendly gallery.
https://api.thecatapi.com/v1/images/

## Setup Instructions

### Prerequisites:
- Node.js version 16.20.2.

### Backend (Express):
1. Clone this repository.
2. In the root directory, run:
    ```bash
    npm install
    node server.js
    ```
    This will start the Express server on port 5000.

### Frontend (React):
1. In the `client` directory, run:
    ```bash
    npm install
    npm start
    ```
    This will start the React app on port 3000.

### Assumptions:
- Error handling is basic and will log any API failure.

### Trade-offs:
- Event though this take-home exercise doesn't require tons of coding, deep thinking on architecture or hours of researching, there's still 3-hour constraint, I focused mainly on functionality and clean code. The error handling could be more comprehensive, and the UI could be further enhanced.
