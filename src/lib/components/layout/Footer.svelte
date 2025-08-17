<script>
    import LisaLogo from "$lib/assets/logos/lisa-logo.svelte";
	import { on } from "svelte/events";
    import IconButton from "../UI/buttons/IconButton.svelte";
    import githubIcon from '$lib/assets/icons/github-icon.svg';
    import linkedinIcon from '$lib/assets/icons/linkedin-icon.svg';
    import mailIcon from '$lib/assets/icons/mail-icon.svg';
    import { onMount, createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher()
    let footerEl

    onMount(() => {
        const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                dispatch('visible', entry.isIntersecting)
            })
        },
        { threshold: 0.4 }
        )

        observer.observe(footerEl)
        return () => observer.disconnect()
    })
</script>

<footer bind:this={footerEl}>
    <div class="footer_container">
        <div class="footer_nav">
            <LisaLogo />
            <div class="footer_nav_wrapper">
                <h5>
                    You've explored the core, now let's shape the <span>future</span> together
                </h5>
                <ul class="header__nav">
                    <li><a href="/projects" class="header__link">Projects</a></li>
                    <li><a href="/about" class="header__link">About</a></li>
                    <li><a href="/contact" class="header__link">Contact</a></li>
                </ul>
            </div>
        </div>
        <div class="footer_contact">
            <p>© 2025 Lisa Fokkinga</p>
            <div class="footer_socials">
                <IconButton target="_blank" href="https://github.com/LisaxLF" theme="primary" variant="icon">
                    <svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M28 14C28 21.7319 21.7319 28 14 28C6.26801 28 0 21.7319 0 14C0 6.26801 6.26801 0 14 0C21.7319 0 28 6.26801 28 14ZM7.007 9.8C7.007 9.03 7.63 8.4 8.4 8.4H19.6C20.37 8.4 21 9.03 21 9.8V18.2C21 18.97 20.37 19.6 19.6 19.6H8.4C7.63 19.6 7 18.97 7 18.2L7.007 9.8ZM14 14.7L8.40001 11.2V18.2H19.6V11.2L14 14.7ZM14 13.3L8.40001 9.80001H19.6L14 13.3Z" fill="var(--logo-color)"/>
                    </svg>
                </IconButton>
                <IconButton target="_blank" href="https://github.com/LisaxLF" theme="primary" variant="icon">
                    <svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 0C21.7322 0 28 6.4259 28 14.3541C28 20.6947 23.9932 26.0735 18.4338 27.9733C17.724 28.1147 17.472 27.6665 17.472 27.2843C17.472 26.8111 17.4888 25.2655 17.4888 23.3447C17.4888 22.0063 17.0408 21.1328 16.5382 20.6876C19.656 20.332 22.932 19.1181 22.932 13.6049C22.932 12.0369 22.3888 10.7573 21.49 9.75215C21.6356 9.38955 22.1158 7.92953 21.3528 5.95273C21.3528 5.95273 20.1796 5.56811 17.507 7.42451C16.3884 7.10671 15.19 6.94681 14 6.94121C12.81 6.94681 11.613 7.10671 10.4958 7.42451C7.8204 5.56811 6.6444 5.95273 6.6444 5.95273C5.8842 7.92953 6.3644 9.38955 6.5086 9.75215C5.614 10.7573 5.0666 12.0369 5.0666 13.6049C5.0666 19.1041 8.3356 20.3366 11.445 20.6992C11.0446 21.0576 10.682 21.6899 10.556 22.6181C9.758 22.9849 7.7308 23.6197 6.482 21.4259C6.482 21.4259 5.7414 20.0467 4.3358 19.9459C4.3358 19.9459 2.9708 19.9278 4.2406 20.8182C4.2406 20.8182 5.1576 21.2592 5.7946 22.9182C5.7946 22.9182 6.6164 25.4801 10.5112 24.6121C10.5182 25.8119 10.5308 26.9427 10.5308 27.2843C10.5308 27.6637 10.2732 28.1077 9.5746 27.9747C4.011 26.0777 0 20.6961 0 14.3541C0 6.4259 6.2692 0 14 0Z" fill="var(--logo-color)"/>
                    </svg>
                </IconButton>
                <IconButton target="_blank" href="https://github.com/LisaxLF" theme="primary" variant="icon">
                    <svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                       <path d="M14.1934 0C6.46055 0 0.193359 6.26719 0.193359 14C0.193359 21.7328 6.46055 28 14.1934 28C21.9262 28 28.1934 21.7328 28.1934 14C28.1934 6.26719 21.9262 0 14.1934 0ZM10.2777 19.857H7.54883V11.1234H10.2777V19.857ZM8.83945 10.0297H8.81758C7.82773 10.0297 7.18789 9.3625 7.18789 8.51484C7.18789 7.65078 7.84961 7 8.85586 7C9.86211 7 10.4801 7.65078 10.502 8.51484C10.5074 9.35703 9.86758 10.0297 8.83945 10.0297ZM21.1934 19.857H18.098V15.3398C18.098 14.1586 17.6168 13.3492 16.5504 13.3492C15.7355 13.3492 15.2816 13.8961 15.0738 14.4211C14.9973 14.607 15.0082 14.8695 15.0082 15.1375V19.857H11.9402C11.9402 19.857 11.9785 11.8508 11.9402 11.1234H15.0082V12.4961C15.1887 11.8945 16.1676 11.0414 17.7316 11.0414C19.673 11.0414 21.1934 12.2992 21.1934 15.0008V19.857Z" fill="var(--logo-color)"/>
                    </svg>  
                </IconButton>
            </div>
        </div>
    </div>
</footer>

<style>
    footer {
        width: 100%;
        height: 24rem;
        padding: 2rem var(--section-padding);
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .footer_container {
        max-width: var(--max-width);
        width: 100%;
    }

    .footer_nav {
        display: flex;
        flex-direction: column;
        flex: 2;
        gap: 1.5rem;

        h5 {
            width: 450px;
            word-wrap: break-word;
        }
    }

    .footer_nav_wrapper {
        justify-content: space-between;
        gap: 1.5rem;
        align-items: end;
        padding-bottom: 4rem;
    }

    .footer_nav_wrapper,
    .header__nav {
        display: flex;
        gap: 1rem;
    }

    .header__nav li a {
        font-weight: 400;

        &:hover {
            color: var(--primary-clr);
        }
    }

    .footer_contact {
        border-top: 1px solid var(--line-clr);
        display: flex;
        justify-content: space-between;
        flex: 1;
        padding-top: 2rem;
    }

    .footer_socials {
        display: flex;
        gap: .5rem;
    }
</style>