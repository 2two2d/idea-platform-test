import { makeClassname } from '@shared/utils'

import style from './index.module.scss'

import type { ReactElement } from 'react'

import type { IDetailedProps } from '@shared/interface'

type ITicketNotFoundCard = IDetailedProps<HTMLDivElement>

const TicketNotFoundCard = ({ className, ...props }: ITicketNotFoundCard): ReactElement => {
  return (
    <div className={ makeClassname(style['ticket-card'], className) } { ...props }>
      <p className={ style['ticket-card_title'] }>
        Билеты не найдены!
      </p>
    </div>
  )
}

export default TicketNotFoundCard
