import './TeamCard.css'

export interface TeamCardProps {
  title?: string
  description1?: string
  description2?: string
  imageUrl: string
  imageAlt?: string
  className?: string
}

export function TeamCard({
  title,
  description1,
  description2,
  imageUrl,
  imageAlt = title,
  className = ''
}: TeamCardProps) {
  const cardClassName = `ui-teamcard ui-card--${className}`

  return (
    <div className={cardClassName}>
      <div className="ui-card-image-container">
        <img 
          src={imageUrl} 
          alt={imageAlt} 
          className="ui-card-image"
        />
      </div>
      <div className="ui-card-content">
        <h3 className="ui-card-title">{title}</h3>
        <p className="ui-card-description1">{description1}</p>
        <p className="ui-card-description2">{description2}</p>
      </div>
    </div>
  )
}