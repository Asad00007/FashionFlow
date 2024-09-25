import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent implements OnInit {
  account: FormGroup;
  selectedImage;
  user;
  ngOnInit(): void {
    if (localStorage.getItem('User')) {
      this.user = JSON.parse(localStorage.getItem('User'));
      this.account = new FormGroup({
        imagePath: new FormControl(this.user.imagePath),
        f_name: new FormControl(this.user.f_name, Validators.required),
        l_name: new FormControl(this.user.l_name, Validators.required),
        email: new FormControl(this.user.email, [
          Validators.required,
          Validators.email,
        ]),
        phone: new FormControl(this.user.phone, [
          Validators.required,
          Validators.maxLength(12),
        ]),
        gender: new FormControl(this.user.gender, Validators.required),
      });
    } else {
      this.account = new FormGroup({
        imagePath: new FormControl(null),
        f_name: new FormControl(null, Validators.required),
        l_name: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        phone: new FormControl(null, [
          Validators.required,
          Validators.maxLength(12),
          Validators.minLength(10),
        ]),
        gender: new FormControl('Male', Validators.required),
      });
    }
  }
  submitForm() {
    if (!this.account.valid) {
      alert('Please fill out all fields correctly');
    } else {
      alert('Data updated Successfully');
      localStorage.setItem('User', JSON.stringify(this.account.value));
    }
  }

  handleImageChange(e) {
    const file = e.target.files[0];
    this.selectedImage = file ? URL.createObjectURL(file) : undefined;
    this.account.patchValue({ imagePath: this.selectedImage });
  }
}
