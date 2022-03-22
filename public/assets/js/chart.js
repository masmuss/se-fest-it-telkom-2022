const sumenepPie = document.getElementById("sumenep-pie").getContext("2d");
const sumenepPieChart = new Chart(sumenepPie, {
	type: "doughnut",
	data: {
		labels: ["Ikan bandeng", "Udang", "Rumput laut", "Ikan campuran"],
		datasets: [
			{
				label: "Hasil laut",
				data: [98, 2, 1, 1],
				backgroundColor: ["rgba(255, 99, 132, 0.5)", "rgba(54, 162, 235, 0.5)", "rgba(255, 206, 86, 0.5)", "rgba(75, 192, 192, 0.5)"],
			},
		],
	},
	options: {
		responsive: true,
		maintainAspectRatio: true,
		plugins: {
			legend: {
				position: "right",
			},
		},
	},
});

const sumenepBar = document.getElementById("sumenep-bar").getContext("2d");
const sumenepBarChart = new Chart(sumenepBar, {
	type: "bar",
	data: {
		labels: [670400, 2300, 448, 233],
		datasets: [
			{
				label: "Hasil laut",
				data: [670400, 2300, 448, 233],
				backgroundColor: ["rgba(255, 99, 132, 0.5)", "rgba(54, 162, 235, 0.5)", "rgba(255, 206, 86, 0.5)", "rgba(75, 192, 192, 0.5)"],
			},
		],
	},
	options: {
		responsive: true,
		maintainAspectRatio: true,
		plugins: {
			legend: {
				display: false,
			},
		},
		scales: {
			xAxis: {
				title: {
					display: true,
					text: "Ton",
				},
			},
			yAxis: {
				min: 0,
            max: 100,
				ticks: {
					callback: function (value) {
						return value + "%";
					},
				},
			},
		},
	},
});
