/*$(".input-cart-number").on("keyup change", function () {
    $t = $(this);
  
    if ($t.val().length > 3) {
      $t.next().focus();
    }
  
    var card_number = "";
    $(".input-cart-number").each(function () {
      card_number += $(this).val() + " ";
      if ($(this).val().length == 4) {
        $(this).next().focus();
      }
    });
  
    $(".credit-card-box .number").html(card_number);
  });
  */
  
  
  
  
  $("#cardName").on("keyup change", function () {
    $t = $(this);
    $(".card1 .holder div").html($t.val());
  });
  
  
  
  $("#cardName").on("keyup change", function () {
    $t = $(this);
    $(".card1 .holder div").html($t.val());
  });
  
  
  
  
  $("#card-expiration-month, #card-expiration-year").change(function () {
    m = $("#card-expiration-month option").index(
      $("#card-expiration-month option:selected")
    );
    m = m < 10 ? "0" + m : m;
    y = $("#card-expiration-year").val().substr(2, 2);
    $(".card-expiration-date div").html(m + "/" + y);
  });
  
  
  
  
  $("#card-ccv")
    .on("focus", function () {
      $(".card1").addClass("hover");
    })
    .on("blur", function () {
      $(".card1").removeClass("hover");
    })
    .on("keyup change", function () {
      $(".ccv div").html($(this).val());
    });
  
  /*--------------------
    CodePen Tile Preview
    --------------------*/
    setTimeout(function(){
      $('#card-ccv').focus().delay(1000).queue(function(){
        $(this).blur().dequeue();
      });
    }, 500);
  