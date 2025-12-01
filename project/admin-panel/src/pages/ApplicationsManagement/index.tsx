import { useState } from 'react'
import './ApplicationsManagement.css'

interface Application {
  id: number
  name: string
  phone: string
  email: string
  tour: string
  date: string
  status: 'new' | 'processing' | 'confirmed' | 'rejected'
  notes?: string
}

export function ApplicationsManagement() {
  const [applications, setApplications] = useState<Application[]>([
    { id: 1, name: 'Иван Иванов', phone: '+7 (999) 111-22-33', email: 'ivan@example.com', tour: 'Тур ...', date: '2024-01-15', status: 'new' },
    { id: 2, name: 'Мария Петрова', phone: '+7 (999) 222-33-44', email: 'maria@example.com', tour: 'Тур ...', date: '2024-01-14', status: 'processing' },
    { id: 3, name: 'Алексей Сидоров', phone: '+7 (999) 333-44-55', email: 'alexey@example.com', tour: 'Тур ...', date: '2024-01-13', status: 'confirmed' },
    { id: 4, name: 'Елена Смирнова', phone: '+7 (999) 444-55-66', email: 'elena@example.com', tour: 'Тур ...', date: '2024-01-12', status: 'rejected' },
  ])

  const updateStatus = (id: number, newStatus: Application['status']) => {
    setApplications(applications.map(app => 
      app.id === id ? { ...app, status: newStatus } : app
    ))
  }

  const statusOptions = [
    { value: 'new', label: 'Новая', color: '#a1a1a1ff' },
    { value: 'processing', label: 'В обработке', color: '#a1a1a1ff' },
    { value: 'confirmed', label: 'Подтверждена', color: '#a1a1a1ff' },
    { value: 'rejected', label: 'Отклонена', color: '#a1a1a1ff' },
  ]

  return (
    <div className="applications-management">
      <div className="page-header">
        <h1>Управление заявками</h1>
        <div className="stats">
          <span className="stat">Всего: {applications.length}</span>
          <span className="stat">Новые: {applications.filter(a => a.status === 'new').length}</span>
        </div>
      </div>
      
      <div className="applications-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Имя</th>
              <th>Контакты</th>
              <th>Тур</th>
              <th>Дата</th>
              <th>Статус</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id}>
                <td>#{app.id}</td>
                <td>{app.name}</td>
                <td>
                  <div className="contact-info">
                    <div>{app.phone}</div>
                    <div>{app.email}</div>
                  </div>
                </td>
                <td>{app.tour}</td>
                <td>{app.date}</td>
                <td>
                  <select 
                    value={app.status}
                    onChange={(e) => updateStatus(app.id, e.target.value as Application['status'])}
                    className={`status-select status-${app.status}`}
                    style={{
                      backgroundColor: statusOptions.find(s => s.value === app.status)?.color
                    }}
                  >
                    {statusOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <div className="action-buttons">
                    <button className="action-button delete">Удалить</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}