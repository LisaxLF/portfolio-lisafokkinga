<script>
  export let gradientEl
  export let id

  const lerpFactor = 0.05
  let animating = false

  const points = [
    { xVar: '--grad1-x', yVar: '--grad1-y', x: 75, y: 25, xCurrent: 75, yCurrent: 25, xTarget: 75, yTarget: 25 },
    { xVar: '--grad2-x', yVar: '--grad2-y', x: 10, y: 90, xCurrent: 10, yCurrent: 90, xTarget: 10, yTarget: 90 }
  ]

  function handleHover(event) {
    const rect = gradientEl.getBoundingClientRect()
    const mouseX = ((event.clientX - rect.left) / rect.width) * 100
    const mouseY = ((event.clientY - rect.top) / rect.height) * 100

    points.forEach((p, i) => {
      const factor = lerpFactor * (i + 1)
      p.xTarget = mouseX
      p.yTarget = mouseY
    })

    if (!animating) animate()

    gradientEl.style.animationPlayState = 'running'
  }

  function handleLeave() {
    points.forEach(p => {
      p.xTarget = p.xCurrent
      p.yTarget = p.yCurrent
    })

    if (!animating) animate()

    gradientEl.style.animationPlayState = 'paused'
  }

  function animate() {
    animating = true

    points.forEach(p => {
      p.x += (p.xTarget - p.x) * lerpFactor
      p.y += (p.yTarget - p.y) * lerpFactor
      gradientEl.style.setProperty(p.xVar, `${p.x}%`)
      gradientEl.style.setProperty(p.yVar, `${p.y}%`)
    })

    const delta = points.reduce((acc, p) => acc + Math.abs(p.xTarget - p.x) + Math.abs(p.yTarget - p.y), 0)
    if (delta > 0.1) requestAnimationFrame(animate)
    else animating = false
  }
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
  bind:this={gradientEl}
  id={id}
  class="hero__background__gradient"
  on:mousemove={id === 'coreCircleGradient' ? handleHover : undefined}
  on:mouseleave={id === 'coreCircleGradient' ? handleLeave : undefined}
>
  <slot></slot>
</div>

<style>
    @property --grad1-x { syntax: '<percentage>'; inherits: false; initial-value: 76.37%; }
    @property --grad1-y { syntax: '<percentage>'; inherits: false; initial-value: 7.88%; }
    @property --grad1-stop { syntax: '<percentage>'; inherits: false; initial-value: 0%; }
    @property --grad1-color { syntax: '<color>'; inherits: false; initial-value: var(--grad1-color); }

    @property --grad2-x { syntax: '<percentage>'; inherits: false; initial-value: 18.14%; }
    @property --grad2-y { syntax: '<percentage>'; inherits: false; initial-value: 87.66%; }
    @property --grad2-stop { syntax: '<percentage>'; inherits: false; initial-value: 0%; }
    @property --grad2-color { syntax: '<color>'; inherits: false; initial-value: var(--grad2-color); }

    @property --grad1-w { syntax: '<percentage>'; inherits: false; initial-value: 0%; }
    @property --grad1-h { syntax: '<percentage>'; inherits: false; initial-value: 0%; }
    @property --grad2-w { syntax: '<percentage>'; inherits: false; initial-value: 0%; }
    @property --grad2-h { syntax: '<percentage>'; inherits: false; initial-value: 0%; }

    @keyframes moveAnim {
    0% {
        --grad1-x: 76.37%;
        --grad1-y: 7.88%;
        --grad2-x: 18.14%;
        --grad2-y: 87.66%;
    }
    100% {
        --grad1-x: 50%;
        --grad1-y: 50%;
        --grad2-x: 50%;
        --grad2-y: 50%;
    }
    }

    @keyframes pulseAnim {
    0% {
        --grad1-w: 50%;
        --grad1-h: 50%;
        --grad2-w: 50%;
        --grad2-h: 50%;
    }

    20% {
        --grad1-w: 50%;
        --grad1-h: 50%;
        --grad2-w: 50%;
        --grad2-h: 50%;
    }

    100% {
        --grad1-w: 40%;
        --grad1-h: 40%;
        --grad2-w: 30%;
        --grad2-h: 30%;
    }
    }

    @keyframes colorSwap {
    0% {
        --grad1-color: var(--grad1-color);
        --grad2-color: var(--grad2-color);
    }
    100% {
        --grad1-color: var(--grad2-color);
        --grad2-color: var(--grad1-color);
    }
}

    .hero__background__gradient {
        --grad1-x: 75%;
        --grad1-y: 5%;
        --grad1-w: 50%;
        --grad1-h: 50%;
        --grad1-stop: 0%;
        --grad1-color: #86C6E1;

        --grad2-x: 10%;
        --grad2-y: 90%;
        --grad2-w: 50%;
        --grad2-h: 50%;
        --grad2-stop: 0%;
        --grad2-color: #538CA5;

        background: 
            radial-gradient(var(--grad1-w) var(--grad1-h) at var(--grad1-x) var(--grad1-y), var(--grad1-color) 0%, var(--bg-clr-trans) 100%),
            radial-gradient(var(--grad2-w) var(--grad2-h) at var(--grad2-x) var(--grad2-y), var(--grad2-color) 0%, var(--bg-clr-trans) 100%);

        border-radius: 50%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 2rem;
        z-index: 1;
    }

    #coreCircleGradient {
        animation: 
            pulseAnim 3s linear infinite alternate 2s,
            colorSwap 6s ease-in-out infinite alternate 4s
      ;

      animation-play-state: paused;
    }

  #coreCircleGradientAbout {
      position: absolute;
      top: 50%;
      right: 0;
      width: 50rem;
      height: 50rem;
      aspect-ratio: 1;
      transform: translate(calc(50% + var(--section-padding)), -50%) rotate(-45deg);
      z-index: 0;
  }
    :global(#projects) {
        height: 100%;
        aspect-ratio: 1;
        z-index: -1;
    }

    :global(#coreCircleGradientProjects) {
        width: 600px;
        height: 600px;

        left: 50%;
        top: 50%;

        transform: translate(-50%, -50%);
    }

    :global(.skill__header) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: .5rem;
    }

    :global(.skill__header > p) {
        font-size: 1.2rem;
        font-family: 'Poppins';
        font-weight: 200;
        text-align: center;
    }    

    :global(.skill__header > h4) {
        text-align: center;
    }    

    :global(.skill_circle__info) {
        --opacity: 50%;

        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 5rem;
        height: 5rem;
        border-radius: 999px;
        background: var(--glass-bg);
        backdrop-filter: blur(14px);
        z-index: 1;
    }

    :global(.skill_circle__info_icon) {
        width: 100%;
        height: 100%;
        max-width: 32px;
        max-height: 32px;
    }

    :global(.skill__description > p) {
        color: var(--text-clr);
        text-align: center;
        padding: 0 3rem;
    }
</style>