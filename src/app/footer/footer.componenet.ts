import { Component, OnInit } from "@angular/core";
import {AuthenticationService} from './service/Authentication.service';

@Component ({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit{
    constructor(){}
    ngOnInit() {
        
    }
}