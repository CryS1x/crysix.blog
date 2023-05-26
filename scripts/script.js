 if (!localStorage.getItem('animated')) {
  var originalTitle = document.title;
  var counter = 0;

  function updateTitle() {
    document.title = originalTitle.substring(0, counter);
    if (counter == originalTitle.length) {
      counter = 0;
      setTimeout(updateTitle, 1000);
      document.title = originalTitle;
      localStorage.setItem('animated', true);
      counter++;
      setTimeout(updateTitle, 400);
    }
  }

  updateTitle();
}
