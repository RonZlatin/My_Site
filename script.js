const audio = document.getElementById('ocean-sound');
const btn   = document.getElementById('toggle-sound');

btn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    btn.textContent = '🔊';
  } else {
    audio.pause();
    btn.textContent = '🔇';
  }
});

const bars = document.querySelectorAll('.bar');
const skills = document.querySelector('.skills');

skills.addEventListener('mouseenter', () => {
  bars.forEach(bar => {
    const width = bar.getAttribute('data-width');
    bar.style.width = width;
  });
});
skills.addEventListener('mouseleave', () => {
  bars.forEach(bar => {
    bar.style.width = '0';
  });
});
