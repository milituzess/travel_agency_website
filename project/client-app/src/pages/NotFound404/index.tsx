import { Link } from 'react-router-dom'
import './NotFound404.css'

export function NotFound404() {
  return (
    <div className="app">
      <main className="app-main-404">
        <h1>404</h1>
        <p>Страница не найдена</p>
        <div className="simple-not-found">
          <div className="image-container">
            <img 
              src="https://otvet.cdn-vk.net/api/pictures/images/f93935324b7fbe0f2acb86c2fdd9abb9812a2fff3a84a52d6827147af0c5af3e52892eaadb07a19ba418092d51a36fcc.jpg?size=origin" 
              alt="404"
              className="error-image"
            />
            <div className="centered-content">
              <Link to="/" className="back-link">
                ← На главную
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}