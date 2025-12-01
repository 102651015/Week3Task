const clickMe = () => {
  alert("Thanks for clicking me. Hope you have a nice day!");
};

const submitForm = () => {
  let formData = {};
  formData.first_name = $("#first_name").val();
  formData.last_name = $("#last_name").val();
  formData.password = $("#password").val();
  formData.email = $("#email").val();
  console.log("Form Data Submitted: ", formData);
};

const addCards = (items) => {
  $("#card-section").empty(); // delete HTML default card

  items.forEach((item) => {
    const itemToAppend =
      '<div class="col s4 center-align">' +
      '<div class="card medium">' +
      '<div class="card-image waves-effect waves-block waves-light">' +
      '<img class="activator" src="' + item.image + '">' +
      "</div>" +
      '<div class="card-content">' +
      '<span class="card-title activator grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">more_vert</i></span>' +
      '<p><a href="#">' + item.link + "</a></p>" +
      "</div>" +
      '<div class="card-reveal">' +
      '<span class="card-title grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">close</i></span>' +
      '<p class="card-text">' + item.description + "</p>" +
      "</div>" +
      "</div>" +
      "</div>";

    $("#card-section").append(itemToAppend);
  });
};

const loadCards = async () => {
  const res = await fetch("/api/cards");
  if (!res.ok) throw new Error(`GET /api/cards failed: ${res.status}`);
  const items = await res.json();
  addCards(items);
};

$(document).ready(function () {
  $(".materialboxed").materialbox();
  $(".modal").modal();

  $("#formSubmit").click(() => submitForm());
  $("#clickMeButton").click(() => clickMe());

  loadCards().catch(console.error);
});

