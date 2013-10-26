////// Thyroxine weight based ////////
        
        $('input[type="submit"]').click(function() {
            var val = $('#weight').val();
            var kg = val / 2.2 ;
          var thyroxineDose = kg * 1.6;
          thyroxine.value = thyroxineDose;
          
            return false;
        });
        
        
        /////////// Pound to Kg /////////////
        
        document.getElementById("calc").onclick=function(){
            
          
            var val = $('#pound').val();
            var kilo = val / 2.2 ;
            kilogram.value = Math.ceil(kilo);
          
            return false;
            
            };
            
        /////////// Calculate BMI ////////////////
        
        document.getElementById("calcBMI").onclick=function(){
            
          
            var wt = $('#wt2').val();
            var ht = $('#height').val();
            //alert(wt);
            //alert(ht);
            var bodymassindex = [ (wt / (ht * ht)) * 703];
            bmi.text= toString(bodymassindex);
            bt.value=Math.round(bodymassindex);
            return false;
            
            };