import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('computed');
  this.route('route-name');
  this.route('foo',{path : 'non-foo'},function(){
    this.route('new',{path : '/new/:id'});
  });
  this.route('bar',{path : 'non-bar'},function(){
    this.route('old',{path : '/old/:id'});
  });
  this.route('page-not-found',{path:'/*wildcard'});
});

export default Router;
