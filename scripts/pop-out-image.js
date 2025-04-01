function openPopup(popupId, imageSrc, description) {
    document.getElementById(`popup-img-${popupId}`).src = imageSrc;
    document.getElementById(`popup-desc-${popupId}`).innerText = description;
    document.getElementById(`popup-${popupId}`).classList.add('active');
}

function closePopup(popupId) {
    document.getElementById(`popup-${popupId}`).classList.remove('active');
}

// Function to attach close event listener
function attachPopupEvent(popupId) {
    const popupElement = document.getElementById(`popup-${popupId}`);
    if (popupElement) {
        popupElement.addEventListener('click', function(event) {
            if (event.target === this) {
                closePopup(popupId);
            }
        });
    }
}

// Attach event listeners dynamically
attachPopupEvent('pca');
attachPopupEvent('cm');
attachPopupEvent('line');
attachPopupEvent('bar');
attachPopupEvent('model-prc');
attachPopupEvent('clr-hist');
attachPopupEvent('shp-ftr');
attachPopupEvent('txtr-ftr');
attachPopupEvent('mdl');
attachPopupEvent('mdl-1');
attachPopupEvent('mdl-2');
attachPopupEvent('mdl-3');
attachPopupEvent('mdl-4');
attachPopupEvent('mdl-5');
attachPopupEvent('mdl-eval');
attachPopupEvent('mdl-eval-1');