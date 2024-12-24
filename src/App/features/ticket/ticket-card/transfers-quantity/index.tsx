import {ReactElement} from "react";
import {IDetailedProps} from "@shared/interface";
import {ITicketDto} from "@entities/ticket";
import {makeClassname} from "@shared/utils";
import {generateDeclinatedTransfersQuantity} from "@shared/utils/generate-declinated-transfers-quantity";
import Icon from "@shared/ui/components/icon";

import style from "./index.module.scss"

interface ITransfersQuantityProps extends IDetailedProps<HTMLDivElement> {
    transfers: ITicketDto['transfers']
}

const TransfersQuantity = ({ transfers, className, ...props }: ITransfersQuantityProps): ReactElement => {
    return (
        <div className={ makeClassname(style['transfers-quantity'], className) } { ...props }>
            { generateDeclinatedTransfersQuantity(transfers).toUpperCase() }

            <Icon source="airplane" className={ style['transfers-quantity_icon'] }/>
        </div>
    )
}

export default TransfersQuantity