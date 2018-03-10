import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';

import { SigninSignupPage } from '../pages/signin-signup/signin-signup';
import { ComponentsRceipeBook } from './app.component';
import { RecipesTabsSubrootPage } from '../pages/recipes-tabs-subroot/recipes-tabs-subroot';
import { NativePlugsPage } from '../pages/native-plugs/native-plugs';
import { ComponentsFeaturePage } from '../pages/components-feature/components-feature';

import { CompoNativeTabsPage } from '../pages/compo-native-tabs/compo-native-tabs';
import { CnpTabsPage } from '../pages/cnp-tabs/cnp-tabs';
import { RecipeTabsPage } from '../pages/recipe-tabs/recipe-tabs';
import { ShoppingListPage } from '../pages/shopping-list/shopping-list';
import { RecipesPage } from '../pages/recipes/recipes';
import { RecipeDetailsPage } from '../pages/recipe-details/recipe-details';
import { EditRecipePage } from '../pages/edit-recipe/edit-recipe';
import { ConfirmRemoveModal } from '../shared/modals/remove-modal/confirm-remove-modal';

import { RightmenuButtonDirective } from '../shared/directives/rightmenu-button/rightmenu-button';
import { GridComps } from '../shared/directives/grid-comps/grid-comps';
import { FormProvider } from '../shared/providers/form-provider';
import { ShoppinglistProvider } from '../shared/providers/shoppinglist-provider';
import { RecipesProvider } from '../shared/providers/recipes-provider';
import { ToastProvider } from '../shared/providers/toast-provider';
import { IngredientProvider } from '../shared/providers/ingredient-provider';
import { ErrorhandlerProvider } from '../shared/providers/errorhandler';
import { AuthUserService } from '../services/auth-user';

@NgModule({
	declarations: [
		SigninSignupPage,
		ComponentsRceipeBook,
		RecipesTabsSubrootPage,
		NativePlugsPage,
		ComponentsFeaturePage,
		CompoNativeTabsPage,
		CnpTabsPage,
		RecipeTabsPage,
		ShoppingListPage,
		RecipesPage,
		RecipeDetailsPage,
		EditRecipePage,
		ConfirmRemoveModal,
		RightmenuButtonDirective,
		GridComps
	],
	imports: [
		BrowserModule,
		HttpModule,
		HttpClientModule,
		IonicModule.forRoot(ComponentsRceipeBook),
	],
	bootstrap: [IonicApp],
	entryComponents: [
		SigninSignupPage,
		ComponentsRceipeBook,
		RecipesTabsSubrootPage,
		NativePlugsPage,
		ComponentsFeaturePage,
		CompoNativeTabsPage,
		CnpTabsPage,
		RecipeTabsPage,
		ShoppingListPage,
		RecipesPage,
		RecipeDetailsPage,
		EditRecipePage,
		ConfirmRemoveModal
	],
	providers: [
		StatusBar,
		SplashScreen,
		Geolocation,
		Camera,
		File,
		{ provide: APP_BASE_HREF, useValue: '/' },
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		FormProvider,
		ShoppinglistProvider,
		RecipesProvider,
		ToastProvider,
		IngredientProvider,
		AuthUserService,
		ErrorhandlerProvider
	]
})
export class AppModule { }
