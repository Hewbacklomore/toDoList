'use strict';

const View = {
    setContainer: null,
    
         createElement({title, id, description}) {
            const newElem = document.createElement('div');
            newElem.classList.add('wishes__box');
            newElem.innerHTML = `<div class = "wishes__title">${title}<sup>${id}</sup></div>
                                <div class = "wishes__text">${description}</div>
                                <div class="wishes__btn"></div>`;
            newElem.setAttribute('data-todo-id', id);                                
            return newElem
        }, 
        render(item) {
            
            if(!item) throw new Error('there is no data');

            const elem = this.createElement(item);
            this.setContainer.prepend(elem)
        },
        controllData(domEl) {
            if(!(domEl instanceof HTMLElement)) throw new Error('there is no such HTMLElement')
            this.setContainer = domEl;
        },
        removedId (id){

            if(id === 'string') throw new Error('id has to be a number');

            const getData = Model.getData();
            const index = getData.findIndex((item) => item.id === id);

            const removedItem = getData.splice(index, 1);
            localStorage.setItem(Model.dataKey, JSON.stringify(getData));
            return removedItem[0]
        },
         deleteBtn() {
            const idAttribute = ['data-todo-id'];
            
            this.setContainer.addEventListener('click', (e)=> {
                e.stopPropagation();
                
                if(e.target.className === 'wishes__btn') {
                    const closestAtribute = e.target.closest(`[${idAttribute}]`); 
                    const todoId = Number(closestAtribute.getAttribute(idAttribute));
                    this.removedId(todoId);
                    document.querySelector('.wishes__btn').parentElement.remove();
                }
            })
          
         }
}