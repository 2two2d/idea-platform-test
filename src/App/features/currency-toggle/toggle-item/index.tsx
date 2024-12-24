import { ReactElement } from "react"

import style from "./index.module.scss"
import {makeClassname} from "@shared/utils";

interface ICourierTypeOptionProps {
    isActive: boolean,
    text: string,
    className?: string
}

const ToggleItem = ({ text, isActive, className }: ICourierTypeOptionProps): ReactElement => {
    return (
        <div className={ makeClassname(isActive ? style['card__active'] : style['card'], className) }>
            {text && <p>
                {text}
            </p>}
        </div>
    )
}

export default ToggleItem
