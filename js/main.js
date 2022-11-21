$(document).ready(function () {
  $(".brands-slider").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $(".sales-slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $(".news-slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $(".partners-slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

window.onload = function () {
  const main = document.querySelector(".main");

  const moleculaBigLeft = document.querySelector(".mb-left");
  const moleculaSmallLeft = document.querySelector(".ms-left");

  const moleculaBigRight = document.querySelector(".mb-right");
  const moleculaSmallRight = document.querySelector(".ms-right");

  const forBigMolecula = 5;
  const forSmallMolecula = 10;

  const speed = 0.2;

  let positionX = 0;
  let positionY = 0;
  let coordXprocent = 0;
  let coordYprocent = 0;

  function setMouseParallaxStyle() {
    const distX = coordXprocent - positionX;
    const distY = coordYprocent - positionY;

    positionX = positionX + distX * speed;
    positionY = positionY + distY * speed;

    moleculaBigLeft.style.cssText = `transform: translate(${
      positionX / forBigMolecula
    }%, ${positionY / forBigMolecula}%);`;

    moleculaSmallLeft.style.cssText = `transform: translate(${
      positionX / forSmallMolecula
    }%, ${positionY / forBigMolecula}%);`;

    moleculaBigRight.style.cssText = `transform: translate(${
      -positionX / forBigMolecula
    }%, ${-positionY / forBigMolecula}%);`;

    moleculaSmallRight.style.cssText = `transform: translate(${
      -positionX / forSmallMolecula
    }%, ${-positionY / forBigMolecula}%);`;

    requestAnimationFrame(setMouseParallaxStyle);
  }

  setMouseParallaxStyle();

  main.addEventListener("mousemove", function (e) {
    const parallaxWidth = main.offsetWidth;
    const parallaxHeight = main.offsetHeight;

    const coordX = e.pageX - parallaxWidth;
    const coordY = (e.pageY - parallaxHeight) * 2;

    coordXprocent = (coordX / parallaxWidth) * 100;
    coordYprocent = (coordY / parallaxHeight) * 100;
  });
};
