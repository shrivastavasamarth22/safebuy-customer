## Todos :

- [ ] Near Home vs Near Me shops
- [x] Call directly from App
- [x] Camera Component in App
- [x] Fix the cancel order action in redux
- [x] Beat Selection in maps
- [x] Animation in Reanimated 2
- [x] expo-media-library asset check on startup
- [x] Keyboard avoiding view for bottom sheet
- [ ] Authentication System

## Google Maps and Area Coverage Feature
- [ ] Install Google Maps (ideally react-native-maps)
- [ ] New Screen for the store managers to set coverage area
- [ ] New algorithm, based on Graham Scan's first part, that checks if a
      point is enclosed by a given shape. The point will be then converted
      from latitude/longitude, and the shape will be converted from a list
      of latitude/longitude markers that constitute the coverage area
- [ ] New function that accepts an address that is fetched from an API, so
      that you have the coordinates of the address, and then uses the above
      algorithm to return a boolean - wether the address is supported or not.
  
### Area Coverage Markers Collection
- [ ] In the new screen for coverage area, you have a start recording button
      and a stop recording button
- [ ] While the app is recording, it has an interval, and every x seconds
      it captures the device's current location and adds it as a marker in
      the markers list for coverage area
- [ ] When you stop recording, you save the list of markers
  
### Extra Coverage Area
- [ ] An extra feature could be to allow for flexible limits, which means
      you could have store owners set a kilometers threshold and if the user's
      address is outside the coverage area, but within the threshold from any
      of the markers then they can still service them - maybe with some extra
      cost