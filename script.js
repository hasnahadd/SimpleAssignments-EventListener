document.addEventListener("DOMContentLoaded", () => {
    const btn1 = document.querySelector('#increase');
    const btn2 = document.querySelector('#decrease');
    const change =  document.querySelector('#box1');
    const change2 =document.querySelector('#box2');
    //const form1 = document.querySelector('#form1');
    const form2 = document.querySelector('#form2');
    const inputFiled1 = document.querySelector('#tyaping1');
    const inputElement = document.querySelector('#tyaping2');

    const btnRest = document.querySelector('#default');
      const p = document.querySelector('#eyes');
      const btnAlrt =document.querySelector('#alert');

    function Increase(){
      const p = document.querySelector('#eyes');
      let fontSize1  = window.getComputedStyle(p);
      let fontSize = parseInt(fontSize1.fontSize);
      console.log(fontSize1);
      console.log(fontSize);
      fontSize += 2;
      p.style.fontSize = fontSize + 'px';
      
    }
    btn1.addEventListener('click',Increase);
    btn2.addEventListener('click', Decrease);
  function Decrease(){
  const p = document.querySelector('#eyes');
      let fontSize1  = window.getComputedStyle(p);
      let fontSize = parseInt(fontSize1.fontSize);
      console.log(fontSize1);
      console.log(fontSize);
      fontSize -= 2;
      p.style.fontSize = fontSize + 'px';
  
  }
    //console.log(change);
   function inside(){
  const p = document.querySelector('#eyes');
  p.classList.add("bg-color");   
   } 
    function outSide(){
  const p = document.querySelector('#eyes');
  p.classList.add("bg-purpule");   
      
    }
  change.addEventListener('mouseenter',inside);
  
  change2.addEventListener('mouseleave',outSide);
   defaultText= p.innerText
  
  inputFiled1.addEventListener('keydown',function(e){

    const p = document.querySelector('#eyes');
   
    p.innerText = e.target.value;

  } );
  
  btnRest.addEventListener('click' ,function(){
    defaultText= p.innerText;
  })
  
  form2.addEventListener('click',function(e){
    e.preventDefault();
 console.log(inputElement.value);
btnAlrt.addEventListener('click',function(){
 // inputElement.reset();
alert(inputElement.value);

})



  })
  
  
  
    
    });