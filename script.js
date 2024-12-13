/ Matches Array with 6 matches

const matches = [

    {

        image: "https://via.placeholder.com/250x150",

        league: "IPL 2024",

        match: "Team A vs Team B",

        time: "2024-12-13T16:00:00",

        link: "#"

    },

    {

        image: "https://via.placeholder.com/250x150",

        league: "Football League",

        match: "Team C vs Team D",

        time: "2024-12-13T18:00:00",

        link: "#"

    },

    {

        image: "https://via.placeholder.com/250x150",

        league: "Basketball Championship",

        match: "Team E vs Team F",

        time: "2024-12-13T14:00:00",

        link: "#"

    },

    {

        image: "https://via.placeholder.com/250x150",

        league: "Tennis Open",

        match: "Player A vs Player B",

        time: "2024-12-14T10:00:00",

        link: "#"

    },

    {

        image: "https://via.placeholder.com/250x150",

        league: "Cricket League",

        match: "Team G vs Team H",

        time: "2024-12-14T12:00:00",

        link: "#"

    },

    {

        image: "https://via.placeholder.com/250x150",

        league: "Baseball Championship",

        match: "Team I vs Team J",

        time: "2024-12-14T15:00:00",

        link: "#"

    }

];

// Function to display matches

function displayMatches() {

    // Sort matches by time (ascending)

    matches.sort((a, b) => new Date(a.time) - new Date(b.time));

    const container = document.getElementById("matches-container");

    container.innerHTML = ""; // Clear existing content

    matches.forEach(match => {

        const card = document.createElement("div");

        card.classList.add("match-card");

        const matchHTML = `

            <img src="${match.image}" alt="${match.match}">

            <h3>${match.match}</h3>

            <p class="league-name">${match.league}</p>

            <p class="time">${new Date(match.time).toLocaleString()}</p>

            <a href="${match.link}" class="watch-now">Watch Now</a>

        `;

        card.innerHTML = matchHTML;

        container.appendChild(card);

    });

    // Add Telegram join button at the bottom of the page

    const telegramButton = document.createElement("a");

    telegramButton.href = "https://t.me/yourchannel"; // Replace with your Telegram channel link

    telegramButton.classList.add("telegram-button");

    telegramButton.innerText = "Join Our Telegram Channel";

    container.appendChild(telegramButton);

}

// Function to show the popup when the page loads

window.addEventListener('DOMContentLoaded', function() {

    const popup = document.querySelector('.popup');

    popup.style.display = 'flex'; // Show popup

});

// Close the popup if the user clicks "Already Joined" button

document.querySelector('.already-joined-btn')?.addEventListener('click', function() {

    document.querySelector('.popup').style.display = 'none'; // Hide the popup

});

// Close the popup if the user clicks "Join Now" button (optional)

document.querySelector('.join-now-btn')?.addEventListener('click', function() {

    window.open('https://t.me/yourchannel', '_blank'); // Opens Telegram link in a new tab

    document.querySelector('.popup').style.display = 'none'; // Close popup

});

// Call the function to display matches when page loads

displayMatches();
