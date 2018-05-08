import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from "./about.component";

const ABOUT_ROUTER: Routes = [
    {
        path: '',
        component:AboutComponent
    }
];
export const aboutRouter= RouterModule.forChild(ABOUT_ROUTER);
