import Axios from 'axios'

const STORAGE_KEY = 'package'
const BASE_URL = '//localhost:3030/api'
var FormData = require('form-data');

export const packageService = {
    query,
    add,
    update,
    remove
}
// query()
async function query(filterBy=null) {
    const filter = JSON.stringify(filterBy)
    // let filter = new FormData(filterBy);
    // filter.append('action', 'getPackages');
    try {
        const res = await Axios({
            url: `${BASE_URL}${STORAGE_KEY}?action=getPackages&filterBy=${filter}`,
            method: 'GET',
            // data: form,
            params: null,
            // headers: {
            //     'Content-Type': 'text/plain'
            // },
        })
        console.log('res.data:', res.data)
        return res.data
    } catch(err) {
        console.log('err:', err)
        console.dir('Had issues getting packages from DB')
    }
}
// add()
async function add() {

    let form = new FormData();
    form.append('my_field', 'my value');
    try {
        const res = await Axios({
            url: `${BASE_URL}${STORAGE_KEY}?action=addPackage`,
            method: 'POST',
            data: form,
            params: null,
            // headers: {
            //     'Content-Type': 'text/plain'
            // },
        })
        console.log('res:', res)
        return res.data
    } catch {
        console.dir('Had issues adding packages from DB')
    }
}

async function update() {
    try {
        const res = await Axios({
            url: `${BASE_URL}${STORAGE_KEY}?action=updatePackage`,
            method: 'PUT',
            data: null,
            params: null,
            headers: {
                'Content-Type': 'text/plain'
            },
        })
        return res.data
    } catch {
        console.dir('Had issues updating packages from DB')
    }
}

async function remove() {
    try {
        const res = await Axios({
            url: `${BASE_URL}${STORAGE_KEY}?action=removePackage`,
            method: 'DELETE',
            data: null,
            params: null,
            headers: {
                'Content-Type': 'text/plain'
            },
        })
        return res.data
    } catch {
        console.dir('Had issues removing packages from DB')
    }
}
