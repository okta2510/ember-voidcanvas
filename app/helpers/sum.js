import Ember from 'ember';

export function sum(numbers/*, hash*/) {
	let sum = 0;
    numbers.forEach(param=>{
        sum+=param;
    });
  return sum;
}

export default Ember.Helper.helper(sum);
