import type { User } from "api/models";

export const getAvatarSrc = async (avatar: string | FileList): Promise<string | null> => {
  if (typeof avatar === 'string') {
    return avatar
  }

  const file = avatar.item(0)

  if (!file) return null

  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
  
    reader.onload = () => resolve(reader.result?.toString() || null)
    reader.onerror = reject
  })

}
