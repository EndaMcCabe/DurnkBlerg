window.onload = function chart3(){	
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

		chart3.render();
}