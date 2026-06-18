"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, CircleMarker } from "react-leaflet";
import L from "leaflet";

const SHOP_ICON = L.divIcon({
  className: "",
  html: `<div class="pw-pin-shop"></div>`,
  iconSize: [14, 14],
  iconAnchor: [7, 7],
});

const SHOP = { lat: 40.8410, lng: -96.6790, label: "Premium Woods Shop · 2139 Cornhusker Hwy" };

const CITIES: { name: string; lat: number; lng: number }[] = [
  { name: "Omaha, NE", lat: 41.2565, lng: -95.9345 },
  { name: "Council Bluffs, IA", lat: 41.2619, lng: -95.8608 },
  { name: "Bellevue, NE", lat: 41.1370, lng: -95.8908 },
  { name: "Papillion, NE", lat: 41.1544, lng: -96.0422 },
  { name: "La Vista, NE", lat: 41.1839, lng: -96.0314 },
  { name: "Grand Island, NE", lat: 40.9264, lng: -98.3420 },
  { name: "Kearney, NE", lat: 40.6993, lng: -99.0817 },
  { name: "Hastings, NE", lat: 40.5862, lng: -98.3899 },
  { name: "Fremont, NE", lat: 41.4334, lng: -96.4980 },
  { name: "Beatrice, NE", lat: 40.2681, lng: -96.7470 },
  { name: "Norfolk, NE", lat: 42.0285, lng: -97.4170 },
  { name: "North Platte, NE", lat: 41.1239, lng: -100.7654 },
  { name: "Sioux City, IA", lat: 42.4999, lng: -96.4003 },
  { name: "Des Moines, IA", lat: 41.5868, lng: -93.6250 },
  { name: "Topeka, KS", lat: 39.0473, lng: -95.6752 },
  { name: "Manhattan, KS", lat: 39.1836, lng: -96.5717 },
];

export function ServiceMap() {
  return (
    <div className="rounded-2xl overflow-hidden border border-[var(--color-walnut-light)]/30 shadow-2xl">
      <MapContainer
        center={[40.6, -97.4]}
        zoom={6}
        scrollWheelZoom={false}
        style={{ height: "520px", width: "100%" }}
        attributionControl
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />

        {/* Service radius rings */}
        <CircleMarker
          center={[SHOP.lat, SHOP.lng]}
          radius={120}
          pathOptions={{ color: "#C8923D", fillColor: "#C8923D", fillOpacity: 0.05, weight: 1, opacity: 0.4 }}
        />
        <CircleMarker
          center={[SHOP.lat, SHOP.lng]}
          radius={75}
          pathOptions={{ color: "#C8923D", fillColor: "#C8923D", fillOpacity: 0.08, weight: 1, opacity: 0.55 }}
        />

        {/* City pins */}
        {CITIES.map((c) => (
          <CircleMarker
            key={c.name}
            center={[c.lat, c.lng]}
            radius={5}
            pathOptions={{ color: "#D9AB68", fillColor: "#D9AB68", fillOpacity: 0.9, weight: 2 }}
          >
            <Popup>
              <div className="font-semibold">{c.name}</div>
              <div className="text-xs opacity-70">Delivered from Lincoln</div>
            </Popup>
          </CircleMarker>
        ))}

        {/* Shop marker (on top) */}
        <Marker position={[SHOP.lat, SHOP.lng]} icon={SHOP_ICON}>
          <Popup>
            <div className="font-semibold text-[var(--color-amber)]">Premium Woods Shop</div>
            <div className="text-xs">2139 Cornhusker Hwy, Suite B<br/>Lincoln, NE 68521</div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
