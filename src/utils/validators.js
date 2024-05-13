//Para validar que la data solo contenga letras
const validateString = (str) => {
    const lettersOnly = /^[A-Za-z]+$/;
    return lettersOnly.test(str);
};

//Para validar que la data solo contenga numeros y un maximo de 10 digitos
const validateNumber = (numbers) => {
    const numberPattern = /^\d{1,10}$/;
    return numberPattern.test(numbers);
};

//Para validar que la data sea un correo electronico
const validateEmail = (email) => {
    const emailPattern = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
};

//Validar que el nuevo valor sea distinto al anterior
const compare = (val1, val2) => {
    if (val2 === null || !val2) return val1;
    if (val1 !== val2) return val2;
    return val1;
};

module.exports = {
    validateEmail,
    validateNumber,
    validateString,
    compare
};