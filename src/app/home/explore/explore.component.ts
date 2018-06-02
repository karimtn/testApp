import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  categories: any;
  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.apiService.getCategories().subscribe((content)=> {
      this.categories = content.data;
  });
  }


}
