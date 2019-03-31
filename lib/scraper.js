import axios from "axios";

async function getHTML(url) {
    
    const {data} = await axios.get("https://twitter.com/dracivik");

    console.log(data);


}

export { getHTML };