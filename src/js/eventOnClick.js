window.onload = function () {
  window.handleClick = function (event) {
    // restore the previous clicked event
    if (window.currentEvent) {
      const currentArrow = window.currentEvent.querySelector("#event-arrow");
      currentArrow.classList.add("hidden");

      const title = window.currentEvent.querySelector("#event-title");
      title.classList.remove("text-2xl");
      title.classList.add("text-lg");

      const time = window.currentEvent.querySelector("#event-time");
      time.classList.remove("text-base");
      time.classList.add("text-sm");
    }

    const clickedEvent = event.currentTarget;
    const clickedArrow = clickedEvent.querySelector("#event-arrow");
    const eventTitle = clickedEvent.querySelector("#event-title");
    const eventTime = clickedEvent.querySelector("#event-time");
    const eventDescription = clickedEvent.querySelector("#event-description");
    //const eventImage = clickedEvent.querySelector('#event-img');

    // modify the clicked event
    clickedArrow.classList.remove("hidden");

    eventTitle.classList.remove("text-lg");
    eventTitle.classList.add("text-2xl");

    eventTime.classList.remove("text-sm");
    eventTime.classList.add("text-base");

    // purple info container
    document.getElementById("container-event-title").innerText =
      eventTitle.innerText;

    document.getElementById("container-event-time").innerText =
      eventTime.innerText;

    document.getElementById("container-event-description").innerText =
      eventDescription.innerText;

    //let containerImg = document.getElementById("container-event-img");
    //containerImg.src = eventImage.src;
    //containerImg.classList.remove("hidden");

    // Save a pointer to the new element
    window.currentEvent = clickedEvent;
  };

  window.handleDayClick = function (day) {
    const dayTitle = day.querySelector("#day-title");
    document.getElementById("container-day-title").innerText =
      dayTitle.innerText;
  };

  const firstEvent = document.querySelector(".event");
  if (firstEvent) {
    firstEvent.click();
  }
};
