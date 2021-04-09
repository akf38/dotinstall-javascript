'use strict';

{
  function createColumn(col){
    const source = [];
    for(let i=0; i<15; i++) {
      source[i] = i + 1 + 15 * col;
    };
    const b = [];
    for(let i=0; i<5; i++){
      b[i] = source.splice(Math.floor(Math.random() * (source.length - i)), 1)[0];
    };
    return b;
  }

  function createColumns(){
    const columns = [];
    for(let i=0; i<5; i++){
      columns[i] = createColumn(i);
    }
    columns[2][2] = 'FREE';
    return columns;
  }



  // function createBingo(columns){
  //   const bingo = [];
  //   for(let row=0; row<5; row++){
  //     bingo[row] = [];
  //     for(let col=0; col<5; col++){
  //       bingo[row][col] = columns[col][row];
  //     }
  //   }
  //   return bingo;
  // }

  function renderBingo(bingo){
    const tbody = document.querySelector('tbody');
    for(let s=0; s < 5; s++){
      const tr = document.createElement('tr');
      for(let i=0; i < 5; i++){
        const td = document.createElement('td');
        td.textContent = columns[i][s];
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }
  }

  const columns = createColumns();
  renderBingo(columns);

}