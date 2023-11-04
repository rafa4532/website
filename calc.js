let input = document.getElementById('input')
let buttons = document.querySelectorAll('button')
let result = ''
buttons.forEach(Element => {
    Element.addEventListener('click', (b)=>{
        if(b.target.innerText == '='){
            print("equals")
            result = String(eval(result))
            input.value = result;
        }
        else if(b.target.innerText == 'Clr') {
            result = ''
            input.value = result;

        }
        else if(b.target.innerText == 'Del'){
            result = result.substring(0, result.length-1)
            input.value = result;
        }
        else if(b.target.id == 'addOrSub'){
            result = String(-eval(result))
            input.value = result;
        }
        else{
            print("a number")
            result += b.target.innerText
            input.value = result
        }
    })
})
