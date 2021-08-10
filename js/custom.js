(function($) {
	
	"use strict";


    $(document).ready(function(){
        const searchWrap = document.querySelector(".inner-content");
        const resultBox = searchWrap.querySelector(".content-list");
        $("#searchNow").click(function(e){
    
            $(".searchbody").removeClass('hide-content');
            
        });
        $(".input-right-icon").click(function(e){
    
            $(".searchbody").addClass('hide-content');
            
        });
        $("input").keyup(function(e){
            let itemData = this.value;
            let emptyArray = [];
            if(itemData){
             
                $("#activesearch").addClass('hide-content');
                $("#onSearch").removeClass('hide-content');
                items.forEach(function(obj){
                    obj.name = obj.name.toLowerCase();
                });
                emptyArray = items.filter(data => {
                    return data.name.startsWith(itemData.toLowerCase())
                 
                        
                })
                emptyArray = emptyArray.map(function(obj){
                    return obj =  "<div class='search-content'>"+
                                    "<a href='#' style='display: inline-flex;'><img  class='search-img' src='"+obj.image+"'>"+
                                    "<div  class='name' style='position: absolute;"+
                                    "top: 50%;"+
                                    "transform: translate(0, -50%);"+
                                    "left: 80px;'> "+obj.name+" </div></a>"+
                                    "</div>";
                })
                bindItems(emptyArray,itemData)
                console.log(emptyArray) 
            
                
            }
            else{
                $("#activesearch").removeClass('hide-content');
                $("#onSearch").addClass('hide-content');
            }
 
            
        });

        function bindItems(list,inputValue){
            let listOfItems;
            console.log(inputValue)
            if(!list.length){
                listOfItems = "<div style='text-align:center;'>No result found for:'"+inputValue+"'</div>"

            }else{
                listOfItems = list.join('');
            }
            resultBox.innerHTML = listOfItems;
        }
       
    });
})(window.jQuery);