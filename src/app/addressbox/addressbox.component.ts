import { Component, OnInit } from '@angular/core';
import { CommonService } from '../core/common.service';

@Component({
  selector: 'app-addressbox',
  templateUrl: './addressbox.component.html'
})
export class AddressboxComponent implements OnInit {

  addressOptions = <any>[]; // dsdd
  address: string;

  constructor(private _commonService: CommonService) { }

  ngOnInit() {}

  onChange(term: any) {
      this._commonService.AutocompleteAddress(term).then(data => {
        this.addressOptions = data.result as any[];
      }).catch();
  }

}
