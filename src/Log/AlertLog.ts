import { LogStrategy } from ".";
import { ButtonInteraction } from "../ButtonInteraction";

export class AlertLog implements LogStrategy {

    logInformation(interaction: ButtonInteraction): void {
        const date = Date()
        alert(`Log Date: [${date.substr(0, 24)}] - Button Action: [${interaction.actionStrategy}] - Button Log: [${interaction.logStrategy}]`)
    }

    public toString(): string {
        return "Alert Log"
    }
    
}