import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video';
import {PlaylistComponent} from './playlist.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [PlaylistComponent]
   /*  template: '<h1>{{mainHeading}}</h1>' */
    /* template: '<h1>Angular 2 Template</h1>' */
})

export class AppComponent {
    mainHeading = Config.MAIN_HEADING;//"My Videos";
    videos: Array<Video>;
    constructor(){
        this.videos = [
            new Video(1, 'VIDEO # 1', 'FIRST VIDEO', 'THIS IS FIRST VIDEO'),
            new Video(2, 'VIDEO # 2', 'SECOND VIDEO', 'THIS IS SECOND VIDEO')
        ]
    }
}
