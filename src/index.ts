import * as ko from 'knockout';
import { Observable, ObservableArray, PureComputed } from 'knockout';
import './style.css';

import Person from './person/model';
import PersonReadOnly from './person/components/read-only';
import PersonEditable from './person/components/editable';
import filmsBinding from './person/films-binding';

ko.components.register('person-read-only', PersonReadOnly);
ko.components.register('person-editable', PersonEditable);

ko.bindingHandlers.films = filmsBinding;

class AppViewModel {
  person: Person;

  constructor() {
    this.person = new Person('Jon', 'Keeping', [
      'The Matrix',
      'The Shawshank Redemption',
      'Upgrade',
    ]);
  }
}

ko.applyBindings(new AppViewModel(), document.querySelector('#app'));
