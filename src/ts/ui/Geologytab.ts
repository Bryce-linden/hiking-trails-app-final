// /* Copyright 2019 Esri
// This is a copy of the basemappanel


import * as dom from "dojo/dom";
import * as on from "dojo/on";
import * as domConstruct from "dojo/dom-construct";
import { State } from "../types";
import * as GroupLayer from "esri/layers/GroupLayer";

import "../../style/geologypanel.scss";


function myFunction() {
  document.getElementById("menupanz").style.resize = "both";
  
}
export default class GeologyPanel {  
  container: any;
  basemapContainer: any;
  constructor(state: State) {
    this.container = dom.byId("geologypanel");
    this.basemapContainer = document.querySelector(".basemapsgeo"); //this controls the style in the css, I believe

    state.view.map.watch("loaded", (value) => {
      if (value) {
        const basemapGroup = <GroupLayer> state.view.map.layers.filter((layer) => {
          return (layer.title === "Basemap");
        }).getItemAt(0);

        basemapGroup.layers.forEach((layer) => {

          // get access to portalItem property
          // const portalLayer = <GroupLayer> layer;
          // portalLayer.portalItem.watch("loaded", (value) => {
          //   if (value) {
          //     const basemapItem = domConstruct.create("div", {
          //       class: "basemapItem",
          //       style: `background: url(${portalLayer.portalItem.getThumbnailUrl()}) no-repeat center`,
          //       "data-id": layer.id,
          //       innerHTML: `<div>${layer.title}</div>`
          //     }, this.basemapContainer);

          //     on(basemapItem, "click", (evt) => {
          //       state.currentBasemapId = evt.target.dataset.id;                
          //     });
          //   }
          // });

        });
      }

    });


  }
 }
 myFunction();