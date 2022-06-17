import { FormGroup } from '@angular/forms';
export function userPasswordEqual(formGroup: FormGroup) {
  const userName = formGroup.get('userName')?.value ?? '';
  const password = formGroup.get('password')?.value ?? '';

  if (userName.trim() + password.trim()) {
    return userName !== password ? null : { userEqualsPassword: true };
  } else {
    return null;
  }
}
