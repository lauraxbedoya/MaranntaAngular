import { Component } from '@angular/core';

type routeType = {
  text: string,
  route: string,
}

@Component({
  selector: 'nav-contact',
  templateUrl: './nav-contact.component.html',
  styleUrls: ['./nav-contact.component.css'],
})

export class NavContact {
  // routesContact: routeType[] = [
  //   { text: 'Sigue tu pedido', route: '/siguetupedido' },
  //   { text: 'Contáctanos', route: '/contactanos' },
  //   { text: 'Conócenos', route: '/conocenos' },
  //   { text: 'Servicio al cliente', route: '/serviciocliente' },
  // ];

  // showName = false;
  // constructor() {}
}