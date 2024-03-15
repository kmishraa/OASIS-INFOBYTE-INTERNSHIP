let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

// document.querySelectorAll('button'); is like a command in JavaScript that says, 
// "Find all the buttons on the web page and keep track of them."

let string= "";

let arr =  Array.from(buttons);
arr.forEach(button=>{

    //adds an event listener that listens for a click on that button.
    button.addEventListener('click', (e)=>{

        //equal button
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        //All Clear
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value= string;
        }

        //Del
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            input.value= string;
        }

        //adding the inputs
        else{
            string += e.target.innerHTML;
            input.value = string;
        }

    });
});