import {ReactNode} from "react";
import {IPageProps} from "@shared/interface";
import {useSetPageTitle} from "@shared/utils/set-title";
import TicketList from "@widgets/ticket-list";
import {useTicketsGetAllPresenter} from "@entities/ticket/presenters/get-all";

const ViewTicketsList = (props: IPageProps): ReactNode => {
    useSetPageTitle(props.title)

    const { tickets } = useTicketsGetAllPresenter({ chunks: 1 })

    return tickets && (
        <div>
            <TicketList tickets={ tickets }/>
        </div>
    )
}

export default ViewTicketsList