import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RotaService {

  constructor(private router: Router) { }
  obterRotaAtual(): string {
    return this.router.url;
  }

  setTitle(tile: string) {
    return tile;
  }
}
