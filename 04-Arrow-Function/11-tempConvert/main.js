
const cal = (farenheit) => {
    const change = (farenheit - 32) *5/9
    console.log(`${change} Celsius`);
    return change
}

cal(79)
