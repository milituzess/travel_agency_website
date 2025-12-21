import { useEffect, useState } from 'react'

import { Banner, ContactCard, Card, Form } from '@my-app/ui-library'
import { useLocation } from 'react-router-dom'

const reviews = [
  {
    imageUrl: "https://i.pinimg.com/736x/da/03/5c/da035cb2cb2ec2f97248cc8a85187542.jpg",
  },
  {
    imageUrl: "https://i.pinimg.com/736x/f2/d1/54/f2d1540cebdc818339385d6ab568ab10.jpg",
  },
  {
    imageUrl: "https://i.pinimg.com/736x/d9/34/71/d9347133962a3772c95ac2b581cc68af.jpg",
  },
  {
    imageUrl: "https://i.pinimg.com/736x/9c/13/c5/9c13c5d7cfe76f915045e1202b7f78fa.jpg",
  },
  {
    imageUrl: "https://i.pinimg.com/736x/48/da/0e/48da0eeb08b5dcb45eba975159696a86.jpg",
  },
]

const whyCards = [
  {
    title: "Все включено",
    description1: "В стоимость наших туров всё включено: проживание, питание, трансфер, входные билеты, работа гида, все развлечения и активности. Вам не нужно ничего доплачивать!",
    imageUrl: "https://i.pinimg.com/736x/3c/d0/86/3cd086f719bf234b7ddb8fc2a08944d8.jpg",
  },
  {
    title: "Каждый день тура насыщен",
    description1: "Каждый из 6 дней нашего тура насыщен разнообразными локациями и развлечениями! Первый и последний день нашего тура мы не сидим в отеле. Мы активно его проводим с утра и до самого вечера. У многих других турфирм первый день тура предназначен для заселения в отель и пассивного отдыха. А последний день для самостоятельного отдыха и покупки сувениров. Получается, покупая 6-ти дневный тур в другой турфирме вы платите только за 4 дня активного отдыха. В наших турах такого нет!",
    imageUrl: "https://i.pinimg.com/1200x/4a/53/86/4a5386238c99bdf8bd01b89897340353.jpg",
  },
  {
    title: "Гиды местные жители",
    description1: "Организатор и все гиды - местные жители Дагестана! Они хорошо знают историю своего родного края - обычаи, традиции, обряды и т.д. Познакомят вас с нашей самой вкусной и разнообразной кухней. В Дагестан нужно ехать с человеком, который сам родом из этих мест, тогда ваша поездка будет особенной!",
    imageUrl: "https://i.pinimg.com/1200x/d9/c1/a2/d9c1a2cb24a4f56c55b17fe28576e296.jpg",
  },
  {
    title: "Настоящие отзывы от туристов",
    description1: "Мы ведем сообщество ВК, в котором туристы оставляют свои отзывы. Вы можете их прочитать и убедиться, что это писали живые люди!",
    imageUrl: "https://i.pinimg.com/1200x/bd/4c/93/bd4c93040225f2634af2ced144e0c3b1.jpg",
  },
  {
    title: "Питание включено в стоимость",
    description1: "Питание у нас полностью включено и оно будет очень вкусным, сытным и разнообразным. В городе будем есть в ресторанах с национальным колоритом, а в горах - по домашнему, у местных жителей. Еды везде будет много, в горах будем кушать с невероятными видами на горы и речку. Вы попробует множество блюд нашей национальной кухни!",
    imageUrl: "https://i.pinimg.com/736x/b8/a6/10/b8a610338203fdba6c17bb0e6066fbb1.jpg",
  },
  {
    title: "Комфортный транспорт",
    description1: "Передвигаемся на комфортных микроавтобусах. Они оборудованы двумя кондиционером, на каждого человека настраивается индивидуальный обдув. С приятной акустикой. Кресла кожаные, откидные. Также имеется красивая подсветка, как на дискотеке :)",
    imageUrl: "https://i.pinimg.com/736x/c0/8e/0d/c08e0d16373f070728efc29c05ca63ee.jpg",
  },
]

export function Home() {
  const demoBenefits = [
    { id: 1, text: 'Занимаемся турами около 11 лет' },
    { id: 2, text: 'Провели более 400 туров' },
    { id: 3, text: 'Организатор и все наши гиды родом из Дагестана, и очень хорошо знают историю нашего края - обычаи, традиции, обряды' }
  ]

  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const element = document.getElementById(id)

      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location])

  /* отзывы */
  const [currentReview, setCurrentReview] = useState(0)

  /* преимущества */
  const [currentWhy, setCurrentWhy] = useState(0)

  /* отзывы */
  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    )
  }

  /* почему мы */
  const nextWhy = () => {
    setCurrentWhy((prev) => (prev + 1) % whyCards.length)
  }

  const prevWhy = () => {
    setCurrentWhy((prev) =>
      prev === 0 ? whyCards.length - 1 : prev - 1
    )
  }

  return (
    <div className="app">
      <main className="app-main">
        {/* Баннер в начале страницы */}
        <Banner 
          title="ТУРЫ В ДАГЕСТАН С МЕСТНЫМИ ГИДАМИ"
          benefits={demoBenefits}
          callSectionId="contact-section"
          requestSectionId="form-section"
          /* backgroundImage="https://i.pinimg.com/1200x/1e/dc/9e/1edc9e2f461840613b12b9367831c9c9.jpg" */
        />

        {/* Почему мы?*/}
        <section id="why-are-we" className="section">
          <h2>Почему мы?</h2>
          <h3>Мы знаем, как вам трудно выбрать "ту самую" турфирму. Поэтому посмотрите наши преимущества и чем мы отличаемся от других.</h3>
          <div className="slide">
            <Card
              orientation="horizontal"
              title={whyCards[currentWhy].title}
              description1={whyCards[currentWhy].description1}
              imageUrl={whyCards[currentWhy].imageUrl}
            />
          </div>

          <div className="slider-controls">
            <button onClick={prevWhy}>&lt;</button>
            <button onClick={nextWhy}>&gt;</button>
          </div>
        </section>

        {/* Отзывы */}
        <section id="reviews" className="section">
          <h2>Отзывы</h2>
          <h3>Посмотрите, что реальные туристы говорят о нас</h3>
          <div className="slide">
            <Card
              orientation="vertical"
              imageUrl={reviews[currentReview].imageUrl}
            />
          </div>

          <div className="slider-controls">
            <button onClick={prevReview}>&lt;</button>
            <button onClick={nextReview}>&gt;</button>
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