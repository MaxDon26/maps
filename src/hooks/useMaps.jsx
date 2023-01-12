import React, { useContext, useEffect, useState } from "react";
import { fetchMap } from "../services/map.service";
import { parse } from "../utils/parse";

const MapContext = React.createContext();

export const useMaps = () => {
  return useContext(MapContext);
};

export const MapsProvider = ({ children }) => {
  const [coord, setCoord] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [defaultState, setDefault] = useState(null);
  const [currentCenter, setCurrent] = useState(null);

  const initMap = async () => {
    const map = await fetchMap();
    const initial = {
      center: parse(map[0].Location).Center,
      zoom: 13,
    };
    setCoord(map);
    setDefault(initial);
    setCurrent(initial);
    setLoading(false);
  };

  useEffect(() => {
    initMap();
  }, []);

  if (coord) {
    const polygons = coord.map((polygon) => [parse(polygon.Location).Polygon]);
    const lables = coord.map((polygon) => ({
      coords: parse(polygon.Location).Center,
      name: polygon.Name,
    }));

    return (
      <MapContext.Provider
        value={{
          isLoading,
          coord,
          defaultState,
          polygons,
          lables,
          state: { currentCenter, setCurrent },
        }}
      >
        {children}
      </MapContext.Provider>
    );
  }
};
