import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private snackBar: MatSnackBar) { }

  ShowOnConsole(msg: string): void {
    console.log(msg)
  }

  showMessage(msg: string): void{
    this.snackBar.open(msg, 'fechar', {
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

}
