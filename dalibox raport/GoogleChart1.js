
let currentValue = 45

google.charts.load('current', {
  'packages': ['gauge']
});/*from w  w  w . j ava  2 s. c o  m*/
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['Różnica napięć', currentValue]
  ]);
  var options = {
    width: 400,
    height: 600,
    redFrom: 90,
    redTo: 100,
    yellowFrom: 75,
    yellowTo: 90,
    minorTicks: 5
  };
  var chart = new google.visualization.Gauge(document.getElementById('chart_div'));
  chart.draw(data, options);
  $("svg > g > text:first").attr("y", 400);
}

