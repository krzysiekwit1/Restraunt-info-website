window.addEventListener("load", () =>
  document.querySelector(".preloader").classList.add("hidePreloader")
);
// Filter
const FilterCars = (() => {
  const filter = document.querySelectorAll(".filter-btn");
  console.log(filter);
  filter.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const value = event.target.dataset.filter;
      const singleCar = document.querySelectorAll(".single-car");

      singleCar.forEach((car) => {
        if (value === "all") {
          car.style.display = "block";
        } else {
          !car.classList.contains(value)
            ? (car.style.display = "none")
            : (car.style.display = "block");
        }
      });
    });
  });
})();
