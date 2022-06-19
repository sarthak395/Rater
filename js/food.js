console.log("hello")
const form_=document.getElementById('Canteens/Mess');
const contains=document.querySelectorAll('.con')

const buttons=document.querySelectorAll('.sendbut')

document.getElementById("subbtn").addEventListener("click",()=>{
    const div=document.getElementById(form_.value)
    contains.forEach(con=>con.style.display='none')
    div.style.display='block'

    buttons.forEach(but=>{
        var id=but.parentNode.querySelectorAll('.namefood')[0].innerText
        if(id!='')
        {
            var rate=localStorage.getItem(id)
            but.parentNode.querySelectorAll('.rate')[0].innerText=rate
        }

    })
})

function change(e)
{
    rate=Math.round((Math.random()*100))%5 + 1
    var el=e.parentNode.querySelectorAll('.rate')[0]
    el.innerText=rate
    var id=e.parentNode.querySelectorAll('.namefood')[0].innerText
    localStorage.setItem(id,rate)
}

buttons.forEach(but=>but.addEventListener("click",()=>{
    change(but)
}))
