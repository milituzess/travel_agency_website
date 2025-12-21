export interface TeamMember {
  id: number
  name: string
  position: string
  email: string
  phone: string
  isActive: boolean
}

export const initialTeamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Иван Иванов',
    position: 'Менеджер по туризму',
    email: 'ivan@example.com',
    phone: '+7 (999) 111-22-33',
    isActive: true
  },
  {
    id: 2,
    name: 'Мария Петрова',
    position: 'Гид-экскурсовод',
    email: 'maria@example.com',
    phone: '+7 (999) 222-33-44',
    isActive: true
  },
  {
    id: 3,
    name: 'Алексей Сидоров',
    position: 'Администратор',
    email: 'alexey@example.com',
    phone: '+7 (999) 333-44-55',
    isActive: false
  },
  {
    id: 4,
    name: 'Алексей Сидоров',
    position: 'Администратор',
    email: 'alexey@example.com',
    phone: '+7 (999) 333-44-55',
    isActive: false
  },
  {
    id: 5,
    name: 'Алексей Сидоров',
    position: 'Администратор',
    email: 'alexey@example.com',
    phone: '+7 (999) 333-44-55',
    isActive: false
  },
  {
    id: 6,
    name: 'Алексей Сидоров',
    position: 'Администратор',
    email: 'alexey@example.com',
    phone: '+7 (999) 333-44-55',
    isActive: false
  }
]
