let myBalance = document.querySelector("#myBalance");
console.log(myBalance.innerHTML);
let monthTotal = document.querySelector("#monthTotal");
console.log(monthTotal.innerHTML);
let lastMonthTotal = document.querySelector("#lastMonthTotal");
console.log(lastMonthTotal.innerHTML);
//função gerar random number
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
// valores randomicos no array para ficar mais dinamico
let valores = [
  getRandomInt(100),
  getRandomInt(100),
  getRandomInt(100),
  getRandomInt(100),
  getRandomInt(100),
  getRandomInt(100),
  getRandomInt(100),
];
// dando fetch automaticamente ja colocando os dados dentro do chart
fetch("data.json").then((response) => {
  response.json().then((dados) => {
    let usuariosArr = [];
    let usuariosAmount = [];
    console.log(dados.usuarios);
    dados.usuarios.map((usuario) => {
      usuariosArr.push(usuario.day);
      usuariosAmount.push(usuario.amount);
    });
    // desenhando o chart , no caso dentro do fetch para utilizar os dados extraidos do JSON
    const ctx = document.getElementById("myChart");
    
    let backgroundcolor = [];

    const max = Math.max(...valores);
    console.log(max);
    const highestValueColor = valores.map((valor, index) => {
      // console.log(valor, index);
      const color = valor === max ? 'hsl(186, 34%, 60%)' : 'hsl(10, 79%, 65%)';
      // console.log(color);
      backgroundcolor.push(color);
    });
    console.log(backgroundcolor)

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: usuariosArr,
        datasets: [
          {
            label: "percentage spend",
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
