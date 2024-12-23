import {ReactElement} from "react";
import {ITicketDto} from "@entities/ticket/interface";

import style from "./index.module.scss"
import {IDetailedProps} from "@shared/interface";
import {makeClassname} from "@shared/utils";
import Button from "@shared/ui/components/button";
import {formatPrice} from "@shared/utils/format-price";
import {ECurrency} from "@shared/enum/currency";
import FlightDataBlock from "@features/ticket/ticket-card/flight-data-block";
import TransfersQuantity from "@features/ticket/ticket-card/transfers-quantity";

interface ITicketCardProps extends IDetailedProps<HTMLDivElement> {
    ticket: ITicketDto
}

const TicketCard = ({ ticket, className, ...props }: ITicketCardProps): ReactElement => {
    return (
        <div className={ makeClassname(style['ticket-card'], className) } { ...props }>
            <div className={ style['ticket-card_left-block'] }>
                <img src={ ticket.airlines.logo }
                     className={ style['ticket-card_left-block_logo'] }
                     alt="img"/>

                <Button text={<p>Купить <br/> за ${formatPrice(ticket.price, ECurrency.RUB)}</p>} className={""}/>
            </div>
            <div className={ style['ticket-card_right-block'] }>
                <FlightDataBlock airport={ ticket.airport_departure } datetime={ ticket.datetime_departure }/>

                <TransfersQuantity transfers={ ticket.transfers }/>

                <FlightDataBlock airport={ ticket.airport_arrival }
                    datetime={ ticket.datetime_arrival }
                    className="text-end"
                />
            </div>
        </div>
    )
}

export default TicketCard