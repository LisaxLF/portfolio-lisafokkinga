<script>
    import LisaLogo from "$lib/assets/logos/lisa-logo.svelte";
    import IconButton from "../UI/buttons/IconButton.svelte";

    export let state = '';
</script>

<header class="{state}">
    <nav>
        <LisaLogo />
        <ul class="header__nav">
            <li><a href="/projects" class="header__link">Projects</a></li>
            <li><a href="/about" class="header__link">About</a></li>
            <li><a href="/contact" class="header__link">Contact</a></li>
        </ul>
        <IconButton href="src/lib/assets/downloads/CV-Lisa.pdf" className="header" download>
            Download CV
            <div class="icon-background">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.781 13.0251C14.781 13.3457 14.521 13.6057 14.2003 13.6057L7.81321 13.6057L7.81321 7.21857C7.81321 6.89789 8.07317 6.63793 8.39385 6.63793C8.71454 6.63793 8.9745 6.89789 8.9745 7.21857L8.9745 11.6233L19.0156 1.58215C19.2424 1.35539 19.61 1.35539 19.8368 1.58215C20.0635 1.80891 20.0635 2.17655 19.8368 2.40331L9.79567 12.4444L14.2003 12.4444C14.521 12.4444 14.781 12.7044 14.781 13.0251Z" fill="var(--reverse-clr)"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.853845 10.7021C0.849346 10.7021 0.845699 10.7058 0.845703 10.7103C0.845775 10.8046 0.847097 10.8987 0.849654 10.9925C0.847097 11.0862 0.845775 11.1803 0.845703 11.2746C0.845699 11.2791 0.849346 11.2828 0.853845 11.2828C0.85817 11.2828 0.861743 11.2862 0.861983 11.2905C1.15631 16.5943 5.40517 20.8432 10.709 21.1375C10.7133 21.1378 10.7167 21.1413 10.7167 21.1457C10.7167 21.1502 10.7204 21.1538 10.7249 21.1538C10.8192 21.1537 10.9133 21.1524 11.0071 21.1499C11.1008 21.1524 11.1949 21.1537 11.2892 21.1538C11.2937 21.1538 11.2974 21.1502 11.2974 21.1457C11.2974 21.1413 11.3008 21.1378 11.3051 21.1375C16.6115 20.8431 20.8619 16.5902 21.1526 11.2828C21.1701 10.9626 20.9085 10.7021 20.5878 10.7021C20.2671 10.7021 20.009 10.9628 19.9893 11.2829C19.6954 16.0477 15.8101 19.8406 11.0071 19.9881C6.10687 19.8376 2.16186 15.8926 2.01145 10.9924C2.15889 6.18945 5.95186 2.30413 10.7166 2.01025C11.0367 1.9905 11.2974 1.73242 11.2974 1.41174C11.2974 1.09106 11.0369 0.829416 10.7167 0.84695C5.40928 1.13759 1.15645 5.38799 0.861983 10.6944C0.861743 10.6987 0.85817 10.7021 0.853845 10.7021Z" fill="var(--reverse-clr)"/>
                </svg>
            </div>
        </IconButton>
    </nav>
</header>

<style>
    header {
        position: sticky;
        z-index: 1000;
        width: 100%;
        top: 0;
        backdrop-filter: blur(10px);
        padding: 1.5rem var(--section-padding);
        transition: transform 400ms ease-in-out;

        display: flex;
        justify-content: center;
        align-self: start;

        &.visible {
            transform: translateY(-100%);
        }
    }

    header nav {
        width: 100%;
        max-width: var(--max-width);
        display: flex;
        justify-content: space-between;
        align-items: center;

        height: 3.75rem;
    }

    header ul {
        display: flex;
        gap: 2.5rem;
    }

    header ul li, a {
        list-style: none;
        text-decoration: none;

        &:hover {
            color: var(--primary-clr);
            font-weight: 400;
        }
    }

    .icon-background {
        width: 24px;
        height: 24px;

        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        border-radius: 50%;
    }
</style>