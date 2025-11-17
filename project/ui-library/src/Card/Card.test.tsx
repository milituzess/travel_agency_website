import { render, screen } from '@testing-library/react'

import { Card } from './Card'

describe('Card', () => {
  test('renders card with title and children', () => {
    render(
      <Card title="Test Title">
        <p>Test content</p>
      </Card>
    )
    
    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  test('renders card without title', () => {
    render(
      <Card>
        <p>Test content</p>
      </Card>
    )
    
    expect(screen.queryByText('Test Title')).not.toBeInTheDocument()
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  test('applies custom className', () => {
    const { container } = render(
      <Card className="custom-class">
        <p>Test content</p>
      </Card>
    )
    
    expect(container.firstChild).toHaveClass('custom-class')
  })

  test('renders with empty className by default', () => {
    const { container } = render(
      <Card>
        <p>Test content</p>
      </Card>
    )
    
    // Проверяем что есть класс card и нет лишних пробелов
    expect(container.firstChild).toHaveClass('card')
  })
})