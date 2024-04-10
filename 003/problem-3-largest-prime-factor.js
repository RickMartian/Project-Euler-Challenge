function largestPrimeFactor(number) {
    let primeNumberToUse = 2;
    let foundLargestPrimeFactor = false;
    let largestPrimeFactor = 0;
    while (!foundLargestPrimeFactor) {
        if (number % primeNumberToUse == 0) {
            largestPrimeFactor = number;
            number /= primeNumberToUse;
            if (number === 1) {
                foundLargestPrimeFactor = true;
            }
        }
        else {
            primeNumberToUse += 1;
        }
    }
    return largestPrimeFactor;
}

