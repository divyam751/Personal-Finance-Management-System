# Personal Finance Management System

## About
The Personal Finance Management System is a web application designed to help users manage their finances effectively. It provides features for budget management, currency conversion, generating reports, and managing transactions and categories.

## Features
- User authentication and registration
- CRUD operations for managing budgets, transactions, and categories
- Currency conversion using real-time exchange rates
- Generation of monthly reports and reports based on categories

## Endpoints
- **Authentication**
  - `POST /login`: User authentication
  - `POST /register`: User registration

- **Budget Management**
  - `GET /budgets`: Get all budgets
  - `POST /budgets`: Create a new budget
  - `PUT /budgets/:id`: Update an existing budget
  - `DELETE /budgets/:id`: Delete a budget

- **Currency Conversion**
  - `GET /convert`: Convert currency
    - Query parameters: `amount`, `fromCurrency`, `toCurrency`

- **Reports**
  - `GET /reports/monthly`: Generate monthly reports
  - `GET /reports/categories`: Generate reports based on categories

- **Transactions**
  - `GET /transactions`: Get all transactions
  - `POST /transactions`: Create a new transaction
  - `PUT /transactions/:id`: Update an existing transaction
  - `DELETE /transactions/:id`: Delete a transaction

- **Categories**
  - `GET /categories`: Get all categories
  - `POST /categories`: Create a new category
  - `PUT /categories/:id`: Update an existing category
  - `DELETE /categories/:id`: Delete a category

## Deployed Link
[[API Link]](https://personal-finance-management-system.onrender.com)

## How to Use
1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Run the server using `npm start`.
4. Use Postman or any other API testing tool to interact with the endpoints.






This API provides endpoints for managing user accounts, budgets, transactions, categories, and generating reports related to personal finance management.

## INSTRUCTIONS

### 1. Register

- **Endpoint:** `/register`
- **Method:** POST
- **Description:** Registers a new user account.
- **Sample JSON Data (POST):**
  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "securepassword"
  }
  ```

### 2. Login

- **Endpoint:** `/login`
- **Method:** POST
- **Description:** Authenticates a user and generates a JWT token for subsequent requests.
- **Sample JSON Data (POST):**
  ```json
  {
    "email": "john.doe@example.com",
    "password": "securepassword"
  }
  ```



### 3. Budgets

- **Endpoint:** `/budgets`
- **Method:** 
  - GET: Retrieve budgets for the authenticated user.
  - POST: Create a new budget for the authenticated user.
  - PUT: Update an existing budget.
  - DELETE: Delete a budget.
- **Sample JSON Data (POST):**
  ```json
  {
    "amount": 1000,
    "categoryId": 1,
    "startDate": "2024-06-01",
    "endDate": "2024-06-30"
  }
  ```

### 4. Categories

- **Endpoint:** `/categories`
- **Method:** 
  - GET: Retrieve all categories.
  - POST: Create a new category.
- **Sample JSON Data (POST):**
  ```json
  {
    "name": "Groceries",
    "description": "Expenses related to grocery shopping"
  }
  ```

### 5. Transactions

- **Endpoint:** `/transactions`
- **Method:** 
  - GET: Retrieve all transactions for the authenticated user.
  - POST: Create a new transaction for the authenticated user.
  - PUT: Update an existing transaction.
  - DELETE: Delete a transaction.
- **Sample JSON Data (POST):**
  ```json
  {
    "amount": 50,
    "type": "expense",
    "categoryId": 2,
    "description": "Dinner with friends",
    "date": "2024-05-26"
  }
  ```

### 6. Conversion

- **Endpoint:** `/convert`
- **Method:** GET
- **Description:** Converts an amount from one currency to another.
- **Query Parameters:**
  - amount: The amount to convert.
  - fromCurrency: The currency to convert from.
  - toCurrency: The currency to convert to.
- **Sample Request:** `/convert?amount=100&fromCurrency=USD&toCurrency=EUR`

### 7. Reports

#### Monthly Report

- **Endpoint:** `/reports/monthly`
- **Method:** GET
- **Description:** Generates a monthly financial report for the authenticated user.
- **Query Parameters:**
  - month: The month (1-12).
  - year: The year (e.g., 2024).
- **Sample Request:** `/reports/monthly?month=5&year=2024`

#### Category-wise Expense Tracking

- **Endpoint:** `/reports/categories`
- **Method:** GET
- **Description:** Tracks expenses by category for the specified month and year.
- **Query Parameters:**
  - month: The month (1-12).
  - year: The year (e.g., 2024).
- **Sample Request:** `/reports/categories?month=5&year=2024`

## Sample API Request

You can use tools like Postman to make requests to the API. Here's a sample request URL along with the endpoint and sample JSON data:

**Request URL:** `https://personal-finance-management-system.onrender.com/endpoint`

Replace `endpoint` with the specific endpoint you want to test.

```

