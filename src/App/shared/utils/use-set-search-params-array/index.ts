import { useSearchParams } from 'react-router'

import { truthy } from '@shared/utils'

import type { ESearchParams } from '@shared/enum/search-params'

type IUseSetSearchParamsArrayReturn = (
  key: ESearchParams,
  value: string,
  keepPrevious?: boolean,
) => void

const useSetSearchParamsArray = (): IUseSetSearchParamsArrayReturn => {
  const [searchParams, setSearchParams] = useSearchParams()

  return (key: ESearchParams, value: string, keepPrevious = false): void => {
    const currentValue = searchParams.get(key)

    if (keepPrevious && truthy(currentValue)) {
      const valuesArr = Array.from(new Set([...currentValue.split(',')]))

      if (valuesArr.includes(value)) {
        const valuesArrWithExcludedValue = valuesArr.filter((item) => item !== value).join(',')

        setSearchParams((prev) => ({ ...Object.fromEntries(prev.entries()), [key]: valuesArrWithExcludedValue }))
      } else {
        setSearchParams((prev) => ({ ...Object.fromEntries(prev.entries()), [key]: [...valuesArr, value].join(',') }))
      }
    } else {
      setSearchParams((prev) => ({ ...Object.fromEntries(prev.entries()), [key]: value }))
    }
  }
}

export {
  useSetSearchParamsArray
}
