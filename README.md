# 📚 Book Shelf – Full Stack CRUD App (Django + React)

This is a full-stack web application that allows users to **Create**, **Read**, **Update**, and **Delete (CRUD)** book records. The backend is powered by **Django + Django REST Framework**, while the frontend is built using **ReactJS** with **Axios** and **React Router DOM**.

---

## 🚀 Features

- ✅ Add a new book
- 🔍 View all books
- ✏️ Edit/update a book's details
- ❌ Delete a book record
- 🔄 Fully asynchronous operations using Axios
- 🔗 Seamless navigation with React Router DOM

---

## 🧱 Technologies Used

### Backend (Django + DRF)
- Django
- Django REST Framework
- django-cors-headers

### Frontend (ReactJS)
- React
- Axios
- React Router DOM

---

## ⚙️ Setup Instructions

### 📦 Backend (Django)

1. Navigate to the backend folder:
    ```bash
    cd backend
    ```

2. Create and activate a virtual environment:
    ```bash
    python -m venv .ven
    .ven\Scripts\activate # on Windows
    .ven/bin/activate # on MacOS
    ```

3. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```

4. Run migrations:
    ```bash
    python manage.py migrate
    ```

5. Start the backend server:
    ```bash
    python manage.py runserver
    ```

> Your API will be available at: `http://127.0.0.1:8000/api/books/`

---

### 💻 Frontend (React)

1. Open a new terminal and navigate to the frontend:
    ```bash
    cd frontend
    ```

2. Install npm dependencies:
    ```bash
    npm install
    ```

3. Start the React development server:
    ```bash
    npm run dev
    ```

> The frontend will run at: `http://localhost:5137`

---

## 🔄 API Endpoints

| Method | Endpoint             | Description         |
|--------|----------------------|---------------------|
| GET    | `/api/books/`        | List all books      |
| POST   | `/api/books/`        | Add a new book      |
| GET    | `/api/books/:id/`    | Retrieve a book     |
| PUT    | `/api/books/:id/`    | Update book details |
| DELETE | `/api/books/:id/`    | Delete a book       |

---

<!-- ## ✨ Screenshots (Optional)

> Add screenshots here showing the Book List, Add/Edit Book Form, and Delete confirmation. -->

<!-- --- -->

## 📌 Notes

- React communicates with Django REST API using `axios`.
- CORS is enabled via `django-cors-headers`.
- All data is stored and managed via Django models.

---


## 👨‍💻 Author

Developed by **Mohamed Aadil**  
