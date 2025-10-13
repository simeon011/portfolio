//click box
document.querySelector('.projects_boxs')?.addEventListener('click', (e) => {
  const box = e.target.closest('.box');
  if (!box) return;
  if (e.target.tagName.toLowerCase() === 'a') return;
  const a = box.querySelector('a[href]');
  if (!a) return; 
  const url = a.href;
  window.open(url, '_blank'); 
});
