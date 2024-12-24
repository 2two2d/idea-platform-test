import { useSearchParams } from 'react-router'

import type { ESearchParams } from '@shared/enum/search-params'

type IUseSetSearchParamsWithReturn = (
  key: ESearchParams,
  value: string,
) => void

const useSetSearchParamsWithPrev = (): IUseSetSearchParamsWithReturn => {
  const [_, setSearchParams] = useSearchParams()

  return (key: ESearchParams, value: string) => {
    setSearchParams((prev) => {
      prev.set(key, value)
      return prev
    })
  }
}

export {
  useSetSearchParamsWithPrev
}
