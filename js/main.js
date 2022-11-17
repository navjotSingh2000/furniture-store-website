function myFunction() {
    alert("Your product has been added to the cart !");

    document.getElementById("in_cart").style.opacity=1;
  }
  var slideIndex = 1;
  function plusDivs(n) {
    showDivs(slideIndex += n);
  }
  
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("images");
    if (n > x.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = x.length
    };
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
  }
  showDivs();

  function validate()
{
    var regex =  /^[a-zA-Z ]{2,30}$/;
    if (regex.test(document.getElementById("name").value)) {
        alert("invalid input")    }
    
    else {
        alert("invalid input") 
    }
}

