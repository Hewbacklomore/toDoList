'use strict';

const Controller = {

    form: null,
    mainCointainer: null,

    myListener() {

        this.form.addEventListener('submit', this.mainForm.bind(this));
        window.addEventListener('DOMContentLoaded', this.saveItems.bind(this));  
        View.deleteBtn();
    },

    

    mainForm(e) {
        e.preventDefault();
        e.stopPropagation();

        const data = {};

        const allMyItems = this.form.querySelectorAll('input', 'select');
        allMyItems.forEach(({name, value}) => {
            data[name] = value
        });
        
        const savedData = Model.postData(data);
        View.render(savedData) 
    },
    saveItems() {
        const data = Model.getData();
        data.forEach(elem => {
            View.render(elem)
        })
    },
    
    init(formClass, blockClass, resetInput) {
         if(typeof formClass !== 'string') throw new Error('class of the form should be a string'); 
        const form = document.querySelector(formClass);
         if(!(form instanceof HTMLElement)) throw new Error('this element isnt an HTMLElement');
 
         if(typeof blockClass !== 'string') throw new Error('class of the block should be a string') 
        const blockContainer = document.querySelector(blockClass);
         if(!(blockContainer instanceof HTMLElement)) throw new Error('this element isnt an HTMLElement'); 


        this.form = form;
        this.mainCointainer = blockContainer;
        View.controllData(blockContainer);

        this.myListener();
    }
}