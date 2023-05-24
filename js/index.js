'use strict';

(function(){

const myForm = document.querySelector('#form');
const inputs = document.querySelectorAll('input, textarea');
const toDoContainer = document.querySelector('.wishes');
const toDoData = 'toDoList';
const data = {};




    const createContentForData = ({title, description}) => {
     
       
        const everyBox = document.createElement('div');
        everyBox.classList.add('wishes__box');
        everyBox.innerHTML = `
                                <div class = "wishes__title">${title}</div>
                                <div class = "wishes__text">${description}</div>`;
         
        return everyBox;
    };

    const renderItem = (domItem)=> {
        toDoContainer.append(domItem);
    };

    const getItems = ()=> {
        const myData = JSON.parse(localStorage.getItem(toDoData));
        if(!myData) return [];
        return myData
   }
    const saveData = (saveData)=> {
        const myData = getItems();
        myData.push(saveData);
        localStorage.setItem(toDoData, JSON.stringify(myData))
        return getItems().at(-1);
    }
   



    myForm.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopPropagation();

       
        

        inputs.forEach(({name, value}) => {
            data[name] = value;
            
        });

       const newData =  saveData(data);
       
        renderItem(createContentForData(newData))
       


        e.target.reset();
        
    })

    const loadHandler = () => {
        const data = getItems();
        if(!data.length) return;

        data.forEach(item => {
            const temple = createContentForData(item);
            renderItem(temple);
        })
        document.removeEventListener('DOMContentLoaded', loadHandler);
    }

    document.addEventListener('DOMContentLoaded', loadHandler);
   
}())