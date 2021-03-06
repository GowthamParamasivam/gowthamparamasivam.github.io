const autoType = () => {
  const job = $("#job").get(0);
  const typewriter = new Typewriter(job, { loop: true });

  typewriter
    .typeString("Certified Blockchain Developer")
    .pauseFor(2500)
    .deleteAll()
    .typeString("Java Developer")
    .pauseFor(2500)
    .start();
};

const goToContact = () => {
  $(".button.contact").on("click", function() {
    $(".navbar a[name=contact]").click();
  });
};

const downloadCV = () => {
  $(".button.download").on("click", function() {
    window.open(
      "https://drive.google.com/file/d/1XiNzPuDW6fgavhheuW3srN8ecXNEpdtL/view"
    );
  });
};

export { autoType, downloadCV, goToContact };
