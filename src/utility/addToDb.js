import { toast } from "react-toastify";

const getStoreReadList = () => {
    //read list
    const storeListStr = localStorage.getItem('read-list')
    if (storeListStr) {
        const storedList = JSON.parse(storeListStr)
        return storedList;
    }
    else {
        return [];
    }
}

const addToStoreReadList = (id) => {
    const storedList = getStoreReadList();
    if (storedList.includes(id)) {
        //already exists. do not add it
        console.log(id, 'already exists in the read list');
    } else {
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr)

        //ideally trigger toast from the component
        toast('This book is added to your read list')
    }
}

export { addToStoreReadList, getStoreReadList }