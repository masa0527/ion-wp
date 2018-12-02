import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { HomePage } from './home';

@NgModule({
  imports: [IonicPageModule.forChild(HomePage), ComponentsModule],
  declarations: [HomePage]
})
export class HomePageModule {}
