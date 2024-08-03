const slider = document.querySelector('.slider');
const imageRight = document.querySelector('.image-right');
const container = document.querySelector('.container-scroll-imge');

slider.addEventListener('mousedown', function()  {
    document.addEventListener('mousemove', moveSlider);
    document.addEventListener('mouseup', function() {
        document.removeEventListener('mousemove', moveSlider);
    });
});


function moveSlider(e) {
    const rect = container.getBoundingClientRect();
    const position = e.clientX - rect.left;
    const width = rect.width;
    const percentage = (position / width) * 100;
    
    slider.style.left = percentage + '%';
    imageRight.style.width = 100 - percentage + '%';
}
