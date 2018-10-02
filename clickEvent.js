console.clear();
class ScrollEvent {
  scrollToBottom(scrollClass) {
    const mainElement = document.querySelector(scrollClass});
    const documentHeight = mainElement.scrollHeight;
    return {
      documentHeight
    }
  }
}

const autoScroll = new ScrollEvent;
autoScroll.scrollToBottom('.document_scroller.carousel_scroll_parent');
console.log(autoScroll);

