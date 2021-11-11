import {ActionStrategy} from './ActionStrategy'

export class DoNothing implements ActionStrategy {

    doAction(htmlClass: string): void {}

    public toString(): string {
        return "DoNothing Action"
    }

}