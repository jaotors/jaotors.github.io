$(document).ready(function() {

    /* FULL PAGE */
    $('#fullpage').fullpage({
        anchors:['home', 'portfolio', 'skillset', 'experience', 'contact'],
        menu: '.nav-menu ul',

        verticalCentered: false,
        sectionSelector: 'section.module'
    });
    /* END FULL PAGE */

    /* SKILL CHART */
    var data = {
        labels: ['HTML', 'CSS', 'Javascript', 'Responsive Design', 'Gulp', 'Laravel'],
        datasets: [
            {
                backgroundColor: 'rgba(51, 51, 51, 1)',
                borderColor: 'rgba(51, 51, 51, 1)',
                borderWidth: 1,
                data: [7, 7, 4.5, 4, 2.5, 2.5],
            }
        ]
    };

    var options = {
        legend: {
            display: false
        },
        events: false,
        tooltips: {
                enabled: false
        },
        hover: {
            animationDuration: 0
        },
        scales: {
            yAxes: [{
                display: true,
                ticks: {
                    max: 10,
                    min: 0
                }
            }],
            xAxes: [{
                display: false
            }]
        },
        animation: {
            duration: 1,
            onComplete: function() {
                var chartInstance = this.chart,
                ctx = chartInstance.ctx;
                ctx.font = Chart.helpers.fontString('14', 'bold', 'Quicksand');
                ctx.textAlign = 'center';
                ctx.textBaseline = 'bottom';

                this.data.datasets.forEach(function (dataset, i) {
                    var meta = chartInstance.controller.getDatasetMeta(i);
                    meta.data.forEach(function (bar) {
                        ctx.fillText(bar._model.label, bar._model.x, bar._model.y - 5);
                    });
                });
            }
        }
    };

    var ctx = $("#skill-chart"),
        skillChart = new Chart(ctx, {
                            type: 'bar',
                            data: data,
                            options: options
                        });
    /* END SKILL CHART */

})