$('.accordion').on('click', '.accordion-control', function (e) {
    e.preventDefault();
    $(this)
    .next('.accordion-panel')
    .not(':animated') //este metodo dice que hasta que no temine de animarse, no realizes otra accion
    .slideToggle()
})