import {ReactNode} from "react";
import {IPageProps} from "@shared/interface";
import {useSetPageTitle} from "@shared/utils/set-title";
import TicketList from "@widgets/ticket-list";
import {useTicketsGetAllPresenter} from "@entities/ticket/presenters/get-all";
import FilterTickets from "@widgets/tickets-filter";
import AirplaneLogo from "@features/ui/logos/airplane";
import LayoutWithSidebar from "@widgets/layout/with-sidebar";

const ViewTicketsList = (props: IPageProps): ReactNode => {
    useSetPageTitle(props.title)

    const { tickets } = useTicketsGetAllPresenter()

    return (
        <div className="flex flex-col items-center gap-5">
            <AirplaneLogo />

            <LayoutWithSidebar sidebar={
                    <FilterTickets/>
            }>
               <TicketList tickets={ tickets }/>
            </LayoutWithSidebar>
        </div>
    )
}

export default ViewTicketsList