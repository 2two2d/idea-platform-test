import {ReactElement} from "react";
import {IDetailedProps} from "@shared/interface";
import {makeClassname} from "@shared/utils";
import style from "./index.module.scss"

interface IButtonProps extends IDetailedProps<HTMLButtonElement> {
    text: string | ReactElement
    type?: "button" | "submit" | "reset"
}

const Button = ({ text, className, ...props }: IButtonProps): ReactElement => {
    return (
        <button
            className={ makeClassname(style.button, className) }
            { ...props }
        >
            { text }
        </button>
    )
}

export default Button