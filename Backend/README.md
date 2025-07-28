# FiMoney Inventory Management Backend

This is the backend service for the FiMoney Inventory Management System. It handles user authentication, product management, and admin-specific operations.

I (Aayush Tayal) have developed this backend using **Node.js**, **Express**, and **MongoDB** (via MongoDB Atlas). The API is documented using Swagger and has been tested using Postman.

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

---


##  Assumptions Made

- User registration is assumed to be done manually using Postman, as no frontend was built.
- Each user is expected to only access their own products, which is enforced via authentication.
- Admin users are assumed to be trusted with all data and have access to admin-only routes.
- The environment variables like `JWT_SECRET` and `MONGO_URI` are assumed to be provided securely in a `.env` file.


---


## Stretch Work (Optional)

- Made Admin-protected routes(users routes to see all the users which can be seen by aAdmin only and analytics routes to get the most added products which is also admin-protected)
- I have written the frontend code but got unexpected errors and didn't able to debug it and complete due to time constraints, but the API is fully functional and ready to be connected with any frontend or CLI tool. You can ignore the frontend code now, though I will try to make it functional afterwards.
- Also thought about Dockerizing the App but couldn't even able to start due to time constraint.

---


## Database initialization script to create schema in the database.
- MongoDB collections and indexes are initialized automatically via Mongoose schema definitions. No manual script is required.


## Testing

Along with testing on Swagger UI and Postman, I ran the `test_script.py` provided in the assignment and **all test cases passed successfully** on my local machine.  
If needed, I can share the test logs or recording upon request.

---


## If I had more time, what could be improved?/Future possible enhancements

- I could have completed the Frontend portion, could Dockerize the application, could add more routes like Admin get list of all products, Admin can delete users violating policies, users can delete their product document, user can update their whole product like price also along with just updating quantity.

- Additionally, along with Pagination, I could have also implemented searching, filtering, select and sorting features. 

- On the backend quality side, I could have added centralized error handling middleware, custom error classes for better error granularity, and used advanced validation libraries like Joi for more robust input validation.


## 🤖 AI Usage Disclosure

Yes, I used AI tools (ChatGPT) to guide me in debugging, structuring the backend, generating Swagger comments, and writing some of the documentation and logic — especially when I got stuck, for example, I tested my code using Swagger UI and Postman but when tested using test_script.py, some of the test cases were not passed, I asked chat gpt and it said you are returning {id: newProduct._id} but the python script expects
 {product_id: newProduct._id}

However, I made sure I understood and customized every part — I didn’t blindly copy-paste anything.

---

Thanks for checking out my submission! Let me know if anything is unclear or needs more explanation.

— Aayush Tayal