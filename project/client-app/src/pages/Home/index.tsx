import { Banner, ContactCard, Card } from '@my-app/ui-library'
import './Home.css'

export function Home() {
  const demoBenefits = [
    { id: 1, text: 'Описание' },
    { id: 2, text: 'Описание' },
    { id: 3, text: 'Описание' },
    { id: 4, text: 'Описание' }
  ]

  return (
    <div className="app">
      <main className="app-main">
        {/* Баннер в начале страницы */}
        <Banner 
          title="Туристическое агентство "
          subtitle="..."
          benefits={demoBenefits}
          callSectionId="contact-section"
          requestSectionId="form-section"
        />

        {/* Отзывы */}
        <section id="reviews" className="section">
          <h2>Отзывы</h2>
          <div className="products-grid">
            <Card
              orientation="vertical"
              imageUrl="https://sat-go.ru/wp-content/uploads/2024/02/dsc_4966-scaled-optimized.jpg"
            />
          </div>
        </section>

        {/* Почему мы?*/}
        <section id="why-are-we" className="section">
          <h2>Почему мы?</h2>
          <div className="products-grid">
            <Card
              orientation="horizontal"
              title="Заголовок"
              description1="Описание"
              imageUrl="https://sat-go.ru/wp-content/uploads/2024/02/dsc_4966-scaled-optimized.jpg"
            />
          </div>
        </section>

        {/* Секция для заявки */}
        <section id="form-section" className="section">
          <h2>Оставить заявку на тур</h2>
          <div style={{ 
            background: '#ffffff98', 
            padding: '2rem', 
            borderRadius: '12px',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <p>Здесь будет форма для оформления заявки на тур.</p>
          </div>
        </section>

      </main>

      <footer id="contact-section" className="app-footer">
        <ContactCard 
          whatsappLink="https://wa.me/..."  
          telegramLink="https://t.me/..."
          vkLink="https://vk.com/..."          
        />
      </footer>
    </div>
  )
}