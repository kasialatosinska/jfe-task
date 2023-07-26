const pageDataJson = localStorage.getItem('pageData'); //POD KLUCZEM//

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

const jsChannels = [
    {
        "title": "Fun Fun Function",
        "description": "I’m Mattias Petter Johansson, mpj for short. I’ve been a full-time programmer for about ten years. Among others, I've worked for Absolut Vodka, Blackberry and Spotify.  https://patreon.com/funfunfunction",
        "customUrl": "https://youtube.com/funfunfunction",
        "publishedAt": "2015-05-15T08:25:01.000Z",
        "thumbnails": {
            "default": {
                "url": "https://yt3.ggpht.com/a-/AN66SAzjMJRUuJm10kRK7ybMLDmXtRH71_F1YapMjw=s88-mo-c-c0xffffffff-rj-k-no",
                "width": 88,
                "height": 88
            },
            "medium": {
                "url": "https://yt3.ggpht.com/a-/AN66SAzjMJRUuJm10kRK7ybMLDmXtRH71_F1YapMjw=s240-mo-c-c0xffffffff-rj-k-no",
                "width": 240,
                "height": 240
            },
            "high": {
                "url": "https://yt3.ggpht.com/a-/AN66SAzjMJRUuJm10kRK7ybMLDmXtRH71_F1YapMjw=s800-mo-c-c0xffffffff-rj-k-no",
                "width": 800,
                "height": 800
            }
        },
        "localized": {
            "title": "Fun Fun Function",
            "description": "I’m Mattias Petter Johansson, mpj for short. I’ve been a full-time programmer for about ten years. Among others, I've worked for Absolut Vodka, Blackberry and Spotify.  https://patreon.com/funfunfunction"
        },
        "country": "SE",
        "statistics": {
            "viewCount": "7261372",
            "commentCount": "0",
            "subscriberCount": "180691",
            "hiddenSubscriberCount": false,
            "videoCount": "189"
        }
    },
    {
        "title": "Google Chrome Developers",
        "description": "Making the web more awesome.",
        "customUrl": "https://youtube.com/ChromeDevelopers",
        "publishedAt": "2012-04-24T00:05:52.000Z",
        "thumbnails": {
            "default": {
                "url": "https://yt3.ggpht.com/a-/AN66SAx7nOfbTWCEWQl33_t90eHhqz0cSmlRElL44g=s88-mo-c-c0xffffffff-rj-k-no",
                "width": 88,
                "height": 88
            },
            "medium": {
                "url": "https://yt3.ggpht.com/a-/AN66SAx7nOfbTWCEWQl33_t90eHhqz0cSmlRElL44g=s240-mo-c-c0xffffffff-rj-k-no",
                "width": 240,
                "height": 240
            },
            "high": {
                "url": "https://yt3.ggpht.com/a-/AN66SAx7nOfbTWCEWQl33_t90eHhqz0cSmlRElL44g=s800-mo-c-c0xffffffff-rj-k-no",
                "width": 800,
                "height": 800
            }
        },
        "localized": {
            "title": "Google Chrome Developers",
            "description": "Making the web more awesome."
        },
        "statistics": {
            "viewCount": "21089248",
            "commentCount": "0",
            "subscriberCount": "260317",
            "hiddenSubscriberCount": false,
            "videoCount": "796"
        }
    },
    {
        "title": "DevTips",
        "description": "DevTips is a weekly show for YOU who want to be inspired 👍 and learn 🖖 about programming. Hosted by David and MPJ - two notorious bug generators 💖 and teachers 🤗. Exploring code together and learning programming along the way - yay!\n\nEverything you see and hear are the opinions and preferences of the individual who said them, and no one else's.",
        "customUrl": "https://youtube.com/DevTipsForDesigners",
        "publishedAt": "2013-08-06T15:31:46.000Z",
        "thumbnails": {
            "default": {
                "url": "https://yt3.ggpht.com/a-/AN66SAwJXtTrxzaTOzCl6Jd69lHLnrS_l2qYJKDeUw=s88-mo-c-c0xffffffff-rj-k-no",
                "width": 88,
                "height": 88
            },
            "medium": {
                "url": "https://yt3.ggpht.com/a-/AN66SAwJXtTrxzaTOzCl6Jd69lHLnrS_l2qYJKDeUw=s240-mo-c-c0xffffffff-rj-k-no",
                "width": 240,
                "height": 240
            },
            "high": {
                "url": "https://yt3.ggpht.com/a-/AN66SAwJXtTrxzaTOzCl6Jd69lHLnrS_l2qYJKDeUw=s800-mo-c-c0xffffffff-rj-k-no",
                "width": 800,
                "height": 800
            }
        },
        "localized": {
            "title": "DevTips",
            "description": "DevTips is a weekly show for YOU who want to be inspired 👍 and learn 🖖 about programming. Hosted by David and MPJ - two notorious bug generators 💖 and teachers 🤗. Exploring code together and learning programming along the way - yay!\n\nEverything you see and hear are the opinions and preferences of the individual who said them, and no one else's."
        },
        "country": "SE",
        "statistics": {
            "viewCount": "13948443",
            "commentCount": "0",
            "subscriberCount": "306828",
            "hiddenSubscriberCount": false,
            "videoCount": "329"
        }
    },
    {
        "title": "freeCodeCamp.org",
        "description": "We're an open source community of busy people who learn to code and build projects for nonprofits.",
        "customUrl": "https://youtube.com/freecodecamp",
        "publishedAt": "2014-12-16T21:18:48.000Z",
        "thumbnails": {
            "default": {
                "url": "https://yt3.ggpht.com/a-/AN66SAxCZFxULNr0S_fHjEvGVUMwJzjbwU-wVularA=s88-mo-c-c0xffffffff-rj-k-no",
                "width": 88,
                "height": 88
            },
            "medium": {
                "url": "https://yt3.ggpht.com/a-/AN66SAxCZFxULNr0S_fHjEvGVUMwJzjbwU-wVularA=s240-mo-c-c0xffffffff-rj-k-no",
                "width": 240,
                "height": 240
            },
            "high": {
                "url": "https://yt3.ggpht.com/a-/AN66SAxCZFxULNr0S_fHjEvGVUMwJzjbwU-wVularA=s800-mo-c-c0xffffffff-rj-k-no",
                "width": 800,
                "height": 800
            }
        },
        "localized": {
            "title": "freeCodeCamp.org",
            "description": "We're an open source community of busy people who learn to code and build projects for nonprofits."
        },
        "country": "US",
        "statistics": {
            "viewCount": "10578494",
            "commentCount": "0",
            "subscriberCount": "464998",
            "hiddenSubscriberCount": false,
            "videoCount": "879"
        }
    },
    {
        "title": "meet.js",
        "description": "meet.js videos",
        "customUrl": "https://youtube.com/meetjs",
        "publishedAt": "2013-10-26T08:46:30.000Z",
        "thumbnails": {
            "default": {
                "url": "https://yt3.ggpht.com/a-/AN66SAwgCxBPLKDOxEY31LAmTUsslMnIaNFuMGhluw=s88-mo-c-c0xffffffff-rj-k-no",
                "width": 88,
                "height": 88
            },
            "medium": {
                "url": "https://yt3.ggpht.com/a-/AN66SAwgCxBPLKDOxEY31LAmTUsslMnIaNFuMGhluw=s240-mo-c-c0xffffffff-rj-k-no",
                "width": 240,
                "height": 240
            },
            "high": {
                "url": "https://yt3.ggpht.com/a-/AN66SAwgCxBPLKDOxEY31LAmTUsslMnIaNFuMGhluw=s800-mo-c-c0xffffffff-rj-k-no",
                "width": 800,
                "height": 800
            }
        },
        "localized": {
            "title": "meet.js",
            "description": "meet.js videos"
        },
        "statistics": {
            "viewCount": "28 565",
            "commentCount": "0",
            "subscriberCount": "504",
            "hiddenSubscriberCount": false,
            "videoCount": "69"
        }
    },
    {
        "title": "JSConf",
        "description": "The JSConf YouTube Channel.\nJSConf is a series of JavaScript conferences from around the world and here we release the conference talk videos for free as fast as we can after every event.\n\nTopics include JavaScript, HTML5, CSS, node.js, robotics, etc.",
        "customUrl": "https://youtube.com/jsconfeu",
        "publishedAt": "2012-10-09T10:21:46.000Z",
        "thumbnails": {
            "default": {
                "url": "https://yt3.ggpht.com/a-/AN66SAxWC2To0-1xz2-X3HNC6WFdP8zPKKqqHk_8ug=s88-mo-c-c0xffffffff-rj-k-no",
                "width": 88,
                "height": 88
            },
            "medium": {
                "url": "https://yt3.ggpht.com/a-/AN66SAxWC2To0-1xz2-X3HNC6WFdP8zPKKqqHk_8ug=s240-mo-c-c0xffffffff-rj-k-no",
                "width": 240,
                "height": 240
            },
            "high": {
                "url": "https://yt3.ggpht.com/a-/AN66SAxWC2To0-1xz2-X3HNC6WFdP8zPKKqqHk_8ug=s800-mo-c-c0xffffffff-rj-k-no",
                "width": 800,
                "height": 800
            }
        },
        "localized": {
            "title": "JSConf",
            "description": "The JSConf YouTube Channel.\nJSConf is a series of JavaScript conferences from around the world and here we release the conference talk videos for free as fast as we can after every event.\n\nTopics include JavaScript, HTML5, CSS, node.js, robotics, etc."
        },
        "statistics": {
            "viewCount": "6,747 555",
            "commentCount": "0",
            "subscriberCount": "106.248",
            "hiddenSubscriberCount": true,
            "videoCount": "1 281"
        }
    },
    {
        "title": "Coding Tech",
        "description": "LEGAL DISCLAIMER ON CONTENT PERMISSIONS:\n\nCoding Tech partners with the tech conferences around the world that provided Coding Tech with their EXPLICIT permissions to republish videos on this channel. Here's the list of Conferences that provided Coding Tech with EXPLICIT written publication permissions: PyData, MLConf, Build Stuff, Code::dive, PolyConf, AmsterdamJS, React Amsterdam, ReactiveConf, Jazoon Tech Days, SFNode, CppCon, Infinite Red, GDG Lviv, Mibuso.com, You Gotta Love Frontend, React Native EU, Node Summit, NodeConfEU, ConFoo, Pixels Camp, JavaScriptLA, The Linux Foundation, Oredev Conference, Techlahoma, fitcevents. Coding Tech also re-posts content which was originally published with the Creative Commons Attribution license (reuse allowed).\n\nFor business inquiries, please connect on LinkedIn: https://www.linkedin.com/in/yuriy-matso-4614951/",
        "customUrl": "https://youtube.com/codingtech",
        "publishedAt": "2015-10-17T02:48:18.000Z",
        "thumbnails": {
            "default": {
                "url": "https://yt3.ggpht.com/a-/AN66SAyBKLTLdTfmsp2PPjv-h53iokGAOXzcUVixRA=s88-mo-c-c0xffffffff-rj-k-no",
                "width": 88,
                "height": 88
            },
            "medium": {
                "url": "https://yt3.ggpht.com/a-/AN66SAyBKLTLdTfmsp2PPjv-h53iokGAOXzcUVixRA=s240-mo-c-c0xffffffff-rj-k-no",
                "width": 240,
                "height": 240
            },
            "high": {
                "url": "https://yt3.ggpht.com/a-/AN66SAyBKLTLdTfmsp2PPjv-h53iokGAOXzcUVixRA=s800-mo-c-c0xffffffff-rj-k-no",
                "width": 800,
                "height": 800
            }
        },
        "localized": {
            "title": "Coding Tech",
            "description": "LEGAL DISCLAIMER ON CONTENT PERMISSIONS:\n\nCoding Tech partners with the tech conferences around the world that provided Coding Tech with their EXPLICIT permissions to republish videos on this channel. Here's the list of Conferences that provided Coding Tech with EXPLICIT written publication permissions: PyData, MLConf, Build Stuff, Code::dive, PolyConf, AmsterdamJS, React Amsterdam, ReactiveConf, Jazoon Tech Days, SFNode, CppCon, Infinite Red, GDG Lviv, Mibuso.com, You Gotta Love Frontend, React Native EU, Node Summit, NodeConfEU, ConFoo, Pixels Camp, JavaScriptLA, The Linux Foundation, Oredev Conference, Techlahoma, fitcevents. Coding Tech also re-posts content which was originally published with the Creative Commons Attribution license (reuse allowed).\n\nFor business inquiries, please connect on LinkedIn: https://www.linkedin.com/in/yuriy-matso-4614951/"
        },
        "country": "US",
        "statistics": {
            "viewCount": "13 779 683",
            "commentCount": "0",
            "subscriberCount": "362 617",
            "hiddenSubscriberCount": false,
            "videoCount": "539"
        }
    },
    {
        "title": "Mashable",
        "description": "Mashable is for superfans. We're not for the casually curious. Obsess with us. Subscribe: http://on.mash.to/Subscribe",
        "customUrl": "https://www.youtube.com/mashable",
        "publishedAt": "1154225846000",
        "thumbnails": {
            "default": {
                "url": "https://yt3.ggpht.com/a/AATXAJwY92Ezx1PinC-fes8WsE_0W61UI3X3XLt2dw=s88-c-k-c0xffffffff-no-rj-mo",
                "width": 88,
                "height": 88
            },
            "medium": {
                "url": "https://yt3.ggpht.com/a/AATXAJwY92Ezx1PinC-fes8WsE_0W61UI3X3XLt2dw=s240-c-k-c0xffffffff-no-rj-mo",
                "width": 240,
                "height": 240
            },
            "high": {
                "url": "https://yt3.ggpht.com/a/AATXAJwY92Ezx1PinC-fes8WsE_0W61UI3X3XLt2dw=s800-c-k-c0xffffffff-no-rj-mo",
                "width": 800,
                "height": 800
            }
        },
        "localized": {
            "title": "Lorem Ipsum",
            "description": "Mashable is for superfans. We're not for the casually curious. Obsess with us. Subscribe: http://on.mash.to/Subscribe",
        },
        "country": "PL",
        "statistics": {
            "viewCount": "345,835,173",
            "commentCount": "92029918",
            "subscriberCount": "936728",
            "hiddenSubscriberCount": true,
            "videoCount": "204"
        }
    }
];

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

renderChannels(jsChannels);

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