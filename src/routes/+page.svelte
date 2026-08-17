<script>
	import { platforms } from '$lib';
	import { resolve } from '$app/paths';
</script>

<main
	class="relative flex min-h-screen flex-col justify-between bg-void-black bg-[url('/images/large_game.png')] bg-cover bg-center font-caudex"
>
	<div
		class="top-1/3 left-1/2 absolute rounded-full w-150 h-100 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
	></div>

	<header class="z-10 flex justify-between items-center mx-auto px-4 py-6 w-full max-w-6xl">
		<div
			class="font-eagle-lake flex flex-row items-center justify-center gap-2 text-xl font-bold tracking-wider text-moonlight"
		>
			<img src="favicon.svg" width="64" height="64" class="-mt-2" alt="Favicon" />
		</div>
		<h1
			class="font-eagle-lake mb-6 -ml-8 text-4xl font-extrabold tracking-tight text-moonlight md:text-6xl"
		>
			Grimoji
		</h1>
		<span
			class="rounded-full border border-twilight bg-midnight px-3 py-1 text-xs tracking-widest text-slate uppercase"
		>
			Live
		</span>
	</header>

	<section
		class="z-10 flex flex-col justify-center items-center mx-auto px-6 py-20 max-w-4xl text-center grow"
	>
		<p class="mx-auto mt-24 mb-10 max-w-xl text-base leading-relaxed text-moonlight md:text-lg">
			A gothic alchemy puzzle game combining the grid-sliding loops of <span
				class="font-semibold text-true-white">2048</span
			>
			with explosive <span class="font-semibold text-true-white">match-3</span> chain reactions.
		</p>

		<div class="flex sm:flex-row flex-col justify-center items-center gap-4 w-full sm:w-auto">
			<a
				href="https://github.com/urGirlkiri/grimoji"
				target="_blank"
				rel="noopener noreferrer"
				class="w-full rounded-xl border border-twilight bg-midnight px-8 py-4 text-center font-medium tracking-wide text-mist transition-all duration-200 hover:bg-twilight hover:text-true-white sm:w-64"
			>
				Source Code
			</a>
			<a
				href="https://play.grimoji.io"
				target="_blank"
				rel="noopener noreferrer"
				class="w-full rounded-xl bg-dusk px-8 py-4 text-center font-bold tracking-wide text-true-white shadow-mist/20 shadow-lg transition-all duration-200 hover:bg-mist sm:w-64"
			>
				Play Demo
			</a>
		</div>
		<div class="flex flex-wrap justify-center items-center gap-3 p-4">
			{#each platforms as platform (platform.name)}
				<a
					id={platform.name}
					href={platform.url}
					target="_blank"
					rel="external noopener noreferrer"
					class="rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 hover:scale-105 transition-transform duration-200"
					aria-label="Play Grimoji on {platform.name}"
				>
					<img
						src={platform.badge}
						alt="{platform.name} Badge"
						class="shadow-sm w-auto h-8 object-contain"
					/>
				</a>
			{/each}
		</div>
	</section>

	<footer class="z-10 w-full border-t border-midnight bg-midnight/30 py-6">
		<div
			class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs text-slate sm:flex-row"
		>
			<p class="flex gap-1">
				<a href={resolve('/privacy')} class="underline">Privacy Policy</a>
				<span>|</span>
				<a href="https://ghettocoders.com" target="_blank" rel="noopener noreferrer"
					>&copy; 2026 Ghetto Coders.</a
				>
			</p>
			<p>
				Designed & Developed by
				<a
					href="https://girlkiri.com"
					target="_blank"
					rel="noopener noreferrer"
					class="font-medium text-moonlight"
				>
					Christin Nyakanyanga
				</a>
			</p>
		</div>
	</footer>
</main>
