export const debounce = (func: Function, timeout = 300) => {
  let timer: number

  return (...args: unknown[]) => {
    window.clearTimeout(timer)
    timer = window.setTimeout(() => {
      func.apply(this, args)
    }, timeout)
  }
}