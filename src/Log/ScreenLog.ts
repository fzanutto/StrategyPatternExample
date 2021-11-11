import { LogStrategy } from ".";
import { ButtonInteraction } from "../ButtonInteraction";

export class ScreenLog implements LogStrategy {

    logInformation(interaction: ButtonInteraction): void {
        const date = Date()
        const log = `Log Date: [${date.substr(0, 24)}] - Button Action: [${interaction.actionStrategy}] - Button Log: [${interaction.logStrategy}]`
        const element = document.createElement("p")
        element.textContent = log
        document.getElementById("log-container")?.appendChild(element)

    }

    public toString(): string {
        return "Screen Log"
    }
    
}