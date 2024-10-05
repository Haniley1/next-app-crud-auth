import { useState } from "react"

export type UseBoolStateReturn = [boolean, VoidFunction, VoidFunction, VoidFunction]

export const useBoolState = (value = false): UseBoolStateReturn => {
  const [bool, setBool] = useState(value)

  const setTrue = () => setBool(true)
  const setFalse = () => setBool(false)
  const toggle = () => setBool(!bool)

  return [bool, setTrue, setFalse, toggle]
}