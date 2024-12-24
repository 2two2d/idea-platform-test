import { useEffect } from 'react'

import { makeClassname, truthy } from '@shared/utils'
import CheckboxList from '@shared/ui/components/checkbox-list'
import { useSetSearchParamsArray } from '@shared/utils/use-set-search-params-array'

import { ESearchParams } from '@shared/enum/search-params'
import { useSetSearchParamsWithPrev } from '@shared/utils/set-search-params-with-prev'

import { CHECKBOX_ITEMS } from './state'

import type { ReactNode } from 'react'

import type { IDetailedProps } from '@shared/interface'

type ITransferCheckboxFilterProps = IDetailedProps<HTMLDivElement>

const TransfersCheckboxFilter = ({ className, ...props }: ITransferCheckboxFilterProps): ReactNode => {
  const setSearchParamsArr = useSetSearchParamsArray()

  const setSearchParams = useSetSearchParamsWithPrev()

  const onClick = (value: string): void => {
    setSearchParamsArr(ESearchParams.TRANSFERS, value, true)
  }

  const onSetOnly = (value: string): void => {
    setSearchParamsArr(ESearchParams.TRANSFERS, value)
  }

  useEffect(() => {
    const initialCheckbox = CHECKBOX_ITEMS.find((item) => item.isChecked)

    if (truthy(initialCheckbox)) setSearchParams(ESearchParams.TRANSFERS, initialCheckbox.value)
  }, [])

  return (
    <div className={ makeClassname('w-full flex flex-col', className) } { ...props }>
      <CheckboxList items={ CHECKBOX_ITEMS }
        handleClick={ onClick }
        handleCLickOnly={ onSetOnly }
      />
    </div>
  )
}

export default TransfersCheckboxFilter
