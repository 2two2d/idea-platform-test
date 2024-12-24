import {ITicketDto} from "@entities/ticket/interface";
import {useTicketsGetAllCase} from "@entities/ticket/use-case/get-all";
import {useEffect, useMemo, useState} from "react";
import {useSearchParams} from "react-router";
import {ESearchParams} from "@shared/enum/search-params";
import {falsy, truthy} from "@shared/utils";
import {ECheckboxFilter} from "@shared/enum/checkbox-filter";

interface IUseTicketsGetAllPresenterReturn {
    tickets: ITicketDto[]
}

const useTicketsGetAllPresenter = (): IUseTicketsGetAllPresenterReturn => {
    const [tickets, setTickets] = useState<ITicketDto[]>([])

    const [searchParams] = useSearchParams()

    const transfersParam = searchParams.get(ESearchParams.TRANSFERS)

    const transfersFilter: (number | string)[] = useMemo(() => {
        if (falsy(transfersParam)) return []

        return transfersParam.split(',').map((item) => {
            if (item === ECheckboxFilter.ALL) return item

            return Number(item)
        })
    }, [transfersParam])

    useEffect(() => {
        useTicketsGetAllCase().then((res) => {
            setTickets(res)
        })
    }, [])

    const filteredTickets = useMemo(() => {
        if (truthy(transfersFilter.find((item) => item === ECheckboxFilter.ALL))) return tickets

        return tickets.filter((item) => {
            return transfersFilter.includes(Number(item.transfers))
        })
    }, [tickets, transfersFilter])

    return {
        tickets: filteredTickets
    }
}

export {
    useTicketsGetAllPresenter
}