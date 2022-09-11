# Dynamic Line Chart | Chart.js

YouTube Video Source: [Dynamic Line Chart](https://youtu.be/4jfcxxTT8H0). 

This video shows the basics in creating the line chart. The remaining code in this application is an addition to the video. I have implemented an API call to CoinGecko to grab the current price sparkline data for Bitcoin and Ethereum.

Upon loading the page, a static data set is used to initialize the line chart. Pressing the 'Refresh' button will activate a new API call and the data will change.

To view only one line chart of data, click on either the Bitcoin or Ethereum legend at the top of the chart.

## Bootstrap and Chart JS Requirements and Dependencies

Bootstrap "components require the use of JavaScript to function. Specifically, they require jQuery, Popper.js, and [their] own JavaScript plugins." [Bootstrap Getting Started](https://getbootstrap.com/docs/4.1/getting-started/introduction/)

Chart.js uses the 'canvas' element of HTML5 to create simple renderings of various charts: [Chart.js](https://www.chartjs.org/docs/latest/getting-started/usage.html)

Web Page for Development Documentation: [Chart.js Dev Docs](https://www.chartjs.org/docs/latest/developers/api.html)

## Chart.js Line Chart Setup and Dependency

To set up the Chart.js Line Chart from scratch, follow each of the steps below.

From the command line using Ubuntu:

```ts
$ npm init -y && npm i
$ npm install chart.js --save
```
From the command line using PowerShell

```ts
> npm init -y | npm i
> npm install chart.js --save
```

## VSCode Extension | Live Server

To open the line_chart.html in a web browser and view the application you will need to add the 'Live Server' extension in VSCode. Make sure it is the 'Live Server' with the most downloads. There is another with a similar name, but is not the one I am using in the program.

## HTML Bootstrap & Chart.js File Setup


You will need to get the bootstrap template from: [getBootstrap](https://getbootstrap.com/docs/4.1/getting-started/introduction/)

The bootstrap template contains most of the scripts and a link that are required for this application. The remaining scripts and other sources will be copied from Chart.js in their Getting Started section.

Follow the bootstrap link above and copy the complete HTML template about halfway down the page.

## Chart.js Getting Started

From [Getting Started with Chart.js](https://www.chartjs.org/docs/latest/getting-started/)

- Copy and paste the 'div' and 'canvas' elements to the html.
- Next, copy the 'script' src="https://cdn.jsdelivr.net/npm/chart.js" to ensure Chart js elements function properly
- Then, copy the script data to the html or extract the code to a javascript file
- Finally, copy the 'create a new Chart()' code to instantiate the chart object

## Chart JS Interface | Line Controller Dataset Options

For greater control of the chart line, you can see a list of all interface options at: [Interface | LineControllerDatasetOptions](https://www.chartjs.org/docs/latest/api/interfaces/LineControllerDatasetOptions.html)

