import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { LogItemsComponent } from './log-items/log-items.component';
import { ProjectComponent } from './project/project.component';
import { HeaderComponent } from './comp/header/header.component';
import { RecipesComponent } from './comp/recipes/recipes.component';
import { RecipeListComponent } from './comp/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './comp/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './comp/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './comp/shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './comp/shopping-list/shopping-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    LogItemsComponent,
    ProjectComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingEditComponent,
    ShoppingListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
