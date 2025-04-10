const windyInit = (params, pluginData) => {
    const { store, map } = params;

    // Make store available to index.html buttons
    window.store = store;

    console.log("🌨️ Snow & Dust Plugin Loaded");

    // Optional: add a popup on the map
    L.popup()
        .setLatLng([50.4, 14.3])
        .setContent("Plugin loaded! Use the buttons to switch layers.")
        .openOn(map);
};

export { windyInit };
