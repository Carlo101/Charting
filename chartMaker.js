var ctx = document.getElementById("myChart").getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ["Red", "Yellow", "Blue"],
        datasets: [{
            backgroundColor: ['#FF0000', '#FFFF00', '#0000FF'],
            borderColor: 'rgb(255, 255, 255)',
            data: [10, 20, 30],
        }]
    },

    // Configuration options go here
    options: {maintainAspectRatio:false,}
});
