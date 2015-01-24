var apiUrl = "http://localhost:3000/";
var number = 0;

$(function () {

    Highcharts.theme = {
        colors: ["#F25A29", "#AD62CE", "#30B6AF", "#FCC940", "#FF6C7C", "#4356C0", "#DFE1E3"],
        chart: {
            backgroundColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, 'rgb(255, 255, 255)'],
                    [1, 'rgb(255, 255, 255)']
                ]
            },
            borderWidth: 0,
            borderRadius: 0,
            plotBackgroundColor: null,
            plotShadow: false,
            plotBorderWidth: 0
        },
        title: {
            style: {
                color: '#333',
                font: '12px "Open Sans", sans-serif'
            }
        },
        subtitle: {
            style: {
                color: '#333',
                font: '12px "Open Sans", sans-serif'
            }
        },
        xAxis: {
            gridLineWidth: 0,
            lineColor: '#333',
            tickColor: '#333',
            labels: {
                style: {
                    color: '#333',
                    fontWeight: 'normal'
                }
            },
            title: {
                style: {
                    color: '#333',
                    font: 'normal 12px "Open Sans", sans-serif'
                }
            }
        },
        yAxis: {
            alternateGridColor: null,
            minorTickInterval: null,
            gridLineColor: 'rgba(255, 255, 255, .1)',
            minorGridLineColor: 'rgba(255,255,255,0.07)',
            lineWidth: 0,
            tickWidth: 0,
            labels: {
                style: {
                    color: '#333',
                    fontWeight: 'normal'
                }
            },
            title: {
                style: {
                    color: '#333',
                    font: 'normal 12px "Open Sans", sans-serif'
                }
            }
        },
        legend: {
            itemStyle: {
                color: '#333',
                font: 'normal 12px "Open Sans", sans-serif'
            },
            itemHoverStyle: {
                color: '#428BCA',
                font: 'normal 12px "Open Sans", sans-serif'
            },
            itemHiddenStyle: {
                color: '#CCC',
                font: 'normal 12px "Open Sans", sans-serif'
            }
        },
        labels: {
            style: {
                color: '#333'
            }
        },
        tooltip: {
            backgroundColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, 'rgba(96, 96, 96, .8)'],
                    [1, 'rgba(16, 16, 16, .8)']
                ]
            },
            borderWidth: 0,
            style: {
                color: '#FFF'
            }
        },


        plotOptions: {
            series: {
                nullColor: '#444444'
            },
            line: {
                dataLabels: {
                    color: '#333'
                },
                marker: {
                    lineColor: '#333'
                }
            },
            spline: {
                marker: {
                    lineColor: '#333'
                }
            },
            scatter: {
                marker: {
                    lineColor: '#333'
                }
            },
            candlestick: {
                lineColor: 'black'
            }
        },

        toolbar: {
            itemStyle: {
                color: '#333'
            }
        },

        navigation: {
            buttonOptions: {
                symbolStroke: '#DDDDDD',
                hoverSymbolStroke: '#FFFFFF',
                theme: {
                    fill: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0.4, '#FFF'],
                            [0.6, '#FFF']
                        ]
                    },
                    stroke: '#CCC'
                }
            }
        },

        // scroll charts
        rangeSelector: {
            buttonTheme: {
                fill: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0.4, '#888'],
                        [0.6, '#555']
                    ]
                },
                stroke: '#000000',
                style: {
                    color: '#CCC',
                    fontWeight: 'normal'
                },
                states: {
                    hover: {
                        fill: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0.4, '#BBB'],
                                [0.6, '#888']
                            ]
                        },
                        stroke: '#000000',
                        style: {
                            color: 'black'
                        }
                    },
                    select: {
                        fill: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0.1, '#333'],
                                [0.3, '#333']
                            ]
                        },
                        stroke: '#000000',
                        style: {
                            color: 'yellow'
                        }
                    }
                }
            },
            inputStyle: {
                backgroundColor: '#333',
                color: 'silver'
            },
            labelStyle: {
                color: 'silver'
            }
        },

        navigator: {
            handles: {
                backgroundColor: '#666',
                borderColor: '#AAA'
            },
            outlineColor: '#CCC',
            maskFill: 'rgba(16, 16, 16, 0.5)',
            series: {
                color: '#7798BF',
                lineColor: '#A6C7ED'
            }
        },

        scrollbar: {
            barBackgroundColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0.4, '#888'],
                    [0.6, '#555']
                ]
            },
            barBorderColor: '#CCC',
            buttonArrowColor: '#CCC',
            buttonBackgroundColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0.4, '#888'],
                    [0.6, '#555']
                ]
            },
            buttonBorderColor: '#CCC',
            rifleColor: '#FFF',
            trackBackgroundColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, '#333'],
                    [1, '#333']
                ]
            },
            trackBorderColor: '#666'
        },

        // special colors for some of the demo examples
        legendBackgroundColor: 'rgba(48, 48, 48, 0.8)',
        legendBackgroundColorSolid: 'rgb(70, 70, 70)',
        dataLabelsColor: '#444',
        textColor: '#E0E0E0',
        maskColor: 'rgba(0,0,0,0.3)'
    };
  
  
  var Dataset = ["data1.json","data2.json","data3.json"];
    var highchartsOptions = Highcharts.setOptions(Highcharts.theme);
    $(" .group-tags").keypress(function (event) {
        if (event.which == 13) {
            event.preventDefault();
            //buildBarChart_1(data1)
            //buildBarChart_2(data2)
            //google.maps.event.addDomListener(window, 'load', initialize);
            getTagReport_1();
            getTagReport_2();
 var width = 1000;
  var height = 380;

  var color = d3.scale.category20();
  var force = d3.layout.force()
      .charge(-120)
      .linkDistance(30)
      .size([width, height]);
      //d3.select("#A").remove();

  var svg = d3.select("#A").insert("svg")
      .attr("width", width)
      .attr("height", height);
            d3.json(Dataset[number], function(error, graph) {
    force
        .nodes(graph.nodes)
        .links(graph.links)
        .start();

    var link = svg.selectAll(".link")
        .data(graph.links)
        .enter().insert("line")
        .attr("class", "link")
        .style("stroke-width", function(d) { return Math.sqrt(d.value); });

    var node = svg.selectAll(".node")
        .data(graph.nodes)
        .enter().insert("circle")
        .attr("class", "node")
        .attr("r", 5)
        .style("fill", function(d) { return color(d.group); })
        .call(force.drag);

    node.insert("title")
        .text(function(d) { return d.name; });

    force.on("tick", function() {
      link.attr("x1", function(d) { return d.source.x; })
          .attr("y1", function(d) { return d.source.y; })
          .attr("x2", function(d) { return d.target.x; })
          .attr("y2", function(d) { return d.target.y; });

      node.attr("cx", function(d) { return d.x; })
          .attr("cy", function(d) { return d.y; });
    });
    number = number + 1;
        if(number == 3){
            number = 0;
        }

  });
            //document.getElementbyId("#A").innerHTML =""
    };
    

            //getLocationReport()
    });
    //buildBarChart_1(data1)
    //buildBarChart_2(data1)
    //google.maps.event.addDomListener(window, 'load', initialize);
    getTagReport_1();
    getTagReport_2();
        //getLocationReport()



});

var getTagReport_1 = function () {
    $('.loader').show();
    $.getJSON(apiUrl + "api/v0/analytics/getTopMemberGroupByTag?topics=" + encodeURIComponent($(".group-tags").val())+"&api_key=special-key&neo4j=true",function (data) {
       $('.loader').hide();
       var barSeries = [];
        $.each(data, function (key, val) {
            var item = {};
            item.name = val.groupName;
            item.data = [val.members];
            barSeries.push(item);
        });
        buildBarChart_1(barSeries);
        
    });
};

var getTagReport_2 = function () {
    $('.loader').show();
    $.getJSON(apiUrl + "api/v0/analytics/getTopEventGroupByTag?topics=" + encodeURIComponent($(".group-tags").val())+"&api_key=special-key&neo4j=true",function (data) {
       $('.loader').hide();
       var barSeries = [];
        $.each(data, function (key, val) {
            var item = {};
            item.name = val.groupName;
            item.data = [val.events];
            barSeries.push(item);
        });
        buildBarChart_2(barSeries);
    });
};


function buildBarChart_1(data)
{
        $('#bar_1-container').highcharts({
            chart: {
                type: 'bar',
            },
            title: {
                text: 'Top 5 Most Popular Groups'
            },
            subtitle: {
                text: 'Source: Meetup.com'
            },
            xAxis: {
                categories:[''] ,
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: '# of the Users',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                valuePrefix: '+'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: 0,
            y: 50
            },
            credits: {
                enabled: false
            },
            series: data
        });
}

function buildBarChart_2(data)
{
        $('#bar_2-container').highcharts({
            chart: {
                type: 'bar',
            },
            title: {
                text: 'Top 5 Most Acitive Groups'
            },
            subtitle: {
                text: 'Source: Meetup.com'
            },
            xAxis: {
                categories: [''],
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: '# of events',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                valuePrefix: '+'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: 0,
            y: 50
            },
            credits: {
                enabled: false
            },
            series: data
        });
}




        

