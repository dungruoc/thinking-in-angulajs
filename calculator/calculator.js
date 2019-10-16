angular.module("CalculatorApp", [])
.controller("calculator", Calculator);

function Calculator() {
  this.operand1 = null;
  this.operand2 = null;

  this.operator = null;

  this.result = null;

  this.add = function() {
    this.operator = '+';
    this.result = this.operand1 + this.operand2;
  }

  this.sub = function() {
    this.operator = '-';
    this.result = this.operand1 - this.operand2;
  }

  this.mul = function() {
    this.operator = '*';
    this.result = this.operand1 * this.operand2;
  }

  this.div = function() {
    this.operator = '/';
    this.result = this.operand1 / this.operand2;
  }

}
