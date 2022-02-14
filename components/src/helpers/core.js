(function (doc) {
  const parentScript = doc.querySelectorAll('script');
  const arr = Array.prototype.slice.call(parentScript);
  let scriptElm =
    arr.filter((item) => item.src.indexOf('dist/sdds-components.js') > -1)[0] ||
    doc.scripts[doc.scripts.length - 1];

  const parts = scriptElm.src.split('/');
  parts.pop();
  parts.push('sdds-components');
  const url = parts.join('/');

  scriptElm = doc.createElement('script');
  // when stop supporting IE 11, change to /sdds-components.esm.js and type="module"
  scriptElm.src = `${url}/sdds-components.js`;
  scriptElm.nomodule = true;

  fixFouc();
  doc.head.insertBefore(scriptElm, parentScript[0]);
})(document);

function fixFouc() {
  const elm = document.createElement('style');
  const style = document.createTextNode('body { visibility: hidden; }');

  document.head.insertBefore(elm, document.head.firstChild);
  elm.appendChild(style);

  document.onreadystatechange = function () {
    if (document.readyState == 'interactive') {
      // This timeout is to make sure that IE has time to load
      setTimeout(() => {
        if (document.querySelector('sdds-theme')) return;

        // Used in case a theme element is not rendered
        style.nodeValue = 'body { visibility: visible; }';
      });
    }
  };
}
