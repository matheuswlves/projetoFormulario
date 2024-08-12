const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
form.addEventListener('submit', (event) =>{
    let isValid = true;
    if (!nameValidate()) isValid = false;
    if (!emailValidate()) isValid = false;
    if (!mainPasswordValidate()) isValid = false;
    if (!comparePassword()) isValid = false;
    if (isValid) {
        form.submit();
    }
    });
    function setError(index){
        campos[index].style.border = '2px solid #e63636';
        spans[index].style.display = 'block';
    }
    function removeError(index){
        campos[index].style.border = '';
        spans[index].style.display = 'none';
    }
    function nameValidate(){
        if (campos[0].value.length<4){
            setError(0);
        }
        else {
            removeError(0);
        }
    }
    function emailValidate(){
        if(emailRegex.test(campos[1].value))
        {
            removeError(1);
        }
        else{
            setError(1);
        }
    }
    function mainPasswordValidate(){
        if(campos[2].value.length < 8){
            setError(2);
        }
        else{
            removeError(2);
            comparePassword();
        }
    }
    function comparePassword(){
        if(campos[2].value == campos[3].value && campos[3].value.length>=8){
            removeError(3);
        }
        else{
            setError(3);
        }
    }