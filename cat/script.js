document.getElementById('getFactBtn').addEventListener('click', async () => {
    const catFact = document.getElementById('catFact');
    const meowAnimation = document.getElementById('meowAnimation');
    
    catFact.textContent = '';
    meowAnimation.textContent = '';

    // Fetch a random cat fact
    try {
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();
        const fact = data.fact;

        // Display exaggerated "meow" animations
        const meows = ["Meow", "Meooow", "Meoooow", "Meooooow", "Meoooooow", "Meooooooow"];
        for (let i = 0; i < meows.length; i++) {
            setTimeout(() => {
                meowAnimation.textContent = meows[i];
                if (i === meows.length - 1) {
                    setTimeout(() => {
                        meowAnimation.textContent = '';
                        catFact.textContent = fact;
                    }, 500);
                }
            }, i * 500);
        }
    } catch (error) {
        catFact.textContent = "Could not retrieve a cat fact at this time.";
    }
});

// Background image rotation
const images = document.querySelectorAll('.rotatingImage');
let currentImageIndex = 0;
setInterval(() => {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.display = 'block';
}, 1000);

// Set custom cursor
document.getElementById("demo").style.cursor = "url('images/cat-paw.png'), auto";

// Move the cat gun image to a random position when clicked
const catGun = document.getElementById('catGun');

catGun.addEventListener('click', () => {
    const maxX = window.innerWidth - catGun.offsetWidth;
    const maxY = window.innerHeight - catGun.offsetHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    catGun.style.left = `${randomX}px`;
    catGun.style.top = `${randomY}px`;
});
