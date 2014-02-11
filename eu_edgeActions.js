/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20, function(sym, e) {
         

      });
      //Edge binding end

      

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'spain'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("spain");
   //Edge symbol end:'spain'

   //=========================================================
   
   //Edge symbol: 'portugal'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         
         
         
         

      });
      //Edge binding end

   })("portugal");
   //Edge symbol end:'portugal'

   //=========================================================
   
   //Edge symbol: 'SP'
   (function(symbolName) {   
   
   })("SP");
   //Edge symbol end:'SP'

   //=========================================================
   
   //Edge symbol: 'spMozi'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_spMozi}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play(2000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle8}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play(3100);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4020, function(sym, e) {
         // insert code here
         sym.stop();
         
         // insert code to be run when the symbol is created here
         yepnope({nope:['jquery-ui-1.10.3.custom.min.js','jquery.ui.touch-punch.min.js'], complete: initSp});
         
         function initSp (){
         
         
         
         sym.$('spCataluna2').draggable({revert: 'invalid'});
         sym.$('spCatInv').droppable({accept:sym.$("spCataluna2"),drop: function() {sym.getSymbol("spCataluna2").play();}});
         
         sym.$('spgalicia2').draggable({revert: 'invalid'});
         sym.$('spGalInv').droppable({ drop: function() {sym.getSymbol("spgalicia2").play();}});
         
         
         }
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3025, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_closeSp}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play(1000);

      });
      //Edge binding end

   })("spMozi");
   //Edge symbol end:'spMozi'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

   //=========================================================
   
   //Edge symbol: 'Symbol_2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_gomb1}", "click", function(sym, e) {
         sym.play();
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_delete}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play(0);

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1005, function(sym, e) {
         // insert code here
         // insert code here
         sym.stop();
         // insert code to be run when the symbol is created here
         yepnope({nope:['jquery-ui-1.10.3.custom.min.js','jquery.ui.touch-punch.min.js'], complete: init});
         
         function init (){
         
         
         
         sym.$('spain2').draggable({revert: 'invalid'});
         sym.$('spInv').droppable({accept:sym.$("spain2"),drop: function() {sym.getSymbol("spain2").play(1000); sym.getSymbol("spMozi").play(1000);}});
         
         sym.$('portugal2').draggable({revert: 'invalid'});
         sym.$('ptInv').droppable({ drop: function() {sym.getSymbol("portugal2").play();}});
         
         
         
         sym.$('france2').draggable({revert: 'invalid'});
         sym.$('frInv').droppable({accept:sym.$("fr2"),drop: function() {sym.getSymbol("france2").play(1000); sym.getSymbol("frMozi").play(1000);}});
         
         sym.$('deutsch2').draggable({revert: 'invalid'});
         sym.$('dInv').droppable({ drop: function() {sym.getSymbol("deutsch2").play();}});
         
         
         
         
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         
         sym.stop();
         //sym.$('spain2').play;

      });
      //Edge binding end

   })("Symbol_2");
   //Edge symbol end:'Symbol_2'

})(jQuery, AdobeEdge, "EDGE-177853578");