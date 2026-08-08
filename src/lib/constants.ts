export const platforms = [
    { name: 'Google Play', url: 'https://play.google.com/store/apps/details?id=io.grimoji.game', badge: 'https://img.shields.io/badge/Google_Play-0F9D58?style=for-the-badge&logo=googleplay&logoColor=white' },
    { name: 'Microsoft Store', url: 'https://apps.microsoft.com/detail/9PFZ6M6XMQ2P', badge: 'https://img.shields.io/badge/Microsoft_Store-0078D4?style=for-the-badge&logo=data:image/svg%2Bxml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MHB4IiBoZWlnaHQ9IjUwcHgiPjxwYXRoIGQ9Ik00IDRIMjRWMjRINHpNMjYgNEg0NlYyNEgyNnpNNCAyNkgyNFY0Nkg0ek0yNiAyNkg0NlY0NkgyNnoiLz48L3N2Zz4=&logoColor=white)](https://apps.microsoft.com/detail/9PFZ6M6XMQ2P' },
    { name: 'Snap Store', url: 'https://snapcraft.io/grimoji', badge: 'https://img.shields.io/badge/Snap_Store-E95420?style=for-the-badge&logo=snapcraft&logoColor=white' },
    { name: 'Itch.io', url: 'https://urgirlkiri.itch.io/grimoji', badge: 'https://img.shields.io/badge/Itch.io-FA5C5C?style=for-the-badge&logo=itch.io&logoColor=white' }
];

export type PlatformKey = keyof typeof platforms;