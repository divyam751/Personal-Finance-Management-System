### User Flow

1. **User Registration and Authentication**

   - **Sign Up**
     - User navigates to the registration page.
     - User fills in registration details (name, email, password).
     - User submits the registration form.
     - Backend validates the input and creates a new user record in the `Users` table.
     - System sends a confirmation email to the user (optional).
   - **Log In**
     - User navigates to the login page.
     - User enters email and password.
     - Backend verifies credentials using JWT.
     - If successful, user is redirected to the dashboard.
     - JWT token is stored in local storage/session for authenticated requests.

2. **Dashboard**

   - **Overview**
     - User sees a summary of their financial status, including total income, total expenses, and budget status.
     - User can navigate to different sections (Income, Expenses, Budgets, Reports).

3. **Income and Expense Management**

   - **Add Income/Expense**
     - User navigates to the income/expense section.
     - User clicks on 'Add Income' or 'Add Expense'.
     - User fills in the details (amount, date, category, description).
     - User submits the form.
     - Backend creates a new record in the `Transactions` table.
   - **View/Edit/Delete Income/Expense**
     - User sees a list of all transactions.
     - User can filter by date, category, or amount.
     - User clicks on a transaction to view details.
     - User can edit the transaction details and save changes.
     - User can delete a transaction.

4. **Budget Management**

   - **Create Budget**
     - User navigates to the budget section.
     - User clicks on 'Create Budget'.
     - User fills in the budget details (category, amount, duration).
     - User submits the form.
     - Backend creates a new record in the `Budgets` table.
   - **Track Budget**
     - User sees a list of active budgets.
     - User can view details of each budget, including the amount spent and remaining.
     - User can edit or delete a budget.

5. **Financial Reporting**

   - **Generate Monthly Report**
     - User navigates to the reports section.
     - User selects a month and clicks 'Generate Report'.
     - Backend retrieves and processes transaction data to create the report.
     - User sees a detailed report including total income, total expenses, and a breakdown by category.
     - User can download the report as a PDF or CSV.

6. **Category Management**

   - **Add/Edit/Delete Category**
     - User navigates to the categories section.
     - User sees a list of all categories.
     - User can add a new category by entering its name and description.
     - User can edit or delete existing categories.

7. **Currency Conversion (Optional)**
   - **Convert Currency**
     - User navigates to the currency conversion section.
     - User selects the amount and currency to convert from and to.
     - System calls a third-party API to get the conversion rate.
     - User sees the converted amount.

### Database Schema

- **Users Table**

  - id (Primary Key)
  - name
  - email (Unique)
  - password (Hashed)
  - createdAt
  - updatedAt

- **Transactions Table**

  - id (Primary Key)
  - userId (Foreign Key to Users)
  - type (Income/Expense)
  - amount
  - date
  - categoryId (Foreign Key to Categories)
  - description
  - createdAt
  - updatedAt

- **Categories Table**

  - id (Primary Key)
  - name
  - description
  - createdAt
  - updatedAt

- **Budgets Table**
  - id (Primary Key)
  - userId (Foreign Key to Users)
  - categoryId (Foreign Key to Categories)
  - amount
  - startDate
  - endDate
  - createdAt
  - updatedAt

### Requirements Implementation

- **Node.js with Express**: Set up the server and routes for handling user requests.
- **Prisma**: Use Prisma for database ORM and management.
- **JWT**: Implement JWT for secure user authentication.
- **Third-party API for Currency Conversion**: Integrate an API like OpenExchangeRates or CurrencyLayer if currency conversion is needed.

This user flow ensures a seamless experience for users managing their personal finances, from registration to generating detailed financial reports.
