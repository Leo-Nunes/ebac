const form = document.getElementById('form-Validar');

    var number1 = parseInt(document.getElementById('num1').value);
    var number2 = parseInt(document.getElementById('num2').value);


function Validar(number1, number2) {
    return number2 > number1;

}


form.addEventListener('submit', function(e) {
    let formEvalido = false;
    e.preventDefault();

    const number1 = document.getElementById('num1');
    const number2 = document.getElementById('num2');
    const succes_message2 = ` O Valor do Campo B ${number2.value} é superior ao valor do Campo A ${number1.value} Formulário válido!`;
    

    formEvalido = Validar(number1.value, number2.value);
    if (formEvalido) {
        const containerSuccesMessage2 = document.querySelector('.success_message');
        containerSuccesMessage2.innerHTML = succes_message2;
        containerSuccesMessage2.style.display = 'block';
    
        number1.value = '';
        number2.value = '';
        

    } else {
        number1.value = '';
        number2.value = '';
        document.querySelector('.error_message').style.display = 'block';

    } 

    
    
})

console.log(form);

