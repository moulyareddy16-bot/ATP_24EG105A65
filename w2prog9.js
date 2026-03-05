/* Problem Statement: Library Book Management System
-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of books in a library. */


class Book{
    //properties
    title;
    author;
    pages;
    isAvailable;

    //constructor
    constructor(title,author,pages,isAvailable){
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.isAvailable=isAvailable;
    }

    //methods
    borrow(){
       console.log(`${this.title} borrowed`);
       this.isAvailable=false;
    }

    returnBook(){
        console.log(`${this.title} returned`);
        this.isAvailable=true;
    }

    getInfo(){
        console.log(`${this.title} ${this.author} ${this.pages}`);
    }

    isLongBook(){
        if(this.pages>300) return true;
        return false;
    }
}

let b1=new Book('HarryPotter','moulya',990,true);
let b2=new Book('Ramayan','Valmiki',5000,true);
let b3=new Book('Bahubali','rajamouli',1500,true);
let b4=new Book('Life','siri',600,true);
let b5=new Book('Hello','Jhon',288,true);


//i. Display info of all books
const books = [b1,b2,b3,b4,b5];
for(const book of books){
    book.getInfo();
}


// ii. Borrow 2 books and show their availability status
b1.borrow();
console.log(`Is ${b1.title} available? ${b1.isAvailable}`);

b4.borrow();
console.log(`Is ${b4.title} available? ${b4.isAvailable}`);


//iii. Return 1 book and show updated status
b1.returnBook();
console.log(`updated status of ${b1.title} is: ${b1.isAvailable}`);


//iv. Count how many books are "long books" (more than 300 pages)
let count=0;
for(const book of books){
    if(book.isLongBook()) count++;
}
console.log(`Books having more than 300 pages are: ${count}`);


//v. List all available books
for(const book of books){
    if(book.isAvailable===true) 
        book.getInfo();
}
