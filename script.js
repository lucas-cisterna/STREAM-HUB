const pupils = document.querySelectorAll(".pupil");
const cards = document.querySelectorAll(".card");

/* ================= MOUSE FOLLOW ================= */
document.addEventListener("mousemove", (e) => {

    pupils.forEach(p => {

        const eye = p.parentElement;
        const rect = eye.getBoundingClientRect();

        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;

        const angle = Math.atan2(
            e.clientY - cy,
            e.clientX - cx
        );

        const dist = 8;

        p.style.transform = `
            translate(
                ${Math.cos(angle) * dist}px,
                ${Math.sin(angle) * dist}px
            )
        `;

    });

});

/* ================= EMOJIS ================= */
const emojis = {
    music: "🎵",
    movie: "🎬",
    series: "📺",
    game: "🎮"
};

/* ================= CORES ================= */
const hoverClasses = {
    music: "music-hover",
    movie: "movie-hover",
    series: "series-hover",
    game: "game-hover"
};

/* ================= HOVER DOS CARDS ================= */
cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        const type = card.dataset.type;

        pupils.forEach(p => {
            p.textContent = emojis[type] || "👀";
        });

        card.classList.add(hoverClasses[type]);

    });

    card.addEventListener("mouseleave", () => {

        pupils.forEach(p => {
            p.textContent = "👀";
        });

        card.classList.remove(
            "music-hover",
            "movie-hover",
            "series-hover",
            "game-hover"
        );

    });

});

/* ================= CLICK ================= */
cards.forEach(card => {

    card.addEventListener("click", () => {
        window.open(card.dataset.link, "_blank");
    });

});