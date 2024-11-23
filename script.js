const nap =document.getElementById('nap');
const ora =document.getElementById('ora');
const perc =document.getElementById('perc');
const masodperc =document.getElementById('masodperc');

function update() {
    const now =new Date();
    const endOfSchool= new Date(`2025-06-13`)

    // Különbség ezredmásodpercekben
    const diff=endOfSchool-now;
    if(diff>=0){
        // Ezredmásodpercet "dátummá" alakítunk
        const diffDate = new Date(diff);
        nap.textContent=Math.floor(diff / (1000 * 60 * 60 * 24)); // pl 777600000 / (1000 * 60 * 60 * 24) = 9 nap
        ora.textContent = diffDate.getUTCHours();
        perc.textContent = diffDate.getUTCMinutes();
        masodperc.textContent = diffDate.getUTCSeconds();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    update();
    setInterval(update, 1000);
});