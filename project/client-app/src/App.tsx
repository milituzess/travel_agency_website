import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import { Home } from './pages/Home'
import { NotFound404 } from './pages/NotFound404'
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
    if (window.location.pathname !== '/') {
      scrollToSection(sectionId)
    } else {
      // Если на другой странице, переходим на главную и потом скроллим
      window.location.href = `/#${sectionId}`
      scrollToSection(sectionId)
    }
  }

  return (
    <BrowserRouter>
      <nav className="main-nav">
        <div className="nav-container">
          <div className="nav-links">
            <ul className="nav-menu">
              <li><Link to="/">Kessirass</Link></li>
              <li><Link to="/team">Команда</Link></li>
              <li><Link to="/tours">Туры</Link></li>
              
              {/* Ссылки на якоря главной страницы  */}
              <li>
                <Link to="#why-are-we" onClick={(e) => handleAnchorClick(e, 'why-are-we')}> Почему мы? </Link>
              </li>
              <li>
                <Link to="#reviews" onClick={(e) => handleAnchorClick(e, 'reviews')}> Отзывы </Link>
              </li>
              <li>
                <Link to="#form-section" onClick={(e) => handleAnchorClick(e, 'form-section')}> Оставить заявку </Link>
              </li>
              <li>
                <Link to="https://t.me/kessirass_travel_agency_bot" className="nav-phone"> Tg bot </Link>
              </li>
              <li>
                <Link to="tel:+79991234567" className="nav-phone"> +7 (999) 123-45-67 </Link>
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
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App