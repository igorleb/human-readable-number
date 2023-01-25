module.exports = function toReadable(num) {
    let singleDigits = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let teensDigits = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let dozensDigits = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let arrNum = String(num).split("");

    if (num === 0) {
        return "zero";
    }

    if (arrNum.length === 1) {
        return singleDigits[num];
    }
    if (arrNum.length === 2) {
        if (arrNum[0] == 1) {
            return teensDigits[arrNum[1]];
        } else if (arrNum[1] == 0) {
            return dozensDigits[arrNum[0]];
        }
        return `${dozensDigits[arrNum[0]]} ${singleDigits[arrNum[1]]}`;
    }

    if (arrNum.length === 3) {
        if (arrNum[1] == 0 && arrNum[2] == 0) {
            return singleDigits[arrNum[0]] + " hundred";
        } else if (arrNum[1] == 0) {
            return `${singleDigits[arrNum[0]]} hundred ${
                singleDigits[arrNum[2]]
            }`;
        } else if (arrNum[1] == 1) {
            return `${singleDigits[arrNum[0]]} hundred ${teensDigits[arrNum[2]]}`;
        } else if (arrNum[2] == 0) {
            return `${singleDigits[arrNum[0]]} hundred ${
                dozensDigits[arrNum[1]]
            }`;
        }
        return `${singleDigits[arrNum[0]]} hundred ${dozensDigits[arrNum[1]]} ${
            singleDigits[arrNum[2]]
        }`;
    }
};
