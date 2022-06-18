var text_array=[]
text_array = [" Amey Choudhary ", " an IIIT-Hyderabad student ", " from Indore ", " a dog lover ", " going to end this.Bye!  " , " Wait. Did I not exit this? " , " Am I in a loop? Wait it is resetting. Nooooooooo " , " .............. "]
var array_index = 0;
var count=0;


window.onload(typewrite())

function typewrite()
{
    if(count < text_array[array_index].length)
    {
        let letter= document.getElementById("dynamic_part")
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
        let letter= document.getElementById("dynamic_part")
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

