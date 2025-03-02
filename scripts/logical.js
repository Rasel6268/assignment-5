
const historyInf = document.getElementById('history')
const fixMobileTittle = document.getElementById('fixMobile').innerText;
const GlassdoarTittle = document.getElementById('GlassdoarHeader').innerText;
const CloudSyncHeader = document.getElementById('CloudSyncHeader').innerText;
const SwiftPayheader = document.getElementById('SwiftPayheader').innerText;
const MetaHeader = document.getElementById('MetaHeader').innerText;
const operAi = document.getElementById('operAi').innerText;





document.getElementById('ShopEaseBtn').addEventListener('click', function () {
    const div = document.createElement('div')

    div.innerHTML = `
    <div class="bg-gray-100 mx-3 my-2 py-2 px-3 rounded-lg">
              <p>You have complete the Task ${fixMobileTittle} at ${time}</p>
             </div>
    `
    historyInf.appendChild(div)


})

document.getElementById('Glassdoar').addEventListener('click', function () {
    const div = document.createElement('div')

    div.innerHTML = `
    <div class="bg-gray-100 mx-3 my-2 py-2 px-3 rounded-lg">
              <p>You have complete the Task ${GlassdoarTittle} at ${time}</p>
             </div>
    `
    historyInf.appendChild(div)


})

document.getElementById('CloudSync').addEventListener('click', function () {
    const div = document.createElement('div')

    div.innerHTML = `
    <div class="bg-gray-100 mx-3 my-2 py-2 px-3 rounded-lg">
              <p>You have complete the Task ${CloudSyncHeader} at ${time}</p>
             </div>
    `
    historyInf.appendChild(div)


})

document.getElementById('SwiftPay').addEventListener('click', function () {
    const div = document.createElement('div')

    div.innerHTML = `
    <div class="bg-gray-100 mx-3 my-2 py-2 px-3 rounded-lg">
              <p>You have complete the Task ${SwiftPayheader} at ${time}</p>
             </div>
    `
    historyInf.appendChild(div)


})

document.getElementById('Meta').addEventListener('click', function () {
    const div = document.createElement('div')

    div.innerHTML = `
    <div class="bg-gray-100 mx-3 my-2 py-2 px-3 rounded-lg">
              <p>You have complete the Task ${MetaHeader} at ${time}</p>
             </div>
    `
    historyInf.appendChild(div)


})

document.getElementById('openAi').addEventListener('click', function () {
    const div = document.createElement('div')

    div.innerHTML = `
    <div class="bg-gray-100 mx-3 my-2 py-2 px-3 rounded-lg">
              <p>You have complete the Task ${operAi} at ${time}</p>
             </div>
    `
    historyInf.appendChild(div)


})



