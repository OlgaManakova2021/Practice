const text = document.querySelector('.text');

text.innerHTML = text.textContent.replace(/\S/g, '<span>$&</span>');

text.addEventListener('mouseover', function (e) {
    if (e.target.tagName != 'SPAN') return;
    e.target.classList.add('active');
});
