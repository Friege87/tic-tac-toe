function openDialog(text) {
    document.getElementById('dialog').classList.remove('din-none')
    document.getElementById('dialog-message').innerHTML = text;
}

function closeDialog() {
    document.getElementById('dialog').classList.add('din-none')
}