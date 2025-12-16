import React, { useState, ChangeEvent, FormEvent } from 'react'
import './Form.css'

export interface FormData {
  name: string
  phone: string
}

export interface FormProps {
  onSubmit?: (data: FormData) => void
  buttonText?: string
  className?: string
}

export const Form: React.FC<FormProps> = ({
  onSubmit,
  buttonText = 'Отправить заявку',
  className = ''
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: ''
  })
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Пожалуйста, введите ваше имя'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Имя должно содержать не менее 2 символов'
    }

    const phoneRegex = /^(\+7|8)[\s(-]?\d{3}[\s)-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Пожалуйста, введите номер телефона'
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Введите корректный номер телефона'
    }

    setErrors(newErrors)
    
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (validateForm()) {
      if (onSubmit) {
        onSubmit(formData)
      }
      setIsSubmitted(true)
      // Сбрасываем форму
      setFormData({
        name: '',
        phone: ''
      })
      
      // Сбрасываем сообщение об успехе через 3 секунды
      setTimeout(() => {
        setIsSubmitted(false)
      }, 30000)
    }
  }

  return (
    <div className={`form-container ${className}`}>
      
      {isSubmitted ? (
        <div className="form-success">
          <p className="success-message">Заявка успешно отправлена!</p>
        </div>
      ) : (
        <form className="form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Имя
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`form-input ${errors.name ? 'form-input-error' : ''}`}
              placeholder="Введите ваше имя"
              required
            />
            {errors.name && <span className="form-error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              Телефон
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`form-input ${errors.phone ? 'form-input-error' : ''}`}
              placeholder="+7 (999) 123-45-67"
              required
            />
            {errors.phone && <span className="form-error">{errors.phone}</span>}
            <p className="form-hint">Формат: +7 (XXX) XXX-XX-XX или 8 XXX XXX-XX-XX</p>
          </div>

          <button type="submit" className="form-submit">
            {buttonText}
          </button>

          <p className="form-disclaimer">
            Нажимая кнопку «{buttonText}», вы соглашаетесь с политикой конфиденциальности
          </p>
        </form>
      )}
    </div>
  )
}