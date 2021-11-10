import {LogStrategy} from './Log'
import {ActionStrategy} from './Action'

export class ButtonInteraction {
    constructor(public logStrategy: LogStrategy, public actionStrategy: ActionStrategy){}

    public onClick() {
        this.logStrategy.logInformation("Recebeu um click")
        this.actionStrategy.doAction()
    }
}
