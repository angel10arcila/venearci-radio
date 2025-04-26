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
        name: "La mega 107.3",
        url: "https://acp4.lorini.net/proxy/ur2050?mp=/stream",
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
        url: "https://cloudstream2036.conectarhosting.com/8398/stream",
        type: "Fm"
    },
    {
        name: "Tvfamilia",
        url: "https://59d39900ebfb8.streamlock.net/tvfamilia_480p/tvfamilia_480p/playlist.m3u8?p",
        type: "Tv"
    },
    {
        name: "Anzoátegui Tv",
        url: "https://vcp2.myplaytv.com/anzoateguitv/anzoateguitv/playlist.m3u8?p",
        type: "Tv"
    },
   {
        name: "Stadium Tv",
        url: "https://bcovlive-a.akamaihd.net/77f552c75f084189959f8a7e54d87700/us-east-1/5994000126001/playlist.m3u8?p",
        type: "Tv"
    },
    
   {
        name: "Red Bull Tv",
        url: "https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8?p",
        type: "Tv"
    },
    {
        name: "Tve",
        url: "https://rtvelivestream-rtveplayplus.rtve.es/rtvesec/int/tvei_ame_main_dvr_576.m3u8?p",
        type: "Tv"
    },
    {
        name: "Star Tve",
        url: "https://rtvelivestream.akamaized.net/rtvesec/int/star_main_dvr.m3u8?p",
        type: "Tv"
    },
    {
        name: "MovieFe",
        url: "https://vcp.myplaytv.com/panavision/panavision/playlist.m3u8?p",
        type: "Tv"
    },
    {
        name: "DW Español",
        url: "https://dwamdstream104.akamaized.net/hls/live/2015530/dwstream104/index.m3u8?p",
        type: "Tv"
    },
    {
        name: "Amc",
        url: "https://d38fxgxhpllpfu.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-4w47pf3x50sko/playlist.m3u8?p",
        type: "Tv"
    },
    {
        name: "Novelas Turcas",
        url: "https://stream.ads.ottera.tv/playlist.m3u8?network_id=5088",
        type: "Tv"
    },
    {
        name: "Televisa Novelas",
        url: "https://televisa-televisa-1-it.samsung.wurl.tv/playlist.m3u8?p",
        type: "Tv"
    },
    {
        name: "Punta Cana Tv",
        url: "https://rdn.essastream.com:3544/live/puntacanatvlive.m3u8",
        type: "Tv"
    },
    {
        name: "Show Ven",
        url: "https://vcp.myplaytv.com/coll/coll/playlist.m3u8?p",
        type: "Tv"
    },
    {
        name: "Dierctv Sports",
        url: "https://cdn12.vivozytv.com/hotflix/dsports/index.m3u8?token=fab205efc1df9d231f013f78cbb7e12df264c650-73d5344db1bd39f1527dc1993b69436b-1745699471-1745688671&remote=201.211.5.148",
        type: "Tv"
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
              
