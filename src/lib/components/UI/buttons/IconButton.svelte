<script>
	export let href = null;
	export let target = '_blank';
	export let type = 'a';
	export let disabled = false;
	export let theme = 'primary'; // primary, secondary, tertiary
	export let variant = 'icon'; // icon, text
	export let className = '';
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	target={href ? target : null}
	type={href ? null : type}
	href={href ? href : null}
	on:click
	{disabled}
	class="icon-button {theme} {variant} {className}"
	role={href ? 'link' : 'button'}
>
	<slot />
</svelte:element>

<style>
	.icon-button {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		transition: all ease-in-out 100ms;
		cursor: pointer;
	}

	.icon-button:active {
		transition: 100ms;
	}

	.icon-button:disabled {
		cursor: default;
	}

	.icon-button.secondary {
		background-color: white;
		color: #151616;
		align-items: center;

		padding: 12px 24px;
		border-radius: 50px;

		&:hover {
			background-color: var(--primary-clr);
			color: white;
			font-weight: 400;
		}
	}

	.icon-button.header {
		line-height: 3.5;
	}

	.icon-button.header:hover {
		color: var(--primary-clr);
		font-weight: 400;
	}

	.icon-button.header:hover :global(.icon-background) {
		background-color: var(--primary-clr);
	}

	.icon-button.header:hover :global(.icon-background > svg path) {
		fill: white;
	}

	.icon-button.secondary:hover :global(svg path) {
		fill: white;
	}

	:global(.icon-button svg path) {
		fill: var(--logo-color);
	}

	:global(.social) {
		width: 24px;
		height: 24px;
	} 
</style>
