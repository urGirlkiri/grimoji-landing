export const platforms = [
    { name: 'App Store', badge: 'https://img.shields.io/badge/App_Store-0A84FF?style=for-the-badge&logo=app-store&logoColor=white', url: 'https://testflight.apple.com/join/8ryNgWCU' },
    { name: 'Playstore', badge: 'https://img.shields.io/badge/Google_Play-0F9D58?style=for-the-badge&logo=googleplay&logoColor=white', url: 'https://play.google.com/store/apps/details?id=io.grimoji.game' },
    { name: 'macOS', badge: 'https://img.shields.io/badge/macOS-000000?style=for-the-badge&logo=apple&logoColor=white', url: 'https://testflight.apple.com/join/8ryNgWCU' },
    { name: 'Microsoft Store', badge: 'https://img.shields.io/badge/Microsoft_Store-0078D4?style=for-the-badge&logo=data:image/svg%2Bxml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MHB4IiBoZWlnaHQ9IjUwcHgiPjxwYXRoIGQ9Ik00IDRIMjRWMjRINHpNMjYgNEg0NlYyNEgyNnpNNCAyNkgyNFY0Nkg0ek0yNiAyNkg0NlY0NkgyNnoiLz48L3N2Zz4=&logoColor=white', url: 'https://apps.microsoft.com/detail/9PFZ6M6XMQ2P' },
    { name: 'Snapcraft', badge: 'https://img.shields.io/badge/Snap_Store-E95420?style=for-the-badge&logo=snapcraft&logoColor=white', url: 'https://snapcraft.io/grimoji' },
    { name: 'Web', badge: 'https://img.shields.io/badge/Web-414141?style=for-the-badge&logo=googlechrome&logoColor=white', url: 'https://play.grimoji.io' },
    { name: 'Itch.io', badge: 'https://img.shields.io/badge/Itch.io-FA5C5C?style=for-the-badge&logo=itch.io&logoColor=white', url: 'https://urgirlkiri.itch.io/grimoji' },
    { name: 'GitHub Releases', badge: 'https://img.shields.io/badge/GitHub_Releases-181717?style=for-the-badge&logo=github&logoColor=white', url: 'https://github.com/urGirlkiri/grimoji/releases' },

];

export type PlatformKey = keyof typeof platforms;