//importing component decorator from angular
import {Component} from 'angular2/core';
//./ means search from the CURRENT directory, not back one
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './author.component';


//calling the component which is an object 
@Component({
    //my-app becomes a my-app tag in the DOM
    selector: 'my-app',
    template: `<h1>Hello Angular</h1>
               <courses></courses>
               <authors></authors>`,
    //adding a directive to extend DOM functionality
    directives: [CoursesComponent, AuthorsComponent]
})
//AppComponant is root of our app
export class AppComponent { }