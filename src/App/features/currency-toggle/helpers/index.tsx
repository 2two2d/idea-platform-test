import {IToggleItem} from "@shared/ui/components/toggle"
import {ECurrency} from "@shared/enum/currency";
import ToggleItem from "@features/currency-toggle/toggle-item"

interface IUseCurrencyItemsProps {
    currency: ECurrency,
}

const useGetCurrencyItems = ({ currency }: IUseCurrencyItemsProps): IToggleItem<ECurrency>[] => {
    return [
        {
            element: <ToggleItem
                text="RUB"
                isActive={ currency === ECurrency.RUB }
                className="rounded-l-[4px]"
                />,
            elementEType: ECurrency.RUB
        },
        {
            element: <ToggleItem
                text="USD"
                isActive={ currency === ECurrency.USD }
                className="!border-x-0"
            />,
            elementEType: ECurrency.USD
        },
        {
            element: <ToggleItem
                text="EUR"
                isActive={ currency === ECurrency.EUR }
                className="rounded-r-[4px]"
            />,
            elementEType: ECurrency.EUR
        },
    ]
}

export {
    useGetCurrencyItems
}