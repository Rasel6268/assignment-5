const Cardsbuttons = document.querySelectorAll('.conpleteBtn');
const header = document.getElementById('headerCount')
const headerNumber = document.getElementById('headerCount').innerText;
const convertNumber = parseInt(headerNumber)
const cardValue = document.getElementById('taskHeading');
let remainingCard = Cardsbuttons.length;
let index = 0;

for (const button of Cardsbuttons) {
    button.addEventListener('click', function () {
        alert('Board updated successful!')
        remainingCard--
        index++
        cardValue.innerText = remainingCard;

        if (remainingCard === 0) {
            alert('Congratulations!!! You have completed all the current tasks!');
        }
        const sum = index
        header.innerText = convertNumber + sum
        button.setAttribute('disabled', true)
        button.classList.add("opacity-50", "cursor-not-allowed");

       


    })
}
document.getElementById('blogSection').addEventListener('click',function(){
     window.location.href = './blog.html'
})