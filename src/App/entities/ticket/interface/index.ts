interface IAirport {
  id: string
  city: string
  abbreviation: string
}

interface IAirlines {
  id: string
  logo: string
}

interface ITicketDto {
  id: string
  airlines: IAirlines
  price: number
  transfers: number
  datetime_departure: string
  datetime_arrival: string
  airport_departure: IAirport
  airport_arrival: IAirport
}

export type {
  ITicketDto,
  IAirport
}
