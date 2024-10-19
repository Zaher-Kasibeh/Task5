function convert() {
    let value = parseFloat(document.getElementById("value").value);
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;

    const units = {
        "cm": 10,
        "m": 1000,
        "km": 1000000,
    };

    try {
        const convertedValue = value * units[from] / units[to];
        document.getElementById("result").value = convertedValue;
    } catch (value) {
        window.alert("Change Your Number");
    }
}