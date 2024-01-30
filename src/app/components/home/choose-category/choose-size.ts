import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { UserType } from "src/utils/types";

@Component({
    selector: 'choose-size',
    templateUrl: './choose-size.html',
    styleUrls: ['./choose-size.css']
})

export class ChooseCategory implements OnInit {
    constructor(private http: HttpClient) { }

    users: any = [];

    ngOnInit() {
        this.getUsers()
    }

    async getUsers() {
        await this.http.get<UserType>('http://localhost:5062/users').subscribe((data) =>
            this.users = data
        )
    }
}