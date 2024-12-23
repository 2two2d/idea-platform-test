import {ITicketDto} from "@entities/ticket/interface";
import tickets from "@data/tickets.json"

const useTicketsGetAllCase = (): Promise<ITicketDto[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve(tickets as ITicketDto[])
            } catch (err) {
                reject(err)
            }
        }, +'500')
    })
}

export {
    useTicketsGetAllCase
}