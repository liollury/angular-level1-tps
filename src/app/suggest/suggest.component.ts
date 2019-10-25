import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ComicsService } from '../shared/comics-service/comics.service';

@Component({
  selector: 'comics-suggest',
  templateUrl: './suggest.component.html',
  styleUrls: ['./suggest.component.scss']
})
export class SuggestComponent implements OnInit {
  form: FormGroup;

  constructor (
    private comicsService: ComicsService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit () {
    this.form = this.fb.group({
      name: this.fb.control(null, {
        validators: [ Validators.required ]
      }),
      date: this.fb.control(null, {
        validators: [ Validators.required ]
      }),
      description: this.fb.control(null, {
        validators: [ Validators.required, Validators.maxLength(255) ]
      })
    })
  }

  onSubmit () {
    if (this.form.valid) {
      this.comicsService.create(this.form.value).subscribe(() => {
        this.router.navigate([ '/comics', ComicsService.MY_COMICS_ID ]);
      });
    }
  }

  get name () { return this.form.controls.name; }
  get date () { return this.form.controls.date; }
  get description () { return this.form.controls.description; }

}
