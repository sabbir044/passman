document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form') as HTMLFormElement;
    const website = document.querySelector('#website') as HTMLInputElement;
    const username = document.querySelector('#username') as HTMLInputElement;
    const password = document.querySelector('#password') as HTMLInputElement;
  
    form.addEventListener('submit', function(event: Event) {
      event.preventDefault();
      const data = {
        address: website.value,
        username: username.value,
        password: password.value
      };
      console.log(data);
    });
  });
  