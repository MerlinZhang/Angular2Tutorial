import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video';
import {PlaylistComponent} from './playlist.component'

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/playlist.component.html',
    directives: [PlaylistComponent]
})

export class AppComponent {
    mainHeading = Config.MAIN_HEADING;
    videos:Array<Video>;

    constructor(){
        this.videos = [
            new Video(1, "Installing Django", "f8qBeaGe2S4", "How to install Django")
        ]
    }
}
