import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import ErrorPage from './Components/Error Page/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
import BookDetails from './Components/Book Details/BookDetails.jsx';
import ListedBooks from './Components/Listed Books/ListedBooks.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'books/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('./booksData.json')
      },
      {
        path: '/listedbooks',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('./booksData.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
