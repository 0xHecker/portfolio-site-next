import { ChangeEvent } from 'react'
import cn from 'classnames'
import styles from './input.module.scss'

type InputProps = {
  type: string
  placeholder?: string
  disabled?: boolean
  value: string | number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void // eslint-disable-line
  className?: string
  required?: boolean
}

const Input = ({ type = 'text', placeholder, disabled, value, onChange, className, required }: InputProps): JSX.Element => (
  <input
    value={value}
    type={type}
    placeholder={placeholder}
    className={cn(styles.input, className)}
    disabled={disabled}
    onChange={onChange}
    required={required}
  />
)

export default Input
