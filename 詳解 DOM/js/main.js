'use strict';

// {
  // function update(){
  //   // document.querySelector('h1').textContent = 'Changed!';
  //   // document.querySelector('#target').textContent = 'Changed!';
  //   // document.querySelector('p').textContent = 'Changed!';
  //   // document.querySelectorAll('p')[1].textContent = 'Changed!';
  //   // document.querySelectorAll('p').forEach((p,index) => {
  //   //   p.textContent = `${index}番目のpです！`;

  //   // }}
  // }

//   document.querySelector('button').addEventListener('click', ()=>{
//     // const targetNode = document.getElementById('target');
//     // // targetNode.textContent = 'Changed!';
//     // // targetNode.title = 'This is title!';
//     // // // targetNode.style.color = 'red';
//     // // // targetNode.style.backgroundColor = 'skyblue';
//     // // // targetNode.className = 'my-color my-border';
//     // // // targetNode.classList.add('my-color');
//     // // // if (targetNode.classList.contains('my-color') === true){
//     // // //  targetNode.classList.remove('my-color');
//     // // // }else{
//     // // //   targetNode.classList.add('my-color');
//     // // targetNode.classList.toggle('my-color');
//     // // targetNode.textContent = 'Dotinstall';
//     // targetNode.textContent = targetNode.dataset.translation;

//     // const item2 = document.createElement('li');
//     // item2.textContent = 'item 2';

//     // const ulNode = document.querySelector('ul');

//     // ulNode.appendChild(item2);

//     // const item0 = document.querySelectorAll('li')[0];
//     // const copy = item0.cloneNode(true);

//     // const ul = document.querySelector('ul');
//     // const item2 = document.querySelectorAll('li')[2];

//     // ul.insertBefore(copy, item2);

//     // const item1 = document.querySelectorAll('li')[1];

//     // // item1.remove();
//     // // 親Node.removeChild(削除するNode)

//     // document.querySelector('ul').removeChild(item1);

//     // const li = document.createElement('li');
//     // const text = document.querySelector('input');
//     // li.textContent = text.value;
//     // document.querySelector('ul').appendChild(li);

//     // text.value = '';
//     // text.focus();

//     // const li = document.createElement('li');
//     // const color = document.querySelector('select');
//     // li.textContent = `${color.value} - ${color.selectedIndex}`;
//     // document.querySelector('ul').appendChild(li);

//     // const colors = document.querySelectorAll('input');
//     // let selectedColor;

//     // colors.forEach((color)=>{
//     //   if(color.checked === true){
//     //     selectedColor = color.value;
//     //   }
//     // });

//     // const li = document.createElement('li');
//     // li.textContent = selectedColor;
//     // document.querySelector('ul').appendChild(li);

//     // const colors = document.querySelectorAll('input');
//     // const selectedColors = [];

//     // colors.forEach((color)=>{
//     //   if(color.checked === true){
//     //     selectedColors.push(color.value);
//     //   }
//     // });

//     // const li = document.createElement('li');
//     // li.textContent = selectedColors.join(',');
//     // document.querySelector('ul').appendChild(li);

    

















//     });




// }



{
  // document.querySelector('button').addEventListener('dblclick', ()=>{
  //   console.log('Double Clicked!');

  // });

  // document.addEventListener('mousemove', e =>{
  //   // console.log('moved!');
  //   console.log(e.clientX, e.clientY);
  // });

  // document.addEventListener('keydown', e =>{
  //   console.log(e.key);
  // });


  // const text = document.querySelector('textarea');

  // text.addEventListener('focus', ()=>{
  //   console.log('focus');
  // });

  // text.addEventListener('blur', ()=>{
  //   console.log('blur');
  // });

  // text.addEventListener('input', ()=>{
  //   console.log(text.value.length);
  // });

  // text.addEventListener('change', ()=>{
  //   console.log('change');
  // });

  // document.querySelector('form').addEventListener('submit', (e)=>{
  //   e.preventDefault();
  //   console.log('submit!');
  //   document.querySelector('input').value = '';
  //   document.querySelector('input').focus();

  // });

  document.querySelector('ul').addEventListener('click', e => {
    if(e.target.nodeName === 'LI'){
      e.target.classList.toggle('done');
    }
  });




}