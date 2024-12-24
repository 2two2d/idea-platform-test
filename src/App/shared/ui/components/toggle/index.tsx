import { ReactElement, ReactNode } from "react";

interface IToggleItem <T> {
    element: ReactNode
    elementEType: T
}

interface IToggleProps <T> {
    items: IToggleItem<T>[]
    onClick(value: T): void
    className?: string
}

const Toggle = <T,>({ items, onClick, className }: IToggleProps<T>): ReactElement => {
    return (
        <div className={`flex ${ className }`}>
            { items.map(( { element, elementEType } ) => {

                const handleClick = (): void => {
                    onClick(elementEType)
                }

                return (
                    <div onClick={ handleClick }>
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