import * as ko from 'knockout';
import { Observable, ObservableArray, PureComputed } from 'knockout';

class Person {
  firstName: Observable<string>;
  lastName: Observable<string>;
  favoriteFilms: ObservableArray<string>;

  fullName: PureComputed<string> = ko.pureComputed(
    () => this.firstName() + ' ' + this.lastName()
  );

  constructor(firstName: string, lastName: string, favoriteFilms: string[]) {
    this.firstName = ko.observable(firstName);
    this.lastName = ko.observable(lastName);
    this.favoriteFilms = ko.observableArray(favoriteFilms);
  }
}

export default Person;
