import { Component } from '@angular/core';
import { EditorComponent } from '../common/editor/editor.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';

const initialCode = `
const rational_1 = new Rational(1, 2);
const rational_2 = new Rational(7, 5);

return {
  comparator: {
    'alternative_1': new Rational(n1.getNumerator() + n2.getNumerator(), n1.getDenominator() + n2.getDenominator()),
    'alternative_2': new Rational(n1.getNumerator() + n2.getDenominator(), n1.getDenominator() + n2.getNumerator()),
    'alternative_3': new Rational(n1.getDenominator() + n2.getNumerator(), n1.getNumerator() + n2.getDenominator()),
    'alternative_4': rational_1 * rational_2,
    'alternative_5': rational_1 * rational_2 ** (-1)
  },
  alterantives: {
    'alternative_1': \`\${new Rational(n1.getNumerator() + n2.getNumerator(), n1.getDenominator() + n2.getDenominator())}\`,
    'alternative_2': \`\${new Rational(n1.getNumerator() + n2.getDenominator(), n1.getDenominator() + n2.getNumerator())}\`,
    'alternative_3': \`\${new Rational(n1.getDenominator() + n2.getNumerator(), n1.getNumerator() + n2.getDenominator())}\`,
    'alternative_4': \`\${rational_1 * rational_2}\`,
    'alternative_5': \`\${rational_1 * rational_2 ** (-1)}\`
  }
};

`.trim();

@Component({
  selector: 'app-new-exercise',
  standalone: true,
  imports: [
    EditorComponent,
    FormsModule,
    ReactiveFormsModule,
    MonacoEditorModule,
  ],
  templateUrl: './new.component.html',
})
export class ExerciseNewComponent {
  exercise = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(1)]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
    code: new FormControl(initialCode, [
      Validators.required,
      Validators.minLength(1),
    ]),
  });

  async save(event: SubmitEvent) {
    event.preventDefault();
    if (!this.exercise.valid) return;

    const response = await fetch('/api/exercises', {
      body: JSON.stringify(this.exercise.value),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    if (response.ok) location.href = '/exercises';
  }
}
