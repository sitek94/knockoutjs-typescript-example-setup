import Person from '../../models/person';

class PersonReadOnly {
  person: Person;

  constructor(params: any) {
    this.person = params.person;
  }
}

const template = /* html */ `
<div>  
  
  <h2 class="h4 mt-4 mb-3">PersonReadOnly Component</h2>  

  <table class="table">  
    <thead>  
    <tr>  
      <th scope="col">Item</th>  
      <th scope="col">Value</th>  
    </tr>  
    </thead>  
    <tbody>  
    <tr>  
      <th scope="row">First name</th>  
      <td data-bind="text: person.firstName"></td>  
    </tr>  
    <tr>  
      <th scope="row">Last name</th>  
      <td data-bind="text: person.lastName"></td>  
    </tr>  
    <tr>  
      <th scope="row">Full name</th>  
      <td data-bind="text: person.fullName"></td>  
    </tr>  
    <tr>  
      <th scope="row">Favourite films</th>  
      <td data-bind="films: person.favouriteFilms"></td>  
    </tr>  
    </tbody>  
  </table>  

  </div>
  `;

// The default export returns the component details object to register with KO
export default { viewModel: PersonReadOnly, template };
