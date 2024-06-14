window.onload = function () {
  const img = document.querySelector(".profile-picture");
  img.classList.add("loaded");
};

document.querySelectorAll(".nav-item").forEach(function (item) {
  item.addEventListener("click", function () {
    var alertContainer = document.getElementById("alert-container");
    var alert = document.createElement("div");
    alert.className = "alert alert-warning alert-dismissible fade show";
    alert.role = "alert";
    alert.innerHTML = `
        Website masih dalam tahap pengembangan.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      `;
    alertContainer.appendChild(alert);
  });
});
