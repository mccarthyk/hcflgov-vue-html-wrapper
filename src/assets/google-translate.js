googleTranslateElementInit = function () {
  new google.translate.TranslateElement({ pageLanguage: 'en', includedLanguages: 'ar,de,en,es,fr,ht,pt,vi', layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'google_translate_element');
};

// google translate
(function(i, s, o, g, a, m) {
  a = s.createElement(o),
  m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
