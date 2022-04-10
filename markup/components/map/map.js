/*
 * little api for use more one map on the page and interactive with anyone map on the page.
 * all maps collect to global array map[], with map container id as array key
 * map['social-cards-map', 'commercial-map'] for example
 *
 * Example of use:
 *  let arData = {  <--------------------------------------------------------------------------- set arData of yandex map (map-container-id, placemarks, etc.)
 *      'yandexMapID': 'social-cards-map',
 *  };
 *
 *  ymaps.ready(function () {   <--------------------------------------------------------------- when YandexAPI ready on the page
 *      initYandexMap(arData).then((response) => {  <------------------------------------------- find map container and construct map
 *          if (response) {     <--------------------------------------------------------------- if map container is exist and map was created
 *              map[arData.yandexMapID].setCenter([57.1500079, 65.5247413], 10, {});  <--------- ur code
 *          }
 *      });
 *  });
 *
 * */

let isMapContainerExist = function (containerId) {
    return !!document.getElementById(containerId);
};
let constructMap = function (arData) {
    if (isMapContainerExist(arData.yandexMapID)) {
        let mapContainer = document.getElementById(arData.yandexMapID);

        // Проверка наличия контейнера в DOM
        if (!mapContainer) {
            throw new Error("Doesn't exist '#" + arData.yandexMapID + "' container in DOM");
        }

        // Проверка установленного значения arData.center
        if (!arData.center) {
            arData.center = [57.1500079, 65.5247413];
        } else {
            arData.center = [arData.center.lat, arData.center.lng];
        }

        // Проверка установленного значения zoom
        if (!arData.zoom) {
            arData.zoom = 12;
        }
        let map = []
        // Инициализация карты
        map[arData.yandexMapID] = new ymaps.Map(arData.yandexMapID, {
            center: arData.center,
            zoom: arData.zoom,
        });

        // Настройка контролов управления
        map[arData.yandexMapID].controls.remove('geolocationControl');
        map[arData.yandexMapID].controls.remove('searchControl');
        map[arData.yandexMapID].controls.remove('trafficControl');
        map[arData.yandexMapID].controls.remove('typeSelector');
        map[arData.yandexMapID].controls.remove('fullscreenControl');
        map[arData.yandexMapID].controls.remove('rulerControl');
        map[arData.yandexMapID].behaviors.disable(['scrollZoom']);

        // Размещение точек на карте
        arData.points.forEach((point) => {
            let placemark = '';
            if (point.color) {
                placemark = new ymaps.Placemark(
                    [point.position.lat, point.position.lng],
                    {},
                    {
                        iconColor: point.color,
                        iconId: point.id,
                    },
                );
            } else {
                placemark = new ymaps.Placemark(
                    [point.position.lat, point.position.lng],
                    {},
                    {
                        iconImageHref: point.imgUrl,
                        iconImageSize: point.imgSize,
                        iconImageOffset: point.imgOffset,
                        iconLayout: 'default#image',
                        iconId: point.id,
                    },
                );
            }

            map[arData.yandexMapID].geoObjects.add(placemark);
        });
        return true;
    } else {
        return false;
    }
};
async function initYandexMap(arData) {
    let isMapInit = await constructMap(arData);
    return isMapInit;
}
