$(function () {
  //Creates a New Burger
  $(".create-form").on("submit", function (event) {
    event.preventDefault();
    console.log("hello");
    var newBurger = {
      name: $("#burg").val().trim(),
      devoured: 0,
    };
    console.log("Making burger");
    console.log(newBurger);
    //Send Post Request
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("Created new Burger");
      location.reload();
    });
  });

  //Changing Devoured status of burgers
  $(".change-devoured").on("click", function (event) {
    var id = $(this).data("id");
    var newDevouredState = {
      devoured: true,
    };
    //Send Put Request
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState,
    }).then(function (newDevoured) {
      console.log("changed devoured to", newDevoured);
      location.reload();
    });
  });
  //On click function for delete
  $(".del-btn").on("click", function (event) {
    event.preventDefault();
    let id = $(this).attr("data-id");

    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(function (id) {
      console.log(`Deleted burger with ID = ${id}`);
      location.reload();
    });
  });
});
