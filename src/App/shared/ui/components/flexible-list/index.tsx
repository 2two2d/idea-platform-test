import {ReactElement} from "react";
import {IDetailedProps} from "@shared/interface";

import style from "./index.module.scss"
import {makeClassname} from "@shared/utils";

interface IGridListProps extends IDetailedProps<HTMLDivElement> {
    items: ReactElement[]
    itemClassName?: string
}

const FlexibleList = ({ items, itemClassName, className, ...props }: IGridListProps): ReactElement => {
    return (
        <div className={ makeClassname('paper', style['flexible-list'], className) } { ...props }>
            { items.map((item) => {
                return (
                    <div className={ itemClassName }>
                        { item }
                    </div>
                )
            }) }
        </div>
    )
}

export default FlexibleList