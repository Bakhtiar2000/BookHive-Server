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
- **GET /products**: Fetch all products.
- **POST /wishlist**: Add a product to the wishlist.
- **POST /cart**: Add a product to the cart.

### Seller Endpoints
- **POST /products**: Add a new product.
- **PUT /products/:id**: Update a product.
- **DELETE /products/:id**: Delete a product.

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
   npm start
   ```

5. The server will be running at `http://localhost:5000`.

---

## User Credentials
### Buyer
- **Email**: fahim@gmail.com
- **Password**: Fahim111**

### Seller
- **Email**: rakib@gmail.com
- **Password**: Rakib111**

### Admin
- **Email**: admin@bookhive.com
- **Password**: Admin111**

---

## Deployment
The backend server is deployed live at: [BookHive Backend Live Link](https://your-live-backend-url.vercel.app)

---

## Technologies Used
### Backend
- Node.js
- Express.js
- MongoDB
- Firebase Authentication
- JWT for secure routes

---

## Contribution
Feel free to fork the repository and submit pull requests for new features or bug fixes!

---

## License
This project is licensed under the MIT License.
