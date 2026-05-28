export const palette = {
  voidBlack: '#0e0e12',
  midnight: '#1a1a24',
  twilight: '#333346',
  dusk: '#535373',

  slate: '#8080a4',
  mist: '#a6a6bf',
  moonlight: '#e6e6ec',
  moonlightSoft: '#eee6e6ec',
  trueWhite: '#ffffff',

  crimson: '#d10841',
  magicCyan: '#d9f8fa',
  magicCyanDeep: '#b3edfc',
} as const;

export type PaletteKey = keyof typeof palette;