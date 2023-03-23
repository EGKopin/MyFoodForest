
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
    data.datasets[0].data.forEach((datapoint, index) => {
      ctx.fillText(datapoint.name, 10, y.getPixelForValue(index))
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

//Trigger - 
export const tooltipInfo = (context) => {
  const { chart, tooltip } = context;

  const tooltipEl = getOrCreateTooltip(chart);

  //hide tooltip if mouseOut, just using css!
  if (tooltip.opacity === 0) {
    tooltipEl.style.opacity = 0;
  }
  //adding tooltip text
  if(tooltip.body) {
    const titleLines = tooltip.title || []; // || blank?
    const bodyLines = tooltip.body.map(body => body.lines); //grabs them all in a loop
    const tooltipLI = document.createElement('li');

    //add title loop
    // titleLines.forEach(title => {
    //   tooltipUl.appendChild(tooltipLI);
    //   const tooltipSpan = document.createElement('span');
    //   tooltipLI.appendChild(tooltipSpan);
    //   //create a text node with the text of title
    //   const tooltipTitle = document.createTextNode(title);
    //   tooltipSpan.appendChild(tooltipTitle)
    // })
  }

  // console.log(tooltip.title, tooltip.dataPoints.dataset.label)
}

export const test = (context) => {
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

  function getBody(bodyItem) {
      return bodyItem.lines;
  }

  // Set Text
  if (tooltipModel.body) {
      const titleLines = tooltipModel.title || [];
      const bodyLines = tooltipModel.body.map(getBody);
console.log(tooltipModel.dataPoints[0].dataset.data[0].name)
      let innerHtml = '<thead>';

      titleLines.forEach(function(title) {
          innerHtml += '<tr><th>' + title + '</th></tr>';
      });
      innerHtml += '</thead><tbody>';

      bodyLines.forEach(function(body, i) {
          const colors = tooltipModel.labelColors[i];
          let style = 'background:' + colors.backgroundColor;
          style += '; border-color:' + colors.borderColor;
          style += '; border-width: 2px';
          const span = '<span style="' + style + '">' + body + '</span>';
          innerHtml += '<tr><td>' + span + '</td></tr>';
      });
      innerHtml += '</tbody>';

      let tableRoot = tooltipEl.querySelector('table');
      tableRoot.innerHTML = innerHtml;
  }

  const position = context.chart.canvas.getBoundingClientRect();
  // const bodyFont = Chart.helpers.toFont(tooltipModel.options.bodyFont);

  // Display, position, and set styles for font
  tooltipEl.style.opacity = 1;
  tooltipEl.style.position = 'absolute';
  tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
  tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
  // tooltipEl.style.font = bodyFont.string;
  tooltipEl.style.padding = tooltipModel.padding + 'px ' + tooltipModel.padding + 'px';
  tooltipEl.style.pointerEvents = 'none';
}