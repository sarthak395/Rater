var Year_var=1;
var Sem_var="Spring";
var Programme_var="CSE";

function Year(event){
    Year_var= event.value;
}

function Semester(event){
    Sem_var= event.value;
}

function Programme(event){
    Programme_var= event.value;
}

function display()
{
    const form=document.createElement('form')
    form.setAttribute('action','/electives')
    form.setAttribute('method','post')
   
    const input1=document.createElement('input')
    input1.name="Year"
    input1.value=Year_var
    form.appendChild(input1)

    const input2=document.createElement('input')
    input2.name="Semester"
    input2.value=Sem_var
    form.appendChild(input2)

    const input3=document.createElement('input')
    input3.name="Programme"
    input3.value=Programme_var
    form.appendChild(input3)

    document.getElementById('list').appendChild(form)
    form.submit()
    document.getElementById('list').removeChild(form)
}
document.getElementById("btn").addEventListener('click',display)
