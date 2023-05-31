function isValidEmail(email) {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/;
    return emailRegex.test(email);
  }
  
  function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const comment = document.getElementById("comment").value;
    const form = document.getElementById("myForm");
  
  
    if (!name) {
      alert("Пожалуйста, заполните поле 'Имя'");
      return false;
    }
  
    if (!email) {
      alert("Пожалуйста, заполните поле 'Почта'");
      return false;
    }
  
    if (!comment) {
      alert("Пожалуйста, заполните поле 'Комментарий'");
      return false;
    }
  
    
    if (!isValidEmail(email)) {
      alert("Пожалуйста, введите корректный адрес электронной почты");
      return false;
    }
  
    alert("Форма отправлена!");
    form.reset();
    return true;
  }
  
  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    validateForm();
  });
  