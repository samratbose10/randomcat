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
