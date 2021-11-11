import {LogStrategy} from './Log'
import {ActionStrategy} from './Action'

export class ButtonInteraction {
    constructor(private htmlClass: string, public logStrategy: LogStrategy, public actionStrategy: ActionStrategy){
        this.updateButtons()
    }

    private updateButtons() {
        const elements: HTMLCollectionOf<Element> = document.getElementsByClassName("action")

        for(let i = 0; i < elements.length; i++){
            const button = elements.item(i) as HTMLElement
            button.onclick = () => {this.onClick()}
        }
    }

    private onClick() {
        this.actionStrategy.doAction(this.htmlClass)
        this.logStrategy.logInformation(this)
        this.updateButtons()
    }
}
