import { makeClassname } from '@shared/utils'

import style from './index.module.scss'

import type { ReactElement } from 'react'

import type { IDetailedProps } from '@shared/interface'

interface IButtonProps extends IDetailedProps<HTMLButtonElement> {
  text: string | ReactElement
  type?: 'button' | 'submit' | 'reset'
}

const Button = ({ text, className, ...props }: IButtonProps): ReactElement => {
  return (
  // eslint-disable-next-line react/button-has-type
    <button
      className={ makeClassname(style.button, className) }
      { ...props }
    >
      { text }
    </button>
  )
}

export default Button
