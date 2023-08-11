import { be_Url } from "./url"


export const bookMarksLoader = async () => {
    const response = await fetch(`${be_Url}/book`)
    const bookMarks = await response.json()
    /// Testing 
    console.log(bookMarks)
    console.log("hereeee")
    /////
    return bookMarks
}


export const bookMarkLoader = async ({params}) => {
    const response = await fetch(`${be_Url}/book/${params.id}`)
    const bookMark = await response.json()
    /// Testing 
    console.log(bookMark)
    console.log("hereeee")
    /////
    return bookMark
}
