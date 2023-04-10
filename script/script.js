// google.charts.load("current", { packages: ["corechart"] });
// google.charts.setOnLoadCallback(drawChart);

// function drawChart() {
//   var data = google.visualization.arrayToDataTable([
//     ["Element", "Density", { role: "style" }],
//     ["mon", 8.94, "#ec775f"],
//     ["tue", 10.49, "#ec775f"],
//     ["wed", 19.3, "#ec775f"],
//     ["thu", 19.3, "#ec775f"],
//     ["fri", 19.3, "#ec775f"],
//     ["sat", 19.3, "#ec775f"],
//     ["sun", 21.45, "#76b5bc"],
// ]);

// var view = new google.visualization.DataView(data);
// view.setColumns([
//     0,
//     1,
//     { calc: "stringify", type: "string", role: "annotation" },
//     2,
// ]);
// var options = {

//         width: 340,
//         height: 300,
//     bar: { groupWidth: "20%", gap:"20%"},
//     legend: { position: "none" },
//     vAxis: {
//       gridlines: {
//         interval: 0,
//         color: 'transparent',
//         count : 0
//       },
//     },
//   };
//   var chart = new google.visualization.ColumnChart(
//     document.getElementById("columnchart_values")
//   );
//   chart.draw(view, options);
// }

const ctx = document.getElementById("myChart");

let labelsX = ["Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let valores = [10, 20, 30, 40, 50, 60, 70];
new Chart(ctx, {
  type: "bar",
  data: {
    labels: labelsX,
    datasets: [
      {    
        label: '',
        data: valores,
        backgroundColor: "hsl(10, 79%, 65%)",
        borderRadius: 5, 
        barThickness: 32,
      },
    ],
  },
  options: {
    plugins: {
        legend: {
            display: false // This hides all text in the legend and also the labels.
        }
    },
    scales: {
        
              x: {
                
        grid: {
            display: false,
        }
    },
    y: {
        display: false,
        grid: {
            display: false,
        },
        beginAtZero: true,
       ticks : {
        display: false,
       }
      },
      
    },
  },
});
