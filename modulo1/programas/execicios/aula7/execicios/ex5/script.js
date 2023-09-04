const frm = document.querySelector("form")
const resp = document.querySelector("pre")
frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const x = Number(frm.inNumero.value)
    if(x%2==0 && x%3==0){
        resp.innerText = `${x} é múltiplo de 2 e 3`

    }else{
        resp.innerText = `${x} não é múltiplo de 2 e 3`
    }
})