export class HashStorage {

    constructor() {}

    addValue(key, value) {
        this[key] = value
    }

    getValue(key) {
        if(!this[key]) {
            return alert('Такого коктейля нет.')
        } else {
            return this[key]
        }
       
    }

    deleteValue(key) {
        if(this[key]){
            return delete this[key]
        } else {
            alert('Такого коктейля нет.')
            return false
        }
    }

    getKeys() {
        if(Object.keys(this).length == 0){
            alert('Еще не добавлено ни одного коктейля =(')
        }
        return Object.keys(this)
    }
}
