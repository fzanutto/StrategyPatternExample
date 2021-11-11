import { ActionStrategy, DoNothing, Duplicate, RemoveLast } from './Action';
import { ButtonInteraction } from './ButtonInteraction'
import { AlertLog, ConsoleLog, LogStrategy, ScreenLog } from './Log';

let button: ButtonInteraction

let actionOptions: ActionStrategy[] = []
let logOptions: LogStrategy[] = []

const changeButtonAction = (action: ActionStrategy) => {
    button.actionStrategy = action
}

const changeButtonLog = (log: LogStrategy) => {
    button.logStrategy = log
}

document.addEventListener("DOMContentLoaded", function() {
    actionOptions.push(new DoNothing(), new Duplicate(), new RemoveLast())
    logOptions.push(new ConsoleLog(), new AlertLog(), new ScreenLog())

    actionOptions.forEach((item) => {
        const button = document.createElement("button")
        button.onclick = () => { changeButtonAction(item) }
        button.textContent = item.toString()
        document.getElementById('action-div')?.appendChild(button);
    })

    logOptions.forEach((item) => {
        const button = document.createElement("button")
        button.onclick = () => { changeButtonLog(item) }
        button.textContent = item.toString()
        document.getElementById('log-div')?.appendChild(button);
    })

    button = new ButtonInteraction("action", logOptions[0], actionOptions[0])
});
