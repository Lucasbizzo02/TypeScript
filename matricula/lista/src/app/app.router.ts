import {Routes} from "@angular/router"
import { MenuComponent } from "./menu/menu.component";
import { SobreComponent } from "./sobre/sobre.component";

export const ROUTES: Routes = [
    {path: '', component: MenuComponent},
    {path: 'sobre', component: SobreComponent}
];