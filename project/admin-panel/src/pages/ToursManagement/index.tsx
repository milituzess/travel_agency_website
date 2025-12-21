import { useState } from 'react'
import './ToursManagement.css'

interface Tour {
  id: number
  title: string
  description: string
  price: string
  isActive: boolean
  imageUrl: string
}

export function ToursManagement() {
  const [tours, setTours] = useState<Tour[]>([
    { id: 1, title: 'Тур', description: 'Описание', price: '50 000 ₽', isActive: true, imageUrl: '' },
    { id: 2, title: 'Тур', description: 'Описание', price: '60 000 ₽', isActive: true, imageUrl: '' },
    { id: 3, title: 'Тур', description: 'Описание', price: '45 000 ₽', isActive: false, imageUrl: '' },
    { id: 4, title: 'Тур', description: 'Описание', price: '88 000 ₽', isActive: true, imageUrl: '' },
  ])

  // Добавить тур
  const handleAdd = () => {
    const title = prompt('Название тура')
    if (!title) return

    const description = prompt('Описание тура') || ''
    const price = prompt('Цена') || '0 ₽'
    const imageUrl = prompt('URL изображения') || ''

    const newId =
      tours.length > 0
        ? Math.max(...tours.map(t => t.id)) + 1
        : 1

    const newTour: Tour = {
      id: newId,
      title,
      description,
      price,
      imageUrl,
      isActive: true
    }

    setTours(prev => [...prev, newTour])
  }

  // Редактировать тур
  const handleEdit = (tour: Tour) => {
    const title = prompt('Название тура', tour.title)
    if (!title) return

    const description = prompt('Описание', tour.description) || tour.description
    const price = prompt('Цена', tour.price) || tour.price
    const imageUrl = prompt('URL изображения', tour.imageUrl) || tour.imageUrl

    setTours(prev =>
      prev.map(t =>
        t.id === tour.id
          ? { ...t, title, description, price, imageUrl }
          : t
      )
    )
  }

  // Вкл / выкл тур
  const toggleTourStatus = (id: number) => {
    setTours(prev =>
      prev.map(tour =>
        tour.id === id
          ? { ...tour, isActive: !tour.isActive }
          : tour
      )
    )
  }

  // Удалить тур
  const deleteTour = (id: number) => {
    if (!window.confirm('Вы уверены, что хотите удалить этот тур?')) return
    setTours(prev => prev.filter(tour => tour.id !== id))
  }

  return (
    <div className="tours-management">
      <div className="page-header">
        <h1>Управление турами</h1>
      </div>
      <div className="page-header">
        <button className="add-button" onClick={handleAdd}>
          + Добавить новый тур
        </button>
      </div>

      <div className="tours-grid">
        {tours.map(tour => (
          <div
            key={tour.id}
            className={`tour-card ${!tour.isActive ? 'inactive' : ''}`}
          >
            <div className="tour-header">
              <h3 className="tour-title">{tour.title}</h3>

              <span
                className={`status-badge ${tour.isActive ? 'active' : 'inactive'}`}
              >
                {tour.isActive ? 'Активен' : 'Не активен'}
              </span>
            </div>

            <p className="tour-description">{tour.description}</p>
            <div className="tour-price">{tour.price}</div>

            <div className="tour-actions">
              <button
                className="action-button edit"
                onClick={() => handleEdit(tour)}
              >
                Редактировать
              </button>

              <button
                className={`action-button toggle ${
                  tour.isActive ? 'deactivate' : 'activate'
                }`}
                onClick={() => toggleTourStatus(tour.id)}
              >
                {tour.isActive ? 'Выключить' : 'Включить'}
              </button>

              <button
                className="action-button delete"
                onClick={() => deleteTour(tour.id)}
              >
                Удалить
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
