import { ContactCard, TeamCard } from '@my-app/ui-library'

import { teamMembers } from './TeamInfo'

export function Team() {
  return (
    <div className="app">
      <main className="app-main"> 
        <section className="section">
          <h2>Наша команда</h2>
          
          {/* Карточки команды */}
          <div className="team-cards-grid">
            {teamMembers.map((member) => (
              <TeamCard
                key={member.id}
                title={member.name}
                description1={member.position}
                description2={member.description}
                imageUrl={member.imageUrl}
              />
            ))}
          </div>
        </section>
      </main>

      <footer id="contact-section" className="app-footer">
        <ContactCard/>
      </footer>
    </div>
  )
}