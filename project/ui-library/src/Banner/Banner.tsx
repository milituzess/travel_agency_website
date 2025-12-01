import './Banner.css'

export interface BenefitItem {
  id: number | string
  text: string
}

export interface BannerProps {
  title?: string
  subtitle?: string
  benefits?: BenefitItem[]
  callButtonText?: string
  requestButtonText?: string
  callSectionId?: string
  requestSectionId?: string
  className?: string
  backgroundImage?: string
}

export function Banner({
  title = 'Туристическое агентство',
  subtitle = '...',
  benefits = [
    { id: 1, text: '...' },
    { id: 2, text: '...' },
    { id: 3, text: '...' }
  ],
  callButtonText = 'Позвонить',
  requestButtonText = 'Оставить заявку',
  callSectionId = 'contacts',
  requestSectionId = 'form',
  className = '',
  backgroundImage
}: BannerProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div 
      className={`ui-banner ${className}`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      <div className="ui-banner-overlay">
        <div className="ui-banner-content">
          <h1 className="ui-banner-title">{title}</h1>
          {subtitle && <p className="ui-banner-subtitle">{subtitle}</p>}
          
          {benefits && benefits.length > 0 && (
            <ul className="ui-banner-benefits">
              {benefits.map((benefit) => (
                <li key={benefit.id} className="ui-banner-benefit">
                  • {benefit.text}
                </li>
              ))}
            </ul>
          )}
          
          <div className="ui-banner-buttons">
            <button
              className="ui-banner-button ui-banner-button--call"
              onClick={() => scrollToSection(callSectionId)}
              type="button"
            >
              {callButtonText}
            </button>
            
            <button
              className="ui-banner-button ui-banner-button--request"
              onClick={() => scrollToSection(requestSectionId)}
              type="button"
            >
              {requestButtonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}