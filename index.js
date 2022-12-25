function randomRandom(){

    let randFunc = Math.random() 
    
     let lottery = randFunc <0.5 ? Math.floor(Math.random() * -100) : Math.floor(Math.random() * 100)
     return lottery}

     let dynamicValue = 0
  
function circle(){
      function dodatnie(){
        for (let i=0;  i<=180; i++){delay(i)}
  
      function delay(i) {setTimeout(() => {
      console.log(i)
      dynamicValue = i
      }, 50 * i );}}
   
  
   function ujemne(){
    for (let i=0;  i>=-180; i--){delay(i)}
  
   function delay(i) {setTimeout(() => {
    console.log(i)
    dynamicValue = i
   }, 50 * -i );}}
  
  setTimeout(ujemne, 9000)
  dodatnie()}

circle()
             
    let minValue = -38
   let maxValue = 38  
   let currentValue = randomRandom()


 google.charts.load('current', {
    'packages': ['gauge']
  });
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Label', 'Value'],
      ['', currentValue]
    ]);
    var options = {
      width: 300,
      height: 300,
      min: -100,
      max: 100,
       majorTicks:[-100, -80, -60, -40, -20, 0, 20, 40, 60, 80, 100],
        minorTicks: 10,
      greenFrom: minValue,
        greenTo: maxValue,
       
        animation:{
        startup: "true",
        easing: "linear"}
    };
    
       
        
    var chart = new google.visualization.Gauge(document.getElementById('chart_div'));
    chart.draw(data, options);
    $("svg > g > text:first").attr("y", 400);


    
  }

  google.charts.load('current', {
    'packages': ['gauge']
  });

  google.charts.setOnLoadCallback(drawChart1);
  function drawChart1() {
    var data = google.visualization.arrayToDataTable([
      ['Label', 'Value'],
      ['', dynamicValue]
    ]);
    var options = {
      width: 300,
      height: 300,
            min: -180,
            max: 180,
            majorTicks:[-180, -150, -120, -90, -60, -30, 0, 30, 60, 90, 120, 150, 180],
            minorTicks: 10,
            greenFrom: minValue,
            greenTo: maxValue,
            
       
        animation:{
        startup: "true",
        easing: "linear"}
    };

    setInterval(function() {
      // Update the chart's data
      data.setValue(0, 1, dynamicValue);
    
      // Redraw the chart
      chart.draw(data, options);
    }, 50);
    
       
        
    var chart = new google.visualization.Gauge(document.getElementById('chart_div1'));
    chart.draw(data, options);
    $("svg > g > text:first").attr("y", 400);

   
  }

  google.charts.load('current', {
    'packages': ['gauge']
  });

  google.charts.setOnLoadCallback(drawChart2);
  function drawChart2() {
    var data = google.visualization.arrayToDataTable([
      ['Label', 'Value'],
      ['', currentValue]
    ]);
    var options = {
      width: 300,
      height: 300,
      min: -500,
      max: 500,
       majorTicks:[-500, -400, -300, -200, -100, 0, 100, 200, 300, 400, 500],
        minorTicks: 10,
      greenFrom: minValue,
        greenTo: maxValue,
       
        animation:{
        startup: "true",
        easing: "linear"}
    };
    
       
        
    var chart = new google.visualization.Gauge(document.getElementById('chart_div2'));
    chart.draw(data, options);
    $("svg > g > text:first").attr("y", 400);
  }

