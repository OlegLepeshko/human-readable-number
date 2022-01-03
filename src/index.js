module.exports = function toReadable (number) {
    let powNum = 10;
    let res = '';
    numberStr = String(number);
    let degree = numberStr.length - 1;
    const nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const nums1 = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen','seventeen', 'eighteen', 'nineteen'];
    const nums2 = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    for (let i = 0; i <= numberStr.length; i++) {
        if (degree === 0) {
            res += nums[number % 10];
            break;
         } else if (degree === 1) {
            if (numberStr[i] === "1" && numberStr[i + 1] > "0") {
                res += nums1[number % 10 - 1];
                break;
            } else if (numberStr[i] !== "0") {
                degree--;
                res += nums2[Math.trunc(number / 10) - 1];
                if (number % 10 === 0)
                    break;
                number -= Number(numberStr[i]) * 10;
                res += ' ';
            } else {
                degree--;
            }  
        } else if (degree === 2) {
            res += nums[Math.trunc(number / 100)] + ' hundred';
            if (number % 100 === 0) 
                break;
            res += ' ';
            number -= Number(numberStr[i]) * 100;
            degree--;
        }
    }
    return res;
}
