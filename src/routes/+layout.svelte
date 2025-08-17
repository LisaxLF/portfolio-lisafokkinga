<script>
    import HeaderComponent from '$lib/components/layout/Header.svelte';
    import FooterComponent from '$lib/components/layout/Footer.svelte';

    let isVisible = false

    function handleFooterVisibility(visible) {
        isVisible = visible

        console.log(visible);
        
    }
</script>

<HeaderComponent state={isVisible ? 'visible' : 'hidden'} />

<slot />

<FooterComponent on:visible={(e) => handleFooterVisibility(e.detail)} />
