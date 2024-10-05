import type { ParsedUrlQuery } from "querystring"

export type Overwrite<T, U> = Omit<T, keyof U> & U

export interface ParamsStatic extends ParsedUrlQuery {
  id: string
}