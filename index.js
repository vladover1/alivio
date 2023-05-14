document.querySelectorAll('.video').forEach((videoElement) => {
    const playerElement = videoElement.querySelector('iframe');

    videoElement.addEventListener('click', () => {
        playerElement.src += '?autoplay=1';
        videoElement.classList.add('video--ready');
    });
});
