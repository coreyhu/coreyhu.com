
function updateFontTitle(fontElem, fontAxes) {
    var attrString = "";

    for (var axisName in fontAxes) {
        if (fontAxes.hasOwnProperty(axisName)) {
            let val = fontAxes[axisName];
            if (axisName == "ital") {
                val /= 100;
            }
            if (attrString == "") {
                attrString += "\'" + axisName + "\' " + val;
            } else {
                attrString += ", \'" + axisName + "\' " + val;
            }
        }
    }
    fontElem.style.fontVariationSettings = attrString;
}

var fontList = ["urbanist"];

var axes = {
    "urbanist": {
        "wght": 77,
        "ital": 0
    }
};

for(i = 0; i < fontList.length; i++) {
    let font = fontList[i];
    var sliders = document.getElementById(font + "-section").getElementsByClassName("slider");
    var fontElem = document.getElementById(font + "-title-text");

    for(j = 0; j < sliders.length; j++) {
        let slider = sliders[j];
        slider.addEventListener("input", function() {
            let axisName = slider.id.split("-")[0];
            axes[font][axisName] = slider.value;
            updateFontTitle(fontElem, axes[font]);
        });
    }
    updateFontTitle(fontElem, axes[font]);
}