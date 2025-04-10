
(function () {
    const config = {
        name: 'windy-plugin-snow-dust-toggle',
        version: '1.0.0',
        title: 'Snow & Dust Toggle',
        icon: '❄️',
        description: 'Switch between Dust and Snow Level overlays.',
        author: 'georgekndh',
        repository: 'https://github.com/georgekndh/windy-my-plugin',
        desktopUI: 'embedded',
        mobileUI: 'small',
        addToContextMenu: {
            title: 'Toggle Dust & Snow',
            onClick: ({ store }) => {
                const current = store.get('overlay');
                const next = current === 'dust' ? 'snowlevel' : 'dust';
                store.set('overlay', next);
                console.log(`Switched to ${next}`);
            }
        },
        onMount: ({ store }) => {
            console.log('🌨️ Plugin loaded');

            const wrapper = document.createElement('div');
            wrapper.innerHTML = `
                <style>
                    button {
                        padding: 8px 12px;
                        margin: 5px;
                        background: #2c2c2c;
                        color: white;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                    }
                    button:hover {
                        background: #444;
                    }
                </style>
                <button id="btnDust">🌫️ Show Dust</button>
                <button id="btnSnow">❄️ Show Snow</button>
            `;

            document.body.appendChild(wrapper);

            document.getElementById('btnDust')?.addEventListener('click', () => {
                store.set('overlay', 'dust');
                console.log('Switched to Dust');
            });

            document.getElementById('btnSnow')?.addEventListener('click', () => {
                store.set('overlay', 'snowlevel');
                console.log('Switched to Snow');
            });
        }
    };

    window.windyPluginConfig = config;
})();
