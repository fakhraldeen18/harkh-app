import React from 'react'
import { classNames } from '@/utils/classNames'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'gradient'
  fullWidth?: boolean
  href?: string
  children: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', fullWidth = true, href, children, ...props }, ref) => {
    const baseStyles = 'flex items-center justify-center rounded-full py-2.5 px-6 text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-all duration-200'
    
    const variants = {
      primary: 'bg-[#0F172A] text-white hover:bg-[#1E293B]',
      secondary: 'text-[#0F172A] hover:text-[#1E293B] ring-1 ring-inset ring-[#0F172A] hover:ring-[#1E293B]',
      gradient: 'bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white hover:from-[#1E293B] hover:to-[#334155]'
    }

    const width = fullWidth ? 'block w-full' : 'inline-flex'
    
    const styles = classNames(
      baseStyles,
      variants[variant],
      width,
      className
    )

    if (href) {
      return (
        <a href={href} className={styles}>
          {children}
        </a>
      )
    }

    return (
      <button
        ref={ref}
        className={styles}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
