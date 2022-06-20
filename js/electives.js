var Year_var=1;
var Sem_var="Spring";
var Programme_var="CSE";

// let courses_year_sem_prog=[]

// let courses = [
//     {Year: 1, Semester: "Spring" , Programme: "CSE", Course_name: "Computer Programming" },
//     {Year: 3, Semester: "Monsoon" , Programme: "CSE", Course_name: "Compilers"},
//     {Year: 4, Semester: "Monsoon" , Programme: "CLD", Course_name: "Computer Systems and Organisation"},
//     {Year: 2, Semester: "Spring" , Programme: "ECD", Course_name: "Introduction to Software Systems"},
//     {Year: 4, Semester: "Monsoon" , Programme: "CLD", Course_name: "Data Structures and Algorithms"},
//     {Year: 5, Semester: "Monsoon" , Programme: "CSD", Course_name: "Linear Algebra"}
// ];

function Year(event){
    Year_var= event.value;
    // courses_year_sem_prog=courses.filter(function(e){
    //     return e.Year == Year_var && e.Semester == Sem_var && e.Programme == Programme_var
    // })
    // console.log(Year_var)
}

function Semester(event){
    Sem_var= event.value;
    // courses_year_sem_prog=courses.filter(function(e){
    //     return e.Year == Year_var && e.Semester == Sem_var && e.Programme == Programme_var
    // })
    // console.log(Sem_var)
}

function Programme(event){
    Programme_var= event.value;
    // courses_year_sem_prog=courses.filter(function(e){
    //     return e.Year == Year_var && e.Semester == Sem_var && e.Programme == Programme_var
    // })
    // console.log(Programme_var)
}



function display()
{
    // const ol=document.getElementById('list')
    // var length=courses_year_sem_prog.length
    // if(length==0)
    // {
    //     ol.innerHTML='<p>No Such Courses</p>'
    //     return
    // }
    // ol.innerHTML=""
    // for(var i=0;i<length;i++)
    // {
    //     const li=document.createElement('li')
    //     li.innerText=courses_year_sem_prog[i].Course_name
    //     ol.append(li);
    // }

    const form=document.createElement('form')
    form.setAttribute('action','/electives')
    form.setAttribute('method','post')
    // var str='{'+'"Year"'+':'+Year_var+','+'"Semester"'+':'+Sem_var+','+'"Programme"'+':'+Programme_var+'}'
    // var str=JSON.stringify(`{"Year":${Year_var},"Semester":"${Sem_var}","Programme":"${Programme_var}"}`)
    // for(var i=0;i<length;i++)
    // {
    //     str+=courses_year_sem_prog[i].Course_name+",";
    // }
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


// function Initial_load()
// {

//     courses_year_sem_prog=courses.filter(function(e){
//         return e.Year == Year_var && e.Semester == Sem_var && e.Programme == Programme_var
//     })
//     // console.log("hi")

// }

// Initial_load()