const historyElement = document.getElementById("history");

const taskTitle = {
    ShopEaseBtn: document.getElementById('fixMobile').innerText,
    Glassdoar: document.getElementById('GlassdoarHeader').innerText,
    CloudSync: document.getElementById('CloudSyncHeader').innerText,
    SwiftPay: document.getElementById('SwiftPayheader').innerText,
    Meta: document.getElementById('MetaHeader').innerText,
    openAi: document.getElementById('operAi').innerText

}
document.addEventListener('click', function (event) {
    if (taskTitle[event.target.id]) {
         const div = document.createElement('div');
         const time = new Date().toLocaleTimeString();
        div.classList.add("bg-gray-100", "mx-3", "my-2", "py-2", "px-3", "rounded-lg");

        div.innerHTML = `<p>You have completed the Task ${taskTitle[event.target.id]} at ${time}</p>`;

        historyElement.appendChild(div);
    }

})