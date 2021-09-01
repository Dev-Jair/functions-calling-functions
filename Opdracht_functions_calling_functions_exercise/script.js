// Hey Kiddo 

const ageCheck = function(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false
    }
}

const doAgeCheck = function(age) {
    const ageNumber = ageCheck()
    if (age >= 18) {
        return "Hello there";
    }
    else {
        return "Hey kiddo";
    }
}

const result = doAgeCheck(21);
console.log(result) 

// VAT Exercise 1

const vatCheck = function(bp, vp) {
    return bp * vp;
}

const vatPrice = function() {
    const includingVat = vatCheck(375, 1.21)
    console.log(includingVat);
}

vatPrice();

// VAT Exercise 2

const reverseCalc = function(amountIncluding, vatPercentage) {
    let priceCalc = [baseprice = amountIncluding / vatPercentage, vatAmount = amountIncluding - (amountIncluding / vatPercentage)];
    return priceCalc
}

const calculation = function() {
    const noVat = reverseCalc(2475, 1.21)
    console.log(noVat);
}

calculation();