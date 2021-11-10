import { ActionStrategy } from './Action';
import {ButtonInteraction} from './ButtonInteraction'
import { LogStrategy } from './Log';


let button: ButtonInteraction

let actionOptions: ActionStrategy[] = []
let logOptions: LogStrategy[] = []


console.log('asdsdas')

document.addEventListener("DOMContentLoaded", function() {
    let greeting: HTMLElement = document.createElement("p");
    greeting.innerText = "I'm using TypeScript!";
    document.getElementById('info')?.appendChild(greeting);


    let button2 = document.getElementById("action")

    console.log(button2)

    
});

