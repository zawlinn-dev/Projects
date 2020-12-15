window.setTimeout( ()=>{

        let m = document.querySelector('.main');
        let x = document.querySelector('.preloader');

        x.style.display = 'none';
        m.style.display = 'block';d

}, 5000);

// TO DO LIST

let x = document.querySelector('ul');
let but = document.querySelector('button');

but.addEventListener('click', () => {

        // get input data
        let data = document.querySelector('input').value;

        // Create li tag
        let list = document.createElement('li');

        //Create Div 1
        let d1 = document.createElement('div');

        //Create Div 2
        let d2 = document.createElement('div');

        //Create H3 Tag
        let h = document.createElement('h3');

        //Create p tag
        let p = document.createElement('p');
        
        //Get time string
        let date = new Date();
        let today = date.toLocaleDateString();
        p.innerHTML = today;

        //Append Data for h3
        h.innerHTML = data;

        //Append h3 into DIV 1
        d1.appendChild(h);

        // ADD DIV 1 to LI
        list.appendChild(d1);

        //Append p to DIV 1
        d1.appendChild(p);

        //Create edit and del button
        let edit = document.createElement('i');
        let del = document.createElement('i');
        edit.classList.add("fa","fa-edit");
        del.classList.add("fa","fa-trash");

        //Append edit and del button into DIV 2
        d2.appendChild(edit);
        d2.appendChild(del);

        //Append DIV 2 to LI
        list.appendChild(d2);    

        if(data == ''){
                alert('You must put what you want!');
                return false;
        }else{
                x.appendChild(list);

        }

        document.querySelector('input').value = '';

        //Get Lists
        list.addEventListener('click', ()=>{

                list.classList.toggle("checked");
        })

      let close = document.querySelectorAll('.fa-trash');
      for(i=0; i < close.length; i++){

        close[i].onclick = (evn) =>{

                let closebut = evn.target.parentElement.parentElement;

                closebut.style.display = 'none';
        }
      }

      let edi = document.querySelectorAll('.fa-edit');
      for(i=0; i < edi.length; i++){

        edi[i].onclick = (evn) =>{
                let edibut = evn.target.parentElement.previousSibling;
                let delbut = evn.target.parentElement.parentElement;
                let getData = edibut.children[0].innerHTML;
                document.querySelector('input').value = getData;
                delbut.style.display = 'none';

        }
      }
});

