'use strict';

(function(){

    Controller.init('#form', '.wishes');
    Controller.myListener();
    Model.init(localStorage, 'data_key');
    Model.getData();
   
}())