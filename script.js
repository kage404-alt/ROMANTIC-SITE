function nextPage(currentPage) {

  const pages = document.querySelectorAll(".page");

  pages.forEach(page => {
    page.classList.remove("active");
  });

  const next =
    document.querySelector(".page" + (currentPage + 1));

  if (next) {
    next.classList.add("active");
  }
}


/* تأثير هيلو كيتي والفراشات */

function kittyEffect() {

  const kitty =
    document.querySelector(".corner");

  kitty.style.transform =
    "scale(1.35) rotate(15deg)";

  setTimeout(() => {
    kitty.style.transform = "";
  }, 500);


  for (let i = 0; i < 55; i++) {

    const butterfly =
      document.createElement("div");

    butterfly.className = "butterfly";

    butterfly.innerHTML = "🦋";

    const fromLeft =
      Math.random() < 0.5;


    if (fromLeft) {

      butterfly.style.left =
        Math.random() * 10 + "vw";

      butterfly.style.top =
        25 + Math.random() * 55 + "vh";

      butterfly.style.setProperty(
        "--x",
        180 + Math.random() * 400 + "px"
      );

    } else {

      butterfly.style.left =
        90 + Math.random() * 10 + "vw";

      butterfly.style.top =
        25 + Math.random() * 55 + "vh";

      butterfly.style.setProperty(
        "--x",
        -180 - Math.random() * 400 + "px"
      );
    }


    butterfly.style.setProperty(
      "--y",
      -100 - Math.random() * 400 + "px"
    );


    butterfly.style.animationDelay =
      Math.random() * 0.7 + "s";


    document.body.appendChild(butterfly);


    setTimeout(() => {
      butterfly.remove();
    }, 3000);

  }


  /* الانتقال للصفحة البيضاء */

  setTimeout(() => {

    document
      .querySelectorAll(".page")
      .forEach(page => {
        page.classList.remove("active");
      });

    document
      .querySelector(".page3")
      .classList.add("active");

  }, 1200);

}


/* النجوم */

const stars =
  document.getElementById("stars");


for (let i = 0; i < 180; i++) {

  const star =
    document.createElement("div");

  star.className = "star";


  star.style.left =
    Math.random() * 100 + "%";


  star.style.top =
    Math.random() * 100 + "%";


  const size =
    Math.random() * 3 + 1;


  star.style.width =
    size + "px";


  star.style.height =
    size + "px";


  star.style.setProperty(
    "--time",
    1 + Math.random() * 3 + "s"
  );


  star.style.animationDelay =
    -Math.random() * 3 + "s";


  stars.appendChild(star);

}


/* تشغيل الأغنية */

function playMusic() {

  const music =
    document.getElementById("music");


  if (music.paused) {

    music.play().catch(() => {

      alert(
        "حط ملف Interstellar.mp3 داخل نفس مجلد الموقع حتى تشتغل الأغنية 🎵"
      );

    });

  } else {

    music.pause();

  }

}
