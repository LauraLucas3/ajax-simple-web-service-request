var xhr = new XMLHttpRequest;
var HTMLQuote = document.getElementById("quote");
var imgrep = document.getElementById("imgrep");
var author = document.getElementById("author");
var quotes = document.getElementById("totalQuotes");

xhr.open("GET", "https://thatsthespir.it/api", true)

xhr.onload = function () {
    if (this.status === 200) {
        var QuoteBody = JSON.parse(this.responseText);
        HTMLQuote.innerHTML = QuoteBody.quote;
        author.innerHTML = QuoteBody.author;
        quotes.innerHTML = QuoteBody.total_quotes + " quotes";
        var imgcont = document.createElement("img");
        imgcont.setAttribute("src", QuoteBody.photo);
        imgcont.setAttribute("id", "imgcont");
        imgcont.setAttribute("alt", "Author photo");
        imgrep.appendChild(imgcont);
    }
    else {
        console.log("Error");
    }
}

xhr.send();