import { BrowserRouter, Routes, Route, Navigate, Link, useNavigate } from 'react-router-dom'

import { ApplicationsManagement } from './pages/ApplicationsManagement'
import { Login } from './pages/Login'
import { TeamManagement } from './pages/TeamManagement'
import { ToursManagement } from './pages/ToursManagement'

import './App.css'

// Компонент защищенного маршрута
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }
  
  return <>{children}</>
}

// Компонент Layout для авторизованных страниц
function AdminLayout() {
  const navigate = useNavigate()
  
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated')
    navigate('/login')
  }

  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Турагенство</h2>
          <p>Админ панель</p>
        </div>
        
        <nav className="sidebar-nav">
          <Link to="/tours" className="nav-link">
            <span>Управление турами</span>
          </Link>
          
          <Link to="/applications" className="nav-link">
            <span>Заявки</span>
          </Link>
          
          <Link to="/team" className="nav-link">
            <span>Команда</span>
          </Link>
          
          <button onClick={handleLogout} className="logout-button">
            <span>Выйти</span>
          </button>
        </nav>
      </aside>
      
      <main className="admin-content">
        <Routes>
          <Route path="/tours" element={<ToursManagement />} />
          <Route path="/applications" element={<ApplicationsManagement />} />
          <Route path="/team" element={<TeamManagement />} />
          <Route path="*" element={<Navigate to="/applications" replace />} />
        </Routes>
      </main>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App