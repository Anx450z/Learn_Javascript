
//native object modification
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Returns true if the phrase is a palindrome, false otherwise
function Phrase(content){
  this.content = content;

  this.processor = function processor(){
    return string.toLowerCase(string);
  }

  this.processedContent = function processedContent(){
    return this.processor(this.content);
  }

  this.palindrome3 = function palindrome3() {
    return this.processedContent() === this.processedContent().reverse();
  }

  this.louder = function louder(){
    return this.content.toUpperCase();
  }
}

function TranslatePhrase(content, translation){
  this.content = content;
  this.translation = translation;

  // Return translation processed for palindrome testing.
  this.processedContent = function processedContent(){ // overriding
    return this.translation;
  }
}

TranslatePhrase.prototype = new Phrase(); // prototype inherits methods of Phrase2
