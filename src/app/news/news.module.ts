import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NewsDetailComponent} from "./news-detail/news-detail.component";
import {NewsListComponent} from "./news-list.component";
import {RouterModule, Routes} from "@angular/router";
export const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {path: 'list', component: NewsListComponent},
    {path: 'detail/:id', component: NewsDetailComponent},
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [NewsDetailComponent, NewsListComponent]
})
export class NewsModule {
}