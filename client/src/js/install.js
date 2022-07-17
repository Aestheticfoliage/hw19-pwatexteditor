const e = require("express");

const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    e.preverntDefault();
    deferredPrompt = e;
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async (e) => {
    butInstall.classList.toggle('hidden', true);
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
        if(choiceResult.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
        } else {
            console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
    });
});


// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
