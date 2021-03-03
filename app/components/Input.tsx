import { useState } from 'react'
import { removeArrayElement } from '../lib/removeArrayElement'
import Label from './Label'

type Size = 'sm' | 'md' | 'lg'

type Props = {
  label?: string
  placeholder?: string
  helperText?: string
  error?: boolean
  disabled?: boolean
  startIcon?: string
  endIcon?: string
  value?: string
  size?: Size
  fullWidth?: boolean
  multiline?: boolean
  row?: string
}

const Input: React.FC<Props> = ({
  label = 'Label',
  placeholder = 'Placeholder',
  helperText,
  error = false,
  disabled = false,
  startIcon,
  endIcon,
  value,
  size = 'md',
  fullWidth = false,
  multiline = false,
  row = 2,
}) => {
  //inputのclassNameに使用する文字列配列
  let inputClassArray: string[] = [
    'pl-3',
    'border',
    'rounded-lg',
    'border-gray-400',
    'resize-none',
    'hover:border-gray-700',
    'focus:border-blue-600',
    'focus:outline-none',
  ]
  let labelTextColor = ''
  let startIconStyle = ''
  let endIconStyle = ''
  let fullWidthStyle = ''

  //icon styling
  if (startIcon) {
    inputClassArray = [...inputClassArray, 'pl-10']
    startIconStyle = `
      font-family: 'Material Icons';
      content: '${startIcon}';
      font-size: 24px;
      display: inline-block;
      position: absolute;
      top: 12px;
      left: 8px;
    `
  }
  if (endIcon) {
    endIconStyle = `
      font-family: 'Material Icons';
      content: '${endIcon}';
      font-size: 24px;
      display: inline-block;
      position: absolute;
      top: 12px;
      right: 8px;
    `
  }

  //multiline and size styling
  if (multiline) {
    inputClassArray = [...inputClassArray, 'py-3']
  } else {
    //size styling
    switch (size) {
      case 'sm':
        inputClassArray = [...inputClassArray, 'h-10']
        break
      case 'md':
        inputClassArray = [...inputClassArray, 'h-14']
        break
      case 'lg':
        inputClassArray = [...inputClassArray, 'h-20']
        break
      default:
        inputClassArray = [...inputClassArray, 'h-14']
        break
    }
  }

  //fullWidth styling
  if (!fullWidth) {
    //fullWidth false
    fullWidthStyle = 'display: inline-block;'
  } else {
    //fullWidth true
    inputClassArray = [...inputClassArray, 'w-full']
  }

  //error styling
  if (error) {
    inputClassArray = removeArrayElement('focus:border', inputClassArray)
    inputClassArray = [...inputClassArray, 'border-red-500']
    inputClassArray = [...inputClassArray, 'focus:border-red-500']
    labelTextColor = 'text-red-500'
  }

  //disable styling
  if (disabled) {
    inputClassArray = removeArrayElement('hover', inputClassArray)
    inputClassArray = removeArrayElement('border', inputClassArray)
    inputClassArray = [...inputClassArray, 'bg-gray-100']
  }

  // creates a string from array items
  const inputClassName: string = inputClassArray.join(' ')

  const [textValue, setTextValue] = useState(value)

  return (
    <div>
      <Label textColor={labelTextColor}>{label}</Label>
      <div className={`inputGroup`}>
        {multiline ? (
          <textarea
            disabled={disabled}
            placeholder={placeholder}
            className={inputClassName}
            rows={Number(row)}
            value={textValue}
            onChange={(e) => {
              setTextValue(e.target.value)
            }}
          />
        ) : (
          <input
            type="text"
            disabled={disabled}
            placeholder={placeholder}
            className={inputClassName}
            value={textValue}
            onChange={(e) => {
              setTextValue(e.target.value)
            }}
          />
        )}
      </div>
      <Label textSize="text-xxs" textColor={labelTextColor}>
        {helperText}
      </Label>

      <style jsx>{`
        .inputGroup {
          position: relative;
          ${fullWidthStyle}
        }
        .inputGroup::before {
          ${startIconStyle}
        }
        .inputGroup::after {
          ${endIconStyle}
        }
      `}</style>
    </div>
  )
}

export default Input
