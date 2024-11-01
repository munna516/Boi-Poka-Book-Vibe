import { json } from "react-router-dom"

const getStoreReadList = () => {
    const storedListStr = localStorage.getItem('read-list')
    if (storedListStr) {
        const storeListObj = JSON.parse(storedListStr)
        return storeListObj
    }
    else {
        return []
    }
}
const getStoreWishList = () => {
    const storedListStr = localStorage.getItem('wish-list')
    if (storedListStr) {
        const storeListObj = JSON.parse(storedListStr)
        return storeListObj
    }
    else {
        return []
    }
}

const addToStoreReadList = (id) => {
    const storedList = getStoreReadList()
    if (storedList.includes(id)) {
        console.log(id)
    }
    else{
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('read-list',storedListStr)
    }
}
const addToStoreWishList = (id) => {
    const storedList = getStoreWishList()
    if (storedList.includes(id)) {
        console.log(id)
    }
    else{
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('wish-list',storedListStr)
    }
}

export {addToStoreReadList,addToStoreWishList,getStoreReadList,getStoreWishList}