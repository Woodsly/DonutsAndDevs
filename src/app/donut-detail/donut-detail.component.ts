import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GCDonut, IndividualDonut, Result } from '../gcdonut';
import { GCDonutService } from '../gcdonut.service';

@Component({
  selector: 'app-donut-detail',
  templateUrl: './donut-detail.component.html',
  styleUrls: ['./donut-detail.component.css']
})
export class DonutDetailComponent implements OnInit {

  displayDonut:IndividualDonut = {} as IndividualDonut;
  constructor(private route:ActivatedRoute, private donutService:GCDonutService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    let id:number = Number(routeParams.get("id"));
    //console.log(id);
    this.donutService.getDonutDetail(id).subscribe((response:IndividualDonut) => {
      this.displayDonut = response;
    })
  };

}
