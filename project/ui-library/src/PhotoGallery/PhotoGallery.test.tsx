import { render, screen, fireEvent } from '@testing-library/react'

import { PhotoGallery } from './PhotoGallery'

const mockPhotos = [
  {
    id: 1,
    imageUrl: 'https://example.com/photo1.jpg',
    caption: 'Beautiful landscape with mountains and lakes'
  },
  {
    id: 2, 
    imageUrl: 'https://example.com/photo2.jpg',
    caption: 'Very very very very very very very very very very long caption that should be truncated'
  }
]

describe('PhotoGallery', () => {
  test('renders all photos', () => {
    render(<PhotoGallery photos={mockPhotos} />)
    
    expect(screen.getByAltText('Beautiful landscape with mountains and lakes')).toBeInTheDocument()
    expect(screen.getByAltText('Very very very very very very very very very very long caption that should be truncated')).toBeInTheDocument()
  })

  test('renders empty state when no photos', () => {
    render(<PhotoGallery photos={[]} />)
    
    expect(screen.getByText('No photos to display')).toBeInTheDocument()
  })

  test('applies custom columns when provided', () => {
    const { container } = render(<PhotoGallery photos={mockPhotos} columns={3} />)
    
    const gallery = container.firstChild as HTMLElement

    expect(gallery.style.gridTemplateColumns).toBe('repeat(3, 1fr)')
  })

  test('applies custom gap when provided', () => {
    const { container } = render(<PhotoGallery photos={mockPhotos} gap={20} />)
    
    const gallery = container.firstChild as HTMLElement
    
    expect(gallery.style.gap).toBe('20px')
  })

  test('handles image error by showing fallback', () => {
    render(<PhotoGallery photos={mockPhotos} />)
    
    const image = screen.getByAltText('Beautiful landscape with mountains and lakes') as HTMLImageElement
    
    // Симулируем ошибку загрузки изображения
    fireEvent.error(image)
    
    // Проверяем что src изменился на fallback
    expect(image.src).toContain('data:image/svg+xml;base64')
  })
})