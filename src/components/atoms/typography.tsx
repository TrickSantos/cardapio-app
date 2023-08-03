import React from 'react'

export type TitleProps = {
  children: React.ReactNode
  level?: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
  onClick?: () => void
}

const Title = (props: TitleProps) => {
  const { children, level = 1, className, onClick } = props
  const Tag = `h${level}` as keyof JSX.IntrinsicElements

  return (
    <Tag onClick={onClick} className={`font-sans ${className}`}>
      {children}
    </Tag>
  )
}

export type TextProps = {
  children: React.ReactNode
  className?: string
  type?: 'primary' | 'secondary' | 'default'
}

const Text = (props: TextProps) => {
  const { children, className, type = 'default' } = props

  return {
    primary: <span className={`font-sans text-black text-base ${className}`}>{children}</span>,
    secondary: <span className={`font-sans text-gray text-sm ${className}`}>{children}</span>,
    default: <span className={`font-sans ${className}`}>{children}</span>,
  }[type]
}

export type ParagraphProps = {
  children: React.ReactNode
  className?: string
}

const Paragraph = (props: ParagraphProps) => {
  const { children, className } = props
  return <p className={`font-sans ${className}`}>{children}</p>
}

const Typography = {
  Title,
  Text,
  Paragraph,
}

export default Typography
