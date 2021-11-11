import {ActionStrategy} from './ActionStrategy'

export class RemoveLast implements ActionStrategy {

    doAction(htmlClass: string): void {
        const elements: HTMLCollectionOf<Element> = document.getElementsByClassName("action")
        if (elements.length > 1){
            const lastButton = elements.item(elements.length - 1) as HTMLElement
            lastButton.parentElement?.removeChild(lastButton)
        }
    }

    public toString(): string {
        return "RemoveLast Action"
    }

}