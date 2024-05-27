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
[Your Deployed Link Here]

## How to Use
1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Run the server using `npm start`.
4. Use Postman or any other API testing tool to interact with the endpoints.

## Sample Data
### Convert Endpoint
- **Request:**
  - Endpoint: `GET /convert`
  - Query parameters:
    - `amount`: 100
    - `fromCurrency`: USD
    - `toCurrency`: EUR
- **Response:**
  ```json
  {
    "success": true,
    "convertedAmount": 91.79
  }
  ```

### Transactions Endpoint
- **Request:**
  - Endpoint: `GET /transactions`
- **Response:**
  ```json
  [
    {
      "id": 1,
      "description": "Groceries",
      "amount": 50.00,
      "category": "Food",
      "date": "2024-05-25"
    },
    {
      "id": 2,
      "description": "Internet Bill",
      "amount": 60.00,
      "category": "Utilities",
      "date": "2024-05-26"
    }
  ]
  ```

---

Feel free to customize the content according to your project specifications!
