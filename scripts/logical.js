const card = document.querySelector('#card_box');
const btn = document.getElementById('ShopEaseBtn')
const btnGlassdoar = document.getElementById('Glassdoar')
const headerCount = document.getElementById('headerCount').innerText;
const convertValue1 = parseInt(headerCount)
const historyInfo = document.getElementById('history')
const buttonTittle = document.getElementById('fixMobile').innerText;


const count = card.childElementCount;
const elementLength = count.toString().padStart(2, 0)
const convertValue = parseInt(elementLength)

document.getElementById('taskHeading').innerHTML = `
<span>${elementLength}</span>
`


document.getElementById('ShopEaseBtn').addEventListener('click', function () {
    alert("hello")
    const total = convertValue - 1
    const string = total.toString().padStart(2, 0)
    document.getElementById('taskHeading').innerHTML = `
     <span>${string}</span>
`
    const calculate = convertValue1 + 1
    document.getElementById('headerCount').innerText = calculate;
    btn.setAttribute('disabled', true);
    btn.classList.add("opacity-50", "cursor-not-allowed");
    const div = document.createElement('div')
    
    div.innerHTML = `
    <div class="bg-gray-100 mx-3 my-2 py-2 px-3 rounded-lg">
              <p>You have complete the Task ${buttonTittle} at ${time}</p>
             </div>
    `
    historyInfo.appendChild(div)


})
document.getElementById('blogSection').addEventListener('click', function () {
    window.location.href = './blog.html'
})


