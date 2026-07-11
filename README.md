# MERN_1

A MERN-based image posting app where users can create posts with an image + caption and view them in a feed.

## Features

- Create a post with:
  - Image upload
  - Caption text
- Store post data in MongoDB
- Upload image files to ImageKit and save returned URL
- View all posts in feed
- React Router based frontend navigation (`/create-post`, `/feed`)

## Tech Stack

### Frontend
- React
- Vite
- React Router DOM
- Axios
- React Icons

### Backend
- Node.js
- Express
- MongoDB + Mongoose
- Multer (in-memory file upload)
- ImageKit SDK
- CORS
- dotenv

## Project Structure

```bash
MERN_1/
├── backend/
│   ├── server.js
│   ├── package.json
│   └── src/
│       ├── app.js
│       ├── config/
│       │   └── db.js
│       ├── models/
│       │   └── post.model.js
│       └── services/
│           ├── storage.service.js
│           └── cloudinary.service.js
├── frontend/
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       ├── index.css
│       └── pages/
│           ├── CreatePost.jsx
│           ├── CreateForm.jsx
│           └── Feed.jsx
└── .gitignore
```

## API Endpoints

Base URL (local): `http://localhost:3000`

- `POST /create-post`
  - Content-Type: `multipart/form-data`
  - Fields:
    - `image` (file)
    - `caption` (string)
  - Creates a new post after uploading image to ImageKit

- `GET /posts`
  - Fetches all posts

## Environment Variables

Create `backend/.env`:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
```

> Note: `storage.service.js` currently initializes ImageKit with only `privateKey`. Depending on your ImageKit setup, you may also need `publicKey` and `urlEndpoint`.

## Local Setup

### 1) Clone repo

```bash
git clone https://github.com/ShreyanshGolchha01/MERN_1.git
cd MERN_1
```

### 2) Install dependencies

```bash
cd backend && npm install
cd ../frontend && npm install
```

### 3) Run backend

```bash
cd backend
npm run dev
```

Backend runs on `http://localhost:3000` (from `PORT` or default in `server.js`).

### 4) Run frontend

In a new terminal:

```bash
cd frontend
npm run dev
```

Vite will print a local URL (commonly `http://localhost:5173`).

## Available Scripts

### Backend (`backend/package.json`)
- `npm start` → run server with Node
- `npm run dev` → run server with Nodemon

### Frontend (`frontend/package.json`)
- `npm run dev` → start Vite dev server
- `npm run build` → production build
- `npm run preview` → preview build
- `npm run lint` → run ESLint

## Notes

- Frontend API calls are currently hardcoded to `http://localhost:3000` in:
  - `frontend/src/pages/CreatePost.jsx`
  - `frontend/src/pages/Feed.jsx`
- There is no route for `/` in `frontend/src/App.jsx`; use `/create-post` or `/feed` directly.

## License

No license file is currently configured in this repository.