import {ICONS} from "@shared/ui/components/icon/state";
import { IIcon } from "./interface";
import {ReactNode} from "react";

const DEFAULT_SIZE_PX = 20

const Icon = ({ source, ...props }: IIcon): ReactNode => {
    const IconComponent = ICONS[source]

    const size =  DEFAULT_SIZE_PX * (props.size ?? 1)

    return (
        <IconComponent width={ size } height={ size } {...props}/>
    )
}

export default Icon