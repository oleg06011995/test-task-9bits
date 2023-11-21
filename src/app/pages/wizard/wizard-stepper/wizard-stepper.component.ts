import {Component, Input} from '@angular/core';
import {Step} from "../models/step";
import {CommonModule} from "@angular/common";

@Component({
  imports: [CommonModule],
  selector: 'app-wizard-stepper',
  standalone: true,
  templateUrl: './wizard-stepper.component.html',
  styleUrl: './wizard-stepper.component.scss'
})
export class WizardStepperComponent {
  @Input() steps: Step[] = [];
  @Input() currentStepIndex: number = 0;
}
