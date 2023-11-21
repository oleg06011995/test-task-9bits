import { Component } from '@angular/core';
import {WizardFooterComponent} from "./wizard-footer/wizard-footer.component";
import {WizardStepperComponent} from "./wizard-stepper/wizard-stepper.component";
import {Step} from "./models/step";

const STEPS = [
  {id: 1, name: '1', content: 'Step 1 Content 11111'},
  {id: 2, name: '2', content: 'Step 2 Content 22222'},
  {id: 3, name: '3', content: 'Step 3 Content 33333'},
]

@Component({
  imports: [WizardFooterComponent, WizardStepperComponent],
  selector: 'app-wizard',
  standalone: true,
  templateUrl: './wizard.component.html',
  styleUrl: './wizard.component.scss'
})
export class WizardComponent {
  steps: Step[] = STEPS;
  currentStepIndex = 0;

  onBackClick(): void {
    if(this.currentStepIndex > 0) {
      this.currentStepIndex--;
    }
  }

  onNextClick(): void {
    if(this.currentStepIndex < this.steps.length - 1) {
      this.currentStepIndex++;
    }
  }
}
