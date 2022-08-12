// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(function () {
    var table = $("#Bubbling");
    table.on("change", function (event) {
        var target = event.target;
        if (target.className == "select") {
            if (target.checked) {
                target.parentNode.parentNode.className = "select";
            }
            else {
                target.parentNode.parentNode.className = "";
            }
        }
    });

    var buttonContainer = $("#operations");
    buttonContainer.click(function (event) {
        var target = event.target;

        if (target.nodeName == "INPUT") {
            var firstNumber = $("#txtFirstNumber").val() ? parseInt($("#txtFirstNumber").val()) : NaN;
            var secondNumber = $("#txtSecondNumber").val() ? parseInt($("#txtSecondNumber").val()) : NaN;
            var result;
            var output = $("#Result");

            switch (target.value) {
                case "Add":
                    result = firstNumber + secondNumber;
                    break;

                case "Subtract":
                    result = firstNumber - secondNumber;
                    break;

                case "Multiply":
                    result = firstNumber * secondNumber;
                    break;

                case "Divide":
                    result = Math.round(firstNumber / secondNumber);
                    break;
            }
            // If statement: If the result isn't null, display results
            if (result != "NaN") {
                output.text("Result: " + result);
                $("#txtFirstNumber").focus();
            }
        }
    })

    var bubbleCount = 50;
    var bubbleField = $("#bubble-field");

    //generate bubbles with randomly timed animation durations
    for (i = 0; i < bubbleCount; i++) {
        var randNum = Math.floor(Math.random() * 20) + 1;
        var animDur = 2 + (0.5 * randNum);
        moveEl = document.createElement('div');
        moveEl.setAttribute('class', 'bubble-rise');
        moveEl.setAttribute('style', 'animation-duration: ' + animDur + 's;');

        bubbleEl = document.createElement('div');
        bubbleEl.setAttribute('class', 'bubble');
        bubbleElContent = document.createTextNode('');
        bubbleEl.appendChild(bubbleElContent);

        moveEl.appendChild(bubbleEl)
        bubbleField.appendChild(moveEl);
    }
});