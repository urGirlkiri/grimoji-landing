<script>
	import { palette } from '$lib/palette';
	let { class: className = '', children } = $props();
</script>

<main
	class={className}
	style:--void-black={palette.voidBlack}
	style:--midnight={palette.midnight}
	style:--twilight={palette.twilight}
	style:--dusk={palette.dusk}
	style:--slate={palette.slate}
	style:--mist={palette.mist}
	style:--moonlight={palette.moonlight}
	style:--true-white={palette.trueWhite}
	style:--crimson={palette.crimson}
	style:--magic-cyan={palette.magicCyan}
>
	{@render children?.()}
</main>