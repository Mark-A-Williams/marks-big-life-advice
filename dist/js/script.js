window.onload = function () {
    const quotes = [
        {audio: '', quote: '"If you don\'t say it with confidence, you\'ve already failed."'},
        {audio: '', quote: '"Things are never as big a deal as you expect them to be."'},
        {audio: '', quote: '"It will come when it comes."'},
        {audio: '', quote: '"I don\'t care where it came from, I care where it\'s going."'},
        {audio: '', quote: '"Never attribute to malice that which can be attributed to stupidity."'},
        {audio: 'whisky.mp3', quote: '"A lunch time whisky is very risky."'},
    ];

    function getNewQuote() {
        const el = document.getElementById('quote');
        const image = document.getElementById('image');

        image.classList.add('no-transition');
        image.classList.remove('spin');

        setTimeout(() => {
            image.classList.remove('no-transition');
            image.classList.add('spin');
        }, 5);


        const filteredQuotes = quotes.filter(quote => quote.quote !== el.innerText)

        const quoteToShow = filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)];

        const quoteEl = document.getElementById('quote');
        const audioEl = document.getElementById('quote-audio');
        const audioContainerEl = document.getElementById('audio-container');

        quoteEl.innerText = quoteToShow.quote;
        audioEl.src = "audio/" + quoteToShow.audio;
        audioContainerEl.load();
    }

    getNewQuote();
    loadThemeListener();

    document.getElementById('image').addEventListener('click', getNewQuote);
};
