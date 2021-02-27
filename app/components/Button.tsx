import Icon from './Icon'

type Variant = 'outline' | 'text'
type Size = 'sm' | 'md' | 'lg'
type Color = 'default' | 'primary' | 'secondary' | 'danger'

type Props = {
  title?: string
  variant?: Variant
  disableShadow?: boolean
  disabled?: boolean
  startIcon?: string
  endIcon?: string
  size?: Size
  color?: Color
}

const Button: React.FC<Props> = ({
  title = 'Default',
  variant,
  disableShadow = false,
  disabled = false,
  startIcon,
  endIcon,
  size,
  color,
}) => {
  //base color setting (Tailwindcss className)
  let baseBgClassName = ''
  let baseTextClassName = ''
  let baseBorderClassName = ''
  let textClassName = ''
  let hoverClassName = ''

  switch (color) {
    case 'default':
      baseBgClassName = 'bg-gray-300'
      baseTextClassName = 'text-gray-300'
      baseBorderClassName = 'border-gray-300'
      textClassName = 'text-gray-800'
      hoverClassName = 'bg-gray-400'
      break
    case 'primary':
      baseBgClassName = 'bg-blue-600'
      baseTextClassName = 'text-blue-600'
      baseBorderClassName = 'border-blue-600'
      textClassName = 'text-white'
      hoverClassName = 'bg-blue-800'
      break
    case 'secondary':
      baseBgClassName = 'bg-gray-500'
      baseTextClassName = 'text-gray-500'
      baseBorderClassName = 'border-gray-500'
      textClassName = 'text-white'
      hoverClassName = 'bg-gray-700'
      break
    case 'danger':
      baseBgClassName = 'bg-red-600'
      baseTextClassName = 'text-red-600'
      baseBorderClassName = 'border-red-600'
      textClassName = 'text-white'
      hoverClassName = 'bg-red-800'
      break
    default:
      //variantが指定されている場合は、色指定なしてでも青色になる
      if (variant) {
        baseBgClassName = 'bg-blue-600'
        baseTextClassName = 'text-blue-600'
        baseBorderClassName = 'border-blue-600'
        textClassName = 'text-blue-800'
        hoverClassName = 'bg-blue-200'
      } else {
        baseBgClassName = 'bg-gray-300'
        baseTextClassName = 'text-gray-300'
        baseBorderClassName = 'border-gray-300'
        textClassName = 'text-gray-800'
        hoverClassName = 'bg-gray-400'
      }
      break
  }

  //variant color setting (Tailwindcss className)
  let variantClassName
  switch (variant) {
    case 'outline':
      variantClassName = 'border-2 bg-white ' + baseBorderClassName
      if (disabled == false) {
        variantClassName += ` ${baseTextClassName} foucus:${hoverClassName} hover:${hoverClassName}`
      } else {
        variantClassName += ' text-gray-400'
      }

      break
    case 'text':
      variantClassName = 'border-0 bg-white shadow-none'
      if (disabled == false) {
        variantClassName += ` ${baseTextClassName} foucus:${hoverClassName} hover:${hoverClassName}`
      } else {
        variantClassName += ' text-gray-400'
      }
      break
    default:
      variantClassName = baseBgClassName
      if (disabled == false) {
        variantClassName += ` ${textClassName} foucus:${hoverClassName} hover:${hoverClassName}`
      } else {
        variantClassName += ' text-gray-400'
      }
      break
  }

  //shadow setting (Tailwindcss className)
  const shadowClassName =
    variant || disableShadow || disabled ? 'shadow-none' : 'shadow'

  //disabled setting (Tailwindcss className)
  const disabledClassName = disabled ? '' : 'cursor-pointer'

  //size setting (Tailwindcss className)
  let sizeClassName = ''
  switch (size) {
    case 'sm':
      sizeClassName = 'px-3 py-1'
      break
    case 'md':
      sizeClassName = 'px-4 py-2'
      break
    case 'lg':
      sizeClassName = 'px-5 py-3'
      break
    default:
      sizeClassName = 'px-4 py-2'
      break
  }

  return (
    <div>
      <div
        className={`rounded-lg table ${shadowClassName} ${disabledClassName} ${sizeClassName} ${variantClassName}`}
      >
        <Icon icon={startIcon} />
        {title}
        <Icon icon={endIcon} />
      </div>
    </div>
  )
}

export default Button
