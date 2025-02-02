import Person from '../model';

class PersonEditable {
  person: Person;

  constructor(params: any) {
    this.person = params.person;
  }
}

const template = /* html */ `
<div>  
  
  <h2 class="h4 mt-4 mb-3">PersonEditable Component</h2>  
  
  <form>  
    <div class="form-group">  
      <label for="firstName">First name</label>  
      <input data-bind="textInput: person.firstName"
        type="text" id="firstName" class="form-control">  
    </div>  
  
    <div class="form-group">  
      <label for="lastName">Last name</label>  
      <input data-bind="textInput: person.lastName"
        type="text" id="lastName" class="form-control">  
    </div>  
  
  </form>  
  
</div>
`;

export default { viewModel: PersonEditable, template };
