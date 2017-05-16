google.charts.load("visualization", "1", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart2);
function drawChart2() {
  var data = google.visualization.arrayToDataTable([
	  ['Mes', 'Nivel de gas'],
	  ['Ene',  265],
	  ['Feb',  117],
	  ['Mar',  660],
	  ['Abr',  412]
	]);

	var options = {
	  title: '',
	  hAxis: {title: 'Mes',  titleTextStyle: {color: '#333'}},
	  legend: {position: 'top', maxLines: 3},
	  colors: ['#ba65c9'],
	  vAxis: {minValue: 0}
	};

  var chart = new google.visualization.AreaChart(document.getElementById('chart_div2'));
  chart.draw(data, options);
}

$(window).resize(function(){
  drawChart2();
});