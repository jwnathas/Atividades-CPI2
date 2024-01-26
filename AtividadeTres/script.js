function ehPalindromo(palavra) {

    palavra = palavra.replace(/\s/g, '').toLowerCase();
    
    const reversePalavra = palavra.split('').reverse().join('');
    
    return palavra === reversePalavra;
}
// se for palindromo retorna true, se nao for, retorna falso
console.log(ehPalindromo("ovo"));