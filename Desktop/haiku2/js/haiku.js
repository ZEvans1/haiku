export class Haiku {
  constructor (line1, line2, line3) {
  this.line1 = line1;
  this.line2 = line2;
  this.line3 = line3;
  }

  collectWords() {
    let line1Words = this.line1.split(" ");
    let line2Words = this.line2.split(" ");
    let line3Words = this.line3.split(" ");
    let allWords = [];
    allWords.push(line1Words);
    allWords.push(line2Words);
    allWords.push(line3Words);
    // return line1Words;
    return allWords;
    //look through line
    //split "words" by spaces
    //send "words" to string array
  }

  countSyllables() {
    debugger;
    for (let i=0; i < this.collectWords().length; i++) {
      for (let j=0; j < this.collectWords()[i].length; j++) {
        var wordsSplit = this.collectWords()[i][j].split("");
        console.log(wordsSplit);
      }
    }
  }

  // export class HaikuArray {
  //   constructor (line1Words, line2Words, line2Words) {
  //   this.line1 = line1;
  //   this.line2 = line2;
  //   this.line3 = line3;
  //   }


};
