import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {

  input = new FormControl('');

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    this.input.setValue(localStorage.getItem('lastResult'));
  }

  insert(num) {
    if(this.input.value) {
      let current = this.input.value;
      this.input.setValue(current += num);
    } else {
      this.input.setValue(num);
    }

  }

  c() {
    this.input.setValue('');
  }

  equal() {
    let exp = this.input.value;

    if(exp) {
      this.input.setValue(eval(exp));
        localStorage.setItem('lastResult', this.input.value)
  } else {
      this.toastr.error('Digite um valor!', 'Erro!');
    }
  }

  back() {
    let exp = this.input.value;
    this.input.setValue(exp.substring(0, exp.length-1));
  }
}
