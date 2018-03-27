$( document ).ready(function() {


  function changeContentOrder() {
    setTimeout(function(){
        $("#content").css("z-index", "1000");
        $("#white").css("z-index", "900");
        $("#menu").css("z-index", "800")
      }, 1100);
  }


  $( "#button" ).mouseenter(function() {
    $("#content").css("z-index", "800");
    $("#white").css("z-index", "900");
    $("#menu").css("z-index", "1000")
  });

    $("#da_top_nav").on('click', function() {
      $("HTML, BODY").animate({ scrollTop: $("#design_art").offset().top }, 500);
      changeContentOrder();
    });
    $("#f_top_nav").on('click', function() {
      $("HTML, BODY").animate({ scrollTop: $("#fashion").offset().top }, 500);
      changeContentOrder();
    });
    $("#m_top_nav").on('click', function() {
      $("HTML, BODY").animate({ scrollTop: $("#music").offset().top }, 500);
      changeContentOrder();
    });



    $("#cc").on('click', function() {
      var position_cc = $("#chuck_close").offset().top;
      $("HTML, BODY").animate({ scrollTop: position_cc }, 500);
      changeContentOrder();
    });
    $("#js").on('click', function() {
      var position_js = $("#jen_stark").offset().top;
      $("HTML, BODY").animate({ scrollTop: position_js }, 500);
      changeContentOrder();
    });
    $("#mm").on('click', function() {
      var position_mm = $("#marilyn").offset().top;
      $("HTML, BODY").animate({ scrollTop: position_mm }, 500);
      changeContentOrder();
    });
    $("#nt").on('click', function() {
      var position_nt = $("#nick_thomm").offset().top;
      $("HTML, BODY").animate({ scrollTop: position_nt }, 500);
      changeContentOrder();
    });
    $("#ob").on('click', function() {
      var position_ob = $("#olivia").offset().top;
      $("HTML, BODY").animate({ scrollTop: position_ob }, 500);
      changeContentOrder();
    });
    $("#p").on('click', function() {
      var position_p = $("#pentagram").offset().top;
      $("HTML, BODY").animate({ scrollTop: position_p }, 500);
      changeContentOrder();
    });
    $("#pl").on('click', function() {
      var position_pl = $("#plastik").offset().top;
      $("HTML, BODY").animate({ scrollTop: position_pl }, 500);
      changeContentOrder();
    });
    $("#ss").on('click', function() {
      var position_ss = $("#solve").offset().top;
      $("HTML, BODY").animate({ scrollTop: position_ss }, 500);
      changeContentOrder();
    });
    $("#tr").on('click', function() {
      var position_tr = $("#terry_richardson").offset().top;
      $("HTML, BODY").animate({ scrollTop: position_tr }, 500);
      changeContentOrder();
    });



    $("#bal").on('click', function() {
      var position_bal = $("#balmain").offset().top;
      $("HTML, BODY").animate({ scrollTop: position_bal }, 500);
      changeContentOrder();
    });
    $("#dol").on('click', function() {
      var position_dol = $("#dolce").offset().top;
      $("HTML, BODY").animate({ scrollTop: position_dol }, 500);
      changeContentOrder();
    });
    $("#giv").on('click', function() {
      var position_giv = $("#givenchy").offset().top;
      $("HTML, BODY").animate({ scrollTop: position_giv }, 500);
      changeContentOrder();
    });
    $("#guc").on('click', function() {
       var position_guc = $("#gucci").offset().top;
      $("HTML, BODY").animate({ scrollTop: position_guc }, 500);
      changeContentOrder();
    });
    $("#jus").on('click', function() {
      var position_jus = $("#just_cavalli").offset().top;
      $("HTML, BODY").animate({ scrollTop: position_jus }, 500);
      changeContentOrder();
    });
    $("#msg").on('click', function() {
      var position_msg = $("#msgm").offset().top;
      $("HTML, BODY").animate({ scrollTop: position_msg }, 500);
      changeContentOrder();
    });
    $("#ver").on('click', function() {
      var position_ver = $("#versace").offset().top;
      $("HTML, BODY").animate({ scrollTop: position_ver }, 500);
      changeContentOrder();
    });

    $("#film_drop").on('click', function() {
      var position_film_drop = $("#film").offset().top;
      $("HTML, BODY").animate({ scrollTop: position_film_drop }, 500);
      changeContentOrder();
    });


    $("#al").on('click', function() {
      var position_al = $("#albums").offset().top;
      $("HTML, BODY").animate({ scrollTop: position_al }, 500);
      changeContentOrder();
    });
    $("#ar").on('click', function() {
      var position_ar = $("#artists").offset().top;
      $("HTML, BODY").animate({ scrollTop: position_ar }, 500);
      changeContentOrder();
    });
    $("#co").on('click', function() {
      var position_co = $("#composers").offset().top;
      $("HTML, BODY").animate({ scrollTop: position_co }, 500);
      changeContentOrder();
    });
    $("#so").on('click', function() {
      var position_so = $("#songs").offset().top;
      $("HTML, BODY").animate({ scrollTop: position_so }, 500);
      changeContentOrder();
    });
    $("#vi").on('click', function() {
      var position_vi = $("#videos").offset().top;
      $("HTML, BODY").animate({ scrollTop: position_vi }, 500);
      changeContentOrder();
    });

    $("#tv_drop").on('click', function() {
      var position_tv = $("#tv").offset().top;
      $("HTML, BODY").animate({ scrollTop: position_tv }, 500);
      changeContentOrder();
    });


});
