import { useCallback, useState } from "react"

export type UseBoolStateReturn = [boolean, VoidFunction, VoidFunction, VoidFunction]

export const useBoolState = (value = false): UseBoolStateReturn => {
  const [bool, setBool] = useState(value)

  const setTrue = useCallback(() => setBool(true), [])
  const setFalse = useCallback(() => setBool(false), [])
  const toggle = useCallback(() => setBool(!bool), [bool])

  return [bool, setTrue, setFalse, toggle]
}