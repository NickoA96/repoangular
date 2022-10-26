import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./componentes/paginas/about/about.component";
import { MainComponent } from "./componentes/paginas/main/main.component";
import { BlogComponent } from "./componentes/paginas/blog/blog.component";
import { ContactoComponent } from "./componentes/paginas/contacto/contacto.component";
import { MasonComponent } from "./componentes/paginas/mason/mason.component";




const routes: Routes = [
    { path: "main", component: MainComponent },
    { path: "blog", component: BlogComponent },
    { path: "about", component: AboutComponent },
    {path: "contacto", component: ContactoComponent},
    {path: "mason" , component: MasonComponent},
    { path: "**", pathMatch: "full", redirectTo: "main" },

];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash : true , scrollPositionRestoration: "enabled"})],
    exports: [RouterModule]

})
export class AppRoutingModule { }
