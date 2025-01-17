import { makeClassname } from '@shared/utils'

import type { PropsWithChildren, ReactElement } from 'react'

import type { IDetailedProps } from '@shared/interface'

interface ILayoutWithSidebarProps extends IDetailedProps<HTMLDivElement>, PropsWithChildren {
  sidebar: ReactElement
}

const LayoutWithSidebar = ({ children, sidebar, className, ...props }: ILayoutWithSidebarProps): ReactElement => {
  return (
    <div className={ makeClassname('relative', className) } { ...props }>
      <div className="w-[200px] h-auto absolute -left-[240px]">
        { sidebar }
      </div>

      { children }
    </div>
  )
}

export default LayoutWithSidebar
