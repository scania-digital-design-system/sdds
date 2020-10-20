(function(doc) {
  var parentScript = doc.querySelectorAll('script');
  var arr = Array.prototype.slice.call(parentScript);
  var scriptElm = arr.filter(function(item) { return item.src.indexOf('dist/corporate-ui.js') > -1 })[0] || doc.scripts[doc.scripts.length - 1];

  var parts = scriptElm.src.split('/');
  parts.pop();
  parts.push('corporate-ui');
  var url = parts.join('/');

  scriptElm = doc.createElement('script');
  scriptElm.src = url + '/corporate-ui.js';

  fixFouc();
  doc.head.insertBefore(scriptElm, parentScript[0]);
})(document);

function fixFouc() {
  var elm = document.createElement('style');
  var style = document.createTextNode('body { visibility: hidden; }');

  document.head.insertBefore(elm, document.head.firstChild);
  elm.appendChild(style);

  document.addEventListener('DOMContentLoaded', function () {
    // This timeout is to make sure that IE has time to load
    setTimeout(function () {
      if (document.querySelector('c-theme')) return;

      // Used in case a theme element is not rendered
      style.nodeValue = 'body { visibility: visible; }';
    });
  });
}



