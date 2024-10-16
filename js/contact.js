const button = document.querySelector('#contact');
button.addEventListener('click',function() {
    const email ='valentinbirgel01@gmail.com';
    const subject = encodeURIComponent("Demande D'information supplémentaire");
    const message = encodeURIComponent("Bonjour,\n\nJe souhaiterais obtenir plus d'informations sur ...");
    window.location.href=`mailto:${email}?subject=${subject}&body=${message}`
    console.log('BITE');
});