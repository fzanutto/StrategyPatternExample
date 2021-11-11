import { LogStrategy } from ".";

export class ConsoleLog implements LogStrategy {
    constructor() {
        console.log("ConsoleLog instanciada")
    }
    logInformation(info: string): void {
        const date = Date()
        console.log(`New Log [${date}]: ${info}`)
    }
    
}