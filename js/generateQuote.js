function generateQuote() {
    const quotes = [
        {
            quote: "Ideas are cheap. Ideas are easy. Ideas are common. Everybody has ideas. Ideas are highly, highly overvalued. Execution is all that matters.",
            author: "Casey Neistat."
        },
        {
            quote: "The last thing you want to do is finish playing or doing anything and wish you would have worked harder.",
            author: "Derek Jeter."
        },
        {
            quote: "I love it when people doubt me. It makes me work harder to prove them wrong.",
            author: "Derek Jeter."
        },
        {
            quote: "You're not lost, you're just early in the process.",
            author: "Gary Vee."
        },
        {
            quote: "Don't lose your happiness on the pursuit for more.",
            author: "Mike Stud."
        }
    ];

    let currentQuote = Math.floor(Math.random()*quotes.length);
    // console.log(currentQuote);

    document.getElementById('quotation').innerHTML = "&quot;" + quotes[currentQuote].quote + "&quot;";
    document.getElementById('author').innerHTML = "-" + quotes[currentQuote].author;

}
window.onload = function() {
    generateQuote();
    document.getElementById('generate').addEventListener('click', generateQuote);
    // generateQuote();
}
