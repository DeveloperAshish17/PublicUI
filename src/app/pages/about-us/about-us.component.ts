import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  dellStock() {
    return setTimeout(() => {
      return false;
    });
  }

  hpStock() {
    return setTimeout(() => {
      return true
    });
  }

  ngOnInit(): void {

    let buyLaptop = new Promise((resolve, reject) => {
      if (this.dellStock()) {
        return setTimeout(() => {
          resolve('dell is buy')
        }, 3000);
      } else if (this.hpStock()) {
        return setTimeout(() => {
          resolve('hp buy')
        }, 3000)
      } else {
        return setTimeout(() => {
          reject('please come home')
        }, 3000);

      }
      // resolve('Promise  is resolved')
      // reject('Promise is reject')
    });

    buyLaptop.then(res => {
      alert(res);
    }).catch(res => {
      alert(res);
      console.log('res');

    })
  }


}
