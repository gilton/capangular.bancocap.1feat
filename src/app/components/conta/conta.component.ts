import { Component, OnInit } from '@angular/core';

import { Cliente } from 'src/app/model/cliente.model';
import { Conta } from 'src/app/model/conta.model';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {

  selectedValue: string = '';
  exibirCadastro: boolean = false;
  submitted: boolean = false;

  conta: Conta ={
    hash: '',
    cliente: {
      cpf: '', 
      nome: ''
    },
    saldo: 0.0
  }

  mock_clientes: Cliente[] = [
    { cpf: '1', nome: "John" },
    { cpf: '2', nome: "Mary" },
    { cpf: '3', nome: "Sophie"},
    { cpf: '4', nome: "Susan"},
    { cpf: '5', nome: "Michel"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() { this.submitted = true; }

  criarConta(): void {
    alert("Conta criada com sucesso!");
    this.encontrarClientePorNome(this.selectedValue)
    // this.conta.hash = hash.sh1(this.conta.hash);
    console.log(this.conta);
  }

  encontrarClientePorNome(nome: string) {
    for (const client of this.mock_clientes) {
      if( client.nome == this.selectedValue ) {
        this.conta.cliente = client;
        break
      }
    }
  }

}