import tickets from '@data/tickets.json'

import type { ITicketDto } from '@entities/ticket/interface'

const TIME_OUT = 500

const getTicketsGetAllCase = async (): Promise<ITicketDto[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(tickets as ITicketDto[])
      } catch (err) {
        reject(err)
      }
    }, TIME_OUT)
  })
}

export {
  getTicketsGetAllCase
}
