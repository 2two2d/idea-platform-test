import { useCallback } from 'react'

import { useSearchParams } from 'react-router'

import { falsy, makeClassname } from '@shared/utils'
import Button from '@shared/ui/components/button'
import { formatPrice } from '@shared/utils/format-price'

import FlightDataBlock from '@features/ticket/ticket-card/flight-data-block'
import TransfersQuantity from '@features/ticket/ticket-card/transfers-quantity'
import { ESearchParams } from '@shared/enum/search-params'

import style from './index.module.scss'

import type { ReactElement } from 'react'

import type { ECurrency } from '@shared/enum/currency'
import type { IDetailedProps } from '@shared/interface'

import type { ITicketDto } from '@entities/ticket/interface'

interface ITicketCardProps extends IDetailedProps<HTMLDivElement> {
  ticket: ITicketDto
}

const TicketCard = ({ ticket, className, ...props }: ITicketCardProps): ReactElement => {
  const [searchParams] = useSearchParams()

  const currency = searchParams.get(ESearchParams.CURRENCY)

  const getPrice = useCallback(() => {
    if (falsy(currency)) return ticket.price

    return formatPrice(ticket.price, currency as ECurrency)
  }, [ticket.price, currency])

  return (
    <div className={ makeClassname(style['ticket-card'], className) } { ...props }>
      <div className={ style['ticket-card_left-block'] }>
        <img src={ ticket.airlines.logo }
          className={ style['ticket-card_left-block_logo'] }
          alt="img"
        />

        <Button text={ (
          <p>
            Купить
            <br />

            { ' ' }

            за

            { ' ' }

            { getPrice() }
          </p>
        ) }
        />
      </div>

      <div className={ style['ticket-card_right-block'] }>
        <FlightDataBlock airport={ ticket.airport_departure } datetime={ ticket.datetime_departure } />

        <TransfersQuantity transfers={ ticket.transfers } />

        <FlightDataBlock airport={ ticket.airport_arrival }
          datetime={ ticket.datetime_arrival }
          className="text-end"
        />
      </div>
    </div>
  )
}

export default TicketCard
