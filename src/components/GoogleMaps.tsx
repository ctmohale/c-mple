import { GoogleMap, Marker } from "@capacitor/google-maps";
import { useEffect, useRef } from "react";
import "./style.css";

const GoogleMaps: React.FC = () => {
  const mapRef = useRef<HTMLElement>();
  let newMap: GoogleMap;

  useEffect(() => {
    createMap();
  }, []);

  async function createMap() {
    if (!mapRef.current) return;

    newMap = await GoogleMap.create({
      id: "my-cool-map",
      element: mapRef.current,
      apiKey: "AIzaSyB-rBuXmHhbY6ItvWtbpIguL84R0xtNcMg",
      config: {
        center: {
          lat: 33.6,
          lng: -117.9,
        },
        zoom: 8,
      },
    });

    // Create a marker with a custom icon
    const markerOptions: any = {
      position: {
        lat: 33.6,
        lng: -117.9,
      },
    };

    const marker: any = await newMap.addMarker(markerOptions);

    // Set the icon for the marker
    marker.setIcon({
      url: "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=626&ext=jpg", // URL to your custom marker image
    });
  }

  return (
    <div className="component-wrapper">
      <capacitor-google-map
        ref={mapRef}
        className="map"
        style={{
          display: "inline-block",
          width: "100%",
          height: 600,
          margin: 0,
          borderRadius: "20px",
        }}
      ></capacitor-google-map>
    </div>
  );
};

export default GoogleMaps;
