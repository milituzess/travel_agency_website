import { useEffect, useState } from 'react'

import './TeamManagement.css'

import { initialTeamMembers } from './Team'

import type { TeamMember } from './Team'

export function TeamManagement() {
  const [members, setMembers] = useState<TeamMember[]>(() => {
    const saved = localStorage.getItem('teamMembers')

    return saved ? JSON.parse(saved) : initialTeamMembers
  })

  useEffect(() => {
    localStorage.setItem('teamMembers', JSON.stringify(members))
  }, [members])

  // Добавить сотрудника
  const handleAdd = () => {
    const name = prompt('Введите имя сотрудника')

    if (!name) return

    const position = prompt('Введите должность') || 'Новая должность'
    const email = prompt('Введите email') || 'email@example.com'
    const phone = prompt('Введите телефон') || '+7 (...)'

    const newMember: TeamMember = {
      id: members.length > 0
        ? Math.max(...members.map(m => m.id)) + 1
        : 1,
      name,
      position,
      email,
      phone,
      isActive: true
    }

    setMembers(prev => [...prev, newMember])
  }

  // Изменить сотрудника
  const handleEdit = (member: TeamMember) => {
    const name = prompt('Имя', member.name)

    if (!name) return

    const position = prompt('Должность', member.position) || member.position
    const email = prompt('Email', member.email) || member.email
    const phone = prompt('Телефон', member.phone) || member.phone

    setMembers(prev =>
      prev.map(m =>
        m.id === member.id
          ? { ...m, name, position, email, phone }
          : m
      )
    )
  }

  // Удалить сотрудника
  const handleDelete = (id: number) => {
    const confirmDelete = window.confirm('Удалить сотрудника?')
    
    if (!confirmDelete) return

    setMembers(prev => prev.filter(m => m.id !== id))
  }

  return (
    <div className="team-management">
      <div className="page-header">
        <h1>Управление командой</h1>
      </div>
      <div className="page-header">
        <button className="add-button" onClick={handleAdd}>
          + Добавить сотрудника
        </button>
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
              <th>Действия</th>
            </tr>
          </thead>

          <tbody>
            {members.map(member => (
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
                  <div className="action-buttons">
                    <button
                      className="action-button edit"
                      onClick={() => handleEdit(member)}
                    >
                      Изменить
                    </button>

                    <button
                      className="action-button delete"
                      onClick={() => handleDelete(member.id)}
                    >
                      Удалить
                    </button>
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
