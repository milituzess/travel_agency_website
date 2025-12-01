import { Banner, PhotoGallery, ContactCard} from '@my-app/ui-library'
import { useParams } from 'react-router-dom'

export function TourInfo() {
  const { id } = useParams<{ id: string }>()

  const demoPhotos = [
    {
      id: 1,
      imageUrl: 'https://sat-go.ru/wp-content/uploads/2024/02/dsc_4966-scaled-optimized.jpg',
      caption: 'Красивый горный пейзаж на закате',
      alt: 'Горный пейзаж'
    },
    {
      id: 2,
      imageUrl: 'https://rgo.ru/upload/s34web.imageadapter/5b597afb8e5533e13f084d79eac08afd/yakov_oskanov.jpg',
      caption: 'Очень очень очень очень очень очень очень очень очень очень длинная подпись которая демонстрирует обрезку текста',
      alt: 'Горный пейзаж'
    },
    {
      id: 3,
      imageUrl: 'https://sat-go.ru/wp-content/uploads/2024/02/dsc_0853-1-scaled-optimized.jpg',
      caption: 'Красивый горный пейзаж на закате',
      alt: 'Горный пейзаж'
    },
    {
      id: 4,
      imageUrl: 'https://a.d-cd.net/FCAAAgPnsuA-1920.jpg',
      caption: 'Красивый горный пейзаж на закате',
      alt: 'Горный пейзаж'
    }
  ]

  const demoBenefits = [
    { id: 1, text: 'Описание' },
    { id: 2, text: 'Описание' },
    { id: 3, text: 'Описание' },
    { id: 4, text: 'Описание' }
  ]

  return (
    <div className="app">
      <main className="app-main">
        <h3>Детали тура {id}</h3>

        {/* Баннер в начале страницы */}
        <Banner 
          title="Тур такой-то "
          benefits={demoBenefits}
          callSectionId="contact-section"
          requestSectionId="form-section"
        />

        {/* Секция PhotoGallery */}
        <section className="section">
          <h2>Что будет в туре?</h2>
          <PhotoGallery photos={demoPhotos} />
        </section>

        {/* Секция с подробным описанием */}
        <section className="section">
          <h2>Секция с подробным описанием</h2>
          <h4>Будет позже...</h4>
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
            <p>Здесь будет форма для оформления заявки на тур</p>
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