const frm = document.querySelector("form")
const resp = document.querySelector("pre")
frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const num = Number(frm.inNumero.value)
    if(num%2==0){
        resp.innerText = `PAR`

    }else{
        resp.innerText = `ÍMPAR`
    }
})