const dateInfo = document.getElementById('date')
const currentDate = new Date;
const formattedDate = currentDate.toDateString().split(' ')
dateInfo.innerHTML = `<h1 class='text-xl font-medium'>${formattedDate[0]},${formattedDate[1]} ${formattedDate[2]}</h1>`

const time  = currentDate.toLocaleTimeString();

