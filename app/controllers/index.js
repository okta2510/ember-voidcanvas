import Ember from 'ember';

export default Ember.Controller.extend({
	students : [{
	    name: "Sandip"
	}, {
	    name: "David"
	}],
	marks : {
		physics: 80,
    chemistry: 70,
    math: 90,
	},
	myVal: "Void Canvas",
    init(){
        setTimeout(()=>{
            this.set('myVal', "Paul Shan");
        },5000);
    },
		actions: {
        triggerMe(name){
            console.log(name+" is clicked");
        }
    }
});
