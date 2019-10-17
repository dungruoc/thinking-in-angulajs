angular.module("ModulesApp", ["my-hello", "ngTagsInput"])
.controller('tagsDemoCtrl', TagsDemoController);

function TagsDemoController() {
  this.tags = [
    { text: 'Tag1' },
    { text: 'Tag2' },
    { text: 'Tag3' }
  ];
}
