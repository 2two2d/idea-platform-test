import { useEffect } from 'react'

import { makeClassname } from '@shared/utils'
import CurrencyToggle from '@features/currency-toggle'
import { ECurrency } from '@shared/enum/currency'
import { ESearchParams } from '@shared/enum/search-params'
import TransfersCheckboxFilter from '@features/transfers-checkbox-filter'
import { useSetSearchParamsWithPrev } from '@shared/utils/set-search-params-with-prev'

import style from './index.module.scss'

import type { IDetailedProps } from '@shared/interface'

import type { ReactNode } from 'react'

interface IFilterTicketsProps extends IDetailedProps<HTMLDivElement> {

}

const FilterTickets = ({ className, ...props }: IFilterTicketsProps): ReactNode => {
  const setSearchParams = useSetSearchParamsWithPrev()

  const onCurrencyToggleClick = (value: ECurrency): void => {
    setSearchParams(ESearchParams.CURRENCY, value)
  }

  useEffect(() => {
    setSearchParams(ESearchParams.CURRENCY, ECurrency.RUB)
  }, [])

  return (
    <div className={ makeClassname(style['tickets-filter'], className) } { ...props }>
      <p>ВАЛЮТА</p>

      <CurrencyToggle handleClick={ onCurrencyToggleClick } />

      <p className="mt-3">КОЛИЧЕСТВО ПЕРЕСАДОК</p>

      <TransfersCheckboxFilter className="mt-2" />
    </div>
  )
}

export default FilterTickets
