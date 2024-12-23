# BookHive - Backend Server

## Features
- **Secure APIs**: Role-based protected routes using JWT.
- **Database Integration**: MongoDB for managing data.
- **Authentication**: Firebase Authentication for user login and registration.
- **Role Management**:
  - **Buyer**: Access to purchase-related APIs.
  - **Seller**: Manage product-related APIs.
  - **Admin**: Full access to user and product management APIs.

## API Endpoints
### Public Endpoints
- **POST /login**: User login.
- **POST /register**: User registration.

### Buyer Endpoints
- **GET /books**: Fetch all books.
- **POST /wishlist**: Add a book to the wishlist.
- **POST /cart**: Add a book to the cart.

### Seller Endpoints
- **POST /books**: Add a new book.
- **PUT /book/:id**: Update a book.
- **DELETE /book/:id**: Delete a book.

### Admin Endpoints
- **GET /users**: Fetch all users.
- **PUT /users/role/:id**: Update user roles.
- **DELETE /users/:id**: Remove a user.

---

## How to Run the Application Locally
### Prerequisites
1. Node.js (>= 14.x)
2. npm or yarn
3. MongoDB instance running locally or in the cloud.

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repo/bookhive-backend.git
   cd bookhive-backend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Create a `.env` File**:
   Create a `.env` file in the root directory and add your environment variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   FIREBASE_API_KEY=your_firebase_api_key
   FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   ```

4. **Start the Server**:
   ```bash
   nodemon index.js
   ```

5. The server will be running at `http://localhost:5000`.


## Deployment
The backend server is deployed live at: [BookHive Backend Live Link]([https://your-live-backend-url.vercel.app](https://book-hive-server-bakhtiar2000s-projects.vercel.app/))

---

## Technologies Used
### Backend
- Node.js
- Express.js
- MongoDB

