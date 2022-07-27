module.exports = function toReadable (number) {
    
  const oneDigitAnumber = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

  const TwoDigitAnumber = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  const TwoDigitAnumberTenths = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  const ThreeDigitAnumberHundredths = ['hundred'];

  

 
    let i = number.toString();
   if ( i <= 10 ) {
    return oneDigitAnumber[i];
    } else {
        if (i < 20 || i == 10) {
        return TwoDigitAnumber[i[1]];
        } else {
            if ( i / 10 == i[0] ) {
                return TwoDigitAnumberTenths[i[0]];
                } else {
                    if (i >= 20 || i < 100 ) {
                        return TwoDigitAnumberTenths[i[0]] + ' ' + oneDigitAnumber[i[1]];
                        } else {
                            if ( i = 100 ) {
                                return oneDigitAnumber[i[0]] + ' ' + ThreeDigitAnumberHundredths[i[1]];
                            }
                        }
    }
}
}
  
};
