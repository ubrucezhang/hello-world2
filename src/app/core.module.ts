import { NgModule } from '@angular/core';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeService } from './recipes/recipe.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './auth/auth-interceptor.service';


@NgModule({
    // Services don't need to export, service are auto injected in root-level
    providers: [
        ShoppingListService,
        RecipeService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptorService,
          multi: true
        },
      ],
      
})

export class CoreModule {

}