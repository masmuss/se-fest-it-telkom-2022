// sumenep
const sumenepPie = document.getElementById("sumenep-pie").getContext("2d");
const sumenepPieChart = new Chart(sumenepPie, {
	type: "doughnut",
	data: {
		labels: ["Ikan bandeng", "Udang", "Rumput laut", "Ikan campuran"],
		datasets: [{
			text: "Hasil laut",
			data: [94, 2, 1, 1],
			backgroundColor: ["rgba(241, 87, 33, 0.8)", "rgba(245, 184, 173, 0.8)", "rgba(0, 162, 233, 0.8)", "rgba(57, 66, 83, 0.8)"],
		}, ],
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
		datasets: [{
			text: "Hasil laut",
			data: [94, 2, 2, 1],
			backgroundColor: ["rgba(241, 87, 33, 0.8)", "rgba(245, 184, 173, 0.8)", "rgba(0, 162, 233, 0.8)", "rgba(57, 66, 83, 0.8)"],
		}, ],
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
		datasets: [{
			label: "Hasil laut",
			data: [70, 19, 10, 1],
			backgroundColor: ["rgba(241, 87, 33, 0.8)", "rgba(245, 184, 173, 0.8)", "rgba(0, 162, 233, 0.8)", "rgba(57, 66, 83, 0.8)"],
		}, ],
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
		labels: [94000, 25600, 13200, 131],
		datasets: [{
			label: "Hasil laut",
			data: [70, 19, 10, 1],
			backgroundColor: ["rgba(241, 87, 33, 0.8)", "rgba(245, 184, 173, 0.8)", "rgba(0, 162, 233, 0.8)", "rgba(57, 66, 83, 0.8)"],
		}, ],
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
		datasets: [{
			label: "Hasil laut",
			data: [56, 20, 16, 7],
			backgroundColor: ["rgba(241, 87, 33, 0.8)", "rgba(245, 184, 173, 0.8)", "rgba(0, 162, 233, 0.8)", "rgba(57, 66, 83, 0.8)"],
		}, ],
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
		datasets: [{
			label: "Hasil laut",
			data: [56, 20, 16, 7],
			backgroundColor: ["rgba(241, 87, 33, 0.8)", "rgba(245, 184, 173, 0.8)", "rgba(0, 162, 233, 0.8)", "rgba(57, 66, 83, 0.8)"],
		}, ],
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
		labels: ["Ikan bandeng", "Udang", "Ikan Kerapu", "Rumput laut"],
		datasets: [{
			label: "Hasil laut (dalam persen)",
			data: [58, 39, 2, 1],
			backgroundColor: ["rgba(241, 87, 33, 0.8)", "rgba(245, 184, 173, 0.8)", "rgba(0, 162, 233, 0.8)", "rgba(57, 66, 83, 0.8)"],
		}, ],
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
		labels: [24000, 1000, 15900, 8],
		datasets: [{
			label: "Hasil laut (Ton)",
			data: [58, 39, 2, 1],
			backgroundColor: ["rgba(241, 87, 33, 0.8)", "rgba(245, 184, 173, 0.8)", "rgba(0, 162, 233, 0.8)", "rgba(57, 66, 83, 0.8)"],
		}, ],
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
		labels: ["Udang", "Rumput laut", "Ikan Campuran", "Ikan Bandeng"],
		datasets: [{
			label: "Hasil laut (dalam persen)",
			data: [86, 10, 2, 1],
			backgroundColor: ["rgba(241, 87, 33, 0.8)", "rgba(245, 184, 173, 0.8)", "rgba(0, 162, 233, 0.8)", "rgba(57, 66, 83, 0.8)"],
		}, ],
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
		labels: [21500, 2700, 124, 500],
		datasets: [{
			label: "Hasil laut (Ton)",
			data: [86, 10, 2, 1],
			backgroundColor: ["rgba(241, 87, 33, 0.8)", "rgba(245, 184, 173, 0.8)", "rgba(0, 162, 233, 0.8)", "rgba(57, 66, 83, 0.8)"],
		}, ],
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