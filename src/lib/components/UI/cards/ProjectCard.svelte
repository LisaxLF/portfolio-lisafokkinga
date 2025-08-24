<script>
	import CircleGradient from '../CircleGradient.svelte';

	export let href = '';
	export let className = '';
	export let projectTitle = '';
	export let image = '';

	let imageEl;
	let cursorEl;
	let isActive = false;

	function handleMouseEnter(event) {
		if (!event.currentTarget.classList.contains('swiper-slide-active')) return;
		isActive = true;
		moveCursor(event.clientX, event.clientY);
	}

	function handleMouseMove(event) {
		if (!event.currentTarget.classList.contains('swiper-slide-active')) return;

		if (!imageEl) return;
		const rect = event.currentTarget.getBoundingClientRect();
		console.log(rect);
		const mouseX = event.clientX - rect.left;
		const mouseY = event.clientY - rect.top;
		moveCursor(mouseX, mouseY);

		const halfWidth = rect.width / 2;
		const halfHeight = rect.height / 2;
		const centerX = rect.left + halfWidth;
		const centerY = rect.top + halfHeight;
		const deltaX = event.clientX - centerX;
		const deltaY = event.clientY - centerY;
		const rx = deltaY / halfHeight;
		const ry = deltaX / halfWidth;
		const degree = 10;
		imageEl.style.transform = `perspective(600px) rotate3d(${-rx}, ${ry}, 0, ${degree}deg)`;
	}

	function handleMouseLeave(event) {
		if (!event.currentTarget.classList.contains('swiper-slide-active')) return;
		if (!cursorEl) return;

		setTimeout(() => {
			isActive = false;
			if (imageEl) imageEl.style.transform = 'perspective(600px) rotate3d(0,0,0,0deg)';
		}, 200);
	}

	function moveCursor(x, y) {
		if (!cursorEl) return;
		cursorEl.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
		cursorEl.style.opacity = '1';
	}
</script>

<a
	{href}
	class="project__card {className}"
	on:mouseenter={handleMouseEnter}
	on:mousemove={handleMouseMove}
	on:mouseleave={handleMouseLeave}
>
	<CircleGradient id="projects" {className} />

	{#if image}
		<img bind:this={imageEl} src={image} alt={projectTitle} class="card__image" />
	{/if}

	<div bind:this={cursorEl} class="cursor {isActive ? 'active' : ''} ">
		{projectTitle}
		<svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M5.22584 1.48385C5.22584 1.16316 5.48581 0.903198 5.80649 0.903198L12.1936 0.903199V7.29034C12.1936 7.61102 11.9337 7.87099 11.613 7.87099C11.2923 7.87099 11.0323 7.61102 11.0323 7.29034V2.88566L0.99123 12.9268C0.764472 13.1535 0.396826 13.1535 0.170068 12.9268C-0.0566894 12.7 -0.0566894 12.3324 0.170068 12.1056L10.2112 2.0645L5.80649 2.0645C5.48581 2.0645 5.22584 1.80453 5.22584 1.48385Z"
				fill="var(--reverse-clr)"
			/>
		</svg>
	</div>
</a>

<style>
	.project__card {
		cursor: none;
		display: flex;
		justify-content: center;
		align-items: center;
		height: fit-content;
		position: relative;
	}

	.card__image {
		width: 100%;
		transition: transform 0.2s ease-out;
		will-change: transform;
	}

	.cursor {
		position: absolute;
		pointer-events: none;
		border-radius: 99px;
		background-color: var(--primary-clr);
		color: white;
		font-size: 0.9rem;
		z-index: 5;
		padding: 0.6rem 1.2rem;
		white-space: nowrap;
		opacity: 0;
		transform: translate(-50%, -50%) scale(0);
		transition: all 300ms ease;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;

		&.active {
			transform: translate(-50%, -50%) scale(1);
			scale: 0.66;
			opacity: 1;
			width: auto;
			height: auto;
		}
	}
</style>
