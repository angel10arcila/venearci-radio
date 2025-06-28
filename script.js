// Configuración de medios predefinidos
const mediaFiles = [
    
    { 
        name: "Activa 104.9",
        url: "https://stream-150.zeno.fm/t31pbasum7zuv?zs=YZf30L3bQU2O2ubbISeTHQ",
        type: "Fm"
        //https://stream-150.zeno.fm/t31pbasum7zuv?zs=YZf30L3bQU2O2ubbISeTHQ
    },
    { 
        name: "Guaraña 97.5",
        url: "https://sp.wnetserver.com/8016/stream",
        type: "Fm"
    },   
    { 
        name: "Lasser 97.7",
        url: " https://server6.globalhostla.com:8010/stream",
        type: "Fm"
    },
    {
        name: "Ven-fm",
        url: "https://acp2.lorini.net:20214/stream",
        type: "Fm"
    },
    {
        name: "Circuito líder 94.9",
        url: "https://stream-162.zeno.fm/pv120nq8e8zuv?zs=1T27FKTDRC-SQ7vEVXLvCA",
        type: "Fm"
    },
    {
        name: "Onda La super estación 107.9",
        url: "https://acp4.lorini.net/proxy/ur2060?mp=/stream",
        type: "Fm"
    },
    { 
        name: "Unión radio 90.3",
        url: "https://acp4.lorini.net/proxy/ur2080?mp=/stream",
        type: "Fm"
    },  
    {
        name: "Hot 94.1",
        url: "https://server6.globalhostla.com:9016/stream",
        type: "Fm"
    },
    { 
        name: "La mega 107.3",
        url: "https://acp4.lorini.net/proxy/ur2050?mp=/stream",
        type: "Fm"
    },   
    {
        name: "La X 89.7",
        url: "https://acp2.lorini.net:39500/stream",
        type: "Fm"
        
    },
    {
        name: "La X 89.7",
        url: "https://vcp9.myplaytv.com/circuitox/circuitox/playlist.m3u8",
        type: "Fm"
    },
    { 
        name: "Circuito éxitos 99.9",
        url: "https://acp4.lorini.net/proxy/ur2070?mp=/stream",
        type: "Fm"
    },
   { 
        name: "Deportivisima 91.5",
        url: "https://sp.panelchs.com/8066/stream",
        type: "Fm"
    }, 
    { 
        name: "Talento 102.7",
        url: "https://cloudstream2036.conectarhosting.com/8016/stream",
        type: "Fm"
    },
    
    { 
        name: "Mega Latina 97.9",
        url: "https://server6.globalhostla.com:8066/stream",
        type: "Fm"
    },
    {
        name: "Activa 88.9",
        url: "https://stream.zeno.fm/w3gzdxagmh0tv",
        type: "Fm"
    },
    {
        name: "Autentik 100.7",
        url: "https://server6.globalhostla.com:9228/stream",
        type: "Fm"
    },
    {
        name: "Calle 98.9",
        url: "https://streaming.supermezclashosting.com/8502/stream/1/",
        type: "Fm"
    },
    {
        name:"Entre Panas",
        url: "https://streaming.produccionesvanessa.com:8054/stream/1/",
        type: "Fm"
    },
    {
        name: "Wepale 99.9",
        url: "https://servers58.com/proxy/wepale?mp=/stream",
        type: "Fm"
        
    },
    {
        name: "Puro llano radio",
        url: "https://laradiossl.online:10122/stream/;type=mp3",
        type: "Fm"
        
    },
    {
        name: "Joropomania",
        url: "https://radio.hostlagarto.com/joroporadio/stream",
        type: "Fm"
    },
    {
        name: "RCN Radio",
        url: "https://us-b4-p-e-cg11-audio.cdn.mdstrm.com/live-audio-aw/627c1c39637d89088290f64d/playlist.m3u8?listeningSessionID=68123ac4c44f16b6_5113788_qfOostEE_dXMtYjQtcC1lLWNnMTEtYXVkaW8uY2RuLm1kc3RybS5jb206ODAwMA!!_0000005rKyz&downloadSessionID=0&aid=6271a4d5d206c3172f3c9a9c&dnt=true&uid=KdkeFF9epa0V92TgVDmF40CaeHmCOi4T&sid=SrA4Kpxc8Y5DA7MZMbdI5R0O7Ymicn2s&pid=NmKEUiHQIItLBHpisqvomnKV6XEDZ25Z&ref=www.rcnradio.com&es=us-b4-p-e-cg11-audio.cdn.mdstrm.com&ote=1751225343603&ot=_KoL_AjMBChxjQooTpjSRQ&proto=https&pz=us&cP=128000&awCollectionId=6271a4d5d206c3172f3c9a9c&aw_0_1st.playerId=La%20basica&liveId=627c1c39637d89088290f64d&referer=https%3A%2F%2Fwww.rcnradio.com%2F&propertyName=La%20basica&propertyType=web-app&propertyVersion=v1.0.21&listenerId=KdkeFF9epa0V92TgVDmF40CaeHmCOi4T",
        type: "Fm"
    },
    
   ];

let currentTrack = 0;
const mediaPlayer = document.getElementById('mediaPlayer');
const playlist = document.getElementById('playlist');

// Inicializar reproductor
function initPlayer() {
    // Generar playlist
    mediaFiles.forEach((media, index) => {
        const item = document.createElement('div');
        item.className = 'playlist-item';
        item.innerHTML = `
            ${media.name}
            <span class="format-badge">${media.type.toUpperCase()}</span>
        `;
        item.onclick = () => loadMedia(index);
        playlist.appendChild(item);
    });

    // Cargar primer medio
    loadMedia(0);
}

function loadMedia(index) {
    currentTrack = index;
    const media = mediaFiles[index];
    
    // Actualizar clase activa en playlist
    document.querySelectorAll('.playlist-item').forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });

    // Cargar medio según tipo
    if (media.type === 'm3u') {
        loadM3U(media.url);
    } else {
        mediaPlayer.src = media.url;
        mediaPlayer.play();
    }
}

async function loadM3U(url) {
    try {
        const response = await fetch(url);
        const content = await response.text();
        // Procesar M3U y extraer URLs
        const urls = content.match(/^(?!#).+$/gm);
        if (urls && urls.length > 0) {
            mediaPlayer.src = urls[0];
            mediaPlayer.play();
        }
    } catch (error) {
        console.error('Error loading M3U:', error);
    }
}

function playPause() {
    if (mediaPlayer.paused) {
        mediaPlayer.play();
    } else {
        mediaPlayer.pause();
    }
}

function nextTrack() {
    const next = (currentTrack + 1) % mediaFiles.length;
    loadMedia(next);
}

function previousTrack() {
    const prev = (currentTrack - 1 + mediaFiles.length) % mediaFiles.length;
    loadMedia(prev);
}

function toggleMute() {
    mediaPlayer.muted = !mediaPlayer.muted;
}

// Eventos del reproductor
mediaPlayer.addEventListener('ended', () => {
    nextTrack();
});

mediaPlayer.addEventListener('error', (e) => {
    console.error('Error en la reproducción:', e);
    nextTrack();
});

// Inicializar
initPlayer();
              
