'use strict';

const Model = {
   storage: null,
   dataKey: 'data_key',
   currentId: 1,
   selector: document.querySelector('#descr'),


   getData() {
        return JSON.parse(localStorage.getItem(this.dataKey)) || [];
   },
   addCurrentId(id) {
        return this.getData().find(item => {
            return item.id === id
        })
   },
   postData(data) {
        const getData = this.getData();
        const newData = {...data, id: this.currentId, description: this.selector.value};
        getData.push(newData);
        this.storage.setItem(this.dataKey, JSON.stringify(getData));
        const savedCurruentId = this.addCurrentId(this.currentId);
        this.currentId += 1;
        return savedCurruentId;
   },
   
   
   init(storage, dataKey) {
    this.storage = storage;

     if(typeof dataKey === 'stirng'){
        this.dataKey = dataKey
     }


    const getSavedData = this.getData();
    if(!getSavedData.length) return 
    this.currentId = getSavedData.at(-1).id + 1;
   }
}