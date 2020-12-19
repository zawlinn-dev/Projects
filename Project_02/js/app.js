
// TO DO LIST

let ul = document.querySelector('ul');
let but = document.querySelector('button');
let data = document.querySelector('input');

// Check Data

function dataFilter(x){

        if(x.length <= 3){

                alert('Your Typing Must be More Than 3 Alphabets.');
                return false;

        }else{

                return x;
                
        }
}

// Create Elements

function createElement(e,c){

        let ele = document.createElement(e);

        ele.classList.add(c);

        return ele;
}


//function Icon

function createIcon(e,a,c){

        let icon = document.createElement(e);

        icon.classList.add(a,c);

        return icon;
}

// Append Elements

function appendElement(first, second){

        return first.appendChild(second);
}


// Add Button Function 

function addList(){

        let getText = dataFilter(data.value);

       if(getText != false ){
               
        // Create Lists

        let list = createElement('li','listItem');

        // Append Element into ul Tag

        appendElement(ul, list);

        // Create Element tow Div

        for(i = 0; i < 2; i++){

                let d = createElement('div','sec');

                if(i == 1){

                        d = createElement('div','but');

                }

                // Append Element list into Div

                appendElement(list, d);

        }  

        // Create h3 and p Tags
        let h = createElement('h3', 'headText');
        
        let p = createElement('p', 'time');

        // Craete Icon for edit and delete button

        for(i = 0; i < 2; i++){

                let d = createIcon('i','fa', 'fa-edit');

                let dBut = document.querySelectorAll('.but');

                if(i == 1){

                        d = createIcon('i','fa', 'fa-trash');

                }

                // Append icon into DIV 2

               for(j = 0; j < dBut.length; j++){

                        appendElement(dBut[j], d);
               }
               
        }

        //Get Date

        let date = new Date();

        let day = date.toLocaleDateString();

        h.innerHTML = getText;

        p.innerHTML = day;

        // Append Element h3 and p into Div One

        let d1 = document.querySelectorAll('.sec');

        for(i = 0; i < d1.length; i++){

                appendElement(d1[i], h);

                appendElement(d1[i], p);
        }

        // Reset Input Value 

        document.querySelector('input').value = '';

        // Applied Checked 

        let lists = document.querySelectorAll('li');

        for(i = 0; i < lists.length; i++){

                lists[i].onclick = (e) => {

                        e.target.classList.toggle('checked');
                }
        }

        // Applied Delete Button

        let delBut = document.querySelectorAll('.fa-trash');

        for(i=0; i<delBut.length; i++){

                delBut[i].onclick = (e) =>{

                        let point = e.target.parentElement.parentElement;

                        point.style.display = 'none';
                }
        }

        // Applied Edit Button

        let edBut = document.querySelectorAll('.fa-edit');

        for(i=0; i < edBut.length; i++){

                edBut[i].onclick = (e) =>{

                        let point = e.target.parentElement.previousSibling;

                        let gData = e.target.parentElement.parentElement;

                        let kids = point.children[0].innerHTML;

                        document.querySelector('input').value = kids;

                }
        }

       }

 
        
}

