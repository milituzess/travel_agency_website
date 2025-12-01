import './Card.css'

export interface CardProps {
  orientation: 'vertical' | 'horizontal'
  title?: string
  description1?: string
  description2?: string
  imageUrl: string
  imageAlt?: string
  className?: string
}

export function Card({
  orientation,
  title,
  description1,
  description2,
  imageUrl,
  imageAlt = title,
  className = ''
}: CardProps) {
  const cardClassName = `ui-card ui-card--${orientation} ${className}`

  if (orientation === 'vertical') {
    return (
      <div className={cardClassName}>
        <h3 className="ui-card-title">{title}</h3>
        <p className="ui-card-description1">{description1}</p>
        <div className="ui-card-image-container">
          <img 
            src={imageUrl} 
            alt={imageAlt} 
            className="ui-card-image"
            loading="lazy"
          />
        </div>
        <p className="ui-card-description2">{description2}</p>
      </div>
    )
  }

  return (
    <div className={cardClassName}>
      <div className="ui-card-image-container">
        <img 
          src={imageUrl} 
          alt={imageAlt} 
          className="ui-card-image"
          loading="lazy"
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