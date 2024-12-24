import type { Key, ReactElement, ReactNode } from 'react'

interface IToggleItem <T> {
  element: ReactNode
  elementEType: T
}

interface IToggleProps <T> {
  items: IToggleItem<T>[]
  className?: string

  onClick(value: T): void
}

const Toggle = <T,>({ items, onClick, className }: IToggleProps<T>): ReactElement => {
  return (
    <div className={ `flex ${className}` }>
      { items.map(({ element, elementEType }) => {
        const handleClick = (): void => {
          onClick(elementEType)
        }

        return (
          <div onClick={ handleClick } key={ elementEType as Key }>
            { element }
          </div>
        )
      }) }
    </div>
  )
}

export default Toggle

export type {
  IToggleItem,
  IToggleProps
}
