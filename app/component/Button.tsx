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
  let baseBgColor = ''
  let baseTextClassName = ''
  let baseHoverClassName = ''

  switch (color) {
    case 'default':
      baseBgColor = 'gray-300'
      baseTextClassName = 'text-gray-800'
      baseHoverClassName = 'bg-gray-400'
      break
    case 'primary':
      baseBgColor = 'blue-600'
      baseTextClassName = 'text-white'
      baseHoverClassName = 'bg-blue-800'
      break
    case 'secondary':
      baseBgColor = 'gray-500'
      baseTextClassName = 'text-white'
      baseHoverClassName = 'bg-gray-700'
      break
    case 'danger':
      baseBgColor = 'red-600'
      baseTextClassName = 'text-white'
      baseHoverClassName = 'bg-red-800'
      break
    default:
      //variantが指定されている場合は、色指定なしてでも青色になる
      if (variant) {
        baseBgColor = 'blue-600'
        baseTextClassName = 'text-blue-800'
        baseHoverClassName = 'bg-blue-200'
      } else {
        baseBgColor = 'gray-300'
        baseTextClassName = 'text-gray-800'
        baseHoverClassName = 'bg-gray-400'
      }
      break
  }

  //variant color setting (Tailwindcss className)
  let variantClassName
  switch (variant) {
    case 'outline':
      variantClassName = 'border-2 bg-white border-' + baseBgColor
      if (disabled == false) {
        variantClassName +=
          ' text-' +
          baseBgColor +
          ' foucus:' +
          baseHoverClassName +
          ' hover:' +
          baseHoverClassName
      } else {
        variantClassName += ' text-gray-400'
      }

      break
    case 'text':
      variantClassName = 'border-0 bg-white shadow-none'
      if (disabled == false) {
        variantClassName +=
          ' text-' +
          baseBgColor +
          ' foucus:' +
          baseHoverClassName +
          ' hover:' +
          baseHoverClassName
      } else {
        variantClassName += ' text-gray-400'
      }
      break
    default:
      variantClassName = 'bg-' + baseBgColor
      if (disabled == false) {
        variantClassName +=
          ' ' +
          baseTextClassName +
          ' foucus:' +
          baseHoverClassName +
          ' hover:' +
          baseHoverClassName
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
