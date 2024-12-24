import {PropsWithChildren, ReactElement} from "react";
import {IDetailedProps} from "@shared/interface";
import {makeClassname} from "@shared/utils";

interface ILayoutWithSidebarProps extends IDetailedProps<HTMLDivElement>, PropsWithChildren {
    sidebar: ReactElement
}

const LayoutWithSidebar = ({ children, sidebar, className, ...props }: ILayoutWithSidebarProps): ReactElement => {
    return (
        <div className={makeClassname('relative', className)} {...props}>
            <div className="w-[200px] h-auto absolute -left-[240px]">
                {sidebar}
            </div>

            {children}
        </div>
    )
}

export default LayoutWithSidebar