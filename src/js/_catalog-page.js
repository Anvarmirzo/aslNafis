$('.catalog .controller button').click((e) => {
  if ($(window).width() < 768) {
    if (
      $(e.currentTarget).hasClass('first') &&
      $(e.currentTarget).hasClass('active') &&
      $('.catalog .controller').hasClass('open')
    ) {
      $('.catalog .controller').removeClass('open');
    } else if (
      $(e.currentTarget).hasClass('first') &&
      !$(e.currentTarget).hasClass('active') &&
      $('.catalog .controller').hasClass('open')
    ) {
      let tab_number = $(e.currentTarget).attr('data-for-tab');
      $('.catalog .controller button').removeClass('active');
      $(e.currentTarget).addClass('active');

      $(`.catalog .tabs .tab`).removeClass('active');
      $(`.catalog .tabs .tab[data-tab=${tab_number}]`).addClass('active');
      $('.catalog .controller').removeClass('open');
    } else if (
      $(e.currentTarget).hasClass('first') &&
      !$('.catalog .controller').hasClass('open')
    ) {
      $('.catalog .controller').addClass('open');
    } else {
      let tab_number = $(e.currentTarget).attr('data-for-tab');
      $('.catalog .controller button').removeClass('active');
      $(e.currentTarget).addClass('active');

      $(`.catalog .tabs .tab`).removeClass('active');
      $(`.catalog .tabs .tab[data-tab=${tab_number}]`).addClass('active');
      $('.catalog .controller').removeClass('open');
    }
  } else {
    let tab_number = $(e.currentTarget).attr('data-for-tab');
    $('.catalog .controller button').removeClass('active');
    $(e.currentTarget).addClass('active');

    $(`.catalog .tabs .tab`).removeClass('active');
    $(`.catalog .tabs .tab[data-tab=${tab_number}]`).addClass('active');
  }
});
