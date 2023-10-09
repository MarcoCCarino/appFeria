import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  showMenu: boolean = false;
  public appPages = [
    { title: 'Inicio', url: '/type', icon: 'home' },
    { title: 'Profesores', url: '/profesores', icon: 'people' },
    { title: 'Categorías', url: '/categorias', icon: 'list' },
    { title: 'Proyectos Inscritos', url: '/proyectos', icon: 'reader' },
    { title: 'Resultados/Evaluaciones', url: '/resultados', icon: 'bar-chart' },
    { title: 'Código QR', url: '/codigos', icon: 'qr-code' },
    { title: 'Reportes', url: '/reportes', icon: 'clipboard' },

  ];

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Mostrar el menú solo en las páginas deseadas
        this.showMenu = ['/type', '/profesores', '/categorias', '/proyectos', '/resultados', '/codigos', '/reportes'].includes(event.url);
      }
    });
  }

  LogOut(){
    this.router.navigate(['/home'])
  }
}
