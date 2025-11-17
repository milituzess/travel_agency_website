import React from 'react'

import styles from './PhotoGallery.module.css'

export interface PhotoItem {
  id: string | number;
  imageUrl: string;
  caption: string;
  alt?: string;
}

export interface PhotoGalleryProps {
  photos: PhotoItem[];
  columns?: number;
  gap?: number;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({
  photos,
  columns,
  gap
}) => {
  // Динамические стили для grid
  const galleryStyle = {
    ...(columns ? { gridTemplateColumns: `repeat(${columns}, 1fr)` } : {}),
    ...(gap ? { gap: `${gap}px` } : {})  
  }

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    // Запасное изображение при ошибке загрузки
    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZThlOGU4Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4='
  }

  if (!photos || photos.length === 0) {
    return (
      <div className={styles.gallery}>
        <div className={styles.photoItem}>
          <div className={styles.photoCaption}>No photos to display</div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.gallery} style={galleryStyle}>
      {photos.map((photo) => (
        <div key={photo.id} className={styles.photoItem}>
          <img
            src={photo.imageUrl}
            alt={photo.alt || photo.caption}
            className={styles.photoImage}
            onError={handleImageError}
            loading="lazy" // Ленивая загрузка для производительности
          />
          <div 
            className={styles.photoCaption}
            title={photo.caption} // hint при наведении
          >
            {photo.caption}
          </div>
        </div>
      ))}
    </div>
  )
}