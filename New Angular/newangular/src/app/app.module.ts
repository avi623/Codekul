import { ProducerService } from './services/producer.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyComponent } from './my/my.component';
import { LoginComponent } from './login/login.component';
import { ThinComponent } from './login/thin.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PropertyBindingComponent } from './databinding/property-binding.component';
import { BlenderComponent } from './databinding/blender.component';
import { EventBindingComponent } from './databinding/event-binding.component';
import { MouseComponent } from './databinding/mouse.component';
import { FirstProjModComponent } from './first-proj-mod/first-proj-mod.component';
import { VehicleSelectionComponent } from './first-proj-mod/vehicle-selection.component';
import { ImagePresenterComponent } from './first-proj-mod/image-presenter.component';
import { FooterComponent } from './first-proj-mod/footer.component';
import { MoreOnComponent } from './more-on/more-on.component';
import { NgContentComponent } from './more-on/ng-content.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { DirectivesComponent } from './directives/directives.component';
import { SizerDirective } from './directives/sizer.direcrive'
import { SecondProjModComponent } from './second-proj-mod/second-proj-mod.component';
import { DropdownDirective } from './second-proj-mod/dropdown.directive';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    LoginComponent,
    ThinComponent,
    DatabindingComponent,
    PropertyBindingComponent,
    BlenderComponent,
    EventBindingComponent,
    MouseComponent,
    FirstProjModComponent,
    VehicleSelectionComponent,
    ImagePresenterComponent,
    FooterComponent,
    MoreOnComponent,
    NgContentComponent,
    LifeCycleComponent,
    DirectivesComponent,
    SizerDirective,
    SecondProjModComponent,
    DropdownDirective,    
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ProducerService],
  bootstrap: [AppComponent]
})
export class AppModule { }