let FormService = function($http, PARSE) {


let url = PARSE.URL + 'classes/form';

this.getAllContacts = getAllContacts;
this.addContact = addContact;


  function Form (formObj) {
    this.name = formObj.name;
    this.email = formObj.email;
    this.website = link(formObj.website);
    this.message = formObj.message;
  };

  function getAllContacts () {
    return $http.get(url, PARSE.CONFIG);
  };

  function addContact (formObj) {
    let c = new Car(carObj);
    return $http.post(url, c, PARSE.CONFIG);

  };


};

FormService.$inject = ['$http', 'PARSE'];

export default FormService;