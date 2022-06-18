console.log("hello")
var text_array=[]
text_array = [" Be judgy", " Be honest ", " Be helpful ", " BE A rateR!!"]
var array_index = 0;
var count=0;


function typewrite()
{
    if(count < text_array[array_index].length)
    {
        let letter= document.getElementById("header")
        letter.innerHTML= letter.innerHTML + text_array[array_index].charAt(count)
        count++
        setTimeout(typewrite,200)
    }
    else
    {
        count=text_array[array_index].length
        delete_func()
    }
}

function delete_func()
{
    if(count>0)
    {
        let letter= document.getElementById("header")
        letter.innerHTML= letter.innerHTML.slice(0,count)
        count--
        setTimeout(delete_func,100)

    }
    else
    {
        array_index= array_index+1
        if(array_index == text_array.length)
        {
            array_index=0
        }
        count=0
        typewrite()
    }
}

typewrite()
