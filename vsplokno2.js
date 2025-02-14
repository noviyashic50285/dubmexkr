// Открыть модальное окно
document.getElementById("open-modal-btn-2").addEventListener("click", function() {
    document.getElementById("my-modal-2").classList.add("open")
})

// Закрыть модальное окно
document.getElementById("close-my-modal-btn-2").addEventListener("click", function() {
    document.getElementById("my-modal-2").classList.remove("open")
})

// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modal-2").classList.remove("open")
    }
});

// Закрыть модальное окно при клике вне его
document.querySelector("#my-modal-2 .modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("my-modal-2").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});
