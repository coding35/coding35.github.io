


const fs = require('fs');
const puppeteer = require('puppeteer');

const fetchHtmlWithPuppeteer = async () => {
  // Launch a headless browser instance
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    // Navigate to the target page (replace with your desired URL)
    await page.goto('https://coding35.notion.site/10f49c3fdb3b809dbca8cf02f5865978?v=10f49c3fdb3b80b39252000c8b25095d', { waitUntil: 'networkidle2' });

    // Wait for a specific element to ensure the page is fully loaded (optional)
    await page.waitForSelector('h1'); // Adjust the selector based on the page structure

    // Add the class "notion-body" to the <body> element and remove everything else
    const bodyOnlyContent = await page.evaluate(() => {
      // Add the class to the body
      document.body.classList.add('notion-body');

      // Return only the <body> content as a string, with everything else removed
      return `<body class="notion-body">${document.body.innerHTML}</body>`;
    });

    // Save the modified body-only content to a file
    fs.writeFileSync('./src/assets/fetched-content.html', bodyOnlyContent);
    console.log('HTML content modified (only <body> with notion-body class) and saved successfully.');

  } catch (error) {
    console.error('Error fetching HTML:', error);
  } finally {
    // Close the browser
    await browser.close();
  }
};

// Run the function
fetchHtmlWithPuppeteer();
