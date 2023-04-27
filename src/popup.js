"use strict";
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');
    const address = document.querySelector('#address');
    const username = document.querySelector('#username');
    const password = document.querySelector('#password');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const data = {
            address: address.value,
            username: username.value,
            password: password.value
        };
        console.log(data);
    });
});
//# sourceMappingURL=popup.js.map