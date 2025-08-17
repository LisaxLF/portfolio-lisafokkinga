<script>
    import IconButton from '$lib/components/UI/buttons/IconButton.svelte';
    import arrowIcon from '$lib/assets/icons/arrow-icon.svg';
    import githubIcon from '$lib/assets/icons/github-icon.svg';
    import linkedinIcon from '$lib/assets/icons/linkedin-icon.svg';
    import codeImage from '$lib/assets/images/lisa-info-3.png';
    import CircleGradient from '$lib/components/UI/CircleGradient.svelte';
    import ProjectCard from '$lib/components/UI/cards/ProjectCard.svelte';
    import softwareSkills from '$lib/data/softwareSkills.json';
    import projectShowcase from '$lib/data/projectShowcase.json';
    import { slugify } from '$lib/utils/slugify.js'
    import { onMount } from 'svelte'
    import { swiper } from '$lib/utils/swiper';
    import gsap from 'gsap'
    import ScrollTrigger from 'gsap/ScrollTrigger'

    let currentSkillData = null
    let coreEl

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger)

        const hero = document.querySelector('.hero__section')
        const about = document.querySelector('.aboutMe__section')
        const coreSVG = document.querySelector('#coreCircle')
        const coreCircle = document.querySelector('#coreCircleGradient')
        const coreCircleSkills = document.querySelector('#coreCircleGradientSkills')
        const skillsContent = document.querySelector('.skills__content')
        const skillsList = document.querySelector('.skills__list')
        const skillsListItems = document.querySelectorAll('.skills__list li')
        const swiperContainer = document.querySelector('.project__carousel__container')

        swiper(swiperContainer)

        // Cursur follow

        // onload animation for the core circle
        // const tlSVG = gsap.timeline()

        // tlSVG.fromTo(hero,
        // {
        //     y: 50,
        //     opacity: 0
        // },
        // {
        //     y: 0,
        //     opacity: 1,
        //     duration: 1,
        //     ease: 'power2.out'
        // })
        // .fromTo(coreSVG, {
        //     rotation: 0,
        //     scale: 1
        // }, {
        //     rotation: 360,
        //     scale: 1,
        //     ease: 'slow(0.7,0.7,false)',
        //     duration: 1
        // }, '<')

        // Timeline for Hero Section Animation
        // const tl = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: '.hero__section',
        //         start: 'top top',
        //         endTrigger: '.aboutMe__section',
        //         end: 'bottom bottom',
        //         scrub: .5,
        //     }
        // });

        // tl.fromTo(coreSVG, {
        //     rotation: 0,
        //     scale: 1,
        // }, {
        //     rotation: 360,
        //     scale: 1.1,
        //     ease: 'slow(0.7,0.7,false)',
        //     duration: 1
        // })

        // tl.fromTo(coreCircle, {
        //     x: 0,
        //     y: 0,
        //     scale: 1,
        //     rotation: 0,
        //     ease: 'slow(0.7,0.7,false)',
        //     duration: 1
        // },
        // {
        //     x: () => (window.innerWidth / 2) - (coreCircle.getBoundingClientRect().width / 4),
        //     y: 800,
        //     scale: 2,
        //     rotation: 150,
        //     ease: 'slow(0.7,0.7,false)',
        //     duration: 1,
        // }, '+=0.2')


        // Core Circle Skills Animation
        gsap.timeline({
            scrollTrigger: {
                trigger: '.aboutMe__section',
                start: 'center top',
                endTrigger: '.skills__section',
                end: 'bottom bottom',
                scrub: 0.5,
            }
        }).to(coreCircle, {
            x: 0,
            y: 0,
            scale: 1,
            rotation: 0,
            ease: 'slow(0.7,0.7,false)',
            duration: 1
        })

        const tlSkillsEnter = gsap.timeline({
            scrollTrigger: {
                trigger: '.skills__section',
                start: 'top center',
                toggleActions: 'play none none reset',
            }
        })

        tlSkillsEnter.set(coreCircleSkills, {
            x: -1000,
            scale: 0.2
        }).to(coreCircleSkills, {
            x: 0,
            scale: 1,
            rotate: 360,
            ease: 'linear',
            duration: 1
        }).fromTo(skillsContent, {
            opacity: 0,
            x: 100,
            y: 50
        }, {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 1,
            ease: "back.inOut(1.7)"
        }, '<').fromTo(skillsListItems, {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 0.,
            stagger: 0.2,
            ease: 'back.inOut(1.7)'
        }, '+=0.3')


        // Skill List Hover Animation
        skillsListItems.forEach(skill => {
            skill.addEventListener('mouseenter', () => {
                const skillId = skill.id

                if (skillId) {
                    currentSkillData = softwareSkills.find(s => s.id === skillId)
                    console.log('hovered skill:', currentSkillData)
                } else {
                    currentSkillData = null
                }
            })

            skill.addEventListener('mouseleave', () => {
                currentSkillData = null
                console.log('mouseleave, cleared currentSkillData')
            })
        })

    });
</script>

<section class="hero__section">
    <CircleGradient bind:gradientEl={coreEl} id="coreCircleGradient" />
    <div class="hero__background">
        <svg id="coreCircle"  data-name="Laag 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190.34 190.34">
        <defs>
            <style>
            .cls-1 {
                backdrop-filter: blur(5px);
                fill: var(--svg-color);
            }
            </style>
        </defs>
        <g id="Laag_1-2" class="glass" data-name="Laag 1">
            <g>
            <path class="cls-1" d="M36.59,153.75c12.21,12.21,27.28,19.81,43.07,22.8l-13.78,13.78c-15.05-4.61-29.2-12.87-41.1-24.77S4.61,139.51,0,124.46l13.78-13.78c2.99,15.79,10.59,30.86,22.8,43.07Z"/>
            <path class="cls-1" d="M65.87,0l13.78,13.78c-15.78,2.98-30.86,10.59-43.07,22.8-12.21,12.21-19.81,27.28-22.8,43.07L0,65.87c4.61-15.05,12.87-29.2,24.77-41.1C36.67,12.87,50.83,4.61,65.87,0Z"/>
            <path class="cls-1" d="M165.57,24.77c11.9,11.9,20.15,26.06,24.77,41.1l-13.78,13.78c-3-15.78-10.59-30.86-22.8-43.07s-27.29-19.81-43.07-22.8L124.46,0c15.04,4.62,29.2,12.87,41.1,24.77Z"/>
            <path class="cls-1" d="M176.56,110.68l13.78,13.78c-4.61,15.05-12.87,29.2-24.77,41.1-11.9,11.9-26.06,20.16-41.1,24.77l-13.78-13.78c15.79-2.99,30.86-10.59,43.07-22.8,12.21-12.21,19.82-27.29,22.8-43.07Z"/>
            </g>
        </g>
        </svg>
    </div>
    <div class="hero__content">
        <article>
            <h1 class="hero__title">Explore the <span class="glass">core</span> of my creations.</h1>
            <p class="hero__subtitle">Turning ideas into digital experiences with code and curiosity.</p>
        </article>
        <div class="hero__scrollIcon">
            <div class="circle-background">
                <svg width="20" height="30" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 0C17.7614 0 20 2.23858 20 5V22C20 26.4183 16.4183 30 12 30H8C3.58172 30 2.25497e-07 26.4183 0 22V5C3.22139e-07 2.23858 2.23858 0 5 0H15ZM10 3.33301C8.77271 3.33302 7.77734 4.32837 7.77734 5.55566V7.77832C7.77761 9.00539 8.77287 9.99999 10 10C11.2271 10 12.2224 9.0054 12.2227 7.77832V5.55566C12.2227 4.32836 11.2273 3.33301 10 3.33301Z" fill="white"/>
                </svg>
            </div>
            <span>scroll down</span>
        </div>
    </div>
</section>

<section class="aboutMe__section">
    <div class="aboutMe__content">
        <div class="aboutMe__content_text">
            <h2>Lisa Lotte Fokkinga<span>.</span></h2>
            <p>Hi, I'm Lisa Lotte Fokkinga, a 26-year-old student at Hogeschool van Amsterdam. I'm currently in my fourth year of Communication and Multimedia Design. My focus lies in Web design and development.</p>
            <p>Read more about who i am as a person or just download my cv for a more education information</p>
        </div>
        <div class="aboutMe_content_buttons">
            <div class="aboutMe_content_buttons_left_side">
                <IconButton target="_blank" href="/about" theme="secondary" variant="text">
                    About me
                    <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.22584 1.48385C5.22584 1.16316 5.48581 0.903198 5.80649 0.903198L12.1936 0.903199V7.29034C12.1936 7.61102 11.9337 7.87099 11.613 7.87099C11.2923 7.87099 11.0323 7.61102 11.0323 7.29034V2.88566L0.99123 12.9268C0.764472 13.1535 0.396826 13.1535 0.170068 12.9268C-0.0566894 12.7 -0.0566894 12.3324 0.170068 12.1056L10.2112 2.0645L5.80649 2.0645C5.48581 2.0645 5.22584 1.80453 5.22584 1.48385Z" fill="var(--text-clr)"/>
                    </svg>
                </IconButton>
            </div>
            <div class="aboutMe_content_buttons_right_side">
                <IconButton target="_blank" href="https://github.com/LisaxLF" theme="primary" variant="icon">
                    <img src={githubIcon} alt="GitHub icon" />
                </IconButton>
                <IconButton target="_blank" href="https://github.com/LisaxLF" theme="primary" variant="icon">
                    <img src={linkedinIcon} alt="LinkedIn icon" />
                </IconButton>
            </div>
        </div>
    </div>
    <div class="aboutMe__image">
        <CircleGradient id="coreCircleGradientAbout" />
        <img src="{codeImage}" alt="">
    </div>
</section>

<section class="skills__section">
    <CircleGradient id="coreCircleGradientSkills">
        {#if currentSkillData}
            <div class="skill__header">
                {#if currentSkillData.img}
                    <div class="skill_circle__info">
                        <img class="skill_circle__info_icon" src="{currentSkillData.img}" alt="{currentSkillData.img}">
                    </div>
                {/if}
                {#if currentSkillData.name}
                    <h3>{currentSkillData.name}</h3>
                {/if}
                {#if currentSkillData.percentage}
                    <p>{currentSkillData.percentage}% profiency</p>
                {/if}
            </div>
            <div class="skill__description">
                <p>{currentSkillData.description}</p>
            </div>
        {:else}
            <span class="extra__info">Hover over a skill to see details</span>
        {/if}
    </CircleGradient>
    <div class="skills_placeholder__grid"></div>
    <div class="skills__content">
        <div class="skills__content_header">
            <h2>My <span>Expertise</span> and Skillset.</h2>
            <p>Explore the key tools and technologies that power my work in web development and design. These skills are the foundation of the innovative and effective solutions I create.</p>
        </div>
        <div class="skills__content_skills">
            <h3>Skills</h3>
            <ul class="skills__list">
                {#each softwareSkills as skill}
                    <li id={skill.id}>{skill.name}</li>
                {/each}
            </ul>
        </div>
    </div>
</section>

<section class="projects__section">
    <div class="project__content_header">
        <h2>Exploring my <span>Projects</span></h2>
        <p>Here’s a selection of projects that show my approach to design and development, from concept to final result.</p>
    </div>
    <div class="project__showcase">
        <!-- Slider main container -->
    <div class="project__carousel__container swiper">
        <div class="swiper-wrapper">
            {#each projectShowcase as project}
                <ProjectCard
                    className="swiper-slide"
                    id={project.id}
                    image={project.image}
                    projectTitle={project.name}
                    description={project.description}
                    tags={project.tags}
                    href={`/projects/${slugify(project.name)}`}
                />
            {/each}
        </div>
    <div class="swiper-button-wrapper">
        <div class="prev-btn">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.96752 0.983848C6.96752 0.663164 6.70755 0.403198 6.38687 0.403198L-0.000271261 0.403199V6.79034C-0.000271261 7.11102 0.259694 7.37099 0.580378 7.37099C0.901061 7.37099 1.16103 7.11102 1.16103 6.79034V2.38566L11.2021 12.4268C11.4289 12.6535 11.7965 12.6535 12.0233 12.4268C12.25 12.2 12.25 11.8324 12.0233 11.6056L1.98219 1.5645L6.38687 1.5645C6.70755 1.5645 6.96752 1.30453 6.96752 0.983848Z" fill="#151616"/>
            </svg>
        </div>
        <IconButton target="_blank" href="/projects" theme="secondary" variant="text">
            see all projects
            <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.22584 1.48385C5.22584 1.16316 5.48581 0.903198 5.80649 0.903198L12.1936 0.903199V7.29034C12.1936 7.61102 11.9337 7.87099 11.613 7.87099C11.2923 7.87099 11.0323 7.61102 11.0323 7.29034V2.88566L0.99123 12.9268C0.764472 13.1535 0.396826 13.1535 0.170068 12.9268C-0.0566894 12.7 -0.0566894 12.3324 0.170068 12.1056L10.2112 2.0645L5.80649 2.0645C5.48581 2.0645 5.22584 1.80453 5.22584 1.48385Z" fill="var(--text-clr)"/>
            </svg>
        </IconButton>
        <div class="next-btn">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.4192 0.983848C5.4192 0.663164 5.67917 0.403198 5.99985 0.403198L12.387 0.403199V6.79034C12.387 7.11102 12.127 7.37099 11.8063 7.37099C11.4857 7.37099 11.2257 7.11102 11.2257 6.79034V2.38566L1.18459 12.4268C0.957832 12.6535 0.590185 12.6535 0.363428 12.4268C0.13667 12.2 0.13667 11.8324 0.363428 11.6056L10.4045 1.5645L5.99985 1.5645C5.67917 1.5645 5.4192 1.30453 5.4192 0.983848Z" fill="#151616"/>
            </svg>
        </div>
    </div>
</div>
    </div>
</section>


<style>
    section {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        min-height: 100dvh;
        padding: 0 var(--section-padding);
    }

    section:first-of-type {
        min-height: calc(100dvh - 6.75rem);
    }

    h1 {
        text-align: center;
        line-height: 1.15;
    }

    /* HERO SECTION */

    .hero__section {
        position: relative;
    }

    .hero__content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 6rem;
        z-index: 1;

        max-width: 900px;
        pointer-events: none;

        article {
            text-align: center;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .hero__scrollIcon {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;

            .circle-background {
                width: 4rem;
                height: 4rem;
                display: flex;
                justify-content: center;
                align-items: center;
                background: var(--glass-bg);
                border: rgba(255, 255, 255, 0.10) 2px solid;  
                border-radius: 50%;
            }

            span {
                color: var(--text-clr-secondary);
                font-size: 0.75rem;
                font-weight: 200;
            }
        }
    }

    .hero__background {
        z-index: 0;
            svg#coreCircle {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 40rem;
                height: 40rem;
                animation: rotateAnim 10s infinite linear;
            }
    }

    @keyframes rotateAnim {
        from {
            transform: translate(-50%, -50%) rotate(0);
        }

        to {
            transform: translate(-50%, -50%) rotate(1turn);
        }
    }
    
    :global(#coreCircleGradient) {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 32rem;
        height: 32rem;
        aspect-ratio: 1;
    }

    :global(#coreCircleGradientSkills) {
        top: 50%;
        left: var(--section-padding);
        transform: translateY(-50%);
        width: 32rem;
        height: 32rem;
        aspect-ratio: 1;
    }

    /* ABOUT ME SECTION */
    .aboutMe__section,
    .skills__section {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 3rem;
        overflow: hidden;

        > * {
            width: 50%;
        }
    }

    .aboutMe__content {
        max-width: var(--max-width-text);

        display: flex;
        flex-direction: column;
        gap: 2rem;

        .aboutMe__content_text {
            display: flex;
            flex-direction: column;
            gap: 1rem;

            h2 {
                margin-bottom: 1rem;
            }
        }
    }

    .aboutMe_content_buttons {
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 2rem;

        .aboutMe_content_buttons_right_side {
            border-left: 2px solid var(--text-clr-secondary);
            padding-left: 1rem;
            display: flex;
            gap: 1rem;

            img {
                width: 24px;
                height: 24px;
            }
        }
    }

    .aboutMe__image {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        img {
            position: absolute;
            top: 50%;
            right: 0;
            transform: translate(calc(50% + 4.5rem), -50%);
            height: 50rem;
            aspect-ratio: 3 / 2;
        }
    }

    /* SKILLS SECTION */
    .skills__section {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .skills__content {
        display: flex;
        flex-direction: column;
        justify-content: baseline;
        align-items: center;
        gap: 4rem;
        max-width: var(--max-width-text);

        .skills__content_header > * {
            text-align: right;
        }

        .skills__content_skills {
            display: flex;
            flex-direction: column;
            align-self: baseline;
            gap: 1rem;
            width: 100%;

            h3 {
                font-family: "Poppins", sans-serif;
                font-size: 1.5rem;
                font-weight: 600;
            }
        }
    }

    .skills__list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, auto);
        gap: .5rem;

        li {
            transition: all 0.2s ease-in-out;
            display: flex;
            cursor: pointer;
            padding: .4rem 0 .4rem 0;
            display: flex;
            justify-content: baseline;
            align-items: center;

            &:hover {
                padding: .4rem 0 .4rem 1rem;
                color: white;
                border-radius: 4px;
                font-weight: 400;
                background: linear-gradient(90deg, var(--primary-clr), rgba(255, 255, 255, 0.1));
            }
        }
    }

    /* Project Section */
    .projects__section {
        flex-direction: column;
        padding: 0;
    }

    .project__showcase {
        height: var(--height-minus-header);
        display: flex;
        padding: 3rem 0;
        width: 100%;
        position: relative;
    }


    .project__carousel__container {
        width: 100%;
        padding: 3rem 0;
    }

    .project__content_header {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: .5rem;
        
        p {
            max-width: var(--max-width-text);
        }

        * {
            text-align: center;
        }
    }

    /* SWIPER */
    .swiper-button-wrapper {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);

        display: flex;
        align-items: center;
        z-index: 10;
        gap: 1rem;
    }

    .swiper-wrapper {
        align-items: center;
    }

    :global(.swiper-slide-active) {
        scale: 1.5;
    }

    :global(.swiper-slide-prev img), :global(.swiper-slide-next img) {
        scale: 1;
        filter: grayscale(100%);
    }

    :global(.prev-btn), :global(.next-btn) {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;

        border: 1px solid white;
        padding: 12px;
        aspect-ratio: 1;
        border-radius: 99px;

        &:hover {
            border: var(--primary-clr) 1.5px solid;
        }
    }

    :global(.prev-btn) {
        transform: rotate(-45deg);
    }

    :global(.next-btn) {
        transform: rotate(45deg);
    }
    

    :global(.prev-btn p), :global(.next-btn p) {
        cursor: pointer;
    }

    @media (max-width: 1250px) {
    }

    @media (max-width: 768px) {
    }
</style>