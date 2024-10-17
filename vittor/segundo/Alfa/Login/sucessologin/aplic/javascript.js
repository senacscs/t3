function login() {
    document.getElementById('form-container').style.display = 'block';
}

function cadastro() {
    document.getElementById('form-container').style.display = 'block';
}

function searchFood() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const foodItems = document.querySelectorAll('.food-item');
    
    foodItems.forEach(item => {
        const foodName = item.querySelector('strong').textContent.toLowerCase();
        if (foodName.includes(input)) {
            item.style.display = ''; // Mostra o item
        } else {
            item.style.display = 'none'; // Esconde o item
        }
    });
}
