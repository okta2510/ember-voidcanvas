import Ember from 'ember';

export default Ember.Route.extend({
  model() {
       return new Ember.RSVP.Promise(function(resolve,reject) {
         Ember.run.later(function() {
           resolve({});
           reject({});
         }, 3000);
       });
   }
});
