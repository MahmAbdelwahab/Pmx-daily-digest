// PMx Weekly Digest Search — lunr.js integration
(function () {
  'use strict';

  var searchInput = document.getElementById('search-input');
  var resultsContainer = document.getElementById('search-results');
  var idx = null;
  var documents = null;
  var baseUrlMeta = document.querySelector('meta[name="baseurl"]');
  var base = baseUrlMeta ? baseUrlMeta.content : '';

  function loadIndex() {
    fetch(base + '/assets/search-index.json')
      .then(function (response) { return response.json(); })
      .then(function (data) {
        documents = {};
        data.forEach(function (doc) { documents[doc.id] = doc; });
        idx = lunr(function () {
          this.ref('id');
          this.field('title', { boost: 10 });
          this.field('tags', { boost: 5 });
          this.field('authors', { boost: 3 });
          this.field('excerpt');
          this.field('body');
          data.forEach(function (doc) { this.add(doc); }, this);
        });
      });
  }

  function renderResults(results) {
    if (!results.length) {
      resultsContainer.innerHTML = '<p>No digests found.</p>';
      return;
    }
    var html = results.slice(0, 20).map(function (result) {
      var doc = documents[result.ref];
      if (!doc) return '';
      var tagsHtml = (doc.tags || '').split(',').filter(Boolean).map(function (t) {
        return '<span class="tag tag-topic">' + t.trim() + '</span>';
      }).join(' ');
      return '<article class="digest-summary">' +
        '<h2><a href="' + base + doc.url + '">' + doc.title + '</a></h2>' +
        '<div class="post-meta"><time>' + doc.date + '</time>' +
        (doc.journal ? '<span class="journal">' + doc.journal + '</span>' : '') +
        '</div>' +
        '<div class="post-tags">' + tagsHtml + '</div>' +
        (doc.excerpt ? '<p class="excerpt">' + doc.excerpt + '</p>' : '') +
        '</article>';
    }).join('');
    resultsContainer.innerHTML = html;
  }

  function debounce(fn, delay) {
    var timer;
    return function () {
      clearTimeout(timer);
      var args = arguments;
      var self = this;
      timer = setTimeout(function () { fn.apply(self, args); }, delay);
    };
  }

  searchInput.addEventListener('input', debounce(function () {
    var query = searchInput.value.trim();
    if (!query || !idx) {
      resultsContainer.innerHTML = '';
      return;
    }
    var results = idx.search(query);
    renderResults(results);
  }, 200));

  loadIndex();
})();
