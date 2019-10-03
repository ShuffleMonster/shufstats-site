<template>

<body>

    <div class="w3-row-padding">
      <div class="top-1 w3-third w3-margin-bottom">
        <div style="height: 350px;" class="w3-container w3-card-4 w3-green w3-round w3-padding-16">
          <div class="w3-left"><i class="fa fa-comment w3-xxxlarge"></i></div>
          <div class="w3-right">
            <h3>52</h3>
          </div>
          <div class="w3-clear"></div>
          <h4>Messages</h4>
        </div>
      </div>

      <div class="top-2 w3-third w3-margin-bottom">
        <div class="w3-badge">

          <h5>Shuffle Monster txns</h5>
           <table class="w3-table-all w3-round w3-hoverable w3-green w3-card-4">
            <tbody class="w3-hoverable">
              
            
                <tr v-on:click="click_transfer(item)" v-for="item in transfers" v-bind:key="item.tx">
                   <td><i class="fab fa-ethereum w3-text-dark-grey w3-xxlarge"></i></td>
      <td>{{ item.address_short }}</td>
       <td>transfers {{ item.amount }} SHUF</td>
       </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="top-3 w3-third w3-margin-bottom">
        <div style="height: 350px;" class="w3-container w3-card-4 w3-green w3-round w3-padding-16">
          <div class="w3-left"><i class="fa fa-users w3-xxxlarge"></i></div>
          <div class="w3-right">
            <h3>50</h3>
          </div>
          <div class="w3-clear"></div>
          <h4>Users</h4>
        </div>
      </div>
    </div>


  <div class="wrapper">
        <div class="w3-row-padding">
            <div class="w3-row w3-margin-bottom">

      </div>
      </div>
      </div>
</body>

</template>


      

<script>




import { readWeb3, getToken } from '../web3.js';

// function shortAddress(addr) {
//     return `${addr.slice(0, 21)}...${addr.slice(-5)}`;
// }

// function formatAmount(amount, maxDigits = 6)  {
//     if (amount.toString().length <= maxDigits) {
//         return amount.toString();
//     }

//     const intDigits = amount.toFixed(0).toString().length;
//     const decDigits = maxDigits - intDigits;

//     const decimals = (decDigits > 0) ? decDigits : 0;

//     return Number(amount.toFixed(decimals)).toString();
// }



function shortAddress(from) {
    return `${from.slice(0, 21)}...${from.slice(-5)}`;
}

function formatAmount(amount, maxDigits = 6)  {
    if (amount.toString().length <= maxDigits) {
        return amount.toString();
    }

    const intDigits = amount.toFixed(0).toString().length;
    const decDigits = maxDigits - intDigits;

    const decimals = (decDigits > 0) ? decDigits : 0;

    return Number(amount.toFixed(decimals)).toString();
}





export default {
  name: 'Index',
  // data: function() {
  //   return {
  //       winners: this.winners
  //   }
  // },

data: function() {
    return {
        transfers: this.transfers
    }
  },

  // methods:{
  //     click_winner: function(item) {
  //       var redirectWindow = window.open(`https://etherscan.io/tx/${item.tx}`, '_blank');
  //       redirectWindow.location;
  //     },
  // },

  methods:{
      click_transfer: function(item) {
        var redirectWindow = window.open(`https://etherscan.io/tx/${item.tx}`, '_blank');
        redirectWindow.location;
      },
  },


  // created: async function() {
  //   this.winners = [];
  //   const reparter = getToken(readWeb3());
  //   reparter.events.Winner({
  //           fromBlock: 8617285
  //       }, (error, event) => {
  //           if (this.winners.length > 10) {
  //               this.winners.pop();
  //           }
  //           if (event) {
  //               this.winners.unshift({
  //                   address: event.returnValues._addr,
  //                   address_short: shortAddress(event.returnValues._addr),
  //                   amount: formatAmount(parseFloat(event.returnValues._value.toString()) / 10 ** 18),
  //                   tx: event.transactionHash
  //               });
  //           }
  //       }
  //   );
  // },

    created: async function() {
    this.transfers = [];
    const reparter = getToken(readWeb3());
    reparter.events.Transfer({
            fromBlock: 8617285
        }, (error, event) => {
            if (this.transfers.length > 5) {
                this.transfers.pop();
            }
            if (event) {
                this.transfers.unshift({
                    address: event.returnValues._from,
                    address2: event.returnValues._to,
                    address_short: shortAddress(event.returnValues._from),
                    address_short2: shortAddress(event.returnValues._to),
                    amount: formatAmount(parseFloat(event.returnValues._value.toString()) / 10 ** 18),
                    tx: event.transactionHash
                });
            }
        }
    );
  }






  
}



    // function fetchJson() {
    //   var xhr = new XMLHttpRequest();
    //   // set a callback for when the json is loaded
    //   xhr.onreadystatechange = function () {
    //     if (this.readyState == 4 && this.status == 200) { // if json loaded successfully
    //       var data = JSON.parse(this.responseText);
    //       // do stuff with data


          
    //       document.querySelector("#initialSupply").innerText = data["initialSupply"];
    //       document.querySelector("#circulatingSupplyReadable").innerText = data["circulatingSupplyReadable"];
    //       document.querySelector("#tokensBurned").innerText = data["tokensBurned"];
    //       document.querySelector("#lastHeapAmountReadable").innerText = data["heapTopAmountReadable"];
    //       document.querySelector("#heapSize").innerText = data["heapSize"];

          
    //       // document.querySelector("#apiVersion").innerText = data["apiVersion"];
    //       // document.querySelector("#name").innerText = data["name"];
    //       // document.querySelector("#symbol").innerText = data["symbol"];
    //       // document.querySelector("#contractAddress").innerText = data["contractAddress"];
    //       // document.querySelector("#decimals").innerText = data["decimals"];
    //       // document.querySelector("#currentEthBlock").innerText = data["currentEthBlock"];      
    //       // document.querySelector("#lastHeapAddress").innerText = data["heapTopAddress"];
          

    //     }
    //   };
    //   // fetch the json
    //   xhr.open("GET", "https://api2.shuffle.monster", true);
    //   xhr.send();
    // }
    // window.onload = function () {
    //   fetchJson();
    // };





</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



/* Hot it works? */
.container{
    width: auto;
}
.my-auto{
    margin-top: auto;
    margin-bottom: auto;
}
.title{
    position: static;
    max-width: 731px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 60px;
    line-height: 93.19%;
    text-align: left;
    /* or 33px */

    display: flex;
    align-items: center;
    letter-spacing: -0.02em;

    color: #000000;
}

.description{
    position: static;
    font-family: Poppins;
    font-style: normal;
    font-weight: 200;
    font-size: 25px;
    text-align: left;
    /* or 18px */
    align-items: center;
    color: #000000;
}

.main{
    margin-top: 66px;
    margin-bottom: 66px;
}

@media screen and (max-width: 767px) {
    .margin-mobile {
        /* padding: 25px; */
        margin-left: 16px;
        margin-right: 16px;
    }
}


</style>
