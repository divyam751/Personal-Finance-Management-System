# Register new user

## POST

- - https://personal-finance-management-system.onrender.com/register

```javascript
{
  "email": "newuser@example.com",
  "password": "password123",
  "name": "New User"
}
```

# RESPONSE

```javascript
{
    "user": {
        "id": 2,
        "name": "New User",
        "email": "newuser@example.com",
        "password": "$2a$10$oFP5kds.Of58JnFkmywYO.tyPaV1tpC1MDG00V5ML/mwog7o480FS",
        "createdAt": "2024-05-28T03:29:41.377Z",
        "updatedAt": "2024-05-28T03:29:41.377Z"
    }
}

```

# Login existing user

## POST

-- https://personal-finance-management-system.onrender.com/login

```javascript
{
  "email": "newuser@example.com",
  "password": "password123"
}

```

# RESPONSE

```javascript
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTcxNjg2NzExNSwiZXhwIjoxNzE2ODcwNzE1fQ.fcu1iHFth7JRmyvhQEx5mpH2BGhCNrUnRwYzG8T6zTc"
}
```

# Add Categories

To create 10 categories, you need to make 10 POST requests to the `/categories` endpoint with the required category data.

### Endpoint

```
https://personal-finance-management-system.onrender.com/categories
```

### Example Request Body for Each Category (JSON)

```json
{
  "name": "Category 1",
  "description": "Description for Category 1"
}
```

### Example Categories

1. ```json
   {
     "name": "Groceries",
     "description": "Expenses for grocery shopping"
   }
   ```
2. ```json
   {
     "name": "Rent",
     "description": "Monthly rent payments"
   }
   ```
3. ```json
   {
     "name": "Utilities",
     "description": "Payments for electricity, water, etc."
   }
   ```
4. ```json
   {
     "name": "Transportation",
     "description": "Expenses for travel and commuting"
   }
   ```
5. ```json
   {
     "name": "Dining Out",
     "description": "Expenses for eating out at restaurants"
   }
   ```
6. ```json
   {
     "name": "Entertainment",
     "description": "Expenses for movies, concerts, etc."
   }
   ```
7. ```json
   {
     "name": "Healthcare",
     "description": "Medical and health-related expenses"
   }
   ```
8. ```json
   {
     "name": "Insurance",
     "description": "Payments for insurance policies"
   }
   ```
9. ```json
   {
     "name": "Savings",
     "description": "Money saved or invested"
   }
   ```
10. ```json
    {
      "name": "Miscellaneous",
      "description": "Other expenses"
    }
    ```
11. ```json
    {
      "name": "Salary",
      "description": "Monthly salary"
    }
    ```

### How to Make Requests in Postman

1. Set the method to `POST`.
2. Enter your server's URL followed by `/categories`.
3. Go to the `Body` tab, select `raw`, and choose `JSON` format.
4. Paste one of the JSON objects above into the body.
5. Add Headers Authorization : Bearer YOUR_TOKEN_HERE
6. Send the request.

## Sample response

```json
{
  "id": 11,
  "name": "Salary",
  "description": "Monthly salary",
  "createdAt": "2024-05-28T03:44:36.203Z",
  "updatedAt": "2024-05-28T03:44:36.203Z"
}
```

# Budget

### Endpoint POST

```
 https://personal-finance-management-system.onrender.com/budgets
```

### Example Request Body for Budget (JSON)

```json
{
  "amount": 500.0,
  "categoryId": 1, // Replace with the actual category ID for which you want to create budget
  "startDate": "2024-06-01T00:00:00.000Z",
  "endDate": "2024-06-30T23:59:59.999Z"
}
```

### How to Make Requests in Postman

1. **Get Authentication Token**:

   - Ensure you have a valid JWT token by logging in.
   - Make a POST request to the `/login` endpoint to get the token.

2. **Create Budget**:

   - For the budget creation, include the token in the request header.

3. **Set Headers in Postman**:
   - In the `Headers` tab, add a new header with the key `Authorization` and the value `Bearer YOUR_TOKEN_HERE`, replacing `YOUR_TOKEN_HERE` with the token you received from the login response.

### Example Headers in Postman

- **Key**: `Authorization`
- **Value**: `Bearer YOUR_TOKEN_HERE`

### Example Request for Creating a Budget

- **Endpoint**: `POST /budgets`
- **Headers**:
  - `Authorization`: `Bearer YOUR_TOKEN_HERE`
- **Body** (JSON):
  ```json
  {
    "amount": 2000.0,
    "categoryId": 1, // for food category
    "startDate": "2024-06-01T00:00:00.000Z",
    "endDate": "2024-06-30T23:59:59.999Z"
  }
  ```

### sample response

```json
{
  "id": 1,
  "userId": 2,
  "categoryId": 1,
  "amount": 2000,
  "startDate": "2024-06-01T00:00:00.000Z",
  "endDate": "2024-06-30T23:59:59.999Z",
  "createdAt": "2024-05-28T03:50:36.218Z",
  "updatedAt": "2024-05-28T03:50:36.218Z"
}
```

# Transactions

```
https://personal-finance-management-system.onrender.com/transactions
```

Certainly! If you want to create a transaction with the category ID as 11 for salary, assuming category ID 11 represents the "Salary" category, here are the details:

### Example Transaction for Salary Income

```json
{
  "amount": 5000.0,
  "type": "income",
  "categoryId": 11,
  "description": "Monthly salary",
  "date": "2024-06-25T12:00:00.000Z"
}
```

### Example Transactions (including one for salary)

1. ```json
   {
     "amount": 50.0,
     "type": "expense",
     "categoryId": 1,
     "description": "Grocery shopping",
     "date": "2024-06-28T12:00:00.000Z"
   }
   ```
2. ```json
   {
     "amount": 1200.0,
     "type": "expense",
     "categoryId": 2,
     "description": "Monthly rent",
     "date": "2024-06-01T12:00:00.000Z"
   }
   ```
3. ```json
   {
     "amount": 100.0,
     "type": "expense",
     "categoryId": 3,
     "description": "Electricity bill",
     "date": "2024-06-15T12:00:00.000Z"
   }
   ```
4. ```json
   {
     "amount": 25.0,
     "type": "expense",
     "categoryId": 4,
     "description": "Bus ticket",
     "date": "2024-06-20T12:00:00.000Z"
   }
   ```
5. ```json
   {
     "amount": 5000.0,
     "type": "income",
     "categoryId": 11,
     "description": "Monthly salary",
     "date": "2024-06-25T12:00:00.000Z"
   }
   ```

### Explanation:

- Transactions 1 to 4 are regular expense transactions for various purposes.
- Transaction 5 is the salary income transaction with the category ID set to 11.

To generate a monthly report, you'll need to send a GET request to the `/reports/monthly` endpoint with the required query parameters for the month and year. Here's the endpoint and the data you need to pass:

# Endpoint for Monthly Report GET

```
 https://personal-finance-management-system.onrender.com/reports/monthly
```

### Query Parameters

- `month`: The month for which you want to generate the report (numeric value, e.g., 1 for January, 2 for February, etc.).
- `year`: The year for which you want to generate the report (numeric value, e.g., 2024).

### Example Request GET

```
https://personal-finance-management-system.onrender.com/reports/monthly?month=6&year=2024
```

### Example Response (JSON)

```json
{
  "totalIncome": 10000,
  "totalExpense": 1375,
  "balance": 8625
}
```

### Explanation:

- `totalIncome`: Total income for the specified month and year.
- `totalExpense`: Total expenses for the specified month and year.
- `balance`: Balance (income minus expenses) for the specified month and year.

Ensure that you include the JWT token in the request header for authentication.

To generate a category-wise report, you'll need to send a GET request to the `/reports/categories` endpoint with the required query parameters for the month and year. Here's the endpoint and the data you need to pass:

# Endpoint for Category-wise Report GET

```
https://personal-finance-management-system.onrender.com/reports/categories
```

### Query Parameters

- `month`: The month for which you want to generate the report (numeric value, e.g., 1 for January, 2 for February, etc.).
- `year`: The year for which you want to generate the report (numeric value, e.g., 2024).

### Example Request

```
GET /reports/categories?month=6&year=2024
```

### Example Response (JSON)

```json
{
  "Groceries": 50,
  "Rent": 1200,
  "Utilities": 100,
  "Transportation": 25
}
```

### Explanation:

- Each key in the response object represents a category name.
- The corresponding value represents the total amount spent (or earned) in that category for the specified month and year.

Ensure that you include the JWT token in the request header for authentication.

# Endpoint for All Transactions Report GET

```
https://personal-finance-management-system.onrender.com/transactions
```

### Example Request

```
GET /transactions
```

### Example Response (JSON)

```json
[
  {
    "id": 1,
    "userId": 2,
    "type": "income",
    "amount": 5000,
    "date": "2024-06-25T12:00:00.000Z",
    "categoryId": 11,
    "description": "Monthly salary",
    "createdAt": "2024-05-28T03:54:18.464Z",
    "updatedAt": "2024-05-28T03:54:18.464Z",
    "category": {
      "id": 11,
      "name": "Salary",
      "description": "Monthly salary",
      "createdAt": "2024-05-28T03:44:36.203Z",
      "updatedAt": "2024-05-28T03:44:36.203Z"
    }
  },
  {
    "id": 2,
    "userId": 2,
    "type": "expense",
    "amount": 50,
    "date": "2024-06-28T12:00:00.000Z",
    "categoryId": 1,
    "description": "Grocery shopping",
    "createdAt": "2024-05-28T03:54:28.229Z",
    "updatedAt": "2024-05-28T03:54:28.229Z",
    "category": {
      "id": 1,
      "name": "Groceries",
      "description": "Expenses for grocery shopping",
      "createdAt": "2024-05-28T03:43:45.153Z",
      "updatedAt": "2024-05-28T03:43:45.153Z"
    }
  },
  {
    "id": 3,
    "userId": 2,
    "type": "expense",
    "amount": 1200,
    "date": "2024-06-01T12:00:00.000Z",
    "categoryId": 2,
    "description": "Monthly rent",
    "createdAt": "2024-05-28T03:54:33.213Z",
    "updatedAt": "2024-05-28T03:54:33.213Z",
    "category": {
      "id": 2,
      "name": "Rent",
      "description": "Monthly rent payments",
      "createdAt": "2024-05-28T03:43:55.702Z",
      "updatedAt": "2024-05-28T03:43:55.702Z"
    }
  },
  {
    "id": 4,
    "userId": 2,
    "type": "expense",
    "amount": 100,
    "date": "2024-06-15T12:00:00.000Z",
    "categoryId": 3,
    "description": "Electricity bill",
    "createdAt": "2024-05-28T03:54:37.748Z",
    "updatedAt": "2024-05-28T03:54:37.748Z",
    "category": {
      "id": 3,
      "name": "Utilities",
      "description": "Payments for electricity, water, etc.",
      "createdAt": "2024-05-28T03:43:59.389Z",
      "updatedAt": "2024-05-28T03:43:59.389Z"
    }
  },
  {
    "id": 5,
    "userId": 2,
    "type": "expense",
    "amount": 25,
    "date": "2024-06-20T12:00:00.000Z",
    "categoryId": 4,
    "description": "Bus ticket",
    "createdAt": "2024-05-28T03:54:41.916Z",
    "updatedAt": "2024-05-28T03:54:41.916Z",
    "category": {
      "id": 4,
      "name": "Transportation",
      "description": "Expenses for travel and commuting",
      "createdAt": "2024-05-28T03:44:04.912Z",
      "updatedAt": "2024-05-28T03:44:04.912Z"
    }
  },
  {
    "id": 6,
    "userId": 2,
    "type": "income",
    "amount": 5000,
    "date": "2024-06-25T12:00:00.000Z",
    "categoryId": 11,
    "description": "Monthly salary",
    "createdAt": "2024-05-28T03:54:47.416Z",
    "updatedAt": "2024-05-28T03:54:47.416Z",
    "category": {
      "id": 11,
      "name": "Salary",
      "description": "Monthly salary",
      "createdAt": "2024-05-28T03:44:36.203Z",
      "updatedAt": "2024-05-28T03:44:36.203Z"
    }
  }
]
```

### Explanation:

- Each object in the array represents a transaction.
- The object includes details such as the transaction ID, amount, type (income or expense), category ID, description, date, and category details.

Ensure that you include the JWT token in the request header for authentication.

# Endpoint for Currency Conversion (GET)

```
https://personal-finance-management-system.onrender.com/convert
```

### Query Parameters

- `amount`: The amount you want to convert (numeric value).
- `fromCurrency`: The source currency code (e.g., USD, EUR, GBP).
- `toCurrency`: The target currency code (e.g., USD, EUR, GBP).

### Example Request (GET)

```
 https://personal-finance-management-system.onrender.com/convert?amount=100&fromCurrency=USD&toCurrency=EUR
```

### Example Response (JSON)

```json
{
  "success": true,
  "convertedAmount": 88.24,
  "originalAmount": 100,
  "fromCurrency": "USD",
  "toCurrency": "EUR"
}
```

### Explanation:

- `success`: Indicates whether the conversion was successful.
- `convertedAmount`: The converted amount in the target currency.
- `originalAmount`: The original amount in the source currency.
- `fromCurrency`: The source currency code.
- `toCurrency`: The target currency code.

Ensure that you include the JWT token in the request header for authentication.
