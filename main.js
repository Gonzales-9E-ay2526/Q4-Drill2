function checkHeat() {
    let temperature = Number(document.getElementById("temp").value);
    let humidity = Number(document.getElementById("hum").value);
    let ans = document.getElementById("Ans");
    let heatIndex = temperature + (0.33 * humidity) - 4;

    let status = "";
    let description = "";

        if (document.getElementById("temp").value === "" || document.getElementById("hum").value === ""){
            window.alert("Please fill in both fields.");
            return;
        }

        if (heatIndex <= 27) {
            status = "Comfortable";
        } 
        else if (heatIndex >= 28 && heatIndex <= 32) {
            status = "Warm";
        } 
        else if (heatIndex >= 33 && heatIndex <= 37) {
            status = "Hot";
        } 
        else if (heatIndex >= 38 && heatIndex <= 41) {
            status = "Very Hot";
        } 
        else if (heatIndex >= 42) {
            status = "Extreme Heat";
        }

        window.alert("The Heat Index is: " + heatIndex.toFixed(2) + "°C\nStatus: " + status);
}
