class Media {
    constructor(title){
        this._title = title;
        this._isCheckedOut = false;
        this._rating = [];
    }

    get title () {
        return this._title;
    }

    get isCheckedOut () {
        return this._isCheckedOut;
    }

    get rating () {
        return this._rating;
    }

    set isCheckedOut(value) {
        this._isCheckedOut = value;
    }

    // negate boolean 
    toggleCheckOutStatus() {
        this.isCheckedOut = !this.isCheckedOut;
        }


    addRating(rate) {
        this.rating.push(rate);
    }

    // finds the average 
    getAverageRating() {
        let sumOfRating = (currentSum, rating) => currentSum + rating;
        
        return this.rating.reduce(sumOfRating) / this.rating.length;

    }

}
    
class Book extends Media {
    constructor(author, title, pages){
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author(){
        return this._author;
    }

    get pages() {
        return this._pages;
    }

    };

class Movie extends Media{
    constructor(director, title, runTime){
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime;
    }

};




const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544 );

historyOfEverything.toggleCheckOutStatus();

console.log(historyOfEverything.isCheckedOut); // prints true

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(historyOfEverything.getAverageRating()); // prints average rating

const speed = new Movie('Jan de Bont', 'Speed', 116);

speed.toggleCheckOutStatus();

console.log(speed.isCheckedOut); // prints true 

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed.getAverageRating()); // prints average rating

