import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-wizard-footer',
  standalone: true,
  templateUrl: './wizard-footer.component.html',
  styleUrl: './wizard-footer.component.scss'
})
export class WizardFooterComponent {
  @Output() onBackClick: EventEmitter<void> = new EventEmitter<void>();
  @Output() onNextClick: EventEmitter<void> = new EventEmitter<void>();

  onBackClickHandler(): void {
    this.onBackClick.emit()
  }

  onNextClickHandler(): void {
    this.onNextClick.emit()
  }
}
