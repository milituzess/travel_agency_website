import React from 'react'

import styles from './ProductCard.module.css'

export interface ProductCardProps {
  id: string | number
  imageUrl: string
  title: string
  description?: string
  price: string
  
  textPosition?: 'left' | 'right'
  buttonText?: string
  onButtonClick?: () => void
  onNavigateToTour?: (tourId: string | number) => void 
  
  alt?: string
  className?: string
  
  navigateToTour?: boolean
  tourId?: string | number
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  imageUrl,
  title,
  description,
  price,
  textPosition = 'left',
  buttonText = 'Узнать подробнее',
  onButtonClick,
  onNavigateToTour, 
  alt,
  className = '',
  navigateToTour = true,
  tourId
}) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhGOUZBIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlByb2R1Y3QgSW1hZ2UgTm90IEZvdW5kPC90ZXh0Pjwvc3ZnPg=='
  }

  const handleClick = () => {
    if (onButtonClick) {
      onButtonClick()
    } else if (navigateToTour && onNavigateToTour) {
      const targetTourId = tourId || id
      
      onNavigateToTour(targetTourId)
    }
  }

  const cardClass = `${styles.productCard} ${styles[`text-${textPosition}`]} ${className}`.trim()

  return (
    <div className={cardClass}>
      <img
        src={imageUrl}
        alt={alt || title}
        className={styles.productImage}
        onError={handleImageError}
      />
      
      <div className={styles.overlay}></div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        
        {description && (
          <p className={styles.description}>{description}</p>
        )}
        
        <div className={styles.price}>{price}</div>
        
        <button 
          className={styles.button}
          onClick={handleClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  )
}