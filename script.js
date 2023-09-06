let myLibrary = [
    {
        title: 'a',
        author: 'author',
        pages: 23,
        publishdate: '23/02/1999',
        read: 'yes'
    }
];

let addbook = document.querySelector(".add-book");
let modal =document.querySelector(".modal");
let formcloseicon =  document.querySelector("#close-form");
let overlay = document.querySelector(".overlay");

addbook.addEventListener('click', () =>{
    modal.setAttribute('style','display:block');
    //overlay.setAttribute('style', 'display:block');
    overlay.classList.add('active')

} );

formcloseicon.addEventListener('click', ()=>{
    modal.setAttribute('style','display:none');
    overlay.classList.remove('active');
})

function Book(title, author, pages, publishdate, read){
    this.title =title;
    this.pages=pages;
    this.publishdate=publishdate;
    this.author=author;
    this.read= (read === true) ? 'yes' : 'no'; 
}

function addBookToLibrary(){
    modal.setAttribute('style','display:none');
    let title = document.querySelector("#book-title").value;
    let author = document.querySelector("#book-author").value;
    let pages = document.querySelector("#book-pages").value;
    let publishdate = document.querySelector("#book-date").value;
    let read = document.querySelector("#book-read").checked;
    let newBook = new Book(title,author,pages,publishdate,read);
    myLibrary.push(newBook);
    render();
}

function render(){
    let libraryElement = document.querySelector("#library");
    libraryElement.textContent = "";
    for(let i=0;i< myLibrary.length;i++){
        let book = myLibrary[i];
        
        let libraryitem = document.createElement("div");
        libraryitem.classList.add('library-item');

        let libraryitemHeading = document.createElement("h3");
        libraryitemHeading.textContent = "Book Details:";

        let libraryitemtitle = document.createElement("div");
        let libraryitemauthor = document.createElement("div");
        let libraryitempages = document.createElement("div");
        let libraryitemddate = document.createElement("div");
        let libraryitemread = document.createElement("div");

        libraryitemtitle.innerHTML = `Title : ${book.title}`;
        libraryitemauthor.innerHTML = `Author : ${book.author}`;
        libraryitempages.innerHTML = `Pages : ${book.pages}`;
        libraryitemddate.innerHTML = `Published Date: ${book.publishdate}`;
        libraryitemread.innerHTML = `Book Read : ${book.read}`;


        libraryitem.appendChild(libraryitemHeading);
        libraryitem.appendChild(libraryitemtitle);
        libraryitem.appendChild(libraryitemauthor);
        libraryitem.appendChild(libraryitempages);
        libraryitem.appendChild(libraryitemddate);
        libraryitem.appendChild(libraryitemread);

        libraryElement.appendChild(libraryitem);

        
    }
}


document.querySelector("#add-book-form").addEventListener('submit', (event) =>{
    event.preventDefault();
    addBookToLibrary();
    console.log(event.target.elements);

    //removing form input values after form submit
    let formValues =  event.target.elements;
    formValues[0].value = '';
    formValues[1].value = '';
    formValues[2].value = '';
    formValues[3].value = '';
    formValues[3].value = '';
    formValues[4].value = '';
    



    
})