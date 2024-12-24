import { makeClassname } from '@shared/utils'

import style from './index.module.scss'

import type { ReactNode } from 'react'

import type { ICheckboxItem } from '@shared/interface'

interface ICheckboxItemProps extends ICheckboxItem {
  handleChange(e: React.ChangeEvent<HTMLInputElement>): void
  onSetOnly(value: string): void
}

const CheckboxItem = ({ label, value, isChecked, handleChange, onSetOnly }: ICheckboxItemProps): ReactNode => {
  const handleSetOnly = (): void => {
    onSetOnly(value)
  }

  return (
    <div className={ makeClassname('group', style['checkbox-wrapper']) }>
      <input type="checkbox"
        value={ value }
        checked={ isChecked }
        onChange={ handleChange }
        className={ style['checkbox-wrapper_input'] }
      />

      <p className={ style['checkbox-wrapper_label'] }>
        { label }
      </p>

      <p onClick={ handleSetOnly }
        className={ makeClassname('hidden group-hover:block cursor-pointer', style['checkbox-wrapper_action-text']) }
      >
        ТОЛЬКО
      </p>
    </div>
  )
}

export default CheckboxItem
