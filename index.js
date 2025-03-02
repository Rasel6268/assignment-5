const Cardsbuttons = document.querySelectorAll('.conpleteBtn');
const header = document.getElementById('headerCount')
const cardValue = document.getElementById('taskHeading');

let remainingCard = Cardsbuttons.length;
let index = 0;

for (const button of Cardsbuttons) {
    button.addEventListener('click', function () {
        alert('Board update successfull')
        remainingCard--
        index++
        cardValue.innerText = remainingCard;

        if (remainingCard === 0) {
            alert('Congratulation You have complete your all')
        }

        const sum = index
        header.innerText = 23 + sum

        button.setAttribute('disabled', true)
        button.classList.add("opacity-50", "cursor-not-allowed");




    })
}
document.getElementById('blogSection').addEventListener('click',function(){
     window.location.href = './blog.html'
})