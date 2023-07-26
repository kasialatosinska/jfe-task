(function () {
    const pageDataJson = localStorage.getItem('pageData'); 

    let pageData;
    if (pageDataJson) {
        pageData = JSON.parse(pageDataJson);
    } else {
        pageData = {
            viewCount: 0,
            lastVisit: null,
            currentVisit: null
        };
    }

    pageData.viewCount++; 
    pageData.lastVisit = pageData.currentVisit;
    pageData.currentVisit = new Date;

    localStorage.setItem('pageData', JSON.stringify(pageData));
})();

let jsChannels = [];
fetch('http://localhost:3000/channels')
    .then(function(resp) {
        return resp.json();
    })
    .then(function(channels) {
        jsChannels = channels;

        renderChannels(jsChannels);
    });

function renderChannels(channels) {
    const jsChannelsElement = document.querySelector('.js-channels');

    jsChannelsElement.innerHTML = '';

    for (const channel of channels) {
        const subscriberCount = parseInt(channel.statistics.subscriberCount);
        const videoCount = parseInt(channel.statistics.videoCount);
        const viewCount = parseInt(channel.statistics.viewCount);
    
        const channelTemplate = `
            <img src="${channel.thumbnails.medium.url}" alt="${channel.title}" class="js-channel__logo">
            <h3>${channel.title}</h3>
            <div class="js-channel__info">
                <div class="info__details">
                    <span class="info__details__title">Subscribers:</span>
                    <span>${subscriberCount.toLocaleString('en-US')}</span>
                </div>
                <div class="info__details">
                    <span class="info__details__title">Videos:</span>
                    <span>${videoCount.toLocaleString('en-US')}</span>
                </div>
                <div class="info__details">
                    <span class="info__details__title">Views:</span>
                    <span>${viewCount.toLocaleString('en-US')}</span>
                </div>
            </div>`;
    
        const channelElement = document.createElement('a');

        const url = new URL(channel.customUrl);
        url.searchParams.append('utm', Date.now());
        channelElement.href = url;
        channelElement.target = '_blank';
        channelElement.classList.add('js-channel');
        channelElement.innerHTML = channelTemplate;
    
        jsChannelsElement.appendChild(channelElement);
    }
}

const sortTypeElements = document.querySelectorAll('[name="sort"]');

for (const sortType of sortTypeElements) {
    sortType.addEventListener('change', handleSortChange);
}

let sortBy;
function handleSortChange(event) {
    sortBy = event.target.value;
    
    const sortedChannles = sortChannels(currentChannels, sortBy);

    renderChannels(sortedChannles);
}

function sortChannels(channels, sortBy) {
    console.log('SORTUJE');
    function compareAsc(a, b) {
        if (a < b) {
            return -1;
        }
        
        if (a > b) {
            return 1;
        }

        return 0;
    }

    function compareDesc(a, b) {
        if (a < b) {
            return 1;
        }
        
        if (a > b) {
            return -1;
        }

        return 0;
    }

    const comparator = {
        title: function (a, b) {
            const titleA = a.title.toUpperCase();
            const titleB = b.title.toUpperCase();

            return compareAsc(titleA, titleB);
        },

        subscribers: function (a, b) {
            const subscribersA = parseInt(a.statistics.subscriberCount);
            const subscribersB = parseInt(b.statistics.subscriberCount);

            return compareDesc(subscribersA, subscribersB);
        },

        views: function (a, b) {
            const viewsA = parseInt(a.statistics.viewCount);
            const viewsB = parseInt(b.statistics.viewCount)
            
            return compareDesc(viewsA, viewsB);
        },

        videos: function (a, b) {
            const videosA = parseInt(a.statistics.videoCount);
            const videosB = parseInt(b.statistics.videoCount);
            
            return compareDesc(videosA, videosB);
        }
    };

    const sortedChannles = [...channels].sort(comparator[sortBy]);

    return sortedChannles;
}

const clearBtn = document.querySelector('#clear-btn');

clearBtn.addEventListener('click', clear);

function clear() {
    for (const sortType of sortTypeElements) {
        sortType.checked = false;
    }

    sortBy = '';

    searchInput.value = '';

    renderChannels(jsChannels);
}

const searchInput = document.querySelector('#search');

searchInput.addEventListener('input', search);

let currentChannels = [...jsChannels];

function search(event) {
    const phrase = event.target.value.toLowerCase();

    currentChannels = jsChannels.filter(function(channel) {
        const title = channel.title.toLowerCase();

        return title.includes(phrase);
    });

    if (sortBy) {
        currentChannels = sortChannels(currentChannels, sortBy);
    }

    renderChannels(currentChannels);
}

const contrastBtn = document.querySelector('#contrast-btn');

contrastBtn.addEventListener('click', changeContrast);

function changeContrast() {
    document.body.classList.toggle('invert');
}