import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-zone-demo',
  templateUrl: './zone-demo.component.html',
  styleUrls: ['./zone-demo.component.css']
})
export class ZoneDemoComponent implements OnInit {

  count1 = 0;
  count2 = 0;

  constructor(private zone: NgZone) { }

  ngOnInit() {
  }

  normalChange() {
    let t = setInterval(() => {
      this.count1 += 1;
      if (this.count1 >= 10) {
        clearInterval(t);
      }
    }, 500)
  }

  zoneChange(){
    this.zone.runOutsideAngular(()=>{
      let t = setInterval(() => {
        this.count2 += 1;
        if (this.count2 >= 10) {
          this.zone.run(()=>{
            clearInterval(t);
          })
        }
      }, 500)
    })
  }

}
