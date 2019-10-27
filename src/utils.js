function sum(a, b) {
    return a + b;
}

// Named export (pode ter vários por arquivo, mas precisa ser importado entre chaves. Ex.: { sub })
export function sub(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

// similar ao "export function" (permite alias)
export { mult as multiplicacao, div };

// Método principal (apenas um por arquivo, mas não precisa ser importado entre chaves. Ex.: { sum })
export default sum;