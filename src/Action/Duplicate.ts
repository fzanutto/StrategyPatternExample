import {ActionStrategy} from './ActionStrategy'

export class Duplicate implements ActionStrategy {

    constructor() {
        console.log("Duplicate instaciado")
    }

    doAction(): void {
        console.log("TODO: fazer isso aqui")
    }

}