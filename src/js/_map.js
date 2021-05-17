/* Map downloading */
let map_container = document.getElementById('map_container');
if (map_container) {
  map_container.addEventListener('click', start_lazy_map);
  map_container.addEventListener('mouseover', start_lazy_map);
  map_container.addEventListener('touchstart', start_lazy_map);
  map_container.addEventListener('touchmove', start_lazy_map);

  let map_loaded = false;
  function start_lazy_map() {
    if (!map_loaded) {
      let script = document.createElement('script');
      script.src =
        'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A8743196ad6e9630d2fee696a98a03547fb3079cba3bdf179c2224e3bd787e3a1&amp;width=100%25&amp;height=720&amp;lang=ru_RU&amp;scroll=true';
      document.getElementById('ymap_lazy').replaceWith(script);
      map_loaded = true;
    }
  }
}
