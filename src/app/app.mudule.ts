import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Importação de componentes
/* A partir da v.14 do Angular não há mais necessidade de importar os componentes
com "standalone: true", como o caso do próprio AppComponent e o LivroListaComponent, 
já que esses são reconhecidos e utilizados automaticamente*/
/* A linha a seguir passa a ser inutilizada neste contexto, só a deixei como exemplo. 
Mas deverá ser importada no componente principal AppComponent e apontada em seu imports */
//import { LivroListaComponent } from './livro-lista/livro-lista.component';

// Importação dos serviços (controladores)
import { ControleEditoraService } from './controle-editora.service';
import { ControleLivrosService } from './controle-livros.service';

@NgModule({
  declarations: [],
  // Consequentemente nem o AppComponent e nem o LivroListaComponent serão apontados em import
  imports: [
    /*Importa o BrowserModule, e a pesar deste possuir o CommonModule, foi necessário importar
    o CommonModule direto no LivroListaComponent, já que não estava reconhecedo o *ngFor */
    BrowserModule,
    FormsModule 
  ],
  providers: [
    //Serviços Injetáveis
    ControleEditoraService,
    ControleLivrosService
  ],
  /* Com essa atualização também não se faz necessário apontar o AppComponent no Bootstrap, o Angular  
  também o identifica automaticamente*/
  bootstrap: []
})
export class AppModule { }
