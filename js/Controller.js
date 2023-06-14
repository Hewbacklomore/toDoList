'use strict';

const Controller = {

    form: null,
    mainCointainer: null,

    myListener() {
        console.log(this.form);
        this.form.addEventListener('submit', this.mainForm.bind(this))
    },

    mainForm(e) {
        console.log('hello');
        e.preventDefault();
        e.stopPropagation();

        const data = {};

        const allMyItems = this.form.querySelectorAll('input', 'textarea', 'select');
        allMyItems.forEach(({name, value}) => {
            data[name] = value
        });
        console.log(data);
        Model.postData(data);
    },

    init(formClass, blockClass) {
         if(typeof formClass !== 'string') throw new Error('class of the form should be a string'); 
        const form = document.querySelector(formClass);
         if(!(form instanceof HTMLElement)) throw new Error('this element isnt an HTMLElement');
 
         if(typeof blockClass !== 'string') throw new Error('class of the block should be a string') 
        const blockContainer = document.querySelector(blockClass);
         if(!(blockContainer instanceof HTMLElement)) throw new Error('this element isnt an HTMLElement'); 

        this.form = form;
        this.mainCointainer = blockContainer;
    }
}