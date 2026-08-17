<script lang="ts">
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Grimoji | Match and Merge Emojis Puzzle Game</title>
	<meta
		name="description"
		content="Merge magical elements on a dark runic grid. Discover 800+ unique emoji recipes in Grimoji, the ultimate gothic alchemy puzzle game combining 2048 and match-3 mechanics."
	/>
	<meta
		name="keywords"
		content="Grimoji, gothic logic, emoji alchemy, 2048 merge puzzle, match 3 games, sliding tile, casual magic, Ghetto Coders, Christin Nyakanyanga"
	/>
	<link rel="canonical" href="https://grimoji.io" />

	<meta property="og:site_name" content="Grimoji" />
	<meta property="og:title" content="Grimoji | Match and Merge Emojis Puzzle Game" />
	<meta property="og:url" content="https://grimoji.io/" />

	<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<link rel="shortcut icon" href="/favicon.ico" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<meta name="apple-mobile-web-app-title" content="Grimoji" />
	<meta name="application-name" content="Grimoji" />
	<link rel="manifest" href="/site.webmanifest" />

	<!-- eslint-disable svelte/no-at-html-tags, no-useless-escape -->
	{@html `
    <script type="application/ld+json">
    [
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Grimoji",
        "url": "https://grimoji.io/"
      },
      {
        "@context": "https://schema.org",
        "@type": "VideoGame",
        "name": "Grimoji",
        "url": "https://grimoji.io",
        "sameAs": [
          "https://www.wikidata.org/wiki/Q141106820",
          "https://www.igdb.com/games/grimoji",
          "https://www.youtube.com/@GhettoCoders"
        ],
        "description": "A gothic alchemy puzzle game blending grid-sliding mechanics of 2048 with match-3 chain reactions.",
        "genre": ["Puzzle", "Strategy", "Casual," "Logic"],
        "author": {
          "@type": "Person",
          "name": "Christin Nyakanyanga"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Ghetto Coders"
        },
        "applicationCategory": "Game",
      "operatingSystem": "Android, IOS, Windows, Linux, MacOS"
      }
    ]
    \<\/script>
  `}
	<!-- eslint-enable svelte/no-at-html-tags, no-useless-escape -->
</svelte:head>

{@render children()}
