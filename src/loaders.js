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