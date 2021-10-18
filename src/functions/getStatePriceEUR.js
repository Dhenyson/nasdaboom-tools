import axios from 'axios';
import cheerio from 'react-native-cheerio';

const fetchData = async (url) => {
      const result = await axios.get(url);
      return result.data;
};

export default async function getStatePriceEUR(coin) {
      const content = await fetchData('https://coinmarketcap.com/pt-br/currencies/nasdacoin');

const $ = cheerio.load(content);

const price = $(
'#__next > div > div.container.cmc-main-section > div.cmc-main-sectioncontent > div.cmc-currencies.aiq2zi-0.eXmmQp > div.cmc-currenciesdetails-panel > div > div.cmc-details-panel-price.jta9t4-0.fcilTk > span:nth-child(1) > span.cmc-details-panel-price_price'
).text();
console.log(price)
return price;

}