import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//`ng g c` generated components
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { NotecardComponent } from './notecard/notecard.component';

//material modules
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';

//data acquisition module
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

//routing module
import {Routes, RouterModule} from '@angular/router';
import { CandisplayGuard } from './candisplay.guard';
import { NoteslistComponent } from './noteslist/noteslist.component';
import { NotecardsComponent } from './notecards/notecards.component';
import { NewnoteComponent } from './newnote/newnote.component';
import { NotelistliComponent } from './notelistli/notelistli.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'view/cards', 
        component: NotecardsComponent
      },
      {
        path: 'view/list',
        component: NoteslistComponent
      },
      {
        path: '',
        redirectTo: 'view/cards',
        pathMatch: 'full'
      }
    ],
    canActivate: [CandisplayGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    NotecardComponent,
    LoginComponent,
    NoteslistComponent,
    NotecardsComponent,
    NewnoteComponent,
    NotelistliComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    MatExpansionModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
