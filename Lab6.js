function printNumbers(from, to) {
    let currentNumber = from;

    function printAndIncrement() {
        console.log(currentNumber);
        if (currentNumber === to) {
            clearInterval(intervalId); 
        } else {
            currentNumber++;
        }
    }

    const intervalId = setInterval(printAndIncrement, 1000);
}

// Example usage:
printNumbers(1, 5); 