import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path:"login",
        loadComponent:() =>import("./pages/tsPages/login")
    },
    {
        path:"",
        loadComponent:() =>import("./pages/tsPages/layout"),
        children:[
            {
                path:"",
                loadComponent:()=>import("./pages/tsPages/home")
            },
            {
                path:"products",
                loadComponent:()=>import("./pages/products/products")
            },
            {
                path:"products/create",
                loadComponent:()=>import("./pages/products/create/create")
            }
        ]
    }
];
