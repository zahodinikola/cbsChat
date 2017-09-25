function chatCtrl() {
    var vm = this;
    vm.test = 'some text';
}


angular.module('cbsChat')
.controller('chatCtrl', [chatCtrl])