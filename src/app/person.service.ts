import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Person } from './entities';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  fetchAll() {
    return this.http.get<Person[]>(environment.serverUrl+'/api/person');
  }
  add(person:Person) {
    return this.http.post<Person>(environment.serverUrl+'/api/person', person);
  }
  delete(person:Person) {
    return this.http.delete<void>(environment.serverUrl+'/api/person/'+person._id);
  }



  
  // fetchOne(id:any) {
  //   return this.http.get<Person>(environment.serverUrl+'/api/person/'+id)
  //   ;

  // }

  // search(term:string) {
  //   return this.http.get<Person[]>(environment.serverUrl+'/api/person/search/'+term)
  // }



  // update(person:Person) {
  //   return this.http.patch<Person>('http://localhost:3000/api/person/'+ person._id, person);
  // }
}
