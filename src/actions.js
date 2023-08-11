import { be_Url } from "./url";
import { redirect } from 'react-router-dom'

export const createAction = async ({request}) => {
    const formData = await request.formData()
    const newBook = {
        name: formData.get('name'),
        url: formData.get('url')
    }
    await fetch(`${be_Url}/book`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBook)
    })
    return redirect ('/')
}

export const updateAction = async ({request, params}) => {
    const id = params.id
    const formData = await request.formData()
    const updateBook = {
        name: formData.get('name'),
        url: formData.get('url')
    }
    await fetch(`${be_Url}/book/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateBook)
    })
    return redirect('/')
}

export const deleteAction = async ({params}) => {
    const id = params.id
    await fetch(`${be_Url}/book/${id}`, {
        method: 'DELETE'
    })
    return redirect ('/')
}