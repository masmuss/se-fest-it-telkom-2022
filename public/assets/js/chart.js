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
// end of sumenep

// gresik
const gresikPie = document.getElementById("gresik-pie").getContext("2d");
const gresikBar = document.getElementById("gresik-bar").getContext("2d");
// end of gresik

// ndarjo
const ndarjoPie = document.getElementById("ndarjo-pie").getContext("2d");
const ndarjoBar = document.getElementById("ndarjo-bar").getContext("2d");
// end of ndarjo

// lamongan
const lamonganPie = document.getElementById("lamongan-pie").getContext("2d");
const lamonganBar = document.getElementById("lamongan-bar").getContext("2d");
// end of lamongan

// banyuwangi
const banyuwangiPie = document.getElementById("banyuwangi-pie").getContext("2d");
const banyuwangiBar = document.getElementById("banyuwangi-bar").getContext("2d");
// end of banyuwangi
