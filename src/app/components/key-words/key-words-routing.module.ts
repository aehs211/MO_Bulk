import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {KeyWordsComponent} from "./key-words.component";

const routes: Routes = [
  {path: '', component: KeyWordsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KeyWordsRoutingModule {
}
