const apiKey = '1NDh0htyDjCTE2E1HXBBnKvWqMJGCxvhb3jtqzSr'; 

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('fetch-btn').addEventListener('click', () => {
        const date = document.getElementById('date-input').value;
        if (date) {
            getAPOD(date);
        }
    });

    getAPOD();
});

async function getAPOD(date = '') {
    let url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    if (date) {
        url += `&date=${date}`;
    }

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayAPOD(data);
    } catch (error) {
        console.error('Error fetching APOD:', error);
    }
}

function displayAPOD(data) {
    const apodInfo = document.getElementById('apod-info');
    apodInfo.innerHTML = `
        <h2>${data.title}</h2>
        <img src="${data.url}" alt="${data.title}">
        <p>${data.explanation}</p>
        <p><strong>Date:</strong> ${data.date}</p>
    `;
}
