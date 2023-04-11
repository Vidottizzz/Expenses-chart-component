let myBalance = document.querySelector("#myBalance");
// console.log(myBalance.innerHTML);
let monthTotal = document.querySelector("#monthTotal");
// console.log(monthTotal.innerHTML);
let lastMonthTotal = document.querySelector("#lastMonthSpend");
// console.log(monthTotal.innerHTML);
let perclastMonthTotal = document.querySelector("#lastMonthTotal");
// console.log(lastMonthTotal.innerHTML);

// valores randomicos no array para ficar mais dinamico dentro do draw
let valores = [
  getRandomInt(100),
  getRandomInt(100),
  getRandomInt(100),
  getRandomInt(100),
  getRandomInt(100),
  getRandomInt(100),
  getRandomInt(100),
];
//função gerar random number
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
// é to fixed ao invez de floor
function getRandomInt1(max) {
  let random = (Math.random() * max).toFixed(2);
  return random;
}
function percentage() {
// let firstMonthRand = getRandomInt(500);
let random = getRandomInt1(500);
let random2 = getRandomInt1(500);

let percentageValue = random - random2;
let percentageOf = `${((percentageValue / random2 ) * 100).toFixed(1)}%`;
monthTotal.innerHTML = `$${random}`;
lastMonthTotal.innerHTML = `$${random2}`;
perclastMonthTotal.innerHTML = `${percentageOf}`
}

percentage();





// dando fetch automaticamente ja colocando os dados dentro do chart
fetch("data.json").then((response) => {
  response.json().then((dados) => {
    let usuariosArr = [];
    let usuariosAmount = [];
    // console.log(dados.usuarios);
    dados.usuarios.map((usuario) => {
      usuariosArr.push(usuario.day);
      usuariosAmount.push(usuario.amount);
    });
    // desenhando o chart , no caso dentro do fetch para utilizar os dados extraidos do JSON
    const ctx = document.getElementById("myChart");
    
    let backgroundcolor = [];

    const max = Math.max(...valores);
    // console.log(max);
    const highestValueColor = valores.map((valor, index) => {
      // console.log(valor, index);
      const color = valor === max ? 'hsl(186, 34%, 60%)' : 'hsl(10, 79%, 65%)';
      // console.log(color);
      backgroundcolor.push(color);
      // console.log(backgroundcolor);
    });

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: usuariosArr,
        datasets: [
          {
            label: "% Spend",
            //podia ter colocado no data : usuariosAmount ( quer seria os dados do JSON)
            data: valores,
            backgroundColor:backgroundcolor,
            borderRadius: 5,
            barThickness: 32,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false, // This hides all text in the legend and also the labels.
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            display: false,
            grid: {
              display: false,
            },
            beginAtZero: true,
            ticks: {
              display: false,
            },
          },
        },
      },
    });
  });
});
