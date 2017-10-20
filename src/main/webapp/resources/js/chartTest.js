/* project */
var jw=jw || {}; /*name space*/
jw.common = (function(){
	var init = function(ctx){
		jw.index.init();
	};
	
	return {init : init};
})();  


/*******************************
 * chart
 *******************************/
jw.index = (function(){
	var init = function(){
		setContentView();
	};
	
	var setContentView = function(){
		$('body').html('<div id="chart_div">AA</div>');
		jw.makeGraph.columnChart();
		
	};
	
	return {init : init};
})();


jw.makeGraph = 
{
	columnChart : function() {
		google.charts.load('current', {'packages':['bar']});
	    google.charts.setOnLoadCallback(drawChart);
	    
	    function drawChart() {
	    	var data = google.visualization.arrayToDataTable([
	            ['month', '2015', '2016', '2017'],
	            ['1월', 1000, 400, 200],
	            ['2월', 1170, 460, 250],
	            ['3월', 660, 1120, 300],
	            ['4월', 1030, 540, 350],
	            ['5월', 1000, 400, 200],
	            ['6월', 1170, 460, 250],
	            ['7월', 660, 1120, 300],
	            ['8월', 1030, 540, 350],
	            ['9월', 1000, 400, 200],
	            ['10월', 1170, 460, 250],
	            ['11월', 660, 1120, 300],
	            ['12월', 1030, 540, 350]
	        ]);
			
			var options = {
                bars: 'vertical',
                vAxis: {format: 'decimal'},
                height: 220,
                colors: ['#1b9e77', '#d95f02', '#7570b3']
            };
			
	        var chart = new google.charts.Bar($('#chart_div')[0]);
	        chart.draw(data, google.charts.Bar.convertOptions(options));
	   }
	}
};





