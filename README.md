# Todo App — Express.js Class 2

A simple **Todo REST API** developed using Node.js, Express.js, MongoDB, and Mongoose as part of my second Express.js backend development class.

This project demonstrates how to build a backend application with a modular folder structure, implement CRUD (Create, Read, Update, Delete) operations, connect to MongoDB, and handle HTTP requests and responses using Express.js.

## 📚 Topics Covered

- Setting up an Express.js application
- Configuring environment variables using dotenv
- Connecting MongoDB with Mongoose
- Creating Mongoose schemas and models
- Organizing code using routes, controllers, models, and configuration files
- Implementing RESTful API endpoints
- Performing CRUD operations on Todo records
- Handling JSON request bodies using Express middleware
- Using asynchronous functions with `async/await`
- Handling errors using `try/catch`
- Returning JSON responses with appropriate HTTP status codes
- Testing APIs using Postman

## 🛠️ Technologies & Modules Used

| Technology / Module | Purpose |
|---|---|
| Node.js | JavaScript runtime for backend development |
| Express.js | Creates the server and manages HTTP routes |
| MongoDB | Stores Todo records in a NoSQL database |
| Mongoose | Defines schemas and interacts with MongoDB |
| Nodemon | Automatically restarts the server during development |
| dotenv | Loads environment variables from a `.env` file |
| Postman | Tests API endpoints and request responses |

## 📁 Project Structure

```text
TodoApp/
├── config/
│   └── database.js
├── controllers/
│   ├── createTodo.js
│   ├── deleteTodo.js
│   ├── getTodo.js
│   └── updateTodo.js
├── models/
│   └── Todo.js
├── routes/
│   └── todos.js
├── .env
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
└── node_modules/
```

### Folder and File Descriptions

- **`config/database.js`** — Establishes the MongoDB connection using Mongoose and the database URL from environment variables.
- **`controllers/createTodo.js`** — Handles requests to create a new Todo record.
- **`controllers/getTodo.js`** — Retrieves all Todo records or a specific Todo by its ID.
- **`controllers/updateTodo.js`** — Updates the title and description of an existing Todo.
- **`controllers/deleteTodo.js`** — Deletes a Todo record using its MongoDB ID.
- **`models/Todo.js`** — Defines the Todo schema, including title, description, creation time, and update time.
- **`routes/todos.js`** — Defines API routes and connects them to their corresponding controller functions.
- **`index.js`** — Entry point of the application. Configures Express middleware, loads routes, starts the server, and initiates the database connection.
- **`.env`** — Stores environment-specific configuration, such as the server port and MongoDB connection URL. This file should not be committed to GitHub.
- **`.gitignore`** — Specifies files and directories that Git should ignore.
- **`package.json`** — Contains project metadata, dependencies, and npm scripts.
- **`package-lock.json`** — Locks dependency versions for reproducible installations.
- **`node_modules/`** — Contains installed npm packages and should not be committed to GitHub.

## ⚙️ Prerequisites

Install the following before running the project:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)
- [Postman](https://www.postman.com/downloads/) for API testing

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

Navigate to the project directory:

```bash
cd TodoApp
```

Replace `<YOUR_GITHUB_REPOSITORY_URL>` with your actual GitHub repository URL.

### 2. Install Dependencies

Run the following command:

```bash
npm install
```

This installs the dependencies specified in `package.json`.

### 3. Configure Environment Variables

Create a `.env` file in the project's root directory:

```env
PORT=3000
DATABASE_URL=mongodb://127.0.0.1:27017/FirstDataBase
```

- `PORT` specifies the port on which the Express server runs.
- `DATABASE_URL` specifies the MongoDB connection string.

**Important:** Ensure MongoDB is running locally before starting the application.

### 4. Start the Application

If your `package.json` defines the `start` script:

```bash
npm start
```

For development with Nodemon:

```bash
npm run dev
```

If those scripts are not configured, you can start the application directly:

```bash
node index.js
```

The server should run on:

```text
http://localhost:3000
```

You can visit the home route in your browser:

```text
http://localhost:3000/
```

Expected response:

```html
<h1> This is my HomePage. </h1>
```

## 🔗 API Endpoints

All Todo API endpoints are mounted under the `/api/v1` base path.

**Base URL:** `http://localhost:3000/api/v1`

| Method | Endpoint | Description |
|---|---|---|
| POST | `/createTodo` | Creates a new Todo |
| GET | `/getTodos` | Retrieves all Todos |
| GET | `/getTodos/:id` | Retrieves a Todo by ID |
| PUT | `/updateTodo/:id` | Updates an existing Todo |
| DELETE | `/deleteTodo/:id` | Deletes a Todo by ID |

### 1. Create a Todo

**Method:** `POST`

**Endpoint:** `/api/v1/createTodo`

**Request body:**

Select **Body → raw → JSON** in Postman.

```json
{
  "title": "Learn Express.js",
  "description": "Practice building REST APIs"
}
```

**Example response:**

```json
{
  "success": true,
  "data": {
    "_id": "YOUR_TODO_ID",
    "title": "Learn Express.js",
    "description": "Practice building REST APIs"
  },
  "message": "Entry Created Successfuly"
}
```

The API saves the Todo record in MongoDB and returns the created document.

### 2. Get All Todos

**Method:** `GET`

**Endpoint:** `/api/v1/getTodos`

Retrieves all Todo records stored in the database.

**Example response:**

```json
{
  "success": true,
  "data": [
    {
      "_id": "YOUR_TODO_ID",
      "title": "Learn Express.js",
      "description": "Practice building REST APIs"
    }
  ],
  "message": "Entire Todo Data is Fetched."
}
```

The `data` array contains the Todo records returned by MongoDB.

### 3. Get a Todo by ID

**Method:** `GET`

**Endpoint:** `/api/v1/getTodos/:id`

**Example URL:**

```text
http://localhost:3000/api/v1/getTodos/YOUR_TODO_ID
```

Replace `YOUR_TODO_ID` with the actual `_id` of a Todo record.

**Description:** Retrieves a specific Todo based on its MongoDB ID.

If the record does not exist, the API returns a `404 Not Found` response.

### 4. Update a Todo

**Method:** `PUT`

**Endpoint:** `/api/v1/updateTodo/:id`

**Example URL:**

```text
http://localhost:3000/api/v1/updateTodo/YOUR_TODO_ID
```

**Request body:**

```json
{
  "title": "Learn Express.js and MongoDB",
  "description": "Practice CRUD operations and API testing"
}
```

**Description:** Updates the title and description of the specified Todo record and updates its `updatedAt` field.

If the specified Todo does not exist, the API returns a `404 Not Found` response.

### 5. Delete a Todo

**Method:** `DELETE`

**Endpoint:** `/api/v1/deleteTodo/:id`

**Example URL:**

```text
http://localhost:3000/api/v1/deleteTodo/YOUR_TODO_ID
```

**Description:** Deletes the Todo record matching the provided MongoDB ID.

**Example response:**

```json
{
  "success": true,
  "message": "Your given ID YOUR_TODO_ID Todo is Deleted Successfully"
}
```

If the record does not exist, the API returns a `404 Not Found` response.

## 🗄️ Database Configuration

This project uses MongoDB as its database and Mongoose to define the Todo schema and perform database operations.

**Database connection string:**

```text
mongodb://127.0.0.1:27017/FirstDataBase
```

**Database name:** `FirstDataBase`

**Collection:** `todos` (the default collection name generated by Mongoose for the `Todo` model).

### Todo Schema

The Todo model contains the following fields:

| Field | Data Type | Description |
|---|---|---|
| `_id` | ObjectId | Automatically generated unique identifier |
| `title` | String | Title of the Todo; required, maximum 50 characters |
| `description` | String | Description of the Todo; required, maximum 100 characters |
| `createdAt` | Date | Creation timestamp |
| `updatedAt` | Date | Last update timestamp |

The schema is defined in `models/Todo.js`.

## 🔄 CRUD Operations

The application implements the four fundamental database operations:

- **Create:** Adds a new Todo record to MongoDB.
- **Read:** Retrieves all Todo records or a specific record by ID.
- **Update:** Modifies an existing Todo's title and description.
- **Delete:** Removes a Todo record from MongoDB.

These operations are implemented through separate controller files, making the application easier to understand, maintain, and extend.

## 🧪 Testing with Postman

To test the API:

1. Start MongoDB.
2. Start the Express.js server.
3. Open Postman.
4. Select the appropriate HTTP method.
5. Enter the endpoint URL.
6. For POST and PUT requests, select **Body → raw → JSON** and provide the required data.
7. Click **Send** and inspect the response.

For a complete CRUD test, create a Todo, retrieve all Todos, retrieve the newly created Todo by its ID, update it, and finally delete it.

## ⚠️ Error Handling

The controllers use `try/catch` blocks to handle errors during database operations.

The API includes responses for:

- Successful requests using HTTP status code `200`.
- Missing Todo records using HTTP status code `404`.
- Server or database operation errors using HTTP status code `500`.

Malformed MongoDB IDs and invalid request data may also trigger errors that should be handled with more specific validation in future improvements.

## 🔐 Environment Variables & Git

The `.env` file contains local configuration and should not be committed to the repository.

Add the following to `.gitignore`:

```gitignore
node_modules/
.env
```

If another developer clones this repository, they should create their own `.env` file using the configuration example provided above.

## 🔮 Future Improvements

- Add request validation for required fields and maximum lengths.
- Improve error handling for invalid MongoDB IDs.
- Return the updated document after update operations.
- Add pagination, sorting, and filtering to the GET endpoints.
- Add authentication and authorization.
- Introduce centralized error-handling middleware.
- Add automated API tests.
- Deploy the application with a cloud-hosted MongoDB database.

## 👨‍💻 Author

**Aman Verma**

Java Full Stack Developer | Learning Node.js, Express.js, and Backend Development

This repository represents my second Express.js class project, focusing on REST API development, CRUD operations, modular backend architecture, and MongoDB integration.

---

⭐ If you find this project useful for learning Express.js and backend development, feel free to explore the code and follow my learning journey.
