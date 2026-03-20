

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const btn = document.getElementById('menu-btn');
    btn.classList.toggle('open');
    sidebar.classList.toggle('open');
}

function updateClock() {
    var date = new Date();
    document.getElementById("h3").innerHTML = date;
}

function generateStars(count) {
    let stars = '';
    for (let i = 0; i < count; i++) {
        const x = Math.floor(Math.random() * 2000);
        const y = Math.floor(Math.random() * 2000);
        stars += `${x}px ${y}px #fff,`;
    }
    return stars.slice(0, -1);
}