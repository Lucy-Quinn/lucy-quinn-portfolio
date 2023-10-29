export const isOnScreen = (ref) => {
  //to check that the element is on the screen or you have past it
  const isOffsetBottom =
    window.scrollY + window.innerHeight - 30 >= ref.current?.offsetTop;

  //to check that you are at the bottom of the element or past this point
  const isOffsetTop =
    window.scrollY < ref.current?.offsetTop + ref.current?.offsetHeight;

  return isOffsetBottom && isOffsetTop;
  //when isOffsetBottom is true is when the image is on the screen. When this is true evaluate isOffsetTop. isOffsetTop will return true up until the bottom of the element. I.E. this function will return true when the image is on screen.
};
