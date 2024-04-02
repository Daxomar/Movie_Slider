function Book(title,author,pages,read){
    this.title = title;
    this.author=author;
    this.pages= pages;
    this.read = read; 

    this.report = () => {
        console.log(this.title + " by " + this.author +"," + this.pages + ", " + this.read)
    }

}

const Book1 = new Book("The fisherman", "David Chukwurah" , 222, "Not read");

Book1.report();

var bam;
