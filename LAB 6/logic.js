function checkPrime() {
    let num = document.getElementById('numberInput').value;
    let result = document.getElementById('result');
    num = parseInt(num);

    if (isNaN(num) || num < 2) {
        result.textContent = 'Please enter a valid number (greater than 1).';
        return;
    }

    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) {
            result.textContent = num + ' is not a prime number.';
            return;
        }
    }

    result.textContent = num + ' is a prime number!';
}
