"use strict";
document.addEventListener("DOMContentLoaded", function () {
    sayGreeting();
});
var sayGreeting = function () {
    setTimeout(function () {
        var _a;
        var greeting = document.createElement("p");
        greeting.innerText = "I'm using TypeScript!";
        (_a = document.getElementById('info')) === null || _a === void 0 ? void 0 : _a.appendChild(greeting);
    }, 3000);
};
