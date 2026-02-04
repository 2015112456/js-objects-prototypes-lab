console.log("Part 4: Exercise 9");
const library = {
    name: 'City Library',
    books: [],
    addBook(title, author, isbn) {
        const book = {
            bookTitle: title,
            bookAuthor: author,
            bookISBN: isbn
        };
        this.books.push(book);
    },
    findBookByTitle(title) {
        const foundBook = this.books.filter(filterBook => filterBook.bookTitle === title);
        if (foundBook.length > 0) {
            return foundBook;
        }
        return null;
    },
    listAllBooks() {
        console.log('Listing all books: ')
        this.books.forEach(book => {
            console.log(book.bookTitle);
        });
    }
};

const universityLibrary = Object.create(library);
universityLibrary.courses = [];
universityLibrary.addCourseBook = function(courseName, title, author, isbn) {
    this.courses.push(courseName);
    this.addBook(title, author, isbn);
};

universityLibrary.addBook('GUI Programming Book', 'Joe Somebody', 4354454010);
universityLibrary.addCourseBook('Systems Programming', 'Systems Programming Book', 'Jeff Jefferson', 7050046725);
universityLibrary.addCourseBook('Object Oriented Programming', 'Object Oriented Book', 'Roger Zheng', 9520011732);
console.log(universityLibrary.findBookByTitle('GUI Programming Book'));
console.log(universityLibrary.findBookByTitle('Systems Programming Book'));
console.log(universityLibrary.findBookByTitle('Web Development Book'));
universityLibrary.listAllBooks();
