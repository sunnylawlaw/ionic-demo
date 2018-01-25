import { NgModule ,ModuleWithProviders} from '@angular/core';

import { CommonModule } from '@angular/common';


import { DataService } from '../services/userinfo';

@NgModule({
  declarations:[],
  imports: [CommonModule],
  providers: [],
  exports:[]
})

export class SharedModule {

  static forRoot(): ModuleWithProviders {

          return {
              ngModule: SharedModule,
              providers: [DataService]
          };
      }


}
