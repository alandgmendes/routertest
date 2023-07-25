export const validateCpf = (cpf: string): boolean => {
    if (typeof cpf !== 'string') {
      return false;
    }
  
    cpf = cpf.replace(/[\s.-]*/g, '');
  
    if (cpf.length !== 11) {
      return false;
    }
  
    let sum = 0;
    let result = 0;
    let cpfNumber = cpf.substring(0, 9);
  
    for (let i = 1; i <= 9; i++) {
      sum = sum + parseInt(cpfNumber.charAt(i - 1)) * (11 - i);
    }
  
    result = (sum * 10) % 11;
  
    if (result === 10 || result === 11) {
      result = 0;
    }
  
    if (result !== parseInt(cpf.charAt(9))) {
      return false;
    }
  
    cpfNumber = cpfNumber + cpf.charAt(9);
  
    sum = 0;
    result = 0;
  
    for (let i = 1; i <= 10; i++) {
      sum = sum + parseInt(cpfNumber.charAt(i - 1)) * (12 - i);
    }
  
    result = (sum * 10) % 11;
  
    if (result === 10 || result === 11) {
      result = 0;
    }
  
    if (result !== parseInt(cpf.charAt(10))) {
      return false;
    }
  
    return true;
  };
  
  export const validateCnpj = (cnpj: string): boolean => {
    if (typeof cnpj !== 'string') {
      return false;
    }
  
    cnpj = cnpj.replace(/[\s.-]*/g, '');
  
    if (cnpj.length !== 14) {
      return false;
    }
  
    let sum = 0;
    let result = 0;
    let cnpjNumber = cnpj.substring(0, 12);
  
    for (let i = 1; i <= 12; i++) {
      sum = sum + parseInt(cnpjNumber.charAt(i - 1)) * (i <= 6 ? 7 - i : 13 - i);
    }
  
    result = sum % 11;
    result = result < 2 ? 0 : 11 - result;
  
    if (result !== parseInt(cnpj.charAt(12))) {
      return false;
    }
  
    cnpjNumber = cnpjNumber + cnpj.charAt(12);
  
    sum = 0;
    result = 0;
  
    for (let i = 1; i <= 13; i++) {
      sum = sum + parseInt(cnpjNumber.charAt(i - 1)) * (i <= 7 ? 9 - i : 15 - i);
    }
  
    result = sum % 11;
    result = result < 2 ? 0 : 11 - result;
  
    if (result !== parseInt(cnpj.charAt(13))) {
      return false;
    }
  
    return true;
  };
  
  export const validateEmail = (email: string): boolean => {
    // Regular expression for email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    return emailRegex.test(email);
  };