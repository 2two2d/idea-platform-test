import { lazy } from 'react'

import { LoadComponent } from '@settings/router/load-component'

const ViewTicketsPage = LoadComponent(lazy(async () => import('@pages/view-tickets')))

export {
  ViewTicketsPage
}
