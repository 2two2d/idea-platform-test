import { Outlet } from 'react-router'

import type { ReactElement } from 'react'

const BaseLayout = (): ReactElement => {
  return (
    <div className="w-full m-auto pt-[80px]">
      <Outlet />
    </div>
  )
}

export default BaseLayout
