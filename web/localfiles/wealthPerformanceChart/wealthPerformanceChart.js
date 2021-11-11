function AddPerformanceLineChart(labels, data1, data2, filter){
var jsonStr = [{meta: labels[0], value: data1[0]}];
var plotObj1 = new Array();
var i=0;
var combinedArray = [].concat(data1,data2);
//console.log(combinedArray);
for (i in data1)
{
var firstLine = labels[i] + "\n"; 
plotObj1.push({meta: firstLine, value: data1[i]});
}
if(data2.length != 0){
var jsonStr = [{meta: labels[0], value: data2[0]}];
var plotObj2 = new Array();
var i=0;
for (i in data2)
{
var firstLine = labels[i] + "\n"; 
plotObj2.push({meta: firstLine, value: data2[i]});
}
}
var expectedMonth=showOnlyFewMonth(labels,filter);
  // Function to define the labelling strategy for X Axis to configure for Chartist
  let interpolationFunc = (value, index, labels) => index === labels.findIndex(l => l === labels) ? labels : null;
  let dateOptions = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  switch (filter) {  
    case 'OneY':
 	dateOptions = { year: 'numeric', month: 'short' };
      interpolationFunc = (value, index, labels) =>{		  
        try{			
			var date = new Date(value);
			var monthVal = date.getMonth();
			var finalMonth = months[monthVal];
			if(expectedMonth.includes(finalMonth))
          {
			 expectedMonth.shift();
			
            return  finalMonth;
          }
          else
          { 
            return  null;
          }
        } catch(e) {
          return 'e'+e;
        }
		
       } 
      break;

   case 'Inception': dateOptions = { year: 'numeric', month: 'short' };
      let arrayYear=[];
      interpolationFunc = (value, index, labels) => {
        try {
        
		  var date = new Date(value);
			var yearVal = date.getFullYear();
			var finalYear = yearVal.toString().slice(-2);
		    var month = date.getMonth();
          if((month===0 || month===7) && (arrayYear.filter(x => x == months[month]+"'"+finalYear).length <1 ) ) {
            arrayYear.push(months[month]+"'"+finalYear);
	        return months[month]+"'"+finalYear;																															
          } else {
            return null;
          }
        } catch(e) {
          return 'e'+e;
        }
      }
      break;
	  
    case 'YTD': 
	dateOptions = { year: 'numeric', month: 'short' };
      interpolationFunc = (value, index, labels) =>{		  
        try{			
			var date = new Date(value);
			var monthVal = date.getMonth();
			var finalMonth = months[monthVal];
			if(expectedMonth.includes(finalMonth))
          {
			 expectedMonth.shift();
             return  finalMonth;
          }
          else
          { 
            return  null;
          }
        } catch(e) {
          return 'e'+e;
        }	
       }
     break;	   
	 
    default: dateOptions = { year: 'numeric', month: 'short' };
       dateOptions = { year: 'numeric', month: 'short' };
	   let arrayMonth=[];
	   interpolationFunc = (value, index, labels) =>{
      var date = new Date(value);
			var monthVal = date.getMonth();
			var finalMonth = months[monthVal];
			if(arrayMonth.filter(x => x == finalMonth).length <1 ) {
            arrayMonth.push(finalMonth);
	        return finalMonth;		
          } 
		  else {
            return null;
          }
	}
	  break;
  }
	var options = {
		showArea: true,
		showPoint: true,
		lineSmooth : false,
      	width: "100%",
        height: "100%",
		fullWidth: true,
		chartPadding: {
		right: 40
		},		
		axisX: {
        showGrid: true,
        showLabel: true,
		labelInterpolationFnc:interpolationFunc
		},
		axisY: {
        showGrid: true,
        showLabel: true,
		low: Math.min.apply(null, combinedArray),
        high: Math.max.apply(null, combinedArray),
		divisor : 20,
		ticks: null,
		labelInterpolationFnc: function (value) {
        return value +"%";
      }
		},
	};
var chart = new Chartist.Line('.ct-chart', {
  labels: labels,
  series: [plotObj1,plotObj2]
}, options);

chart.on('draw', function(context) {
  if(context.type === 'label' && context.axis.units.pos === 'y') {
    context.element.attr({
      x: context.axis.chartRect.width() + parseInt("100")
    });
  }
  if(context.type === 'bar') {
    context.element.attr({
      x1: context.x1 + 0.001
    });
  }
});


chart.on('draw', function(context) {
  if(context.type === 'label' && context.axis.units.pos === 'y') {
    context.element.attr({
      x: context.axis.chartRect.width() + parseInt("60")
    });
  }
  if(context.type === 'point' && context.index == labels.length-2) {

	var triangle = new Chartist.Svg('path', {
      d: ['M',
        context.x+10,
        context.y+10,
        'L',
        context.x +100,
        context.y + 10,
		'L',
        context.x +100,
        context.y - 10,
		'L',
		context.x + 10,
        context.y - 10,
		'L',
        context.x,
        context.y,
        'z'].join(' '),
      style: 'fill-opacity: 1'
    }, 'ct-area');

    // With data.element we get the Chartist SVG wrapper and we can replace the original point drawn by Chartist with our newly created triangle
  //  context.element.replace(triangle);
  }
});


// To Apply Chart Area Color
chart.on('created', function(ctx) {
  var defs = ctx.svg.elem('defs');
  defs.elem('linearGradient', {
    id: 'gradient',
    x1: 0,
    y1: 1,
    x2: 0,
    y2: 0
  }).elem('stop', {
    offset: 0,
	'stop-color': '#3E75A6'  
  }).parent().elem('stop', {
    offset: 1,
    'stop-color': '#3E75A6'
  });
});

}
function showOnlyFewMonth(xLabels,filter)
{ 
  let finalMonthArray=[];
  let monthlist = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  if(xLabels.length>0)
    {
      let temArray=[];
      for(let i=0; i<=xLabels.length-1;i++)
        {
          let d = new Date(xLabels[i]);
		 
          if(temArray.indexOf(monthlist[d.getMonth()])===-1 )
            {
           
             temArray.push(monthlist[d.getMonth()]) ;
            }
          
            if((xLabels.length-1)===i){
             temArray.push(monthlist[d.getMonth()]);
            }         
        }
        for(let j=0; j<=temArray.length-1;j++)
        {
        if(j%3 === 0 && temArray.length>0 && finalMonthArray.indexOf(temArray[j])===-1)
            {
              finalMonthArray.push(temArray[j]);
            }
         
       
        }
        
    }
  if(filter==='YTD' && finalMonthArray.length===5)
    {
      finalMonthArray.pop();
    }
 //console.log(finalMonthArray)
 return finalMonthArray;
}