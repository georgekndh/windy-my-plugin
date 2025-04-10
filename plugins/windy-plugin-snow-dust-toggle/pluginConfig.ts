import type { ExternalPluginConfig } from '@windy/plugins';

const config: ExternalPluginConfig = {
    name: 'windy-plugin-snow-dust-toggle',
    version: '1.0.0',
    title: 'Snow & Dust Toggle',
    icon: '❄️',
    description: 'Switch between Dust and Snow Level overlays via context menu or sidebar buttons.',
    author: 'georgekndh',
    repository: 'https://github.com/georgekndh/windy-my-plugin',
    desktopUI: 'embedded',
    mobileUI: 'small',

    addToContextMenu: {
        title: 'Toggle Dust & Snow',
        onClick: ({ lat, lon, store }) => {
            const current = store.get('overlay');
            const next = current === 'dust' ? 'snowlevel' : 'dust';
            store.set('overlay', next);
            console.log(`🌀 Toggled to ${next} from context menu at [${lat}, ${lon}]`);
        }
    },

    onMount: ({ store }) => {
        console.log('🌨️ Snow & Dust Plugin mounted');

        const wrapper = document.createElement('div');
        wrapper.innerHTML = `
            <style>
                button {
                    padding: 8px 12px;
                    margin: 5px;
                    border: none;
                    border-radius: 4px;
                    background: #2c2c2c;
                    color: white;
                    cursor: pointer;
                }
                button:hover {
                    background: #444;
                }
            </style>
            <button id="btnDust">🌫️ Show Dust</button>
            <button id="btnSnow">❄️ Show Snow Level</button>
        `;

        document.body.appendChild(wrapper);

        document.getElementById('btnDust')?.addEventListener('click', () => {
            store.set('overlay', 'dust');
            console.log('🔄 Switched to Dust');
        });

        document.getElementById('btnSnow')?.addEventListener('click', () => {
            store.set('overlay', 'snowlevel');
            console.log('🔄 Switched to Snow Level');
        });
    },
};

export default config;
