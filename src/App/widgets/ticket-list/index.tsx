import {ReactElement} from "react";
import {IDetailedProps} from "@shared/interface";
import {ITicketDto} from "@entities/ticket/interface";
import {makeClassname, truthy} from "@shared/utils";
import TicketCard from "@features/ticket/ticket-card/base";
import TicketNotFoundCard from "@features/ticket/ticket-not-found-card";

interface ITicketListProps extends IDetailedProps<HTMLDivElement> {
    tickets: ITicketDto[]
}

const TicketList = ({ tickets, className, ...props }: ITicketListProps): ReactElement => {
    return (
        <div className={ makeClassname('flex flex-col items-center gap-5', className) } { ...props }>
            { truthy(tickets) ? tickets.map((item) => {
                return (
                    <TicketCard ticket={ item } key={ item.id }/>
                )
            }) : (
                <TicketNotFoundCard/>
            ) }
        </div>
    )
}

export default TicketList