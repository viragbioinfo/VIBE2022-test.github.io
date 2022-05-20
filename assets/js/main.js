---
---


{% include js/conference.js %}

(() => {
    const map = window.conference.map;

    if (typeof map !== 'undefined') {
        let main_station = L.marker([52.67846, -8.56815], {
            icon: L.divIcon({
                className: '',
                html: '<span class="fas fa-train"></span> University',
                iconSize: [120, 56]
            })
        }).addTo(map);
    }
})();


