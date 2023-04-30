import Axios from 'axios'

const STORAGE_KEY = 'package'
const BASE_URL = '//localhost:3030/api/'

export const packageService = {
    query,
    add,
    update,
    remove
}

async function query(filterBy) {
    try {
        const res = await Axios({
            url: `${BASE_URL}${STORAGE_KEY}?action=getPackages`,
            method: 'GET',
            data: null,
            params: null,
            // headers: {
            //     'Content-Type': 'text/plain'
            // },
        })
        return res.data
    } catch(err) {
        console.log('err:', err)
        console.dir('Had issues getting packages from DB')
    }
}
// add()
async function add() {
    try {
        const res = await Axios({
            url: `${BASE_URL}${STORAGE_KEY}?action=addPackage`,
            method: 'POST',
            data: 'data=hi',
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
