jQuery(document).ready(function () {
  jQuery(".brand__title").addClass("hidden").viewportChecker({
    classToAdd: "visible animated bounce",
    offset: 300,
  });

  jQuery(".catalog__offer").addClass("hidden").viewportChecker({
    classToAdd: "visible animated slideInUp",
    offset: 300,
  });

  jQuery(".fetured").addClass("hidden").viewportChecker({
    classToAdd: "visible animated fadeIn",
    offset: 300,
  });

  jQuery(".fetured__title").addClass("hidden").viewportChecker({
    classToAdd: "visible animated slideInLeft",
    offset: 300,
  });

  jQuery(".fetured__subtitle").addClass("hidden").viewportChecker({
    classToAdd: "visible animated slideInRight",
    offset: 300,
  });

  jQuery(".fetured__allProduct").addClass("hidden").viewportChecker({
    classToAdd: "visible animated rubberBand",
    offset: 300,
  });

  jQuery(".offer").addClass("hidden").viewportChecker({
    classToAdd: "visible animated slideInUp",
    offset: 300,
  });

  jQuery(".subscribe").addClass("hidden").viewportChecker({
    classToAdd: "visible animated flipInY",
    offset: 300,
  });

  jQuery(".footer__nav").addClass("hidden").viewportChecker({
    classToAdd: "visible animated headShake",
    offset: 300,
  });

  jQuery(".footer").addClass("hidden").viewportChecker({
    classToAdd: "visible animated fadeInUp",
    offset: 50,
  });

  jQuery(".checkout__items").addClass("hidden").viewportChecker({
    classToAdd: "visible animated fadeInUp",
    offset: 150,
  });

  jQuery(".basket__header").addClass("hidden").viewportChecker({
    classToAdd: "visible animated fadeInUp",
    offset: 150,
  });

  jQuery(".basket__bottom").addClass("hidden").viewportChecker({
    classToAdd: "visible animated bounceInLeft",
    offset: 250,
  });

  jQuery(".shopping ").addClass("hidden").viewportChecker({
    classToAdd: "visible animated rotateInUpRight",
    offset: 250,
  });

  jQuery(".description ").addClass("hidden").viewportChecker({
    classToAdd: "visible animated rotateInUpRight",
    offset: 250,
  });

  jQuery(".slider ").addClass("hidden").viewportChecker({
    classToAdd: "visible animated slideInLeft",
    offset: 250,
  });
  jQuery(".crumps ").addClass("hidden").viewportChecker({
    classToAdd: "visible animated slideInRight",
    offset: 0,
  });

  jQuery(".top-nav ").addClass("hidden").viewportChecker({
    classToAdd: "visible animated slideInLeft",
    offset: 0,
  });

  jQuery(".cart ").addClass("hidden").viewportChecker({
    classToAdd: "visible animated bounce",
    offset: 0,
  });

  jQuery(".my-account ").addClass("hidden").viewportChecker({
    classToAdd: "visible animated slideInRight",
    offset: 0,
  });
});
