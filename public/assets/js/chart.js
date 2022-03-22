// sumenep
const sumenepPie = document.getElementById("sumenep-pie").getContext("2d");
const sumenepPieChart = new Chart(sumenepPie, {
	type: "doughnut",
	data: {
		labels: ["Ikan bandeng", "Udang", "Rumput laut", "Ikan campuran"],
		datasets: [
			{
				label: "Hasil laut",
				data: [98, 2, 1, 1],
				backgroundColor: ["rgba(255, 99, 132, 0.8)", "rgba(54, 162, 235, 0.8)", "rgba(255, 206, 86, 0.8)", "rgba(75, 192, 192, 0.8)"],
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
				backgroundColor: ["rgba(255, 99, 132, 0.8)", "rgba(54, 162, 235, 0.8)", "rgba(255, 206, 86, 0.8)", "rgba(75, 192, 192, 0.8)"],
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
// end of sumenep

// gresik
const gresikPie = document.getElementById("gresik-pie").getContext("2d");
const gresikPieChart = new Chart(gresikPie, {
	type: "doughnut",
	data: {
		labels: ["Ikan bandeng", "Ikan campuran", "Udang", "Ikan kerapu"],
		datasets: [
			{
				label: "Hasil laut",
				data: [70, 19, 10, 1],
				backgroundColor: ["rgba(255, 99, 132, 0.8)", "rgba(54, 162, 235, 0.8)", "rgba(255, 206, 86, 0.8)", "rgba(75, 192, 192, 0.8)"],
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

const gresikBar = document.getElementById("gresik-bar").getContext("2d");
const gresikBarChart = new Chart(gresikBar, {
	type: "bar",
	data: {
		labels: [94.0, 25.0, 13.2, 131],
		datasets: [
			{
				label: "Hasil laut",
				data: [94.0, 25.0, 13.2, 131],
				backgroundColor: ["rgba(255, 99, 132, 0.8)", "rgba(54, 162, 235, 0.8)", "rgba(255, 206, 86, 0.8)", "rgba(75, 192, 192, 0.8)"],
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
// end of gresik

// ndarjo
const ndarjoPie = document.getElementById("ndarjo-pie").getContext("2d");
const ndarjoPieChart = new Chart(ndarjoPie, {
	type: "doughnut",
	data: {
		labels: ["Ikan bandeng", "Udang", "Rumput laut", "Ikan campuran"],
		datasets: [
			{
				label: "Hasil laut",
				data: [56, 20, 16, 7],
				backgroundColor: ["rgba(255, 99, 132, 0.8)", "rgba(54, 162, 235, 0.8)", "rgba(255, 206, 86, 0.8)", "rgba(75, 192, 192, 0.8)"],
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
		}
	},
});

const ndarjoBar = document.getElementById("ndarjo-bar").getContext("2d");
const ndarjoBarChart = new Chart(ndarjoBar, {
	type: "bar",
	data: {
		labels: [34200, 12400, 10100, 4000],
		datasets: [
			{
				label: "Hasil laut",
				data: [34200, 12400, 10100, 4000],
				backgroundColor: ["rgba(255, 99, 132, 0.8)", "rgba(54, 162, 235, 0.8)", "rgba(255, 206, 86, 0.8)", "rgba(75, 192, 192, 0.8)"],
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
// end of ndarjo

// lamongan
const lamonganPie = document.getElementById("lamongan-pie").getContext("2d");
const lamonganPieChart = new Chart(lamonganPie, {
	type: "doughnut",
	data: {
		labels: ["Ikan bandeng", "Ikan kerapu", "Udang", "Rumput laut"],
		datasets: [
			{
				label: "Hasil laut (dalam persen)",
				data: [58, 2, 39, 1],
				backgroundColor: ["rgba(255, 99, 132, 0.8)", "rgba(54, 162, 235, 0.8)", "rgba(255, 206, 86, 0.8)", "rgba(75, 192, 192, 0.8)"],
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
		}
	},
});

const lamonganBar = document.getElementById("lamongan-bar").getContext("2d");
const lamonganBarChart = new Chart(lamonganBar, {
	type: "bar",
	data: {
		labels: [24.000, 1.000, 15.900, 8],
		datasets: [
			{
				label: "Hasil laut (Ton)",
				data: [24.000, 1.000, 15.900, 8],
				backgroundColor: ["rgba(255, 99, 132, 0.8)", "rgba(54, 162, 235, 0.8)", "rgba(255, 206, 86, 0.8)", "rgba(75, 192, 192, 0.8)"],
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
// end of lamongan

// banyuwangi
const banyuwangiPie = document.getElementById("banyuwangi-pie").getContext("2d");
const banyuwangiPieChart = new Chart(banyuwangiPie, {
	type: "doughnut",
	data: {
		labels: ["Udang", "Rumput laut", "Ikan bandeng", "Ikan campuran"],
		datasets: [
			{
				label: "Hasil laut (dalam persen)",
				data: [86, 10, 1, 2],
				backgroundColor: ["rgba(255, 99, 132, 0.8)", "rgba(54, 162, 235, 0.8)", "rgba(255, 206, 86, 0.8)", "rgba(75, 192, 192, 0.8)"],
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

const banyuwangiBar = document.getElementById("banyuwangi-bar").getContext("2d");
const banyuwangiBarChart = new Chart(banyuwangiBar, {
	type: "bar",
	data: {
		labels: [21.500, 2.700, 124, 500],
		datasets: [
			{
				label: "Hasil laut (Ton)",
				data: [21.500, 2.700, 124, 500],
				backgroundColor: ["rgba(255, 99, 132, 0.8)", "rgba(54, 162, 235, 0.8)", "rgba(255, 206, 86, 0.8)", "rgba(75, 192, 192, 0.8)"],
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
// end of banyuwangi
