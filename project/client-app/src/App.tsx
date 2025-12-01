import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import { Home } from './pages/Home'
import { Team } from './pages/Team'
import { TourInfo } from './pages/TourInfo'
import { Tours } from './pages/Tours'

import './App.css'
import '@my-app/ui-library/style.css'

function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    
    // Если мы на главной странице, просто скроллим
    if (window.location.pathname === '/') {
      scrollToSection(sectionId)
    } else {
      // Если на другой странице, переходим на главную и потом скроллим
      window.location.href = `/#${sectionId}`
    }
  }

  return (
    <BrowserRouter>
      <nav className="main-nav">
        <div className="nav-container">
          <div className="nav-links">
            <ul className="nav-menu">
              <li><Link to="/">Название турагенства</Link></li>
              <li><Link to="/team">Команда</Link></li>
              <li><Link to="/tours">Туры</Link></li>
              
              {/* Ссылки на якоря главной страницы  */}
              <li>
                <a href="#why-are-we" onClick={(e) => handleAnchorClick(e, 'why-are-we')}> Почему мы </a>
              </li>
              <li>
                <a href="#reviews" onClick={(e) => handleAnchorClick(e, 'reviews')}> Отзывы </a>
              </li>
              <li>
                <a href="#form-section" onClick={(e) => handleAnchorClick(e, 'form-section')}> Оставить заявку </a>
              </li>
              <li>
                <a href="tel:+79991234567" className="nav-phone"> +7 (999) 123-45-67 </a>
              </li>
            </ul>
          </div>
          
        </div>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tours/:id" element={<TourInfo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App