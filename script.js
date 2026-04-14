document.getElementById('btn_acc').addEventListener('click', function() {
    document.querySelector('.about').classList.add('show');
    document.querySelector('.memories').classList.add('show');
    document.querySelector('.you').classList.add('show');
    document.querySelector('.medsos').classList.add('show');
    this.style.display = 'none';
    document.getElementById('btn_dec').style.display = 'none';
});

document.getElementById('btn_dec').addEventListener('click', function() {
    alert('Aww, but you have to see it! 😊');
});

// Smooth scrolling for nav links
document.querySelectorAll('#navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});