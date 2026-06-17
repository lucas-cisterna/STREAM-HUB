const pupils = document.querySelectorAll(".pupil");
const cards = document.querySelectorAll(".card");

/* ================= MOUSE FOLLOW ================= */
document.addEventListener("mousemove", (e) => {

    pupils.forEach(p => {

        const eye = p.parentElement;
        const rect = eye.getBoundingClientRect();

        const cx = rect.left + rect.width/2;
        const cy = rect.top + rect.height/2;

        const angle = Math.atan2(e.clientY - cy, e.clientX - cx);

        const dist = 6;

        p.style.transform = `
            translate(${Math.cos(angle)*dist}px,
            ${Math.sin(angle)*dist}px)
        `;

    });

});

/* ================= EMOJIS POR TIPO ================= */
const emojis = {
    music: "🎵",
    movie: "🎬",
    series: "📺",
    game: "🎮"
};

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        const type = card.dataset.type;

        pupils.forEach(p => {
            p.textContent = emojis[type] || "👀";
        });

    });

    card.addEventListener("mouseleave", () => {

        pupils.forEach(p => {
            p.textContent = "👀";
        });

    });

});

/* ================= CLICK ================= */
cards.forEach(card => {

    card.addEventListener("click", () => {
        window.open(card.dataset.link, "_blank");
    });

});