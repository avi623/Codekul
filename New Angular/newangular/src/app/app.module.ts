import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { LoginComponent } from './login/login.component';
import { EventBindingComponent } from './databinding/event-binding.component';
import { BlenderComponent } from './databinding/blender.component';
import { PropertyBindingComponent } from './databinding/property-binding.component';
import { MouseComponent } from './databinding/mouse.component';
import { MyComponent } from './my/my.component';
import { MoreOnComponent } from './more-on/more-on.component';
import { NgContentComponent } from './more-on/ng-content.component';
import { FirstProjModComponent } from './first-proj-mod/first-proj-mod.component';
import { FooterComponent } from './first-proj-mod/footer.component';
import { ImagePresenterComponent } from './first-proj-mod/image-presenter.component';
import { VehicleSelectionComponent } from './first-proj-mod/vehicle-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    DatabindingComponent,
    LoginComponent,
    EventBindingComponent,
    BlenderComponent,
    PropertyBindingComponent,
    MouseComponent,
    MyComponent,
    MoreOnComponent,
    NgContentComponent,
    FirstProjModComponent,
    FooterComponent,
    FirstProjModComponent,
    ImagePresenterComponent,
    VehicleSelectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
