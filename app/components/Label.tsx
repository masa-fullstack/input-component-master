import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  textSize?: string
  textColor?: string
  className?: string
}

const Label: React.FC<Props> = ({
  children,
  textSize = 'text-xs',
  textColor = 'text-gray-600',
  className,
}) => {
  return (
    <div className={`my-2 ${textSize} ${textColor} ${className}`}>
      {children}
    </div>
  )
}

export default Label
