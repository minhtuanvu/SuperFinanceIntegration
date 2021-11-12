//Type your code here.
//by vineela for pfm charts
// function generateDoughnutChart(dataset) {
//     var ctx = document.getElementById("Chart").getContext('2d');

//     var labels = dataset.map(function(obj) {
//         return obj.label;
//     });
//     var values = dataset.map(function(obj) {
//         return Number(obj.value || obj.value);
//     });
//     document.getElementById("Chart").width = window.innerWidth;
//     document.getElementById("Chart").height = window.innerHeight;
//     var bgColor = dataset.map(function(obj) {
//         return obj.color;
//     });
//     var myChart = new Chart(ctx, {
//         type: 'doughnut',
//         data: {
//             datasets: [{
//                 label: '# of Votes',
//                 data: values,
//                 backgroundColor: bgColor,
//                 borderWidth: 1
//             }]
//         },
//         options: {
//             cutoutPercentage: 65,
//             tooltips: {
//                 enabled: false
//             }
//         }
//     });

//     return true;
// }
//by vineela for pfm charts
function generateDoughnutChart(dataset) {
  //     var dataset = [{
  //             label: "Food",
  //             value: 340,
  //             color: "#ff0000"
  //         },
  //         {
  //             label: "Health",
  //             value: 440,
  //             color: "#ffff00"
  //         },
  //         {
  //             label: "Transport",
  //             value: 540,
  //             color: "#ff00ff"
  //         }
  //     ]
  var labels = dataset.map(function(obj) {
    return obj.label;
  });
  var values = dataset.map(function(obj) {
    return Number(obj.value || obj.value);
  });
  var bgColor = dataset.map(function(obj) {
    return obj.color;
  });
  var data = [{
    data: values,
    labels: labels,
    backgroundColor: bgColor,
    borderColor: "#fff"
  }];

  var options = {
    cutoutPercentage: 20,
    tooltips: {
      enabled: false
    },
    plugins: {
      datalabels: {
        formatter: function(value, ctx) {
          var sum = 0;
          var dataArr = ctx.chart.data.datasets[0].data;
          // var labelsArr = ctx.chart.data.datasets[0].labels;
          //           var index = 0;
          //           index = dataArr.indexOf(value);
          for (var i in dataArr) {
            sum += dataArr[i];
          }
          var percentage = (value / sum * 100).toFixed(2) + "%";
          //alert(percentage)
          return percentage;
        },
        color: '#fff',
      },
      legend: {
        display: true,
        position: 'top',
        itemStyle:{'font-color':'#fff'},//by vineela
        labels: {
          generateLabels: function() {
            var data = ctx.chart.data;
            if (data.labels.length && data.datasets.length) {
              return data.labels.map(function(label, i) {
                var meta = chart.getDatasetMeta(0);
                var ds = data.datasets[0];
                var arc = meta.data[i];
                var custom = arc && arc.custom || {};
                var getValueAtIndexOrDefault = Chart.helpers.getValueAtIndexOrDefault;
                var arcOpts = chart.options.elements.arc;
                var fill = custom.backgroundColor ? custom.backgroundColor : getValueAtIndexOrDefault(ds.backgroundColor, i, arcOpts.backgroundColor);
                var stroke = custom.borderColor ? custom.borderColor : getValueAtIndexOrDefault(ds.borderColor, i, arcOpts.borderColor);
                var bw = custom.borderWidth ? custom.borderWidth : getValueAtIndexOrDefault(ds.borderWidth, i, arcOpts.borderWidth);

                // We get the value of the current label
                var value = chart.config.data.datasets[arc._datasetIndex].data[arc._index];
                sum = +value;



                return {
                  // Instead of `text: label,`
                  // We add the value to the string
                  text: label,
                  fillStyle: fill,
                  strokeStyle: stroke,
                  lineWidth: bw,
                  hidden: isNaN(ds.data[i]) || meta.data[i].hidden,
                  index: i
                };
              });
            } else {
              return [];
            }
          }
        }
      }
    },
  };


  document.getElementById("Chart").width = window.innerWidth;
  document.getElementById("Chart").height = window.innerHeight;

  var ctx = document.getElementById("Chart").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: labels,
      datasets: data
    },
    options: options
  });
  return true;
}

function generateBarGraph(barData) {

  var monthLabels = barData.map(function(record){
    return record.month;
  });

  var values = barData.map(function(record){
    return record.value;
  });

  var colors = barData.map(function(record){
    return record.color;
  });
  document.getElementById("Chart").width = window.innerWidth;
  document.getElementById("Chart").height = window.innerHeight;
  var ctx = document.getElementById("Chart").getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: monthLabels,
      datasets: [
        {
          backgroundColor:colors,
          data: values
        }
      ]
    },
    options: {
      legend: { display: false },
      scales: {
        xAxes: [{
          barThickness : 5,
          ticks : {
            fontSize : 8
          },
          gridLines: {
            display:false
          }
        }],
        yAxes :[{
          ticks : {
            fontSize : 9
          },
          gridLines: {
            display:false
          }
        }]
      }

    }
  });

}