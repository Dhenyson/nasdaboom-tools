import axios from 'axios';
import cheerio from 'react-native-cheerio';

const fetchData = async (url) => {
      const result = await axios.get(url);
      return result.data;
};

export default async function getStatePrice(coin) {
    const content = await fetchData('https://br.investing.com/currencies/streaming-forex-rates-majors');

    const $ = cheerio.load(content);

    const usd_brl = $(
      '#pair_2103 > td.pid-2103-bid'
    ).text();

    const eur_usd = $(
        '#pair_1 > td.pid-1-bid'
    ).text();

    var price = {usd_brl: usd_brl, eur_usd: eur_usd}

   
      return price;
}