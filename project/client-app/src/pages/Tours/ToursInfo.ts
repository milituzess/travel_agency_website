export interface Tour {
  id: number
  imageUrl: string
  title: string
  description: string
  price: string
  benefits?: Array<{
    id: number
    text: string
  }>
  galleryPhotos?: Array<{
    id: number
    imageUrl: string
    caption: string
    alt: string
  }>
  detailedDescription?: string
  itinerary?: Array<{
    day: number
    title: string
    description: string
  }>
  included?: string[]
}

export const tours: Tour[] = [
  {
    id: 1,
    imageUrl: 'https://sat-go.ru/wp-content/uploads/2024/02/dsc_4966-scaled-optimized.jpg',
    title: 'Тур 1',
    description: 'Экскурсия по самым живописным местам горного Дагестана. Посещение древних аулов, водопадов и горных перевалов',
    price: 'от 50 000 ₽',
    benefits: [
      { id: 1, text: 'Уникальные маршруты вдали от туристических троп' },
      { id: 2, text: 'Профессиональные гиды - местные жители' },
      { id: 3, text: 'Комфортное размещение в национальных гостевых домах' },
      { id: 4, text: 'Полное погружение в культуру и традиции' }
    ],
    galleryPhotos: [
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
    ],
    detailedDescription: `
      Этот тур предлагает уникальную возможность погрузиться в культуру и природу Дагестана. Вы посетите самые живописные места региона, познакомитесь с местными традициями и попробуете настоящую дагестанскую кухню. Наш маршрут пролегает через древние аулы, горные перевалы и кристально чистые реки.
      
      Дагестан - это не просто географическое название, это целый мир с богатой историей, уникальной архитектурой и гостеприимными людьми. Мы покажем вам те места, которые редко посещают обычные туристы.
    `,
    itinerary: [
      {
        day: 1,
        title: 'Прибытие в Махачкалу',
        description: 'Встреча в аэропорту, трансфер в отель, ужин и знакомство с группой.'
      },
      {
        day: 2,
        title: 'Экскурсия в Дербент',
        description: 'Посещение древней крепости Нарын-Кала, старинной Джума-мечети.'
      },
      {
        day: 3,
        title: 'Гуниб и Сулакский каньон',
        description: 'Переезд в Гуниб, экскурсия по аулу, посещение самого глубокого каньона в Европе.'
      },
      {
        day: 4,
        title: 'Аул Гамсутль',
        description: 'Пеший поход к "городу-призраку", фотосессия на фоне уникальных пейзажей.'
      },
      {
        day: 5,
        title: 'Чиркейская ГЭС и бархан Сарыкум',
        description: 'Экскурсия на крупнейшую ГЭС на Северном Кавказе и посещение единственного в регионе песчаного бархана.'
      },
      {
        day: 6,
        title: 'Свободный день',
        description: 'Отдых, шоппинг сувениров или дополнительные экскурсии по желанию.'
      },
      {
        day: 7,
        title: 'Отъезд',
        description: 'Завтрак, трансфер в аэропорт.'
      }
    ],
    included: [
      'Проживание в отелях 3*',
      'Питание: завтраки и ужины',
      'Все трансферы по программе',
      'Услуги гида-экскурсовода',
      'Входные билеты на объекты',
      'Медицинская страховка'
    ]
  },
  {
    id: 2,
    imageUrl: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_681365cd9b73e31f701e6dfd_68136884efd36779d23636e3/scale_1200',
    title: 'Тур 2',
    description: 'Экскурсия по самым живописным местам горного Дагестана. Посещение древних аулов, водопадов и горных перевалов',
    price: 'от 60 000 ₽'
  },
  {
    id: 3,
    imageUrl: 'https://avatars.mds.yandex.net/get-yapic/50595/Zk4PkLyRdGNHenmOwcVXCmPrx0-1/orig',
    title: 'Тур 3',
    description: 'Экскурсия по самым живописным местам горного Дагестана. Посещение древних аулов, водопадов и горных перевалов',
    price: 'от 45 000 ₽'
  },
  {
    id: 4,
    imageUrl: 'https://avatars.mds.yandex.net/i?id=8da6ffaceac2fc9ec8af0e6cf03e3ba297643ba8-10961631-images-thumbs&n=13',
    title: 'Тур 4',
    description: 'Экскурсия по самым живописным местам горного Дагестана. Посещение древних аулов, водопадов и горных перевалов',
    price: 'от 88 000 ₽'
  },
  {
    id: 5,
    imageUrl: 'https://avatars.mds.yandex.net/get-yapic/50595/Zk4PkLyRdGNHenmOwcVXCmPrx0-1/orig',
    title: 'Тур 5',
    description: 'Экскурсия по самым живописным местам горного Дагестана. Посещение древних аулов, водопадов и горных перевалов',
    price: 'от 35 000 ₽'
  },
  {
    id: 6,
    imageUrl: 'https://avatars.mds.yandex.net/get-yapic/50595/Zk4PkLyRdGNHenmOwcVXCmPrx0-1/orig',
    title: 'Тур 6',
    description: 'Экскурсия по самым живописным местам горного Дагестана. Посещение древних аулов, водопадов и горных перевалов',
    price: 'от 120 000 ₽'
  }
]

export const getTourById = (id: number | string): Tour | undefined => {
  const tourId = typeof id === 'string' ? parseInt(id, 10) : id
  
  return tours.find(tour => tour.id === tourId)
}
