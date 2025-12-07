import './ContactCard.css'

export interface ContactCardProps {
  title?: string
  phone?: string
  whatsappLink?: string
  telegramLink?: string
  vkLink?: string
  telegramBotLink?: string
  className?: string
}

export function ContactCard({
  title = 'Связаться с менеджером',
  phone = '+7(999)123-45-67',
  whatsappLink = 'https://wa.me/79991234567',
  telegramLink = 'https://t.me/milituzess',
  vkLink = 'https://vk.com/username',
  telegramBotLink = 'https://t.me/kessirass_travel_agency_bot',
  className = 'footer'
}: ContactCardProps) {
  return (
    <div className={`ui-contact-card ${className}`}>
      <h3 className="ui-contact-card-title">{title}</h3>
      <p className="ui-contact-card-phone">{phone}</p>
      
      <div className="ui-contact-card-links">
        <a 
          href={whatsappLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="ui-contact-card-link whatsapp"
        >
          WhatsApp
        </a>
        
        <a 
          href={telegramLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="ui-contact-card-link telegram"
        >
          Telegram
        </a>
        
        <a 
          href={vkLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="ui-contact-card-link vk"
        >
          VK
        </a>

        <a 
          href={telegramBotLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="ui-contact-card-link telegram"
        >
          TgBot
        </a>
      </div>
    </div>
  )
}