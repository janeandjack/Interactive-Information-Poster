
(() => {
    $(document).foundation()
    var myChart_1 = echarts.init(document.getElementById('main_1'));
   

var option_1 = {
  
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        y: 50,
        x:1,
        // orient: 'vertical',
        // x: 'left',
        data:['0-14 male','0-14 female','15-64 male','15-64 female','65+ male','65+ female']
    },
    series: [
        {
            name:'amout',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:5839565, name:'0-14 years', selected:true},
                {value:23376530, name:'15-64 years'},
                {value:5935630, name:'65+ years'}
            ]
        },
        {
            name:'amounts',
            type:'pie',
            radius: ['40%', '55%'],
            label: {
                normal: {
                    // formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                    // backgroundColor: '#eee',
                    // borderColor: '#aaa',
                    // borderWidth: 1,
                    // borderRadius: 4,
                    // shadowBlur:3,
                    // shadowOffsetX: 2,
                    // shadowOffsetY: 2,
                    // shadowColor: '#999',
                    // padding: [0, 7],
                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 22,
                            align: 'center'
                        },
                        // abg: {
                        //     backgroundColor: '#333',
                        //     width: '100%',
                        //     align: 'right',
                        //     height: 22,
                        //     borderRadius: [4, 4, 0, 0]
                        // },
                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 16,
                            lineHeight: 33
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
            data:[
                {value:2992920, name:'0-14 male'},
                {value:2846645, name:'0-14 female'},
                {value:11576130, name:'15-64 male'},
                {value:11800400, name:'15-64 female'},
                {value:2695150, name:'65+ male'},
                {value:3240485, name:'65+ female'}
            
            ]
        }
    ]
};
myChart_1.setOption(option_1);
 var myChart = echarts.init(document.getElementById('main'));

  var option = {
   
    tooltip : {
        trigger: 'axis',
        axisPointer : {            
            type : 'shadow'                }
    },
    legend: {
        data: ['N.L.', 'P.E.I.','N.S.','N.B.','Que.','Ont.','Man.','Sask.','Alta.','B.C.','Y.T.','N.W.T.','Nvt.']
    },
    grid: {
        left: '2%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
        type: 'value'
       
    },
    yAxis: {
        type: 'category',
        data: ['2017','2016','2015','2014','2013','2012']
    },
    series: [
        {
            name: 'N.L.',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    //show: true,
                    position: 'insideRight'
                }
            },
            data: [528817,530305, 528815,528386, 527399, 526450]
        },
        {
            name: 'P.E.I.',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    //show: true,
                    position: 'insideRight'
                }
            },
            data: [152021, 149472, 146791, 145915, 145198, 145080]
        },
        {
            name: 'N.S.',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    //show: true,
                    position: 'insideRight'
                }
            },
            data: [953869, 948618, 941545, 942209, 943049, 944943]
        },
        {
            name: 'N.B.',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    //show: true,
                    position: 'insideRight'
                }
            },
            data: [759655, 757384, 753944, 754700, 755710, 756777]
        },
        {
            name: 'Que.',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    //show: true,
                    position: 'insideRight'
                }
            },
            data: [8394034, 8321888, 8254912, 8210533, 8151331, 8085906]
        },
		   {
            name: 'Ont.',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    //show: true,
                    position: 'insideRight'
                }
            },
            data:[14193384, 13976320, 13789597, 13680425, 13555754, 13413702]
			         },
		   {
            name: 'Man.',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    //show: true,
                    position: 'insideRight'
                }
            },
            data: [1338109, 1318115, 1295422, 1280912, 1265588, 1250265]

        },
		   {
            name: 'Sask.',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    //show: true,
                    position: 'insideRight'
                }
            },
            data: [1163925, 1148588, 1131150, 1120639, 1104825, 1086018]
        },
		   {
            name: 'Alta.',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    //show: true,
                    position: 'insideRight'
                }
            },
            data: [4286134, 4236376, 4177527, 4108416, 3997950, 3880755]
        },
		   {
            name: 'B.C.',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    //show: true,
                    position: 'insideRight'
                }
            },
            data: [4817160, 4757658, 4694699, 4646462, 4590081, 4546280]
        },
		   {
            name: 'Y.T.',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    //show: true,
                    position: 'insideRight'
                }
            },
            data: [38459, 38086, 37289, 36817, 36298, 36058]
        },
		   {
            name: 'N.W.T.',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    //show: true,
                    position: 'insideRight'
                }
            },
            data: [44520, 44617, 44214, 43867, 43773, 43594]
        },
				   {
            name: 'Nvt.',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    //show: true,
                    position: 'insideRight'
                }
            },
            data: [37996, 37177, 36608, 36067, 35414, 34707]
        },

    ]
};
      //  use configuration item and data specified to show chart
        myChart.setOption(option);
//Ajax begin



        function loadDoc(data) {
            const {age_range, male, female} = data; 
            document.querySelector('.tb_4-1').innerHTML = age_range;
            document.querySelector('.tb_4-2').innerHTML= male;
            document.querySelector('.tb_4-3').innerHTML= female;
               
        }
        function loadDoc1(data) {
            const {age_range, male, female} = data; 
            document.querySelector('.tb_4-4').innerHTML = age_range;
            document.querySelector('.tb_4-5').innerHTML= male;
            document.querySelector('.tb_4-6').innerHTML= female;
               
        }
        function loadDoc2(data) {
            const {age_range, male, female} = data; 
            document.querySelector('.tb_4-7').innerHTML = age_range;
            document.querySelector('.tb_4-8').innerHTML= male;
            document.querySelector('.tb_4-9').innerHTML= female;
               
        }
        function loadDoc3(data) {
            const {age_range, male, female} = data; 
            document.querySelector('.tb_4-10').innerHTML = age_range;
            document.querySelector('.tb_4-11').innerHTML= male;
            document.querySelector('.tb_4-12').innerHTML= female;
               
        }

function getData(){
            fetch('./assets/connect.php')
            .then(res => res.json())
            .then(data => {
                console.log(data);//can load data from age_structure.sql in console, but js function not working
                loadDoc(data[0]);
                loadDoc1(data[1]);
                loadDoc2(data[2]);
                loadDoc3(data[3]);
        })
            .catch(function(error){
               // console.log(error); 
            });
        }
        getData();
        



  
    $(document).ready(function() {
        $("#age_text").click(function() {
            $.ajax({
                url : "./assets/age_structure.txt",
                dataType: "text",
                success : function (data1) {
                    $(".text").html(data1);
    console.log(data1);
                  // this function load at firefox, but sometimes not at chrone. need to update  
                }
                
            });
        });
    }); 
        $(document).ready(function(){
            $.ajax({
                url:"./assets/data.json",
                dataType:"json",
                success:function(data){
console.log(data);
                        
                    $(data.users).each(function(key, value) {
                        var record="<tr><td>"+//(index+1)+
                       + value.year+
                        "</td><td>" + value.Average_population+ 
                        "</td><td>" + value.Live+
                        "</td><td>" + value.Deaths+
                        "</td><td>" + value.Natural+
                        "</td><td>" + value.Brith + 
                        "</td><td>" + value.Death +
                        "</td><td>" + value.Naturals +
                        "</td><td>" + value.Total +"</td></tr>";
                        $("table").append(record);

                    });
                }
            });
        });
	})();