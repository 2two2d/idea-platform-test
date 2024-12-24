import {MAX_FLIGHTS} from "@shared/consants";
import {ICheckboxItem} from "@shared/interface";
import {generateDeclinatedTransfersQuantity} from "@shared/utils/generate-declinated-transfers-quantity";
import {ECheckboxFilter} from "@shared/enum/checkbox-filter";

const CHECKBOX_ITEMS = [({ value: ECheckboxFilter.ALL, label: "Все", isChecked: true } as ICheckboxItem)].
concat(Array(MAX_FLIGHTS + 1).fill('').map((_, i): ICheckboxItem => {
    return { value: `${i}`, label: generateDeclinatedTransfersQuantity(i), isChecked: false }
}))

export {
    CHECKBOX_ITEMS
}
