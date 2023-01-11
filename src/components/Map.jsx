import {
  YMaps,
  Map,
  Polygon,
  ZoomControl,
  Placemark,
} from "@pbe/react-yandex-maps";
import React from "react";
import { useMaps } from "../hooks/useMaps";
import { nanoid } from "nanoid";

const Maps = React.memo(() => {
  const { defaultState, polygons, lables } = useMaps();

  return (
    <YMaps>
      <Map defaultState={defaultState} width="100vw" height="100vh">
        {polygons.map((polygon) => (
          <Polygon
            key={nanoid()}
            geometry={polygon}
            options={{
              fillColor: "#00FF00",
              strokeColor: "#00cccc",
              opacity: 0.5,
              strokeWidth: 2,
              strokeStyle: "solid",
            }}
          />
        ))}
        {lables.map((label) => (
          <Placemark
            key={nanoid()}
            geometry={label.coords}
            options={{ preset: "islands#darkGreenStretchyIcon" }}
            properties={{ iconContent: label.name }}
          />
        ))}
        <ZoomControl options={{ float: "right" }} />
      </Map>
    </YMaps>
  );
});

export default Maps;
