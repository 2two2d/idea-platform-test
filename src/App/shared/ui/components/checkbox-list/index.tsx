import { useState } from 'react'

import { makeClassname } from '@shared/utils'
import CheckboxItem from '@shared/ui/components/checkbox-list/checkbox-item'

import type { ReactNode } from 'react'

import type { ICheckboxItem, IDetailedProps } from '@shared/interface'

interface ICheckboxList extends IDetailedProps<HTMLDivElement> {
  items: ICheckboxItem[]
  handleClick(value: string): void
  handleCLickOnly(value: string): void
}

const CheckboxList = ({ items, handleCLickOnly, handleClick, className, ...props }: ICheckboxList): ReactNode => {
  const [checkboxes, setCheckboxes] = useState(items)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value
    setCheckboxes((prev) => prev.map((item) => {
      if (item.value === value) return { ...item, isChecked: !item.isChecked }

      return item
    }))
    handleClick(value)
  }

  const handleSetOnly = (value: string): void => {
    setCheckboxes((prev) => prev.map((item) => {
      if (value !== item.value) return { ...item, isChecked: false }

      return { ...item, isChecked: true }
    }))
    handleCLickOnly(value)
  }

  return (
    <div className={ makeClassname('w-full flex flex-col', className) } { ...props }>
      { checkboxes.map((item) => {
        return (
          <CheckboxItem handleChange={ onChange }
            onSetOnly={ handleSetOnly }
            key={ item.value }
            { ...item }
          />
        )
      }) }
    </div>
  )
}

export default CheckboxList
