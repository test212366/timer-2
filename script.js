let clock = document.querySelector('.clock')
function time () {
	let date = new Date()
	let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
	let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
	let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
	if(hours < 10) hours = '0' + hours

	clock.innerHTML = `${hours}:${minutes}:${seconds}`
}

setInterval(time, 1000)
