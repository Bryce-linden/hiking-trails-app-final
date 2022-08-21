/* This app can be configured by changing the variables
in this file.

Webscene:
 - copy the webscene that I use: http://www.arcgis.com/home/item.html?id=d0580bb5df3840d384bda44b6ddeb54e
 - remove/add layers with additional data in the Layers group
 - remove/add basemap layers in the Basemap group

Data:
 - replace the trails service url
 - replace the attribute names to the ones in your service
 - remove attributes if they don't make sense for your data
 - Status has hard-coded values Open/Closed (whether the track is open or closed)
 - filterOptions are the attributes that will be used for filtering
    they can be removed in case they are not useful

Colors:
 - change the colors for visualizing the trails
 - for CSS colors check also the variables.scss file - selectedTrail is $orange
*/

export default {
  scene: {
    // websceneItemId: "229f8d2ee2d8460d85a36b43fb5fd0db"
    websceneItemId: "293676a88975471da00f615c87b21852"
  },
  data: {
    trailsServiceUrl: "https://services.arcgis.com/HRPe58bUyBqyyiCt/ArcGIS/rest/services/test2aug13/FeatureServer/43",
    trailAttributes: {
      name: "Name",
      id: "RouteId",
      difficulty: "Difficulty",
      walktime: "Hiketime",
      status: "Access",
      ascent: "Ascent",
      description: "Descript"
    },
    // The thing on the left in blue refers to what you see on the interface, the orange text is what the field name is in the attribute table
    filterOptions: {
      singleChoice: ["difficulty", "status"], // have string values
      range: ["walktime", "ascent"] // have numeric values
    }
  },
  colors: {
    defaultTrail: "#3161ff", //this is in fact the label color
    defaultTraillabel: "#00acff", //this is the trail, not actually the label color
    selectedTrail: "#ff0000"
  }
};
