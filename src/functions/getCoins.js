import getData from './getData.js'

export default async function getCoins(){

    const formatPrice = (number) => {
      if(number < 1){
        return number.toFixed(4)
      } else {
        return number.toFixed(2)
      }
    }

    const formatChange = (number) => {
      let num = '+'
      if(number < 0){
        return number.toFixed(2)
      } else {
        num  = num + number.toFixed(2)
        return num
      }
    }

    const data2 = await getData()

    let result2 = data2.data.coins
    let dados = Object.keys(data2.data.coins)

    let coins2 = {}

    for(var i = 0; i < dados.length; i++){

        coins2[result2[dados[i]].slug] = {
                                        name:           result2[dados[i]].name,
                                        price:          formatPrice(result2[dados[i]].quote.USD.price),
                                        change24:       formatChange(result2[dados[i]].quote.USD.percent_change_24h),
                                        volume24:       result2[dados[i]].quote.USD.volume_24h.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
                                        circulation:    result2[dados[i]].circulating_supply.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
                                        max_supply:     result2[dados[i]].max_supply,
                                        symbol:         result2[dados[i]].symbol,
                                        market_cap:     result2[dados[i]].quote.USD.market_cap.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
                                    }

    }

    return coins2

}

getCoins()