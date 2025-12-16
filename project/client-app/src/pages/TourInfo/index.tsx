import { Banner, PhotoGallery, ContactCard, Form } from '@my-app/ui-library'
import { useParams } from 'react-router-dom'

import { getTourById } from '../Tours/ToursInfo'

export function TourInfo() {
  const { id } = useParams<{ id: string }>()

  // Получаем тур по ID
  const tourId = id ? parseInt(id, 10) : 1
  const tour = getTourById(tourId)

  if (!tour) {
    return (
      <div className="app">
        <main className="app-main">
          <section className="section">
            <h2>Тур не найден</h2>
            <p>Извините, запрашиваемый тур не существует или был удален</p>
          </section>
          {/* Секция для заявки */}
          <section id="form-section" className="section">
            <h2>Остались вопросы или хотите забронировать место?</h2>
            <Form 
              onSubmit={(data) => {
                console.log('Заявка на тур отправлена:', data)
                alert(`Спасибо, ${data.name}! Мы свяжемся с вами по телефону ${data.phone}`)
              }}
            />
          </section> 
        </main>

        <footer id="contact-section" className="app-footer">
          <ContactCard/>
        </footer>
      </div>
    )
  }

  return (
    <div className="app">
      <main className="app-main">
        {/* Баннер в начале страницы */}
        <Banner 
          title={tour.title}
          benefits={tour.benefits}
          callSectionId="contact-section"
          requestSectionId="form-section"
          backgroundImage={tour.galleryPhotos && tour.galleryPhotos.length > 3 ? tour.galleryPhotos[3].imageUrl : ''}
        />

        {/* Секция PhotoGallery */}
        <section className="section">
          <h2>Что будет в туре?</h2>
          <PhotoGallery photos={tour.galleryPhotos || []} />
        </section>

        {/* Объединенная секция с описанием и программой */}
        <section className="section">
          <h2>Подробности тура</h2>
          <div className="tour-details-grid">
            
            {/* Левая колонка: Описание и что включено */}
            <div className="details-column">
              <div className="description-block">
                <div className="description-content">
                  <p>{tour.detailedDescription || []}</p>
                </div>
              </div>
              
              <div className="included-block">
                <h3>Что включено в стоимость</h3>
                {tour.included && tour.included.length > 0 ? (
                  <ul className="included-list">
                    {tour.included.map((item, index) => (
                      <li key={index} className="included-item">
                        <span className="check-icon">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="no-data">Информация о включенных услугах появится скоро</p>
                )}
              </div>
            </div>
            
            {/* Правая колонка: Программа по дням */}
            <div className="program-column">
              {tour.itinerary && tour.itinerary.length > 0 ? (
                <div className="itinerary-timeline">
                  {tour.itinerary.map((day) => (
                    <div key={day.day} className="timeline-item">
                      <div className="timeline-day">
                        <div className="day-circle">День {day.day}</div>
                      </div>
                      <div className="timeline-content">
                        <h4 className="day-title">{day.title}</h4>
                        <p className="day-description">{day.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-itinerary">
                  <p>Детальная программа тура появится скоро</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Секция для заявки */}
        <section id="form-section" className="section">
          <h2>Остались вопросы или хотите забронировать место?</h2>
          <Form 
            onSubmit={(data) => {
              alert(`Спасибо, ${data.name}! Мы свяжемся с вами по телефону ${data.phone}`)
            }}
          />
        </section>
        
      </main>

      <footer id="contact-section" className="app-footer">
        <ContactCard/>
      </footer>
    </div>
  )
}