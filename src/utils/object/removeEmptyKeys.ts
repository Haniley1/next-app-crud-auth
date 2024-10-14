export function removeEmptyKeys<T extends Record<string, unknown>>(obj: T): T {
  const newObj = { ...obj }

  Object.keys(newObj).forEach((key) => {
    if (
      newObj[key] === undefined ||
      newObj[key] === null ||
      newObj[key] === ''
    ) {
      delete newObj[key]
    }
  })

  return newObj
}