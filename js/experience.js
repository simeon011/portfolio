//show more and show less change btn
const btn_show = document.querySelectorAll('.btn_show');
btn_show.forEach(el => {
    const parent = el.parentElement;
    parent.addEventListener('click', () => {
       const hiddenText = el.nextElementSibling;
       
       if (hiddenText.style.display === 'block'){
            hiddenText.style.display = 'none';
            el.classList.remove('fa-caret-down');
            el.classList.add('fa-caret-left')
        }
       else{
            hiddenText.style.display = 'block';
            el.classList.remove('fa-caret-left');
            el.classList.add('fa-caret-down');

       }

    });
});

const box = document.querySelector('.high_school');

box.addEventListener('click', () => {
  box.classList.toggle('active');
})
