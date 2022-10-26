import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
providedIn: 'root'
})

export class DatosService {

    public equipo: any[] =  [];

    public productos: any[] =  [];


constructor(private http: HttpClient) { console.log('Soy el Servicio de Datos listo para usar');
this.cargarEquipo();
this.cargarProductos(); }

private cargarEquipo() {
    this.http.get('https://app-angular-6661f-default-rtdb.firebaseio.com/equipo.json')
    .subscribe((res : any) => {
        this.equipo = res;
        console.log(res);
    });
}

private cargarProductos() {
    this.http.get('https://app-angular-6661f-default-rtdb.firebaseio.com/productos.json')
    .subscribe((res : any) => {
        this.productos = res;
        console.log(res);
    });

}
}
