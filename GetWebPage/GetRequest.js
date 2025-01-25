"use strict";

const axios = require('axios');
const fs = require('fs');

async function fetchAndSaveWebPage(url, fileName) {
    try {
        // Fetch the web page content
        const response = await axios.get(url);
        
        // Write the content to an HTML file
        fs.writeFileSync(fileName, response.data, 'utf-8');
        
        console.log(`Web page saved successfully as ${fileName}`);
    } catch (error) {
        console.error(`An error occurred: ${error.message}`);
    }
}

// Example usage
const url = 'https://www.example.com';  // Replace with the URL of the web page you want to download
const fileName = 'downloaded_page.html';  // Replace with your desired file name
fetchAndSaveWebPage(url, fileName);


