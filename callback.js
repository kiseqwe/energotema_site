function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Додаємо логіку для відправки даних на сервер або обробки на клієнті за потребою.

    // Просто виводимо повідомлення для прикладу.
    var responseMessage = document.getElementById('responseMessage');
    responseMessage.innerHTML = 'Дякуємо за ваше повідомлення!';
    responseMessage.style.color = '#4caf50';
}
