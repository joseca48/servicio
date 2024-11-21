import { Injectable } from '@angular/core';
//Importar las variables
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
//fin import variable globales

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  constructor( private http: HttpClient ) { }
  //variables que contiene la ruta del servidor 
  backend = environment.backend+"/registroForm";//registroFOrm
  obtenerRegistros(){
    return this.http.get(`${this.backend}/obtener-registros`);
  }
}