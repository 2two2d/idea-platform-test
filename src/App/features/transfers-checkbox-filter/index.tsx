import { makeClassname } from '@shared/utils'

import CheckboxList from '@shared/ui/components/checkbox-list'
import { useSetSearchParamsArray } from '@shared/utils/use-set-search-params-array'

import { ESearchParams } from '@shared/enum/search-params'

import { CHECKBOX_ITEMS } from './state'

import type { ReactNode } from 'react'

import type { IDetailedProps } from '@shared/interface'

type ITransferCheckboxFilterProps = IDetailedProps<HTMLDivElement>

const TransfersCheckboxFilter = ({ className, ...props }: ITransferCheckboxFilterProps): ReactNode => {
  const setSearchParamsArr = useSetSearchParamsArray()

  const onClick = (value: string): void => {
    setSearchParamsArr(ESearchParams.TRANSFERS, value, true)
  }

  const onSetOnly = (value: string): void => {
    setSearchParamsArr(ESearchParams.TRANSFERS, value)
  }

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
