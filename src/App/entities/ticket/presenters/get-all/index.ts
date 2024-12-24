import { useEffect, useMemo, useState } from 'react'

import { useSearchParams } from 'react-router'

import { getTicketsGetAllCase } from '@entities/ticket/use-case/get-all'

import { ESearchParams } from '@shared/enum/search-params'
import { falsy, truthy } from '@shared/utils'
import { ECheckboxFilter } from '@shared/enum/checkbox-filter'

import type { ITicketDto } from '@entities/ticket/interface'

interface IUseTicketsGetAllPresenterReturn {
  tickets: ITicketDto[]
}

const useTicketsGetAllPresenter = (): IUseTicketsGetAllPresenterReturn => {
  const [tickets, setTickets] = useState<ITicketDto[]>([])

  const [searchParams] = useSearchParams()

  const transfersParam = searchParams.get(ESearchParams.TRANSFERS)

  const transfersFilter: (number | string)[] = useMemo(() => {
    if (falsy(transfersParam)) return []

    return transfersParam.split(',').map((item: string) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
      if (item === ECheckboxFilter.ALL) return item

      return Number(item)
    })
  }, [transfersParam])

  useEffect(() => {
    getTicketsGetAllCase().then((res) => {
      setTickets(res)
    }).catch((error) => {
      console.error(error)
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
