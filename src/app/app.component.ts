import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private apiUrl = 'https://api.graph.cool/simple/v1/cjrp1f7s82wc70151srvjupf8';

  constructor(
    private http: HttpClient
  ) {
    this.allUsers();
  }

  allUsers(): void {

    const body = {
      query: `
        query {
          allUsers {
            id
            name
            email
          }
        }
      `
    };

    this.http.post(this.apiUrl, body)
      .subscribe(res => console.log('Query: ', res));

  }

}
