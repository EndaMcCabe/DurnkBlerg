window.onload = function chart4(){	
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

		chart4.render();
}