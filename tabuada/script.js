function gerar(){
 let num = document.getElementById('txtn')
 let tab = document.getElementById('tabselect')
 
    if (num.value.length == 0) { //se o campo tiver vazio, alerte!
        alert('ERRO!')
    } else {//ou entao, execute:
        let n = Number(num.value)
        tab.innerHTML = ''
          
        for (c = 1; c <= 10; c++) {
            tab.innerHTML += `<option>${n} x ${c} = ${n*c}</option>`
        }
    }//fecha else
}//fecha uncao