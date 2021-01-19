const axios = require('axios');

const siteList = [
  'https://unsplash.com/',
  'https://google.com',
  'https://www.amazon.com/',
  'https://www.humblebundle.com/',
  'https://store.steampowered.com/',
  'https://www.npmjs.com/',
  'https://expressjs.com/',
  'https://www.pencil2d.org/',
  'https://www.libreoffice.org/',
  'https://duckduckgo.com/',
  /*'https://reddit.com/',*/
  'https://stackoverflow.com/',
  'https://www.linkedin.com/',
  'https://linuxmint.com/',
  'https://tvtropes.org/',
  'https://www.mywot.com/',
  'https://www.vyprvpn.com/',
  'https://www.imdb.com/',
  'https://www.netflix.com/',
  'https://www.hbomax.com/',
  'https://www.hulu.com/',
  'https://www.cbs.com/all-access/',
  'http://goodreads.com/',
  'https://www.gutenberg.org/',
  'https://www.simplyrecipes.com/recipes/banana_bread/',
  'https://www.seriouseats.com/',
  'https://mashable.com/',
  'https://io9.gizmodo.com/',
  'https://www.duolingo.com/',
  'https://www.codecademy.com/',
  'https://www.barnesandnoble.com/',
  'https://abebooks.com',
  'https://apnews.com/',
  'https://www.pbs.org/',
  'https://web.archive.org/',
  'https://github.com/',
  'https://www.nps.gov/index.htm',
  'https://www.cdc.gov/',
  'https://www.webmd.com/',
  'http://mayoclinic.org/',
  'https://www.allrecipes.com/recipes/',
  'https://www.foodnetwork.com/',
  'https://www.delish.com/',
  'https://www.dafont.com/',
  'https://en.wikipedia.org/',
  'https://www.youtube.com/',
  'https://my.nintendo.com/',
  'https://www.hpb.com/home',
  'https://specsonline.com/',
  'https://www.chron.com/',
  'https://www.southwest.com/',
];

async function makeCallsToSiteListSoLastXEntriesInRouterHistoryAreThese(){
  for(let i = 0; i < siteList.length; i++){
    await axios.get(siteList[i])
      .then(function (response) {
        console.log(`Call to entry '${siteList[i]}' successful!`);
      })
      .catch(function (error) {
        // handle error
        console.log(`The following error occurred when trying to call '${siteList[i]}'`);
        console.log(error);
      })
  }
}

async function runner(){
  try{
    await makeCallsToSiteListSoLastXEntriesInRouterHistoryAreThese();
    process.exit(0);
  }catch(e){
    console.log('An error occurred while calling makeCallsToSiteListSoLastXEntriesInRouterHistoryAreThese');
    console.log(e);
    process.exit(1);
  }
}

runner();
