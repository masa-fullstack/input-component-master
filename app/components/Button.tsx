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
  //stringArrayからstringが含まれる要素をfilterして返す関数
  const removeClassName = (string, stringArray) => {
    const regexp = new RegExp('^' + string + '.*')
    return stringArray.filter((className) => {
      return !className.match(regexp)
    })
  }
  //buttonのclassNameに使用する文字列配列
  let btnClassArray: string[] = ['rounded-lg', 'table']

  //shadow setting (Tailwindcss className)
  if (variant || disableShadow || disabled) {
    btnClassArray = [...btnClassArray, 'shadow-none']
  } else {
    btnClassArray = [...btnClassArray, 'shadow']
  }

  //color setting (Tailwindcss className)
  switch (color) {
    case 'default':
      btnClassArray = [
        ...btnClassArray,
        'bg-gray-300',
        'text-gray-800',
        'foucus:bg-gray-400',
        'hover:bg-gray-400',
      ]
      break
    case 'primary':
      btnClassArray = [
        ...btnClassArray,
        'bg-blue-600',
        'text-white',
        'border-blue-600',
        'foucus:bg-blue-800',
        'hover:bg-blue-800',
      ]
      break
    case 'secondary':
      btnClassArray = [
        ...btnClassArray,
        'bg-gray-500',
        'text-white',
        'border-gray-500',
        'foucus:bg-gray-700',
        'hover:bg-gray-700',
      ]
      break
    case 'danger':
      btnClassArray = [
        ...btnClassArray,
        'bg-red-600',
        'text-white',
        'border-red-600',
        'foucus:bg-red-800',
        'hover:bg-red-800',
      ]
      break
    default:
      btnClassArray = [
        ...btnClassArray,
        'bg-gray-300',
        'text-gray-800',
        'foucus:bg-gray-400',
        'hover:bg-gray-400',
      ]
      break
  }

  //variant setting (Tailwindcss className)
  switch (variant) {
    case 'outline':
      btnClassArray = removeClassName('bg-', btnClassArray)
      btnClassArray = [...btnClassArray, 'border-2', 'bg-white']
      break
    case 'text':
      btnClassArray = removeClassName('bg-', btnClassArray)
      btnClassArray = [...btnClassArray, 'border-0', 'bg-white', 'shadow-none']
      break
    default:
      break
  }

  //size setting (Tailwindcss className)
  switch (size) {
    case 'sm':
      btnClassArray = [...btnClassArray, 'px-3', 'py-1']
      break
    case 'md':
      btnClassArray = [...btnClassArray, 'px-4', 'py-2']
      break
    case 'lg':
      btnClassArray = [...btnClassArray, 'px-5', 'py-3']
      break
    default:
      btnClassArray = [...btnClassArray, 'px-4', 'py-2']
      break
  }

  //disabled setting (Tailwindcss className)
  if (disabled) {
    btnClassArray = [...btnClassArray, 'text-gray-400']
    btnClassArray = removeClassName('hover', btnClassArray)
    btnClassArray = removeClassName('focus', btnClassArray)
  } else {
    btnClassArray = [...btnClassArray, 'cursor-pointer']
  }

  // creates a string from array items
  const btnClassName: string = btnClassArray.join(' ')

  return (
    <div>
      <div className={btnClassName}>
        <Icon icon={startIcon} />
        {title}
        <Icon icon={endIcon} />
      </div>
    </div>
  )
}

export default Button
