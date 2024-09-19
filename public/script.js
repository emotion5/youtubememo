function playVideo(id) {
    const player = document.getElementById('player');
    player.innerHTML = `<video width="640" height="360" controls autoplay>
        <source src="/play/${id}" type="video/mp4">
        Your browser does not support the video tag.
    </video>`;
}