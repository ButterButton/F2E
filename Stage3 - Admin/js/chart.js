var ctx = document.getElementById("example").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["2014", "2015", "2016", "2017"],
        datasets: [{
            label: 'Sales',
            lineTension: 0,
            backgroundColor: "#4A90E2",
            borderColor: "#4A90E2",
            borderWidth: 2,
            data: [1000, 1200, 600, 1100],
            fill: false,
        }, {
            label: 'Expenses',   
            lineTension: 0,
            backgroundColor: "#D0021B",
            borderColor: "#D0021B",
            borderWidth: 2,
            data: [400, 500, 1100, 550],
            fill: false,
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});