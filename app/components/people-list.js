import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class PeopleListComponent extends Component {
  @action
  showPerson(person) {
    console.log(`The person's name is ${person}!`);
  }
}
