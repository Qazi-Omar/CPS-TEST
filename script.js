const cpsBox = document.getElementById('cpsBox');
const result = document.getElementById('result');

let clickCount = 0;
let startTime = 0;
let isTesting = false;

function startTest() {
    if (isTesting) return;
    isTesting = true;
    clickCount = 0;
    startTime = Date.now();
    cpsBox.textContent = 'Click as fast as you can!';
    result.textContent = '';
    
    setTimeout(endTest, 5000);
}

function endTest() {
    const endTime = Date.now();
    const elapsedTime = (endTime - startTime) / 1000; // in seconds
    const cps = (clickCount / elapsedTime).toFixed(2);
    cpsBox.textContent = 'Click to Start CPS Test';
    result.textContent = `Your CPS: ${cps}`;
    isTesting = false;
}

cpsBox.addEventListener('click', () => {
    if (isTesting) {
        clickCount++;
    } else {
        startTest();
    }
});
