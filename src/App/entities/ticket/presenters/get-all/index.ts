import {ITicketDto} from "@entities/ticket/interface";
import {useTicketsGetAllCase} from "@entities/ticket/use-case/get-all";
import {useEffect, useState} from "react";


interface IUseTicketsGetAllPresenterProps {
    chunks: number
}

interface IUseTicketsGetAllPresenterReturn {
    tickets: ITicketDto[]
}

const CHUNK_SIZE = 5

const useTicketsGetAllPresenter = ({ chunks }: IUseTicketsGetAllPresenterProps): IUseTicketsGetAllPresenterReturn => {
    const [tickets, setTickets] = useState<ITicketDto[]>()

    useEffect(() => {
        useTicketsGetAllCase().then((res) => {
            setTickets(res)
        })
    }, [])

    const ticketsChunk = tickets ? tickets.slice(0, chunks * CHUNK_SIZE) : []

    return {
        tickets: ticketsChunk
    }
}

export {
    useTicketsGetAllPresenter
}