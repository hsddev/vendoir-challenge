// Dependencies
const numberToWords = require("number-to-words");

const timeHumainFriendlyText = (xtime) => {
    // Check if the time is valid
    const isValid = xtime.includes(":");

    let hour = "";
    let minute = "";
    let timeText = "";

    // If time is valid get hour and minutes
    if (isValid) {
        // Get the hour and minutes
        hour = xtime.split(":")[0];
        minute = xtime.split(":")[1];

        // Convert hours & minutes from string to digits
        let hourToDigit =
            Number(hour) < 12 ? Number(hour) : Number(hour) % 12 || 12;
        let minuteToDigit = Number(minute);

        // if minutes < 30
        if (minuteToDigit < 30) {
            timeText =
                numberToWords.toWords(minuteToDigit) +
                " past " +
                numberToWords.toWords(hourToDigit);
        }

        // if minutes == 0
        if (minuteToDigit == 0) {
            timeText = numberToWords.toWords(hourToDigit) + " o'clock";
        }

        // if minutes > 30
        if (minuteToDigit > 30) {
            timeText =
                numberToWords.toWords(60 - minuteToDigit) +
                " to " +
                numberToWords.toWords(hourToDigit == 12 ? 1 : hourToDigit + 1);
        }

        // if minutes equal to 30
        if (minuteToDigit == 30) {
            timeText = "Half past " + numberToWords.toWords(hourToDigit);
        }
    } else {
        // If time is invalid
        timeText = "Time entered is not valid please try again";
    }

    // return the time humain friendly text
    return timeText;
};

module.exports = timeHumainFriendlyText;
