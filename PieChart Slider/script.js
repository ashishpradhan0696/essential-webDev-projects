const chart = document.getElementById("chart");

document.getElementById("slider").addEventListener('input', (e) => {
    chart.style = `--percentage:${e.target.value}%`
})
