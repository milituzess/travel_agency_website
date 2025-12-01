import { ContactCard, Card } from '@my-app/ui-library'
import './Team.css'

export function Team() {
  return (
    <div className="app">
      <main className="app-main"> 
        <h2>Наша команда</h2>
        <Card
          orientation="horizontal"
          title="Имя"
          description1="Должность"
          description2="Описание про человека"
          imageUrl="https://sat-go.ru/wp-content/uploads/2024/02/dsc_4966-scaled-optimized.jpg"
        />
        <Card
          orientation="horizontal"
          title="Имя"
          description1="Должность"
          description2="Описание про человека"
          imageUrl="https://sat-go.ru/wp-content/uploads/2024/02/dsc_4966-scaled-optimized.jpg"
        />
        <Card
          orientation="horizontal"
          title="Имя"
          description1="Должность"
          description2="Описание про человека"
          imageUrl="https://sat-go.ru/wp-content/uploads/2024/02/dsc_4966-scaled-optimized.jpg"
        />
        <h2>И тд...</h2>
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