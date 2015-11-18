import angular from 'angular';
import 'angular-ui-router';

import config from './config';
import HomeController from './controllers/home.controller';

import PARSE from './constants/parse.constant';
import FormService from './services/form.service';

angular
  
  .module('app', ['ui-router'])
  .config(config)
  .constant('PARSE', PARSE)
  .controller('HomeController', function ($scope)
  .service('FormService', FormService)


let vm = this;

vm.addContact = addContact;

function addContact (contactObj) {

  $scope

  if (!validateEmail)(newVal)) {
    return console.log('email needs an @ symbol');

  if (!validateEmpty(contactObj.name)) {
    console.log('name is empty');

  }

   if (!validateEmpty(contactObj.email)) {
    console.log('email is empty');

  }

   if (!validateEmpty(contactObj.website)) {
    console.log('website is empty');

  }

   if (!validateEmpty(contactObj.message)) {
    console.log('message is empty');

  }

  console.log('Added to Server');


}

function validateEmpty (field) {
  return field ? true : false;

}

function validateEmail (field) {
  return (field.indexOf('@') >= 0) ? true : false;

}

function validateWebsite (field) {
  var pattern = /^https?:\/\//i;
  return pattern.test(field);

}

})

;



