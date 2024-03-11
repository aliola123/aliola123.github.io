//Hide and unhide toggle list
    document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("toggleButton");
    var list = document.getElementById("list");

    button.addEventListener("click", function () {
        list.classList.toggle("hidden");
    });
    });

    //toggle click outside
    const toggleButton = document.getElementById("toggleButton");
    const myList = document.getElementById("list");

    function toggleList() {
        myList.style.display = (myList.style.display === "block") ? "none" : "block";
    }

    toggleButton.addEventListener("click", toggleList);

    document.addEventListener("click", function (event) {
        const target = event.target;
        if (target !== toggleButton && !myList.contains(target)) {
            myList.style.display = "none";
        }
    });

    //Back to top scroll button
    document.addEventListener("DOMContentLoaded", function() {
        const backToTopBtn = document.getElementById("backToTopBtn");

        window.addEventListener("scroll", function() {
          const viewportHeight = window.innerHeight;
          const scrollPosition = window.scrollY;

          if (scrollPosition > viewportHeight) {
            backToTopBtn.style.display = "block";
          } else {
            backToTopBtn.style.display = "none";
          }
        });
         backToTopBtn.addEventListener("click", function() {
          window.scrollTo({ top: 0, behavior: "smooth"});
        });
      });

    //Toggle Dropdown
    function toggleDropdown() {
    var toggleButton = document.getElementById('toggleButton');
    var list = document.getElementById('list');

    // Toggle between bars and x icons
    toggleButton.classList.toggle('fa-bars');
    toggleButton.classList.toggle('fa-times');
  }


  //to change top banner image
  const imageSources = ["../img_folder/banner1.jpeg", "../img_folder/banner2.jpeg", "../img_folder/banner3.jpeg", "../img_folder/banner4.jpeg", "../img_folder/banner5.jpeg", "../img_folder/AutoPartsBanner.jpg"];

  let currentImageIndex = 0;
  const imageElement = document.getElementById("banner");

  function changeImage() {
        imageElement.style.opacity = 0.7;

        setTimeout(() => {
        imageElement.src = imageSources[currentImageIndex];
        imageElement.style.opacity = 1;
        currentImageIndex = (currentImageIndex + 1)  % imageSources.length;
  }, 1000);}

  //set interval to change image every 2secs/2000ms
  setInterval(changeImage, 4000);