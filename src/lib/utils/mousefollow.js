/**
 * Adds a dynamic cursor follower to the page.
 * Usage: import and call addCursorFollower();
 */

export function addCursorFollower(options = {}) {
    const follower = document.createElement('div');
    follower.style.position = 'fixed';
    follower.style.top = '0';
    follower.style.left = '0';
    follower.style.width = options.size || '24px';
    follower.style.height = options.size || '24px';
    follower.style.borderRadius = '50%';
    follower.style.background = options.color || 'rgba(0,0,0,0.2)';
    follower.style.pointerEvents = 'none';
    follower.style.zIndex = '9999';
    follower.style.transition = 'transform 0.15s cubic-bezier(.22,1,.36,1)';
    follower.style.mixBlendMode = options.blendMode || 'difference';

    document.body.appendChild(follower);

    let mouseX = 0, mouseY = 0;

    function onMouseMove(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        follower.style.transform = `translate(${mouseX - follower.offsetWidth / 2}px, ${mouseY - follower.offsetHeight / 2}px)`;
    }

    window.addEventListener('mousemove', onMouseMove);

    // Return a cleanup function
    return () => {
        window.removeEventListener('mousemove', onMouseMove);
        follower.remove();
    };
}