import Ember from 'ember';

export default Ember.Route.extend({

});

const Student = Ember.Object.extend({
    firstName: null,
    lastName: null,
    fullName: Ember.computed('firstName', 'lastName', function(){
        return `${this.firstName} ${this.lastName}`;
    }),
    init(){
        this._super();
        setTimeout(()=>{
            this.set('firstName', 'David');
        }, 5000);
    }
});

let stu = Student.create({
    firstName: "Paul",
    lastName: "Shan"
});
stu.get('fullName');//Paul Shan
//after 5000 milliseconds
stu.get('fullName');//David Shan
