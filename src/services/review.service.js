import Axios from 'axios'

const STORAGE_KEY = 'review'
const BASE_URL = '//localhost:3030/api/'

export const reviewService = {
    query,
    add,
    update,
    remove
}

async function query() {
    try {
        const res = await Axios({
            url: `${BASE_URL}${STORAGE_KEY}?action=query`,
            method: 'GET',
            data: null,
            params: null,
            headers: {
                'Content-Type': 'text/plain'
            },
        })
        return res.data
    } catch {
        console.dir('Had issues getting reviews from DB')
    }
}

async function add() {
    try {
        const res = await Axios({
            url: `${BASE_URL}${STORAGE_KEY}?action=getReview`,
            method: 'POST',
            data: null,
            params: null,
            headers: {
                'Content-Type': 'text/plain'
            },
        })
        return res.data
    } catch {
        console.dir('Had issues adding reviews from DB')
    }
}

async function update() {
    try {
        const res = await Axios({
            url: `${BASE_URL}${STORAGE_KEY}?action=updateReview`,
            method: 'PUT',
            data: null,
            params: null,
            headers: {
                'Content-Type': 'text/plain'
            },
        })
        return res.data
    } catch {
        console.dir('Had issues updating reviews from DB')
    }
}

async function remove() {
    try {
        const res = await Axios({
            url: `${BASE_URL}${STORAGE_KEY}?action=removeReview`,
            method: 'DELETE',
            data: null,
            params: null,
            headers: {
                'Content-Type': 'text/plain'
            },
        })
        return res.data
    } catch {
        console.dir('Had issues removing reviews from DB')
    }
}
