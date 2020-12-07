$(document).ready(function () {
  $.ajax("/burgers").then(function (data) {
    console.log(data.burgers);
    // var burger_name = data.burger_name;
    // var len = burger_name.length;
    var burger_elem = $("#not_devoured")
    for (let index = 0; index < data.burgers.length; index++) {

      console.log(data.burgers[index].burger_name)
      burger_elem.prepend(`<ul><p>${data.burgers[index].burger_name}<button data=${data.burgers[index].id} class='devour'>Devour</button></p></ul>`)
    }
});

  // $(document).on("click",".delQuote", function(event) {
  //   // Get the ID from the button.
  //   // This is shorthand for $(this).attr("data-planid")
  //   var id = $(this).data("quoteid");

  //   // Send the DELETE request.
  //   $.ajax("/quotes/" + id, {
  //     type: "DELETE"
  //   }).then(
  //     function() {
  //       console.log("deleted id ", id);
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });

  $("#submitbtn").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("this is happening")

    var newBurger = {
      burger_name: $("#burger_name").val().trim()
    };

    // Send the POST request.
    $.ajax("/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(document).on("click", ".devour", function (event) {
    // console.log("test");
    // Make sure to preventDefault on a submit event.
    event.preventDefault();



    var id = $(event.target).attr("data")
    console.log(id);
    
    var devouredBurger = {
      // devoured = 0
    };

    // Send the PUT request.
    $.ajax("/burger/" + id, {
      type: "PUT",
      data: devouredBurger
    }).then(
      function() {
        console.log("updated id ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

})

