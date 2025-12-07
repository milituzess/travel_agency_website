import { ProductCard, ContactCard } from '@my-app/ui-library'
import { useNavigate } from 'react-router-dom'

import { tours } from './ToursInfo'

export function Tours() {
  const navigate = useNavigate()

  const handleNavigateToTour = (tourId: string | number) => {
    navigate(`/tours/${tourId}`)
  }

  return (
    <div className="app">
      <main className="app-main">
        <section className="section">
          <h2>Доступные туры</h2>
          <p>Приключения начинаются здесь</p>
          
          <div className="products-grid">
            {tours.map((product) => (
              <ProductCard 
                key={product.id}
                {...product}
                onNavigateToTour={handleNavigateToTour} 
                navigateToTour={true}
                buttonText="Подробнее о туре"
              />
            ))}
          </div>
        </section>
      </main>

      <footer id="contact-section" className="app-footer">
        <ContactCard/>
      </footer>
    </div>
  )
}
