module.exports = function toReadable (number) {
    
  const oneDigitAnumber = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

  const TwoDigitAnumber = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  const TwoDigitAnumberTenths = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];



 
    
    
    let i = number.toString();
    if ( i <= 10 ) {
    return oneDigitAnumber[i];
    } else {
        if (i < 20 || i == 10) {
        return TwoDigitAnumber[i[1]];
        } else {
            if (i.length == 2 & i%10 == 0 ) {
                return TwoDigitAnumberTenths[i[0]];
                } else {
                    if (i.length == 2 & i >= 20 || i <= 99) {
                        return TwoDigitAnumberTenths[i[0]] + ' ' + oneDigitAnumber[i[1]];
                        } else {
                            if ( i%100 == 0 ) {
                                return oneDigitAnumber[i[0]] + ' ' + 'hundred';
                            } else {
                                if ( i > 100 & i%10 == 0 ) {
                                    return oneDigitAnumber[i[0]] + ' ' + 'hundred' + ' ' + TwoDigitAnumberTenths[i[1]];
                                } else {
                                    if ( i[1] == 0) {
                                        return oneDigitAnumber[i[0]] + ' ' + 'hundred' + ' ' + oneDigitAnumber[i[2]];
                                    } else {
                                    if ( i[1] == 1) {
                                        return oneDigitAnumber[i[0]] + ' ' + 'hundred' + ' ' + TwoDigitAnumber[i[2]];
                                    } else {
                                        return oneDigitAnumber[i[0]] + ' ' + 'hundred' + ' ' + TwoDigitAnumberTenths[i[1]] + ' ' + oneDigitAnumber[i[2]];
                                    }
                                }
                            }
                        }
    }
}
}
    }
};
