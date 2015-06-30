var data = new Array();
var type = new Array();

type = [
	[12,25,19,44],
	[12,38,26,56],
	[12,25,2,61],
]

type.forEach(function(item,i) {  

	data[i] = [
		{
			value: item[0],
			color:"#8cc63f",		
		},
		{
			value : item[1],
			color : "#d7df21",		
		},
		{
			value : item[2],
			color : "#00aeef",		
		},
		{
			value : item[3],
			color : "#eeeeee",		
		},
]

k=i+1;
var myLine = new Chart(document.getElementById("canvas"+k).getContext("2d")).Doughnut(data[i]);
});
