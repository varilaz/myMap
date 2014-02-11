/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Symbol_2',
            type:'rect',
            rect:['28','-5','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'Symbol_2',
            symbolName:'Symbol_2'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '794px'],
            ["style", "width", '100%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 20,
         autoPlay: true,
         labels: {
            "Label 1": 0
         },
         timeline: [
         ]
      }
   }
},
"spain": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','220px','180px','auto','auto'],
      id: 'spain',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/spain.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_spain}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '180px'],
            ["style", "width", '220px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: false,
         timeline: [
            { id: "eid195", tween: [ "style", "${_spain}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 1000 }         ]
      }
   }
},
"portugal": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['34','56','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',18,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'Text4',
      text: 'portugal<br>',
      align: 'left',
      type: 'text'
   },
   {
      id: 'portugal',
      type: 'image',
      rect: ['0px','0px','68px','112px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/portugalia.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '112px'],
            ["style", "width", '68px']
         ],
         "${_portugal}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_Text4}": [
            ["style", "left", '17px'],
            ["style", "opacity", '1']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1040,
         autoPlay: false,
         timeline: [
            { id: "eid42", tween: [ "style", "${_Text4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1040 },
            { id: "eid29", tween: [ "style", "${_Text4}", "left", '17px', { fromValue: '17px'}], position: 0, duration: 0 }         ]
      }
   }
},
"SP": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'image',
      id: 'sp',
      opacity: 1,
      rect: ['0px','0px','220px','180px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/spain2.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_sp}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '180px'],
            ["style", "width", '220px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"spMozi": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [],
      rect: ['0px','0px','220px','180px','auto','auto'],
      type: 'image',
      display: 'none',
      id: 'spMozi',
      opacity: 0.8125,
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/spain3.svg','0px','0px']
   },
   {
      rect: ['-438px','-528px','1148px','730px','auto','auto'],
      type: 'rect',
      id: 'hatter',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(192,192,192,1)']
   },
   {
      transform: [],
      rect: ['0px','0px','220px','180px','auto','auto'],
      type: 'image',
      display: 'none',
      id: 'spMozi2',
      opacity: 0.8125,
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/spain3.svg','0px','0px']
   },
   {
      rect: ['449px','-365px','213px','213px','auto','auto'],
      type: 'image',
      id: 'spCataluna',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/spCalanuna.svg','0px','0px']
   },
   {
      rect: ['-67px','-513px','180px','180px','auto','auto'],
      type: 'image',
      id: 'spgalicia',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/spgalicia.svg','0px','0px']
   },
   {
      rect: ['18px','-430px','64px','39px','auto','auto'],
      id: 'spGalInv',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      rect: ['502px','-274px','64px','39px','auto','auto'],
      id: 'spCatInv',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      rect: ['-265px','-558px','213px','213px','auto','auto'],
      type: 'image',
      id: 'spCataluna2',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/spCalanuna.svg','0px','0px']
   },
   {
      rect: ['-437px','-551px','180px','180px','auto','auto'],
      type: 'image',
      id: 'spgalicia2',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/spgalicia.svg','0px','0px']
   },
   {
      rect: ['454px','-500px','164px','39px','auto','auto'],
      type: 'rect',
      id: 'Rectangle8',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(192,192,192,1)']
   },
   {
      display: 'none',
      type: 'rect',
      rect: ['638','-520','auto','auto','auto','auto'],
      id: 'closeSp'
   }],
   symbolInstances: [
   {
      id: 'closeSp',
      symbolName: 'Symbol_1'
   }   ]
   },
   states: {
      "Base State": {
         "${_hatter}": [
            ["subproperty", "filter.drop-shadow.color", 'rgba(172,160,160,1.00)'],
            ["style", "opacity", '0'],
            ["subproperty", "filter.drop-shadow.offsetV", '7px'],
            ["subproperty", "filter.drop-shadow.offsetH", '7px'],
            ["style", "top", '-530px'],
            ["subproperty", "filter.invert", '0'],
            ["style", "height", '730px'],
            ["style", "display", 'none'],
            ["color", "background-color", 'rgba(252,252,252,1.00)'],
            ["subproperty", "filter.drop-shadow.blur", '3px']
         ],
         "${_spCataluna2}": [
            ["style", "top", '-558px'],
            ["style", "display", 'none'],
            ["style", "height", '213px'],
            ["style", "opacity", '0.065574115172761'],
            ["style", "left", '-265px'],
            ["style", "width", '213px']
         ],
         "${_closeSp}": [
            ["style", "display", 'none']
         ],
         "${_spgalicia2}": [
            ["style", "top", '-551px'],
            ["style", "display", 'none'],
            ["style", "height", '180px'],
            ["style", "opacity", '0.065573770491803'],
            ["style", "left", '-437px'],
            ["style", "width", '180px']
         ],
         "${_spgalicia}": [
            ["style", "top", '-513px'],
            ["style", "display", 'none'],
            ["style", "height", '180px'],
            ["style", "opacity", '1'],
            ["style", "left", '-67px'],
            ["style", "width", '180px']
         ],
         "${_spMozi}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${_spGalInv}": [
            ["style", "top", '-443px'],
            ["style", "display", 'block'],
            ["style", "height", '31px'],
            ["style", "left", '3px'],
            ["style", "width", '52px']
         ],
         "${symbolSelector}": [
            ["style", "height", '180px'],
            ["style", "width", '220px']
         ],
         "${_spCataluna}": [
            ["style", "top", '-365px'],
            ["style", "display", 'none'],
            ["style", "height", '213px'],
            ["style", "opacity", '1'],
            ["style", "left", '449px'],
            ["style", "width", '213px']
         ],
         "${_spMozi2}": [
            ["style", "top", '0px'],
            ["style", "cursor", 'pointer'],
            ["style", "display", 'none'],
            ["style", "height", '180px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '220px']
         ],
         "${_spCatInv}": [
            ["style", "top", '-278px'],
            ["style", "display", 'block'],
            ["style", "height", '31px'],
            ["style", "left", '530px'],
            ["style", "width", '52px']
         ],
         "${_Rectangle8}": [
            ["style", "display", 'none']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4020,
         autoPlay: true,
         timeline: [
            { id: "eid362", tween: [ "color", "${_hatter}", "background-color", 'rgba(252,252,252,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(252,252,252,1.00)'}], position: 3010, duration: 0, easing: "easeInOutQuad" },
            { id: "eid412", tween: [ "style", "${_spCatInv}", "top", '-278px', { fromValue: '-278px'}], position: 3025, duration: 0, easing: "easeInOutQuad" },
            { id: "eid375", tween: [ "subproperty", "${_hatter}", "filter.drop-shadow.color", 'rgba(172,160,160,1.00)', { fromValue: 'rgba(172,160,160,1.00)'}], position: 3015, duration: 0, easing: "easeInOutQuint" },
            { id: "eid408", tween: [ "style", "${_spGalInv}", "display", 'none', { fromValue: 'block'}], position: 5, duration: 0, easing: "easeInOutQuad" },
            { id: "eid406", tween: [ "style", "${_spGalInv}", "display", 'block', { fromValue: 'none'}], position: 3025, duration: 0, easing: "easeInOutQuad" },
            { id: "eid403", tween: [ "style", "${_spGalInv}", "display", 'block', { fromValue: 'block'}], position: 4020, duration: 0, easing: "easeInOutQuad" },
            { id: "eid416", tween: [ "style", "${_spGalInv}", "height", '31px', { fromValue: '31px'}], position: 3025, duration: 0, easing: "easeInOutQuad" },
            { id: "eid204", tween: [ "style", "${_spMozi}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000 },
            { id: "eid201", tween: [ "style", "${_spMozi}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid379", tween: [ "style", "${_spCataluna}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid383", tween: [ "style", "${_spCataluna}", "display", 'block', { fromValue: 'none'}], position: 3020, duration: 0, easing: "easeInOutQuad" },
            { id: "eid360", tween: [ "style", "${_hatter}", "height", '757px', { fromValue: '730px'}], position: 2005, duration: 1005, easing: "easeInOutQuad" },
            { id: "eid372", tween: [ "subproperty", "${_hatter}", "filter.drop-shadow.offsetH", '7px', { fromValue: '7px'}], position: 3015, duration: 0, easing: "easeInOutQuint" },
            { id: "eid418", tween: [ "style", "${_spGalInv}", "width", '52px', { fromValue: '52px'}], position: 3025, duration: 0, easing: "easeInOutQuad" },
            { id: "eid398", tween: [ "style", "${_spgalicia}", "opacity", '0', { fromValue: '1'}], position: 3025, duration: 995, easing: "easeInOutQuad" },
            { id: "eid376", tween: [ "style", "${_spgalicia2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid380", tween: [ "style", "${_spgalicia2}", "display", 'block', { fromValue: 'none'}], position: 3020, duration: 0, easing: "easeInOutQuad" },
            { id: "eid359", tween: [ "style", "${_spMozi2}", "left", '-70px', { fromValue: '0px'}], position: 2005, duration: 1005 },
            { id: "eid371", tween: [ "subproperty", "${_hatter}", "filter.invert", '0', { fromValue: '0'}], position: 3015, duration: 0, easing: "easeInOutQuint" },
            { id: "eid361", tween: [ "style", "${_hatter}", "top", '-551px', { fromValue: '-530px'}], position: 2005, duration: 1005, easing: "easeInOutQuad" },
            { id: "eid378", tween: [ "style", "${_spgalicia}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid382", tween: [ "style", "${_spgalicia}", "display", 'block', { fromValue: 'none'}], position: 3020, duration: 0, easing: "easeInOutQuad" },
            { id: "eid410", tween: [ "style", "${_spGalInv}", "top", '-443px', { fromValue: '-443px'}], position: 3025, duration: 0, easing: "easeInOutQuad" },
            { id: "eid413", tween: [ "style", "${_spCatInv}", "height", '31px', { fromValue: '31px'}], position: 3025, duration: 0, easing: "easeInOutQuad" },
            { id: "eid357", tween: [ "style", "${_spMozi2}", "top", '-520px', { fromValue: '0px'}], position: 2005, duration: 1005 },
            { id: "eid377", tween: [ "style", "${_spCataluna2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid381", tween: [ "style", "${_spCataluna2}", "display", 'block', { fromValue: 'none'}], position: 3020, duration: 0, easing: "easeInOutQuad" },
            { id: "eid203", tween: [ "style", "${_spMozi}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid415", tween: [ "style", "${_spCatInv}", "width", '52px', { fromValue: '52px'}], position: 3025, duration: 0, easing: "easeInOutQuad" },
            { id: "eid392", tween: [ "style", "${_spgalicia2}", "opacity", '1', { fromValue: '0.06557399779558182'}], position: 3020, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid358", tween: [ "style", "${_spMozi2}", "width", '790px', { fromValue: '220px'}], position: 2005, duration: 1005 },
            { id: "eid373", tween: [ "subproperty", "${_hatter}", "filter.drop-shadow.offsetV", '7px', { fromValue: '7px'}], position: 3015, duration: 0, easing: "easeInOutQuint" },
            { id: "eid356", tween: [ "style", "${_spMozi2}", "height", '646px', { fromValue: '180px'}], position: 2005, duration: 1005 },
            { id: "eid368", tween: [ "style", "${_hatter}", "opacity", '0.8', { fromValue: '0'}], position: 2005, duration: 1010, easing: "easeInOutQuad" },
            { id: "eid262", tween: [ "style", "${_spMozi2}", "display", 'none', { fromValue: 'none'}], position: 1010, duration: 0 },
            { id: "eid263", tween: [ "style", "${_spMozi2}", "display", 'block', { fromValue: 'none'}], position: 2005, duration: 0 },
            { id: "eid417", tween: [ "style", "${_spGalInv}", "left", '3px', { fromValue: '3px'}], position: 3025, duration: 0, easing: "easeInOutQuad" },
            { id: "eid394", tween: [ "style", "${_spCataluna2}", "opacity", '1', { fromValue: '0.06557399779558182'}], position: 3020, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid364", tween: [ "style", "${_hatter}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid365", tween: [ "style", "${_hatter}", "display", 'block', { fromValue: 'none'}], position: 2005, duration: 0, easing: "easeInOutQuad" },
            { id: "eid363", tween: [ "style", "${_hatter}", "display", 'block', { fromValue: 'block'}], position: 3010, duration: 0, easing: "easeInOutQuad" },
            { id: "eid407", tween: [ "style", "${_spCatInv}", "display", 'none', { fromValue: 'block'}], position: 5, duration: 0, easing: "easeInOutQuad" },
            { id: "eid405", tween: [ "style", "${_spCatInv}", "display", 'block', { fromValue: 'none'}], position: 3025, duration: 0, easing: "easeInOutQuad" },
            { id: "eid404", tween: [ "style", "${_spCatInv}", "display", 'block', { fromValue: 'block'}], position: 4020, duration: 0, easing: "easeInOutQuad" },
            { id: "eid400", tween: [ "style", "${_Rectangle8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid401", tween: [ "style", "${_Rectangle8}", "display", 'block', { fromValue: 'none'}], position: 3015, duration: 0, easing: "easeInOutQuad" },
            { id: "eid205", tween: [ "style", "${_spMozi}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid206", tween: [ "style", "${_spMozi}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid264", tween: [ "style", "${_spMozi}", "display", 'none', { fromValue: 'block'}], position: 2005, duration: 0 },
            { id: "eid374", tween: [ "subproperty", "${_hatter}", "filter.drop-shadow.blur", '3px', { fromValue: '3px'}], position: 3015, duration: 0, easing: "easeInOutQuint" },
            { id: "eid399", tween: [ "style", "${_spCataluna}", "opacity", '0', { fromValue: '1'}], position: 3025, duration: 995, easing: "easeInOutQuad" },
            { id: "eid414", tween: [ "style", "${_spCatInv}", "left", '530px', { fromValue: '530px'}], position: 3025, duration: 0, easing: "easeInOutQuad" },
            { id: "eid421", tween: [ "style", "${_closeSp}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid422", tween: [ "style", "${_closeSp}", "display", 'block', { fromValue: 'none'}], position: 4020, duration: 0, easing: "easeInOutQuad" }         ]
      }
   }
},
"Symbol_1": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'rect',
      id: 'Rectangle11',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','0px','62px','68px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',72,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'Text6',
      text: 'X<br>',
      align: 'left',
      rect: ['7px','-6px','62px','68px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text6}": [
            ["style", "top", '-6px'],
            ["style", "height", '68px'],
            ["style", "width", '62px'],
            ["style", "left", '7px'],
            ["style", "font-size", '72px']
         ],
         "${_Rectangle11}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '68px'],
            ["style", "width", '62px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"Symbol_2": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'eu62',
      type: 'image',
      rect: ['410px','0px','762px','800px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/eu62.svg','0px','0px']
   },
   {
      id: 'pt',
      type: 'rect',
      rect: ['32px','155px','auto','auto','auto','auto']
   },
   {
      id: 'SP',
      type: 'rect',
      rect: ['438px','570px','auto','auto','auto','auto']
   },
   {
      id: 'spain2',
      type: 'rect',
      rect: ['148px','129px','auto','auto','auto','auto']
   },
   {
      id: 'portugal2',
      type: 'rect',
      rect: ['32px','155px','auto','auto','auto','auto']
   },
   {
      rect: ['500px','592px','60px','57px','auto','auto'],
      transform: [[],[],[],['0.55','0.52432']],
      id: 'spInv',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      rect: ['101px','61px','88px','40px','auto','auto'],
      id: 'gomb1',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      rect: ['430px','615px','37px','94px','auto','auto'],
      transform: [[],['20'],[],['0.56916','0.54704']],
      id: 'ptInv',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      id: 'spMozi',
      type: 'rect',
      rect: ['438px','570px','auto','auto','auto','auto']
   },
   {
      rect: ['0px','30px','54px','51px','auto','auto'],
      id: 'delete',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(231,38,38,1.00)']
   }],
   symbolInstances: [
   {
      id: 'spMozi',
      symbolName: 'spMozi'
   },
   {
      id: 'pt',
      symbolName: 'portugal'
   },
   {
      id: 'SP',
      symbolName: 'SP'
   },
   {
      id: 'portugal2',
      symbolName: 'portugal'
   },
   {
      id: 'spain2',
      symbolName: 'spain'
   }   ]
   },
   states: {
      "Base State": {
         "${_portugal2}": [
            ["style", "top", '172px'],
            ["style", "opacity", '0.5078125'],
            ["style", "left", '33px']
         ],
         "${_eu62}": [
            ["style", "left", '410px'],
            ["style", "top", '0px']
         ],
         "${_pt}": [
            ["style", "top", '606px'],
            ["style", "opacity", '1'],
            ["style", "left", '419px']
         ],
         "${_gomb1}": [
            ["style", "top", '61px'],
            ["style", "left", '101px']
         ],
         "${_spInv}": [
            ["style", "top", '592px'],
            ["transform", "scaleY", '0.52432'],
            ["style", "height", '57px'],
            ["transform", "scaleX", '0.55'],
            ["style", "opacity", '0'],
            ["style", "left", '500px'],
            ["style", "width", '60px']
         ],
         "${_spMozi}": [
            ["style", "left", '438px'],
            ["style", "top", '570px']
         ],
         "${symbolSelector}": [
            ["style", "height", '800px'],
            ["style", "width", '1172px']
         ],
         "${_ptInv}": [
            ["style", "top", '615px'],
            ["transform", "scaleY", '0.54704'],
            ["transform", "rotateZ", '20deg'],
            ["transform", "scaleX", '0.56916'],
            ["style", "opacity", '0'],
            ["style", "left", '430px']
         ],
         "${_spain2}": [
            ["style", "top", '129px'],
            ["style", "opacity", '0.5'],
            ["style", "left", '148px']
         ],
         "${_delete}": [
            ["color", "background-color", 'rgba(231,38,38,1.00)'],
            ["style", "left", '0px'],
            ["style", "top", '30px']
         ],
         "${_SP}": [
            ["style", "top", '570px'],
            ["style", "opacity", '1'],
            ["style", "left", '438px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1010,
         autoPlay: true,
         timeline: [
            { id: "eid150", tween: [ "style", "${_portugal2}", "opacity", '1', { fromValue: '0.5078125'}], position: 0, duration: 1005 },
            { id: "eid180", tween: [ "style", "${_spain2}", "opacity", '1', { fromValue: '0.5'}], position: 0, duration: 1010 },
            { id: "eid164", tween: [ "style", "${_SP}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 1000 },
            { id: "eid82", tween: [ "style", "${_pt}", "left", '419px', { fromValue: '419px'}], position: 0, duration: 0 },
            { id: "eid141", tween: [ "style", "${_pt}", "left", '419px', { fromValue: '419px'}], position: 1005, duration: 0 },
            { id: "eid85", tween: [ "style", "${_pt}", "top", '606px', { fromValue: '606px'}], position: 0, duration: 0 },
            { id: "eid142", tween: [ "style", "${_pt}", "top", '606px', { fromValue: '606px'}], position: 1005, duration: 0 },
            { id: "eid167", tween: [ "style", "${_pt}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid184", tween: [ "style", "${_pt}", "opacity", '0', { fromValue: '1'}], position: 1005, duration: 0 },
            { id: "eid185", tween: [ "style", "${_pt}", "opacity", '0', { fromValue: '0'}], position: 1010, duration: 0 },
            { id: "eid423", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${_portugal2}', [0] ], ""], position: 0 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-177853578");
