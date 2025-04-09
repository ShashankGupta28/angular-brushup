import { NgModule } from "@angular/core";
import { ModuleComponent } from "./module/module.component";
import { FormComponent } from "./form-component/form.component";

@NgModule({
    declarations :[ModuleComponent],
    bootstrap:[],
    imports:[FormComponent],
    providers:[],
    exports:[ModuleComponent]
})

export class AppModule {

}