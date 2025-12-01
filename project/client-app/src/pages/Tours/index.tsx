import { ProductCard, ContactCard } from '@my-app/ui-library'
import { useNavigate } from 'react-router-dom'
import './Tours.css'

export function Tours() {
  const navigate = useNavigate()
  
  const demoProducts = [
    {
      id: 1,
      imageUrl: 'https://sat-go.ru/wp-content/uploads/2024/02/dsc_4966-scaled-optimized.jpg',
      title: 'Тур по горам',
      description: 'Посещение главных мест горного Дагестана',
      price: 'от 50 000 ₽',
      textPosition: 'left' as const
    },
    {
      id: 2,
      imageUrl: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_681365cd9b73e31f701e6dfd_68136884efd36779d23636e3/scale_1200',
      title: 'Тур по горам',
      description: 'Посещение главных мест горного Дагестана',
      price: 'от 60 000 ₽',
      textPosition: 'left' as const
    },
    {
      id: 3,
      imageUrl: 'https://avatars.mds.yandex.net/get-yapic/50595/Zk4PkLyRdGNHenmOwcVXCmPrx0-1/orig',
      title: 'Тур по горам',
      description: 'Посещение главных мест горного Дагестана',
      price: 'от 45 000 ₽'
    },
    {
      id: 4,
      imageUrl: 'https://avatars.mds.yandex.net/i?id=8da6ffaceac2fc9ec8af0e6cf03e3ba297643ba8-10961631-images-thumbs&n=13',
      title: 'Тур по горам',
      description: 'Посещение главных мест горного Дагестана',
      price: 'от 88 000 ₽',
      textPosition: 'left' as const
    },
  ]

  const handleNavigateToTour = (tourId: string | number) => {
    navigate(`/tours/${tourId}`)
  }

  return (
    <div className="app">
      <main className="app-main">
        <section className="section">
          <h1>Доступные туры</h1>
          <p>Выберите тур для получения подробной информации</p>
          
          <div className="products-grid">
            {demoProducts.map((product) => (
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
        <ContactCard 
          whatsappLink="https://wa.me/..."  
          telegramLink="https://t.me/..."
          vkLink="https://vk.com/..."          
        />
      </footer>
    </div>
  )
}
