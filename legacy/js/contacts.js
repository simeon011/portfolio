//click box
document.querySelectorAll('.box').forEach(box => {
  box.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'a') return; 
    const a = box.querySelector('a[href]');
    if (!a) return;
    const url = a.href;
    window.open(url, '_blank');
  });
});