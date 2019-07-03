import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  // please load only the part when visiting this route
  // { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' }
  // Angular 8+ version
  { path: 'recipes', 
    loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule)},
  { path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'shopping-list',
    loadChildren: () => import('./shopping-list/shopping-list.module').then(m => m.ShoppListModule) }
];

@NgModule({
  // preload all modules, small at first(like lazy loading), then load other modules as soon as possible
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
