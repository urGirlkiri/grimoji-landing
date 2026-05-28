<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<title>Grimoji |  Gothic Emoji Alchemy Puzzle Game</title>
	<meta
		name="description"
		content="Merge magical elements on a dark runic grid. Discover 800+ unique emoji recipes in Grimoji, the ultimate gothic alchemy puzzle game combining 2048 and match-3 mechanics."
	/>
	<meta
		name="keywords"
		content="Grimoji, gothic logic, emoji alchemy, 2048 merge puzzle, match 3 games, sliding tile, casual magic, Ghetto Coders, Christin Nyakanyanga"
	/>
	<link rel="canonical" href="https://grimoji.io" />
	<link rel="icon" href={favicon} />

	{@html `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "VideoGame",
      "name": "Grimoji",
      "url": "https://grimoji.io",
      "description": "A gothic alchemy puzzle game blending grid-sliding mechanics of 2048 with match-3 chain reactions.",
      "genre": ["Puzzle Game", "Logic Game"],
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
    <\/script>
  `}
</svelte:head>

{@render children()}
