//BUDGET CONTROLLER
var budgetController = (function() {

        //some code

})();


//UI CONTROLLER
var UIController = (function(){

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    return {
        getinput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, //will be inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            }; 
        },

        getDOMstrings: function() {
            return DOMstrings;
        }
    };
})();


//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){

    var setupEventListeners = function () {

        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event){
          if (event.keyCode === 13 || event.which === 13){
              ctrlAddItem();
          } 
    
        });
    };

    

    var ctrlAddItem = function(){
        //get the field input data
        var input = UICtrl.getinput();
        console.log(input);
        //add the item to the budget controller

        // add the item to the ui

        // calculate the budget

        //display the budget on the ui
    };
    
    return {
        init: function(){
            console.log('application started!');
            setupEventListeners();
        }
    };

})(budgetController, UIController);

controller.init();