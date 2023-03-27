import { dateDayAndMonth } from './dateConversions'

//todayLine plugin block
export const todayLine = {
  id: 'todayLine',
  //to draw after the dataset so it is over the other bars..
  afterDatasetsDraw(chart, args, pluginOptions){
    const { ctx, data, chartArea: { top, bottom, left, right}, scales: { x, y }} = chart;
    ctx.save(); //saves what it currently is
    ctx.beginPath(); //makes a path separately 
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'rgb(162, 162, 235)';
    ctx.setLineDash([3, 7]) //pixels of solid color, pixels of white space
    ctx.moveTo(x.getPixelForValue(new Date()), top)//like drawing with a pencil, with coordinates (x and y). moveTo is the starting point 
    ctx.lineTo(x.getPixelForValue(new Date()), bottom)//lineTo is where the line ends
    ctx.stroke(); //the actual drawing of the line
    ctx.setLineDash([])//not sure why, but it helps with something
  }
};

//example for assignedName plugin block
export const assignedName = {
  id: 'assignedName',
  afterDatasetsDraw(chart, args, pluginOptions){
    const { ctx, data, chartArea: { top, bottom, left, right}, scales: { x, y }} = chart; //the data object has the data in the dataset
    ctx.font = 'bolder 12px sans-serif';
    ctx.fillStyle = 'white'; // rgb or could just write the color, ie 'black'
    ctx.textBaseline = 'middle'; //make sure the text is exactly in the middle
    data.datasets.forEach((dataset, index1) => {
      dataset.data.forEach((datapoint, index2) => {
      ctx.fillText(datapoint.type, 10, y.getPixelForValue(index1+index2))
    })
  })
    // ctx.fillText(data.datasets[0].data[0].name, 10, y.getPixelForValue(0)); //(text from the dataset, pixels from left, get index num for each label and pass in) --This is the initial setup, before accounting for all datapoints
  }
};
//if I wanted to do something similar on the right, could add padding to the right too, and add another property on each data object

//custom tooltip blocks with additional data on the selected event

const getOrCreateTooltip = (chart) => {
  let tooltipEl = document.getElementById('chartjs-tooltip');
  if (!tooltipEl) {
    tooltipEl = document.createElement('div');
    tooltipEl.id = 'chartjs-tooltip';
    tooltipEl.classList.add('tooltipDesign');
    let tooltipUl = document.createElement('ul');
    tooltipUl.classList.add('tooltipUl');

    tooltipEl.appendChild(tooltipUl);
    chart.canvas.parentNode.appendChild(tooltipEl);
  }
  return tooltipEl;
};

export const tooltipInfo = (context) => {
  // Tooltip Element
  let tooltipEl = document.getElementById('chartjs-tooltip');
  // Create element on first render
  if (!tooltipEl) {
      tooltipEl = document.createElement('div');
      tooltipEl.id = 'chartjs-tooltip';
      tooltipEl.innerHTML = '<table></table>';
      document.body.appendChild(tooltipEl);
  }

  // Hide if no tooltip
  const tooltipModel = context.tooltip;
  if (tooltipModel.opacity === 0) {
      tooltipEl.style.opacity = 0;
      return;
  }

  // Set caret Position
  tooltipEl.classList.remove('above', 'below', 'no-transform');
  if (tooltipModel.yAlign) {
      tooltipEl.classList.add(tooltipModel.yAlign);
  } else {
      tooltipEl.classList.add('no-transform');
  }

  function getDetails(tooltip) {
    const curIndex = tooltipModel.dataPoints[0].datasetIndex;
    const dataIndex = tooltipModel.dataPoints[0].dataIndex;
    const dataObj = tooltipModel.dataPoints[0].dataset.data;
    let startDate = dataObj[dataIndex].dates[0];
    let endDate = dataObj[dataIndex].dates[1];
    let info = dataObj[dataIndex].details;
    if (info === undefined) info = 'n/a';
      return {info, startDate, endDate};
  }

  // Set Text
  if (tooltipModel.body) {
      const titleLines = tooltipModel.title || [];
      const details = getDetails(tooltipModel)
      let tableRoot = tooltipEl.querySelector('table');
      tableRoot.innerHTML = `
        <thead><tr><th>${titleLines}</th></tr></thead>
        <tbody>
          <tr><td><p>${dateDayAndMonth(details.startDate)} to ${dateDayAndMonth(details.endDate)}</p></td></tr>
          <tr><td>Details:<p>${details.info}</p></td></tr>
        </tbody>`;
  }

  const position = context.chart.canvas.getBoundingClientRect();

  // Display, position, and set styles for font
  tooltipEl.style.opacity = 1;
  tooltipEl.style.position = 'absolute';
  tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
  tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
  // tooltipEl.style.font = bodyFont.string;
  tooltipEl.style.padding = tooltipModel.padding + 'px ' + tooltipModel.padding + 'px';
  tooltipEl.style.pointerEvents = 'none';
}
