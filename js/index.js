  window.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', function () {
    window.location.href = 'mainpage.html';
  });
});

if (window.matchMedia("(max-width: 1024px)").matches || /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    document.body.style.overflow = 'hidden';
    document.addEventListener('click', e => e.stopPropagation(), true);
    document.addEventListener('touchstart', e => e.preventDefault(), { passive: false });
    document.addEventListener('keydown', e => e.preventDefault());
}