import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
var cc = 0;
function JSClock() {
  var time = new Date();
  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();
  var temp = '' + ((hour > 12) ? hour - 12 : hour);
  if (hour == 0)
    temp = '12';
  temp += ((minute < 10) ? ':0' : ':') + minute;
  temp += ((second < 10) ? ':0' : ':') + second;
  temp += (hour >= 12) ? ' P.M.' : ' A.M.';
  return temp;
}
Template.theClicker.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar('00:00:00');
});

Template.theClicker2.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar('00:00:00');
});

//--------------------------------------------------------------------

Template.theClicker.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.theClicker2.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

//---------------------------------------------------------------------

Template.theClicker.events({
  'click button'(event, instance) {
    cc=1;
  instance.counter.set(JSClock());
  }
});

Template.theClicker2.events({
  'click button'(event, instance) {
    if(cc==1){
    instance.counter.set(JSClock());
    }
  }
});
