import { Component, OnInit, Input } from '@angular/core';
import { EditorComponent } from '../common/editor/editor.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { trpcClient } from '../../../trpc';

@Component({
  selector: 'app-new-exercise',
  standalone: true,
  imports: [
    EditorComponent,
    FormsModule,
    ReactiveFormsModule,
    MonacoEditorModule,
  ],
  templateUrl: './edit.component.html',
})
export class ExerciseEditComponent implements OnInit {
  @Input() id!: string;
  exercise:
    | undefined
    | FormGroup<{
        name: FormControl<string | null>;
        description: FormControl<string | null>;
        code: FormControl<string | null>;
      }> = undefined;

  async ngOnInit() {
    const exercise = await trpcClient.getExercise.query({
      id: Number(this.id),
    });

    if (exercise === undefined) {
      location.href = '/exercises';
      return;
    }

    this.exercise = new FormGroup({
      name: new FormControl(exercise.name, [
        Validators.required,
        Validators.minLength(1),
      ]),
      description: new FormControl(exercise.description, [
        Validators.required,
        Validators.minLength(1),
      ]),
      code: new FormControl(exercise.code, [
        Validators.required,
        Validators.minLength(1),
      ]),
    });
  }

  async save(event: SubmitEvent) {
    event.preventDefault();
    if (this.exercise === undefined || !this.exercise.valid) return;
    console.log(this.exercise.value);

    const response = await fetch(`/api/exercises/${this.id}`, {
      body: JSON.stringify(this.exercise.value),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'PUT',
    });

    if (response.ok) location.href = '/exercises';
  }
}
