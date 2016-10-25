function dialog() {

  var dialogBox = $('.dialog'),
      dialogTrigger = $('.dialog__trigger'),
      dialogClose = $('.dialog__close'),
      dialogTitle = $('.dialog__title'),
      dialogContent = $('.dialog__content'),
      dialogAction = $('.dialog__action');

  // Open the dialog
  var lastId = "";
  dialogTrigger.on('click', function(e) {
    var self = $(this);
    var _id = self.attr("id");
    var top = self.parent().position().top + self.position().top;
    var left = self.parent().position().left + self.position().left;
    // if(lastId === _id) {
    //   // 끄고
    //   dialogBox.removeClass('dialog--active');
    //   // lastId = "";
    //   lastId="";
    // } else {
    //   // 위치를 내 위치로 옮기고
    //   // 내용만 갱신
    //   dialogBox.toggleClass('dialog--active')
    //     .offset({top:top, left:left});
    //   jquery.getJson( 'data/' + self.attr("id") + '.json', function(data) {
    //
    //     dialogBox.find('.dialog__title').text(data.title);
    //   });
    // }

    dialogBox.toggleClass('dialog--active')
      .offset({top:top, left:left+50});

    // jquery.getJson( 'data/' + self.attr("id") + '.json', function(data) {
    //   dialogBox.find('.dialog__title').text(data.name);
    //   // dialogBox.find('.dialog__content').text(data.prime);
    // });

    e.stopPropagation();
  });

  // Close the dialog - click close button
  dialogClose.on('click', function() {
    dialogBox.removeClass('dialog--active');
  });

  // Close the dialog - press escape key // key#27
  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      dialogBox.removeClass('dialog--active');
    }
  });

  // Close dialog - click outside
  $(document).on("click", function(e) {
    if ($(e.target).is(dialogBox) === false &&
        $(e.target).is(dialogTitle) === false &&
        $(e.target).is(dialogContent) === false &&
        $(e.target).is(dialogAction) === false) {
      dialogBox.removeClass("dialog--active");
    }
  });

};

// Run function when the document has loaded
$(dialog);
