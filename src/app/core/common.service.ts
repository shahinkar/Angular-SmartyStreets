import { Injectable } from '@angular/core';
import * as _ from '../../assets/smartystreets-sdk-1.1.3.min.js';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  AutocompleteAddress(term: string): any {
    const SmartyStreetsCore = _.core;
    const websiteKey = '1111111111111111'; // Website Key
    const Lookup = _.usAutocomplete.Lookup;
    const credentials = new SmartyStreetsCore.SharedCredentials(websiteKey);
    const clientBuilder = new SmartyStreetsCore.ClientBuilder(credentials);
    const client = clientBuilder.buildUsAutocompleteClient();
    const lookup = new Lookup(term);
    return client.send(lookup);
  }

}
