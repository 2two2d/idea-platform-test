import type { DetailedHTMLProps, HTMLProps } from 'react'

interface IPageProps {
  title: string
}

type IDetailedProps<T> = DetailedHTMLProps<HTMLProps<T>, T>

type ILogoProps = IDetailedProps<HTMLImageElement>

interface ICheckboxItem {
  label: string
  value: string
  isChecked: boolean
}

export type {
  IPageProps,
  IDetailedProps,
  ILogoProps,
  ICheckboxItem
}
