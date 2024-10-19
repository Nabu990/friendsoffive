document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

function showFriendModal(name, description, image) {
    const modal = document.getElementById('friendModal');
    document.getElementById('modal-name').textContent = name;
    document.getElementById('modal-description').textContent = description;
    document.getElementById('modal-img').src = image;
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('friendModal').style.display = 'none';
}
