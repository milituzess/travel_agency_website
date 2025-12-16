import { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import './Login.css'

export function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('isAuthenticated', 'true')
      navigate('/applications')
    } else {
      setError('Неверное имя пользователя или пароль')
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Вход</h1>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Имя пользователя
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-input"
              placeholder="Введите имя пользователя"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Пароль
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              placeholder="Введите пароль"
              required
            />
          </div>
          
          {error && <div className="error-message">{error}</div>}
          
          <button type="submit" className="login-button">
            Войти
          </button>
        </form>
        
        <div className="login-hint">
          <p>Демо доступ:</p>
          <p>Логин: <strong>admin</strong></p>
          <p>Пароль: <strong>admin123</strong></p>
        </div>
      </div>
    </div>
  )
}