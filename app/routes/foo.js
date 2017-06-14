import Ember from 'ember';

let fooModel = {
  name: "John Doe",
  plays: "Video Game"
}

export default Ember.Route.extend({

  model(){
        return fooModel;
    }
});
