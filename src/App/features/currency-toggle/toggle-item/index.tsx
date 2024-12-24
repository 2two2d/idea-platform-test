import { makeClassname } from '@shared/utils'

import style from './index.module.scss'

import type { ReactElement } from 'react'

interface ICourierTypeOptionProps {
  isActive: boolean
  text: string
  className?: string
}

const ToggleItem = ({ text, isActive, className }: ICourierTypeOptionProps): ReactElement => {
  return (
    <div className={ makeClassname(isActive ? style.card__active : style.card, className) }>
      { text && (
        <p>
          { text }
        </p>
      ) }
    </div>
  )
}

export default ToggleItem
