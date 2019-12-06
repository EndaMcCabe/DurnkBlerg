window.onload = function chart(){
	var chart = new CanvasJS.Chart("stat1",
		{
			animationEnabled: true,
			//theme: "dark1",
		  title: {
			text: "Total Users"
		  },
			data: [
		  {
			type: "area",
			dataPoints: [//array

			{ x: new Date(2012, 00, 1), y: 6600 },
			{ x: new Date(2012, 01, 1), y: 3800 },
			{ x: new Date(2012, 02, 1), y: 4300 },
			{ x: new Date(2012, 03, 1), y: 2900 },
			{ x: new Date(2012, 04, 1), y: 4100 },
			{ x: new Date(2012, 05, 1), y: 4500 },
			{ x: new Date(2012, 06, 1), y: 8600 },
			{ x: new Date(2012, 07, 1), y: 6400 },
			{ x: new Date(2012, 08, 1), y: 5300 },
			{ x: new Date(2012, 09, 1), y: 6000 }
			]
		  }
		  ]
		});

		var chart2 = new CanvasJS.Chart("stat2",
		{
				animationEnabled: true,
				//theme: "dark1",
				title: {
					text: "Total Fails"
				},
				data:[
					{
						type: "area",
						dataPoints: [
							{ x: new Date(2019, 11, 1), y: 2100},
							{ x: new Date(2019, 11, 2), y: 2200}
					}
				]
		}
		);

		var chart3 = new CanvasJS.Chart("stat3",
			{
				animationEnabled: true,
				//theme: "dark1",
				title:{
						text: "Daily Failure Rate"
				},
				axisY:{
					title: "Number of Sales",
					suffix: "%"
				},
				data:[
					{
							type: "area",
							dataPoints:[
								{ x: new Date(2019, 12, 1), y: 79},
								{ x: new Date(2019, 10, 1),y: 81}
							]
					}
				]
			}
		);

		chart.render();
		chart2.render();
		chart3.render();
}
/*function chart2(){
	var chart2 = new CanvasJS.Chart("stat2",
		{
		  title: {
			text: "Failure Rate of Users"
		  },
			data: [
		  {
			type: "area",
			dataPoints: [//array

			{ x: new Date(2012, 00, 1), y: 6600 },
			{ x: new Date(2012, 01, 1), y: 3800 },
			{ x: new Date(2012, 02, 1), y: 4300 },
			{ x: new Date(2012, 03, 1), y: 2900 },
			{ x: new Date(2012, 04, 1), y: 4100 },
			{ x: new Date(2012, 05, 1), y: 4500 },
			{ x: new Date(2012, 06, 1), y: 8600 },
			{ x: new Date(2012, 07, 1), y: 6400 },
			{ x: new Date(2012, 08, 1), y: 5300 },
			{ x: new Date(2012, 09, 1), y: 6000 }
			]
		  }
		  ]
		});

		chart.render();
}
function chart3(){
	var chart3 = new CanvasJS.Chart("stat3",
		{
		  title: {
			text: "Total Fails"
		  },
			data: [
		  {
			type: "area",
			dataPoints: [//array

			{ x: new Date(2012, 00, 1), y: 6600 },
			{ x: new Date(2012, 01, 1), y: 3800 },
			{ x: new Date(2012, 02, 1), y: 4300 },
			{ x: new Date(2012, 03, 1), y: 2900 },
			{ x: new Date(2012, 04, 1), y: 4100 },
			{ x: new Date(2012, 05, 1), y: 4500 },
			{ x: new Date(2012, 06, 1), y: 8600 },
			{ x: new Date(2012, 07, 1), y: 6400 },
			{ x: new Date(2012, 08, 1), y: 5300 },
			{ x: new Date(2012, 09, 1), y: 6000 }
			]
		  }
		  ]
		});

		chart.render();
}
function chart4(){
	var chart4 = new CanvasJS.Chart("stat4",
		{
			animationEnabled: true,
		  title: {
			text: "Most Blocked Apps"
		  },
			data: [
		  {
			type: "pie",
			startAngle: 240,
			yValueFormatString: "##0.00\"%\"",
			indexLabel: "{label} {y}",
			dataPoints: [//array

			{ y: 27.05, label: "WhatsApp" },
			{ y: 24.85, label: "Messenger"},
			{ y: 22.81, label: "Instagram"},
			{ y: 23.05, label: "SnapChat" },
			{ y: 2.24, label: "Other"}
			]
		  }
		  ]
		});

		chart.render();
}
*/
