function contar(){
    let inicio = document.getElementById('txti')//inicio
    let fim = document.getElementById('txtf')//fim
    let passo = document.getElementById('txtp')//passo
    let res = document.querySelector('div#res') // transformar res em variavel.
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length <= 0) {//se houver form vazio, alerte o erro!
        window.alert('ERRO')
    } else { //ou entao, execute:
        res.innerHTML = 'Contando:'
        let i = Number(inicio.value)
        let f  = Number(fim.value)
        let p = Number(passo.value)  

        if (i < f) { //se o inicio for menor q o fim
            //crescente
            for (let c = i; c <= f; c += p){
                res.innerHTML += `${c}  `
            }

        } else{ //caso contrario, 
            for (let c = i; c >= f; c -= p){
                res.innerHTML += `${c}   `              
            }
        }//fim if
        res.innerHTML += `\u{1f3c1}` 
    }//fim if
}//fecha uncao