
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { ExploreComponent } from './explore/explore.component';
import { ErrComponent } from './err/err.component';
import { LoginComponent } from './login/login.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

export const appRoutes: Routes = [
    {path:'contact',component:ContactComponent},
    {path:'explore',component:ExploreComponent},
    {path:'index',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'product',component:ProductComponent},
    {path:'SingleProduct',component:SingleProductComponent},
    {path:'',redirectTo:'/index',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'subscribe',component:SubscribeComponent},
    { path: '**', component: ErrComponent},

   // {path:'',component:ErrComponent},//any wrong path will be redirected to the Error404 page 
];
