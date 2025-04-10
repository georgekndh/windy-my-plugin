const windyInit = (params, pluginData) => {
    const { map } = params;

    console.log('Plugin loaded 🧙‍♂️');
    L.popup()
        .setLatLng([50.4, 14.3])
        .setContent("✨ Hello from VS Code plugin!")
        .openOn(map);
};

export {
    windyInit
};
