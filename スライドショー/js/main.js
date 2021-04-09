'use strict';

{
  const images = [
    'img/pic00.png',
    'img/pic01.png',
    'img/pic02.png',
    'img/pic03.png',
    'img/pic04.png',
    'img/pic05.png',
    'img/pic06.png',
    'img/pic07.png',
  ];

  let currentIndex = 0;
  let isPlaying = false;
  let setId;

  const mainImage = document.getElementById('main');
  const playBtn = document.getElementById('play');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const thumbNails = document.getElementById('thumb');


  function renderImages(){
    mainImage.src = images[currentIndex];

    while(thumbNails.firstChild){
      thumbNails.removeChild(thumbNails.firstChild);
    }

    images.forEach((image, index) => {
      const li = document.createElement('li');
      const img = document.createElement('img');
      img.src = image;

      if(index === currentIndex){
        li.classList.add('current');
      }

      li.addEventListener('click', ()=>{
        mainImage.src = image;
        const thumbnails = document.querySelectorAll('.thumbnails > li');
        thumbnails[currentIndex].classList.remove('current');
        currentIndex = index;
        thumbnails[currentIndex].classList.add('current');
      })

      li.appendChild(img);
      thumbNails.appendChild(li);
    });
  }

  function playSlideshow(){
    setId = setTimeout(() => {
      nextBtn.click();
      playSlideshow();
    }, 1000);
  }







  renderImages();

  nextBtn.addEventListener('click', ()=>{
    let target = currentIndex + 1;
    if(target === images.length){
      target = 0;
    }
    document.querySelectorAll('.thumbnails > li')[target].click();
  });

  prevBtn.addEventListener('click', ()=>{
    let target = currentIndex - 1;
    if(target < 0){
      target = images.length - 1;
    }
    document.querySelectorAll('.thumbnails > li')[target].click();
  })

  playBtn.addEventListener('click', ()=>{
    if(isPlaying === true){
      clearTimeout(setId);
      playBtn.textContent = 'Play';
      isPlaying = false;
    }else{
      isPlaying = true;
      playBtn.textContent = 'Pause';
      playSlideshow();
    }
  });


}