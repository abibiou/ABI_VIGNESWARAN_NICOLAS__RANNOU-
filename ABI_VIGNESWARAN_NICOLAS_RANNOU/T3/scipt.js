

function calculer() {
    var adulte_nb = parseInt(document.getElementById('adulte_nb').value);
    var enfant_nb = parseInt(document.getElementById('enfant_nb').value);
    var chambre_nb = parseInt(document.getElementById('chambre_nb').value);
    var voyage = document.getElementById('voyage').checked ? 'Oui' : 'Non';

    if (adulte_nb < 0) {
        adulte_nb = 0;
    }
    if (enfant_nb < 0) {
        enfant_nb = 0;
    }
    if (chambre_nb < 0) {
        chambre_nb = 0;
    }


    if (!verifierDates()) {
        return; 
    }

    document.getElementById('confirmationadulte').value = adulte_nb;
    document.getElementById('confirmationenfant').value = enfant_nb;
    document.getElementById('confirmationchambre').value = chambre_nb;
    document.getElementById('confirmationvoyage').value = voyage;

    reset(); 
}
document.addEventListener('DOMContentLoaded', function() {
    initializeCounter('adulte_nb', 'pluss', 'moinss');
    initializeCounter('enfant_nb', 'plusss', 'moinsss');
    initializeCounter('chambre_nb', 'plus', 'moins');
});

function reset() {
    document.getElementById('adulte_nb').value = '';
    document.getElementById('enfant_nb').value = '';
    document.getElementById('chambre_nb').value = '';
    document.getElementById('lieu').value = ''; 
    document.getElementById("debut").value = "";
    document.getElementById("fin").value = "";
    document.getElementById('voyage').checked = "";
}

function initializeCounter(id, plusId, moinsId) {
    var counterInput = document.getElementById(id);
    var plus = document.getElementById(plusId);
    var moins = document.getElementById(moinsId);

    plus.addEventListener('click', function() {
        var counter = parseInt(counterInput.value) || 0;
        counter++;
        counterInput.value = counter;
    });


    moins.addEventListener('click', function() {
        var counter = parseInt(counterInput.value) || 0;
        if (counter > 0) {
            counter--;
            counterInput.value = counter;
        } 

    });
}

var verifierDates = () => {
    var dateDebut = new Date(document.getElementById("debut").value);
    var dateFin = new Date(document.getElementById("fin").value);
  
    if (dateDebut >= dateFin) {
        alert('Erreur, vous devez mettre une date de début inférieur à la date de fin');
        return;
    }
    return true;
};
