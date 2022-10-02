$(document).ready(function () {
  $('.btn-login').on('click', function () {
    location.href = 'feed.html';
  });

  $('.input-search').on('click', function () {
    $('.search-icon').toggle();
  });

  $('.back-to-main').on('click', function () {
    location.href = 'feed.html';
  });
});
