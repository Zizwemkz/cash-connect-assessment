# Cash Connect Assessment

This project consists of a **.NET backend API** and a **React frontend UI**.  
It provides two main features:

1. **Palindrome Checker** – Verify if a given string is a palindrome.
2. **Customer Settlement** – Allow settling customer funds with transaction fee calculation.

---

## 🖥️ Backend (.NET)

### Prerequisites
- [.NET 6 SDK](https://dotnet.microsoft.com/download)
- SQL Server / LocalDb (if database is needed)

### Steps
1. Navigate to backend folder:
   ```powershell
   cd backend
Restore dependencies:

powershell
Copy
Edit
dotnet restore
Run the backend:

powershell
Copy
Edit
dotnet run
By default, it runs on http://localhost:5000.

Endpoints:

POST /api/palindrome → Check palindrome

POST /api/settle → Settle funds

GET /api/customers → List customers

🎨 Frontend (React)
Prerequisites
Node.js LTS (v16 or v18 recommended)

npm (comes with Node)

Steps
Navigate to frontend folder:

powershell
Copy
Edit
cd cash-connect-assessment
Install dependencies:

powershell
Copy
Edit
npm install
⚠️ If you see 'react-scripts' is not recognized, install it manually:

powershell
Copy
Edit
npm install react-scripts --save
Run the frontend:

powershell
Copy
Edit
npm start
Open in browser:
👉 http://localhost:3000

🐳 Running with Docker Compose
You can run both backend & frontend with Docker Compose.

Build & start containers:

powershell
Copy
Edit
docker-compose up --build
Stop containers:

powershell
Copy
Edit
docker-compose down
⚡ Common Issues
'react-scripts' is not recognized
Run:

powershell
Copy
Edit
npm install react-scripts --save
CORS Errors
Ensure backend has CORS enabled in Program.cs:

csharp
Copy
Edit
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        policy => policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
});

app.UseCors("AllowAll");
📐 Architecture (High-Level)
Smart Safe → Sends cash values.

CRM System → Provides customer data.

Backend (.NET) → Processes palindromes & settlements.

Calculates fees

Calls Bank API (test endpoint)

Stores transactions

React Frontend → User interface for:

Palindrome checker

Settlement with customer dropdown