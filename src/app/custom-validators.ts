import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class CustomValidators {
    static forbiddenProjectName(control: FormControl): { [s: string]: boolean } {
        if(control.value === 'Test') {
            return { 'nameIsForbidden': true };
        } else {
            return null;
        }
    }

    static asyncForbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
        const promise = new Promise<any>((resolve, reject) => {
            setTimeout(() => {
                if(control.value === 'test@test.com') {
                    resolve({ 'emailIsForbidden': true });
                } else {
                    resolve(null);
                }
            }, 1000);
        });
        return promise;
    }
}
