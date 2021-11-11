import {ActionStrategy} from './ActionStrategy'

export class Duplicate implements ActionStrategy {

    doAction(htmlClass: string): void {
        const elements: HTMLCollectionOf<Element> = document.getElementsByClassName("action")
        const lastButton = elements.item(0) as HTMLElement
        const newElement = lastButton.cloneNode(true)
        lastButton.parentElement?.append(newElement)
    }

    public toString(): string {
        return "Duplicate Action"
    }

}