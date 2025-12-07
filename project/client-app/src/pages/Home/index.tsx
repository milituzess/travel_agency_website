import { Banner, ContactCard, Card, Form } from '@my-app/ui-library'

export function Home() {
  const demoBenefits = [
    { id: 1, text: 'Занимаемся турами около 11 лет' },
    { id: 2, text: 'Провели более 400 туров' },
    { id: 3, text: 'Организатор и все наши гиды родом из Дагестана, и очень хорошо знают историю нашего края - обычаи, традиции, обряды' }
  ]

  return (
    <div className="app">
      <main className="app-main">
        {/* Баннер в начале страницы */}
        <Banner 
          title="ТУРЫ В ДАГЕСТАН С МЕСТНЫМИ ГИДАМИ"
          benefits={demoBenefits}
          callSectionId="contact-section"
          requestSectionId="form-section"
          backgroundImage="https://sat-go.ru/wp-content/uploads/2024/02/dsc_4966-scaled-optimized.jpg"
        />

        {/* Почему мы?*/}
        <section id="why-are-we" className="section">
          <h2>Почему мы?</h2>
          <div className="products-grid">
            <Card
              orientation="horizontal"
              title="Заголовок"
              description1="Описание"
              imageUrl="https://avatars.mds.yandex.net/i?id=bf713343a2db6b5689cbdcc6bd2eeb0e1d93bcb7-16458558-images-thumbs&n=13"
            />
          </div>
        </section>

        {/* Отзывы */}
        <section id="reviews" className="section">
          <h2>Отзывы</h2>
          <div className="products-grid">
            <Card
              orientation="vertical"
              imageUrl="https://i.ytimg.com/vi/CU0ZfmYWzbw/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&amp;rs=AOn4CLCNXwgS1S2XzV9-Rl7ny05-Y3wssg"
            />
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