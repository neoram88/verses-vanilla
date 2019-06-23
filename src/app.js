// alert("Hello Venkat");
const API_ENDPOINT="assets/";
import Authors from '../assets/authors.json'

export default function showAuthors(){
    
    const VIEW_REF=document.getElementById('maincontent');
    var listOfAuthors = '<ul style="list-style-type:none;">';
    let i=0;
    Authors.authors.map(author =>

        listOfAuthors += '<li class="authorItem" id="' + i  + '">' + author + '</li>'
    )
    listOfAuthors += '</ul>';
    VIEW_REF.innerHTML = listOfAuthors;
    
    // let endpoint=API_ENDPOINT+"authors.json"
    // fetch(endpoint,{
    //     method: 'GET', // *GET, POST, PUT, DELETE, etc.
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // }).then((response)=>{
    //     var listOfAuthors = '<ul>';
    //     response.authors.map(author => 
    //         listOfAuthors += '<li class="authorItem" id="' + i  + '">' + author + '</li>'
    //     )
    //     listOfAuthors += '</ul>';
    //     VIEW_REF.innerHTML = listOfAuthors;
    // },(error)=>{

    // }).catch((error)=>{

    // })
}