import {ReactElement} from "react";
import {IDetailedProps} from "@shared/interface";

import style from "./index.module.scss"
import {makeClassname} from "@shared/utils";

type ITicketNotFoundCard = IDetailedProps<HTMLDivElement>

const TicketNotFoundCard = ({ className, ...props }: ITicketNotFoundCard): ReactElement => {
    return (
        <div className={ makeClassname(style['ticket-card'], className) } { ...props }>
            <p className={ style['ticket-card_title'] }>
                Билеты не найдены!
            </p>
        </div>
    )
}

export default TicketNotFoundCard