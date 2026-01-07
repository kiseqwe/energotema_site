function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var responseMessage = document.getElementById('responseMessage');
    responseMessage.innerHTML = 'Дякуємо за ваше повідомлення!';
    responseMessage.style.color = '#4caf50';
}
