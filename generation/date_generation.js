function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function randomDate(startAge, endAge) {
    const start = startAge * 31536000000;
    const end = (endAge + 1) * 31536000000;
    const age = random(start, end);
    const date = new Date;
    date.setTime(date.getTime() - age);
    return date.toDateString();
};
export {random, randomDate};