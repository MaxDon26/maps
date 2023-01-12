import {
  YMaps,
  Map,
  Polygon,
  ZoomControl,
  Placemark,
  TypeSelector,
} from "@pbe/react-yandex-maps";
import React from "react";
import { useMaps } from "../hooks/useMaps";
import { nanoid } from "nanoid";
import SearchForm from "./searchForm";

const Maps = React.memo(() => {
  const { defaultState, polygons, lables, state } = useMaps();

  return (
    <YMaps>
      <Map
        defaultState={defaultState}
        state={state.currentCenter}
        width="100vw"
        height="100vh"
      >
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
        <TypeSelector
          options={{
            float: "right",
          }}
        />
        {
          <SearchForm>
            {" "}
            {lables.map((label) => (
              <p
                style={{ cursor: "pointer", borderBottom: "1px solid #999" }}
                onClick={() =>
                  state.setCurrent((prev) => ({
                    ...prev,
                    center: label.coords,
                  }))
                }
              >
                {label.name}
              </p>
            ))}
          </SearchForm>
        }
      </Map>
    </YMaps>
  );
});

export default Maps;
