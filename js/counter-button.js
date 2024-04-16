document.addEventListener('DOMContentLoaded', function() {
    const minusButton = document.querySelector('.minus');
    const addButton = document.querySelector('.add');
    const quantitySpan = document.querySelector('.quantity');

    minusButton.addEventListener('click', function() {
        let quantity = parseInt(quantitySpan.textContent);
        if (quantity > 1) {
            quantity--;
            quantitySpan.textContent = quantity;
        }
    });

    addButton.addEventListener('click', function() {
        let quantity = parseInt(quantitySpan.textContent);
        quantity++;
        quantitySpan.textContent = quantity;
    });
});
