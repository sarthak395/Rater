console.log("hello")
const form_=document.getElementById('Canteens/Mess');
const contains=document.querySelectorAll('.con')

document.getElementById("subbtn").addEventListener("click",()=>{
    console.log(form_.value)
    const div=document.getElementById(form_.value)
    contains.forEach(con=>con.style.display='none')
    div.style.display='block'
})

