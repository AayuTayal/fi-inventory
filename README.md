# Inventory Management Backend

This is the backend service for the Inventory Management System. It handles user authentication, product management, and admin-specific operations.

I have developed this backend using **Node.js**, **Express**, and **MongoDB** (via MongoDB Atlas). The Application is Dockerized and The API is documented using Swagger and has been tested using Postman.

---

##  Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/fi-inventory.git
   cd fi-inventory/backend

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a `.env` file in the `backend` folder** and add the following:
   ```env
   MONGO_URI=your_mongo_uri
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the server**
   ```bash
   npm run dev
   ```

---


## Swagger API Documentation

- Interactive Swagger UI: [http://localhost:8080/api-docs](http://localhost:8080/api-docs)
- Raw Swagger JSON: `backend/docs/swagger.json`


## Postman Collection

You can import the API collection using this file:  
`postman/fi-inventory-collection.json`

To import:
1. Open Postman → File → Import
2. Upload the collection file
3. Start testing all API routes


##  Features Implemented

- JWT-based user authentication (signup, login)
- Product CRUD operations(expect Delete operation)
- Admin-only protected routes
- MongoDB schema with proper validation
- Compound unique index to prevent duplicate product entries
- Swagger documentation
- Postman test collection
- Password hashing with bcrypt
- Pagination feature in Get Products
- Dockerization of the Application

---


##  Assumptions Made

- User registration is assumed to be done manually using Postman, as no frontend was built.
- Each user is expected to only access their own products, which is enforced via authentication.
- Admin users are assumed to be trusted with all data and have access to admin-only routes.


---


## Database initialization script to create schema in the database.
- MongoDB collections and indexes are initialized automatically via Mongoose schema definitions. No manual script is required.


## Testing

Along with testing on Swagger UI and Postman, I ran the `test_script.py` and **all test cases passed successfully** on my local machine.  


— Aayush Tayal
