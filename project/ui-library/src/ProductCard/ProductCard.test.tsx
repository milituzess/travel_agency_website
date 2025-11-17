import { render, screen, fireEvent } from '@testing-library/react'

import { ProductCard } from './ProductCard'

describe('ProductCard', () => {
  test('renders all product information', () => {
    const mockProduct = {
      id: 1,
      imageUrl: 'https://example.com/product.jpg',
      title: 'Test Product',
      description: 'Test Description',
      price: '999 ₽',
      textPosition: 'left' as const,
      buttonText: 'Купить',
      alt: 'Test Alt Text'
    }

    render(<ProductCard {...mockProduct} />)
    
    expect(screen.getByText('Test Product')).toBeInTheDocument()
    expect(screen.getByText('Test Description')).toBeInTheDocument()
    expect(screen.getByText('999 ₽')).toBeInTheDocument()
    expect(screen.getByText('Купить')).toBeInTheDocument()
    expect(screen.getByAltText('Test Alt Text')).toBeInTheDocument()
  })

  test('renders without optional description', () => {
    const productWithoutDesc = {
      id: 1,
      imageUrl: 'https://example.com/product.jpg',
      title: 'Test Product',
      price: '999 ₽',
      textPosition: 'left' as const,
      buttonText: 'Купить',
      alt: 'Test Alt Text'
    }

    render(<ProductCard {...productWithoutDesc} />)
    
    expect(screen.getByText('Test Product')).toBeInTheDocument()
    expect(screen.queryByText('Test Description')).not.toBeInTheDocument()
  })

  test('uses default button text when not provided', () => {
    const productWithoutButtonText = {
      id: 1,
      imageUrl: 'https://example.com/product.jpg',
      title: 'Test Product',
      description: 'Test Description',
      price: '999 ₽',
      textPosition: 'left' as const,
      alt: 'Test Alt Text'
    }

    render(<ProductCard {...productWithoutButtonText} />)
    
    expect(screen.getByText('Узнать подробнее')).toBeInTheDocument()
  })

  test('uses title as alt text when alt not provided', () => {
    const productWithoutAlt = {
      id: 1,
      imageUrl: 'https://example.com/product.jpg',
      title: 'Test Product',
      description: 'Test Description',
      price: '999 ₽',
      textPosition: 'left' as const,
      buttonText: 'Купить'
    }

    render(<ProductCard {...productWithoutAlt} />)
    
    expect(screen.getByAltText('Test Product')).toBeInTheDocument()
  })

  test('calls onButtonClick when button is clicked', () => {
    const mockProduct = {
      id: 1,
      imageUrl: 'https://example.com/product.jpg',
      title: 'Test Product',
      description: 'Test Description',
      price: '999 ₽',
      textPosition: 'left' as const,
      buttonText: 'Купить',
      alt: 'Test Alt Text'
    }

    const handleClick = jest.fn()
    
    render(<ProductCard {...mockProduct} onButtonClick={handleClick} />)
    
    fireEvent.click(screen.getByText('Купить'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('applies correct text position class', () => {
    const mockProduct = {
      id: 1,
      imageUrl: 'https://example.com/product.jpg',
      title: 'Test Product',
      description: 'Test Description',
      price: '999 ₽',
      textPosition: 'right' as const,
      buttonText: 'Купить',
      alt: 'Test Alt Text'
    }

    const { container } = render(<ProductCard {...mockProduct} />)
    
    expect(container.firstChild).toHaveClass('text-right')
  })

  test('applies custom className', () => {
    const mockProduct = {
      id: 1,
      imageUrl: 'https://example.com/product.jpg',
      title: 'Test Product',
      description: 'Test Description',
      price: '999 ₽',
      textPosition: 'left' as const,
      buttonText: 'Купить',
      alt: 'Test Alt Text'
    }

    const { container } = render(<ProductCard {...mockProduct} className="custom-class" />)
    
    expect(container.firstChild).toHaveClass('custom-class')
  })

  test('handles image error by showing fallback', () => {
    const mockProduct = {
      id: 1,
      imageUrl: 'https://example.com/product.jpg',
      title: 'Test Product',
      description: 'Test Description',
      price: '999 ₽',
      textPosition: 'left' as const,
      buttonText: 'Купить',
      alt: 'Test Alt Text'
    }

    render(<ProductCard {...mockProduct} />)
    
    const image = screen.getByAltText('Test Alt Text') as HTMLImageElement
    
    fireEvent.error(image)
    
    expect(image.src).toContain('data:image/svg+xml;base64')
  })

  test('uses default textPosition when not provided', () => {
    const productWithoutPosition = {
      id: 1,
      imageUrl: 'https://example.com/product.jpg',
      title: 'Test Product',
      description: 'Test Description',
      price: '999 ₽',
      buttonText: 'Купить',
      alt: 'Test Alt Text'
    }

    const { container } = render(<ProductCard {...productWithoutPosition} />)
    
    expect(container.firstChild).toHaveClass('text-left')
  })
})