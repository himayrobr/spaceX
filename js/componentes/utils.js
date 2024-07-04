export function updateButtonVisibility(buttons, startIndex, endIndex) {
    buttons.forEach((button, index) => {
        const isVisible = index >= startIndex && index < endIndex;
        button.style.display = isVisible ? 'inline-block' : 'none';
    });
}

export function addClickListenerToButtons(buttons, clickHandler) {
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => clickHandler(index));
    });
}
