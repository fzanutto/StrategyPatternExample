import {LogStrategy} from './Log'
import {ActionStrategy} from './Action'

export class ButtonInteraction {
    constructor(private htmlElement: HTMLElement, public logStrategy: LogStrategy, public actionStrategy: ActionStrategy){
        this.htmlElement.addEventListener('click', () => {this.onClick()})

        console.log(this)
    }

    private onClick() {
        this.logStrategy.logInformation("Recebeu um click")
        this.actionStrategy.doAction(this.htmlElement)
    }
}
