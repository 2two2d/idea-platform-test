import {LoadComponent} from "@settings/router/load-component";
import {lazy} from "react";

const ViewTicketsPage = LoadComponent(lazy(async () => import('@pages/view-tickets')))

export {
    ViewTicketsPage
}