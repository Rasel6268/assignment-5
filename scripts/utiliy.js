document.getElementById('Glassdoar').addEventListener('click', function () {
    alert("hello")
    const total = convertValue - 1
    const string = total.toString().padStart(2, 0)
    document.getElementById('taskHeading').innerHTML = `
<span>${string}</span>
`    
    const calculate = convertValue1 + 1
    document.getElementById('headerCount').innerText = calculate;
    btnGlassdoar.setAttribute('disabled', true);
    btnGlassdoar.classList.add("opacity-50", "cursor-not-allowed");
    console.log(headerCount)

})