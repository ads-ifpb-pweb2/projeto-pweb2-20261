import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DashboardPage from './pages/DashboardPage'
import TransactionsPage from './pages/TransactionsPage'
import NewTransactionPage from './pages/NewTransactionPage'

const router = createBrowserRouter([
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '/', element: <DashboardPage /> },
  { path: '/transactions', element: <TransactionsPage /> },
  { path: '/transactions/new', element: <NewTransactionPage /> },
])

export default function App() {
  return <RouterProvider router={router} />
}
