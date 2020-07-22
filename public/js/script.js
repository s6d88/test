$(document).ready(function(){

    $('input[type="checkbox"]').click(function(){

        if($(this).prop("checked") == true){

            console.log("Checkbox is checked.");
            $(".row#Togledvar").removeClass("Togledvar");
            $(".row#Togledvar").addClass("TogledvarShow");

        }
        else if($(this).prop("checked") == false){

            console.log("Checkbox is unchecked.");
            $(".row#Togledvar").addClass("Togledvar");
            $(".row#Togledvar").removeClass("TogledvarShow");
        }

    });

    // 

    function onClick(event) {
        var names = $('input[name=varaiantValues[]]').val();
        var nameArr = names.split(',');
        console.log(nameArr);
        event.preventDefault();
    }
    
    // attach button click listener on dom ready
    $(function() {
      $('button[type=submit]').click(onClick);
    });
    // addOption
    $('#addOption').click(function () {
        $('<div class="col-sm-3"><div class="form-group"><label>Options</label> <select type="text" name="varaiant" class="custom-select"><option value="size">Size</option> <option value="color">Color</option> <option value="material">Material</option> <option value="style">Style</option> <option value="tytle">Title</option></select> <!----></div></div> <div class="col-sm-7"><div class="form-group"><label>Varaint</label> <input placeholder="Enter ..." type="text" name="varaiantValues[]" class="form-control"></div></div> <div class="col-sm-2"><div class="form-group"><label></label> <button placeholder="Enter ..." class="form-control btn btn-info">Ajouter</button></div></div> <div class="col-md-4"><div class="form-group"></div></div>').appendTo('.insertrow.container.row'); 
        });
        
        
});