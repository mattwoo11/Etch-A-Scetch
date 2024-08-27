const container = document.getElementById('container');
const resetButton = document.getElementById('reset-button');

for (let i = 0; i < 16 * 16; i++) {
    const gridItem = document.createElement('div');
    gridItem.className = 'grid-item';

    // Hover effect
    gridItem.addEventListener('mouseover', function() {
        gridItem.style.backgroundColor = '#FF6347'; // Change to red
    });

    container.appendChild(gridItem);
}

resetButton.addEventListener('click', function() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.style.backgroundColor = '#007BFF'; // Reset to original blue
    });
});
