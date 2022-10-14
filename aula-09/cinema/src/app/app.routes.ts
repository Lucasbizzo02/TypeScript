import {Routes} from "@angular/router"
import { MenuComponent } from "./menu/menu.component";
import { SobreComponent } from "./sobre/sobre.component";
import { CategoriaComponent} from "./categoria/categoria.component";

export const ROUTES: Routes = [
    {path: '', component: MenuComponent},
    {path: 'sobre', component: SobreComponent},
    {path: 'categoria', component: CategoriaComponent}
];