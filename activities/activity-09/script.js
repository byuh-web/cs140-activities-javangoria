const noBtn = document.getElementById('noBtn');
const sadMessage = document.getElementById('sadMessage');

// Move the "No" button when someone tries to hover over it
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    
    // Show the sad message
    sadMessage.style.display = 'block';
});

// What happens when they click "Yes"
function celebrate() {
    document.getElementById('question').innerHTML = "YAY! ❤️💍";
    document.querySelector('.buttons').style.display = 'none';
    sadMessage.style.display = 'none';
    alert("See you at the wedding! 🎉");
}