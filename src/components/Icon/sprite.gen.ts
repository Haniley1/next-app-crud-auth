export interface SpritesMap {
  arrows: 'sign-in'
  general: 'logo-colored' | 'profile-card' | 'trash'
  users: 'user-add' | 'user-delete' | 'user'
}
export const SPRITES_META: {
  [Key in keyof SpritesMap]: {
    filePath: string
    items: Record<
      SpritesMap[Key],
      {
        viewBox: string
        width: number
        height: number
      }
    >
  }
} = {
  arrows: {
    filePath: 'arrows.b4984b22.svg',
    items: {
      'sign-in': {
        viewBox: '0 -0.5 25 25',
        width: 800,
        height: 800,
      },
    },
  },
  general: {
    filePath: 'general.3fd6e78f.svg',
    items: {
      'logo-colored': {
        viewBox: '0 0 120 120',
        width: 120,
        height: 120,
      },
      'profile-card': {
        viewBox: '0 0 24 24',
        width: 800,
        height: 800,
      },
      trash: {
        viewBox: '0 0 24 24',
        width: 800,
        height: 800,
      },
    },
  },
  users: {
    filePath: 'users.56c5ad28.svg',
    items: {
      'user-add': {
        viewBox: '0 0 24 24',
        width: 800,
        height: 800,
      },
      'user-delete': {
        viewBox: '0 0 24 24',
        width: 800,
        height: 800,
      },
      user: {
        viewBox: '0 0 24 24',
        width: 800,
        height: 800,
      },
    },
  },
}
