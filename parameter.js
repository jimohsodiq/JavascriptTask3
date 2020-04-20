function meterFunctionName(number) {
    let metervarname = [];
    for (let s = 1; s <= number; s++) {
        if (s % 2 === 0 && s % 3 === 0 && s % 5 === 0) {
            metervarname.push("yu-gi-oh");
        } else if (s % 2 === 0 && s % 3 === 0) {
            metervarname.push("yu-gi");
        } else if (s % 2 === 0 && s % 5 === 0) {
            metervarname.push("yu-oh");
        } else if (s % 3 === 0 && s % 5 === 0) {
            metervarname.push("gi-oh");
        } else if (s % 2 === 0) {
            metervarname.push("yu");
        } else if (s % 3 === 0) {
            metervarname.push("gi");
        } else if (s % 5 === 0) {
            metervarname.push("oh");
        } else {
            metervarname.push(s);
        }
    }
    console.log(metervarname);
    return metervarname;
}
meterFunctionName(100);
meterFunctionName(70);