<script>
	import { onMount } from "svelte";
    import Tag from "../tags/Tag.svelte";
    import CircleGradient from "../CircleGradient.svelte";

    export let projectTitle = "";
    export let image = "";
    export let href = "";
    export let className = "";
</script>

<a {href} class="project__card {className}">
    <CircleGradient id= projects { className }/>

    {#if image}
        <img src={image} alt={projectTitle} class="card__image" />
    {/if}
</a>

<style>
    .project__card {
        display: flex;
        justify-content: center;
        align-items: center;

        height: fit-content;

        transition: all ease-in-out 300ms;
    }

    img {
        width: 100%;
    }   

</style>