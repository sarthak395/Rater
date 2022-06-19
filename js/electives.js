var Year_var="1";
var Sem_var="1";
var Programme_var="1";

let courses_year_sem_prog=[]

let courses = [
    {Year: "1", Semester: "1" , Programme: "1", Course_name: "A" },
    {Year: "3", Semester: "2" , Programme: "1", Course_name: "B"},
    {Year: "4", Semester: "2" , Programme: "3", Course_name: "C"},
    {Year: "2", Semester: "1" , Programme: "7", Course_name: "D"},
    {Year: "4", Semester: "2" , Programme: "3", Course_name: "E"},
    {Year: "5", Semester: "2" , Programme: "2", Course_name: "F"}
];

function Year(event){
    Year_var= event.value;
    courses_year_sem_prog=courses.filter(function(e){
        return e.Year == Year_var && e.Semester == Sem_var && e.Programme == Programme_var
    })
    // console.log(Year_var)
}

function Semester(event){
    Sem_var= event.value;
    courses_year_sem_prog=courses.filter(function(e){
        return e.Year == Year_var && e.Semester == Sem_var && e.Programme == Programme_var
    })
    // console.log(Sem_var)
}

function Programme(event){
    Programme_var= event.value;
    courses_year_sem_prog=courses.filter(function(e){
        return e.Year == Year_var && e.Semester == Sem_var && e.Programme == Programme_var
    })
    // console.log(Programme_var)
}



function display()
{
    const ol=document.getElementById('list')
    var length=courses_year_sem_prog.length
    if(length==0)
    {
        ol.innerHTML='<p>No Such Courses</p>'
        return
    }
    ol.innerHTML=""
    for(var i=0;i<length;i++)
    {
        const li=document.createElement('li')
        li.innerText=courses_year_sem_prog[i].Course_name
        ol.append(li);
    }
}
document.getElementById("btn").addEventListener('click',display)


function Initial_load()
{

    courses_year_sem_prog=courses.filter(function(e){
        return e.Year == Year_var && e.Semester == Sem_var && e.Programme == Programme_var
    })
    // console.log("hi")

}

Initial_load()