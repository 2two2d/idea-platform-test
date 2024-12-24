import {ReactNode, useState} from "react";
import Toggle from "@shared/ui/components/toggle";
import {useGetCurrencyItems} from "./helpers/index.tsx"
import {makeClassname} from "@shared/utils";
import {IDetailedProps} from "@shared/interface";
import {ECurrency} from "@shared/enum/currency";

interface ICurrencyToggleProps extends IDetailedProps<HTMLDivElement> {
    handleClick?(value: ECurrency): void
}

const CurrencyToggle = ({ handleClick, className, ...props }: ICurrencyToggleProps): ReactNode => {
    const [currency, setCurrency] = useState<ECurrency>(ECurrency.RUB)

    const handleToggleClick = (value: ECurrency): void => {
        setCurrency(value)
        if (handleClick) handleClick(value)
    }

    const toggleItems = useGetCurrencyItems({ currency })


    return (
        <Toggle<ECurrency>
            items={ toggleItems }
            { ...props }
            onClick={ handleToggleClick }
            className={ makeClassname('w-[200px] p-2.5', className) }
        />
    )
}

export default CurrencyToggle