import Ember from 'ember';

let myModel = [
    {
        firstName: "Jack",
        lastName: "Bauer"
    },
    {
        firstName: "David",
        lastName: "Palmer"
    }
]

export default Ember.Route.extend({
  model(){
    return myModel;
  }
});
