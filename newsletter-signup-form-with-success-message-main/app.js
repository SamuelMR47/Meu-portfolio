const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const subBtn = document.querySelector('.sub-btn');


form.addEventListener('submit', function (event) {
    event.preventDefault(); 

    const email = emailInput.value;
    const spanEmail = document.getElementById('span-email-placeholder');
    

    if(validateEmail(email)) {
        const encodedEmail = encodeURIComponent(email);
        window.location.href = `success.html?email=${encodedEmail}`;        
        
     

    } else {
        const errorEm = document.querySelector('em');
        errorEm.textContent = "Valid email required.";
        emailInput.style.border = "1px solid var(--primary-clr-Tomato)";
        emailInput.style.color = "var(--primary-clr-Tomato)";
        emailInput.style.backgroundColor = "hsla(4, 85%, 79%, 0.644)";
    }

})


// Função para validar o email
function validateEmail(email) {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
  }



// Função para levar de volta a página inicial
function goToIndex() {
    window.location.href = 'index.html';
  }



