import { useState } from 'react'
import './TeamManagement.css'

interface TeamMember {
  id: number
  name: string
  position: string
  email: string
  phone: string
  isActive: boolean
}

export function TeamManagement() {
  const [members] = useState<TeamMember[]>([
    { id: 1, name: 'Иван Иванов', position: 'Менеджер по туризму', email: 'ivan@example.com', phone: '+7 (999) 111-22-33', isActive: true },
    { id: 2, name: 'Мария Петрова', position: 'Гид-экскурсовод', email: 'maria@example.com', phone: '+7 (999) 222-33-44', isActive: true },
    { id: 3, name: 'Алексей Сидоров', position: 'Администратор', email: 'alexey@example.com', phone: '+7 (999) 333-44-55', isActive: false },
    { id: 4, name: 'Елена Смирнова', position: 'Маркетолог', email: 'elena@example.com', phone: '+7 (999) 444-55-66', isActive: true },
  ])

  return (
    <div className="team-management">
      <div className="page-header">
        <h1>Управление командой</h1>
        <button className="add-button">+ Добавить сотрудника</button>
      </div>
      
      <div className="team-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Имя</th>
              <th>Должность</th>
              <th>Email</th>
              <th>Телефон</th>
              <th>Статус</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id}>
                <td>#{member.id}</td>
                <td>
                  <div className="member-info">
                    <div className="member-avatar">
                      {member.name.charAt(0)}
                    </div>
                    <div className="member-name">{member.name}</div>
                  </div>
                </td>
                <td>{member.position}</td>
                <td>{member.email}</td>
                <td>{member.phone}</td>
                <td>
                  <span className={`status-badge ${member.isActive ? 'active' : 'inactive'}`}>
                    {member.isActive ? 'Активен' : 'Не активен'}
                  </span>
                </td>
                <td>
                  <div className="action-buttons">
                    <button className="action-button edit">Изменить</button>
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