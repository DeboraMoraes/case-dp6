// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.
(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-12345-6', 'auto');
ga('send', 'pageview', location.pathname);

$(".menu-lista-contato").click(() => {
    event.preventDefault();
    ga('send', {
        hitType: 'event',
        eventCategory: 'menu',
        eventAction: 'entre_em_contato',
        eventLabel: 'link_externo'
    });

})

$(".menu-lista-download").click(e => {
    event.preventDefault();
    ga('send', {
        hitType: 'event',
        eventCategory: 'menu',
        eventAction: 'download_pdf',
        eventLabel: 'download_pdf'
    });

})

$(".card-montadoras").click(event => {
    ga('send', {
        hitType: 'event',
        eventCategory: 'analise',
        eventAction: 'ver_mais',
        eventLabel: event.target.dataset.name
    });

})
$(".contato > ul > li > input").on("focusout", event => {
        if (event.target.value.length > 0) {
            ga('send', {
                hitType: 'event',
                eventCategory: 'contato',
                eventAction: event.target.id,
                eventLabel: 'preencheu'
            });
        }
    })
    // if ($("lightbox").css('display') == 'block') {
    //     ga('send', {
    //         hitType: 'event',
    //         eventCategory: 'contato',
    //         eventAction: 'enviado',
    //         eventLabel: 'enviado'
    //     });
    //     console.log('contato')
    // }

$('.contato > ul > li > button').click(e => {
    const validatePopUp = setInterval(() => {
        if ($(".lightbox").css('display') == 'block') {
            ga('send', {
                hitType: 'event',
                eventCategory: 'contato',
                eventAction: 'enviado',
                eventLabel: 'enviado'
            });

            clearInterval(validatePopUp)
        }
    }, 500)
})