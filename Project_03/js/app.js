let display = document.querySelector(".display");

let getBut = document.querySelectorAll("button");

let allReset = document.querySelector('.reset');

let back = document.querySelector('.back');

// Show Display what you Click 

for (i = 0; i < getBut.length; i++) {

  getBut[i].onclick = (e) => {

   let val = e.target.innerHTML.trim();

    if(val == 'x'){

         val = '*';

    }else if(val == "÷"){

         val = '/';
    };

    if(display.innerHTML == 0){

     
      return display.innerHTML = val;

   };
    let valen = display.innerHTML.length;

    if(valen == 10){
        
        display.style.fontSize = '2em';        

    }
    
    if(valen < 16){

        return display.innerHTML += val;

    }
  };
  
};

// Back button Function

back.onclick = () => {

    let val = display.innerHTML;

    if(val.length < 2){

        display.innerHTML = '0';

    }else{

        display.innerHTML = val.slice(0, val.length - 1);
    }

    if(val.length < 9){

        display.style.fontSize = '3em';
    }
}

// AllRest Function 

allReset.onclick = () => {

    display.innerHTML = '0';

    display.style.fontSize = '3em';
}

// Calculat Function

let calculate = document.querySelector('.calcu');

calculate.onclick = () => {

    let val = display.innerHTML;   

    display.innerHTML = eval(val);

}

