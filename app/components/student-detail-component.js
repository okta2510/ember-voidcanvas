import Ember from 'ember';


let studentDetailsComponent = Ember.Component.extend({
    firstName: null,
    lastName: null,
    fullName: Ember.computed('firstName', 'lastName', function () {
        return `${this.firstName} ${this.lastName}`;
    }),
    doubleClick() {
        alert("Hey! How dare you click me?");
    }
});

studentDetailsComponent.reopenClass({
    positionalParams: ['firstName', 'lastName']
});

export default studentDetailsComponent;


// export default Ember.Component.extend({
//   firstName: null,
//    lastName: null,
//    fullName: Ember.computed('firstName', 'lastName', function () {
//        return `${this.firstName} ${this.lastName}`;
//    })
// });
