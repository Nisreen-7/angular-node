import { Component } from '@angular/core';
import { Person } from '../entities';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent {
  constructor(private route: ActivatedRoute, private service: PersonService) { }
  person: Person = { name: '', age: 0, address: { number: '', street: '', city: '', country: '' } };

  onSubmit() {

    this.route.params.subscribe(params =>
      this.service.add(params['person._id'])
        .subscribe(
        (), {data => this.person = data
          this.location.go('/'));}
        });


  }


}
