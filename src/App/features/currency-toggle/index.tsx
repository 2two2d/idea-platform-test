import { useState } from 'react'

import Toggle from '@shared/ui/components/toggle'

import { makeClassname } from '@shared/utils'

import { ECurrency } from '@shared/enum/currency'

import { useGetCurrencyItems } from './helpers'

import type { IDetailedProps } from '@shared/interface'
import type { ReactNode } from 'react'

interface ICurrencyToggleProps extends IDetailedProps<HTMLDivElement> {
  handleClick?(value: ECurrency): void
}

const CurrencyToggle = ({ handleClick, className, ...props }: ICurrencyToggleProps): ReactNode => {
  const [currency, setCurrency] = useState<ECurrency>(ECurrency.RUB)

  const handleToggleClick = (value: ECurrency): void => {
    setCurrency(value)
    if (handleClick) handleClick(value)
  }

  const toggleItems = useGetCurrencyItems({ currency })

  return (
    <Toggle<ECurrency>
      items={ toggleItems }
      { ...props }
      onClick={ handleToggleClick }
      className={ makeClassname('w-[200px] p-2.5', className) }
    />
  )
}

export default CurrencyToggle
