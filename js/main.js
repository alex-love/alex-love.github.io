const init = function() {
  let magicGrid = new MagicGrid({
    container: '.portfolio_items',
    animate: true,
    gutter: 20,
    static: true,
    useMin: true
  });
  
  magicGrid.listen();
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
});