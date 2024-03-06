document.addEventListener('DOMContentLoaded', function() {
    var bild1 = document.getElementById('bild1');
    var bild2 = document.getElementById('bild2');
    var bild1Angezeigt = true; // Zustandsvariable, die angibt, ob Bild 1 angezeigt wird

    // Funktion, um zwischen den Bildern zu wechseln
    function wechselBild() {
        if (bild1Angezeigt) {
            bild1.classList.remove('visible');
            bild1.classList.add('hidden');
            bild2.classList.remove('hidden');
            bild2.classList.add('visible');
            bild1Angezeigt = false;
        } else {
            bild2.classList.remove('visible');
            bild2.classList.add('hidden');
            bild1.classList.remove('hidden');
            bild1.classList.add('visible');
            bild1Angezeigt = true;
        }
    }

    // Event-Listener für beide Bilder
    bild1.addEventListener('click', wechselBild);
    bild2.addEventListener('click', wechselBild);
});
