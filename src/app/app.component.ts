import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomValidators } from './custom-validators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    statusArray = ['Stable', 'Critical', 'Finished'];
    forbiddenProjectNames = ['Test'];

    projectForm: FormGroup;

    ngOnInit(): void {
        this.projectForm = new FormGroup({
            projectName: new FormControl(null, [Validators.required, CustomValidators.forbiddenProjectName]),
            email: new FormControl(null, [Validators.required, Validators.email], CustomValidators.asyncForbiddenEmails),
            projectStatus: new FormControl('Stable')
        });
    }

    onSubmitProjectForm() {
        console.log('this.projectForm: ', this.projectForm);
    }
}
