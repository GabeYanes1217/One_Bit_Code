var elementosDuvida = document.querySelectorAll('.duvida')

elementosDuvida.forEach(function (duvida) {
    // conteúdo da função
    duvida.addEventListener('click', function () {
        duvida.classList.toggle('ativa')
    })
})

document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        var sectionId = this.getAttribute('href');
        var section = document.querySelector(sectionId);
        if (section) {
            var adjustment = section.offsetTop > 0 ? section.offsetTop : 0;
            setTimeout(function () {
                window.scrollTo({ top: adjustment, behavior: 'smooth' });
            }, 100);
        }
    });
});

