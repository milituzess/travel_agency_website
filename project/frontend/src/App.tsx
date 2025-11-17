import './App.css'
import '@my-app/ui-library/style.css'
import { Card, PhotoGallery, ProductCard } from '@my-app/ui-library'
import './App.css'

function App() {
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
    },
    {
      id: 5,
      imageUrl: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_68473520e5076503cbcc1c8f_68473677eb918822d2c283b8/scale_1200',
      caption: 'Красивый горный пейзаж на закате',
      alt: 'Горный пейзаж'
    },
    {
      id: 6,
      imageUrl: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_681365cd9b73e31f701e6dfd_68136884efd36779d23636e3/scale_1200',
      caption: 'Красивый горный пейзаж на закате',
      alt: 'Горный пейзаж'
    },
    {
      id: 7,
      imageUrl: 'https://avatars.mds.yandex.net/get-yapic/50595/Zk4PkLyRdGNHenmOwcVXCmPrx0-1/orig',
      caption: 'Красивый горный пейзаж на закате',
      alt: 'Горный пейзаж'
    },
    {
      id: 8,
      imageUrl: 'https://avatars.mds.yandex.net/i?id=8da6ffaceac2fc9ec8af0e6cf03e3ba297643ba8-10961631-images-thumbs&n=13',
      caption: 'Красивый горный пейзаж на закате',
      alt: 'Горный пейзаж'
    },
    {
      id: 9,
      imageUrl: 'https://picsum.photos/300/200?random=1',
      caption: 'Красивый горный пейзаж на закате',
      alt: 'Горный пейзаж'
    },
    {
      id: 10,
      imageUrl: 'https://picsum.photos/300/200?random=1',
      caption: 'Красивый горный пейзаж на закате',
      alt: 'Горный пейзаж'
    },
    {
      id: 11,
      imageUrl: 'https://picsum.photos/300/200?random=1',
      caption: 'Красивый горный пейзаж на закате',
      alt: 'Горный пейзаж'
    },
    {
      id: 12,
      imageUrl: 'https://picsum.photos/300/200?random=1',
      caption: 'Красивый горный пейзаж на закате',
      alt: 'Горный пейзаж'
    },
    {
      id: 13,
      imageUrl: 'https://picsum.photos/300/200?random=1',
      caption: 'Красивый горный пейзаж на закате',
      alt: 'Горный пейзаж'
    },
    {
      id: 14,
      imageUrl: 'https://picsum.photos/300/200?random=1',
      caption: 'Красивый горный пейзаж на закате',
      alt: 'Горный пейзаж'
    },
    {
      id: 15,
      imageUrl: 'https://picsum.photos/300/200?random=1',
      caption: 'Красивый горный пейзаж на закате',
      alt: 'Горный пейзаж'
    },
    {
      id: 16,
      imageUrl: 'https://picsum.photos/300/200?random=1',
      caption: 'Красивый горный пейзаж на закате',
      alt: 'Горный пейзаж'
    }
  ]

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

  return (
    <div className="app">
      <header className="app-header">
        <h1>5 лаба</h1>
        <p>Разработка компонента для галереи фотографий с подписями и для карточки тура</p>
      </header>

      <main className="app-main">
        {/* Секция PhotoGallety */}
        <section className="section">
          <h2>PhotoGallery Компонент</h2>

          <h3>Базовая галерея фотографий тура</h3>
          <PhotoGallery photos={demoPhotos} />

          <h3>Галерея с кастомными настройками</h3>
          <PhotoGallery 
            photos={demoPhotos.slice(0, 3)} // только первые 3 фото
            columns={3} // для фиксированного количества колонок
            gap={10}   // для большего расстояния
          />
        </section>

        {/* Секция ProductCard */}
        <section className="section">
          <h2>ProductCard Компонент</h2>

          <h3>Оторбажение одной ProductCard</h3>
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <ProductCard {...demoProducts[0]} />
          </div>

          <h3>Отображение нескольких ProductCard</h3>
          <div className="products-grid">
            {demoProducts.map((product, index) => (
              <ProductCard key={product.id || index} {...product} />
            ))}
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <Card>
          <div className="footer-content">
            <p>UI Library v1.0.0 - Демонстрационное приложение</p>
            <p>React + TypeScript + Vite + Jest</p>
          </div>
        </Card>
      </footer>
    </div>
  )
}

export default App