import { ActionStrategy, Duplicate } from './Action';
import { ButtonInteraction } from './ButtonInteraction'
import { ConsoleLog, LogStrategy } from './Log';


let button: ButtonInteraction

let actionOptions: ActionStrategy[] = []
let logOptions: LogStrategy[] = []

document.addEventListener("DOMContentLoaded", function() {
    let greeting: HTMLElement = document.createElement("p");
    greeting.innerText = "I'm using TypeScript!";
    document.getElementById('info')?.appendChild(greeting);

    actionOptions.push(new Duplicate())
    logOptions.push(new ConsoleLog())

    let button2: HTMLElement | null = document.getElementById("action")    

    if (button2 != null) {
        button = new ButtonInteraction(button2, logOptions[0], actionOptions[0])
        console.log(button)
    }
});

