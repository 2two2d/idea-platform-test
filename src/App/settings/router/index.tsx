import {ReactElement} from "react";
import {Route, Routes} from "react-router";
import BaseLayout from "../../widgets/layout/base";
import {ViewTicketsPage} from "./lazy-pages";
import {PageTitle} from "@shared/enum/page-title";
import {ERoutes} from "@shared/enum/routes"
import {useNavigateDefault} from "@shared/utils/use-navigate-default";

const Router = (): ReactElement => {
    useNavigateDefault([ERoutes.TICKETS, ERoutes.LIST])

    return (
        <Routes>
            <Route path={ ERoutes.TICKETS } element={<BaseLayout/>}>
                <Route path={ ERoutes.LIST } element={<ViewTicketsPage title={ PageTitle.TICKETS } />} />
            </Route>
        </Routes>
    )
}

export default Router