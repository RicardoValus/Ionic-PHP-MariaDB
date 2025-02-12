import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonList, IonItem } from '@ionic/angular/standalone';
import axios from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonInput,
    IonButton,
    IonList,
    IonItem,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,


  ],
})
export class HomePage {
  nome: string = '';
  usuarios: any[] = [];
  usuarioEditando: any = null;
  API_URL = 'http://localhost:8000'; 

  constructor() {
    this.carregarUsuarios();
  }

  async carregarUsuarios() {
    const resposta = await axios.get(`${this.API_URL}/listar.php`)
    this.usuarios = resposta.data;
  }

  async adicionarUsuario() {
    if (this.usuarioEditando) {
      await axios.post(`${this.API_URL}/editar.php`, { id: this.usuarioEditando.id, nome: this.nome });
      this.usuarioEditando = null;
    } else {
      await axios.post(`${this.API_URL}/adicionar.php`, { nome: this.nome });
    }
    this.nome = '';
    this.carregarUsuarios();
  }

  editarUsuario(usuario: any) {
    this.nome = usuario.nome;
    this.usuarioEditando = usuario;
  }

  async deletarUsuario(id: number) {
    await axios.post(`${this.API_URL}/deletar.php`, { id });
    this.carregarUsuarios();
  }
}
