import Ember from 'ember';

let students = [{
    name: "Jack Bauer",
    enrollNo: "1"
},{
    name: "David Palmer",
    enrollNo: "2"
}];
export default Ember.Route.extend({
  model(params){
    return students.findBy('enrollNo', params.id);
  }
});
