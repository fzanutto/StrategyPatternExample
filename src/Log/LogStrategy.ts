import { ButtonInteraction } from "../ButtonInteraction";

export interface LogStrategy {
    logInformation(interaction: ButtonInteraction): void;
}