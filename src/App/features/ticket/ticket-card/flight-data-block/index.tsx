import { makeClassname } from '@shared/utils'

import { formatDateFull, formatTime } from '@shared/utils/format-datetime'

import type { ReactNode } from 'react'

import type { IDetailedProps } from '@shared/interface'
import type { IAirport } from '@entities/ticket/interface'

interface IFlightDataBlockProps extends IDetailedProps<HTMLDivElement> {
  datetime: string
  airport: IAirport
}

const FlightDataBlock = ({ airport, datetime, className, ...props }: IFlightDataBlockProps): ReactNode => {
  const date = new Date(datetime)

  return (
    <div className={ makeClassname('w-[100px] flex flex-col gap-1.5', className) } { ...props }>
      <p className="text-3xl text-text-primary">
        { formatTime(date) }
      </p>

      <div className="text-[12px]">
        <p className="text-text-primary truncate">
          { `${airport.abbreviation},${airport.city}` }
        </p>

        <p className="text-text-secondary">
          { formatDateFull(date) }
        </p>
      </div>
    </div>
  )
}

export default FlightDataBlock
