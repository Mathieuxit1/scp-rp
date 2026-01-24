function toggleMenu() {
    const menu = document.getElementById("navLinks");
    menu.classList.toggle("active");
}

<script>
function filterSCP(type) {
    const cards = document.querySelectorAll(".scp-card");

    cards.forEach(card => {

        if (type === "all") {
            card.style.display = "block";
        } else if (card.classList.contains(type)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}
</script>