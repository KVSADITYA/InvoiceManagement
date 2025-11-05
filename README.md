# Smart Invoice Dashboard (MERN)

A complete MERN app with:
- React (Vite) frontend
- Node/Express backend
- MongoDB (via Mongoose)
- Chart.js, jsPDF, AutoTable, XLSX
- Dark mode + summary cards

## Setup

### 1) Backend
```bash
cd backend
cp .env.example .env   # edit if needed
npm install
npm run dev
```
Mongo defaults to `mongodb://127.0.0.1:27017/invoicedb`

### 2) Frontend
```bash
cd frontend
npm install
npm run dev
```
Open the printed URL (usually http://localhost:5173).

Make sure the backend is running at http://localhost:5000
(You can change baseURL in `frontend/src/api.js`.)

## Notes
- Invoices API: `GET/POST/PUT/DELETE http://localhost:5000/api/invoices`
- For production, deploy backend (Render/Heroku) and frontend (Vercel/Netlify) and point `api.js` to your live API.
