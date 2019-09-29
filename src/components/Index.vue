<template>

  <div class="wrapper">
    <div class="row w3-hoverable">
      <div class="left table-all w3-round w3-card-4 w3-striped">

        <table align="center">

          <tr>
            <h4>Contract Details</h4>
            
            <td align="left">
              <font size="2">
                
                  <font style="color: #ffd000;">Version:</font>
                  <span id="apiVersion">loading...</span>

                <!-- <div v-for="item in winners" v-bind:key="item.tx" class="winner">
                    <button v-on:click="click_winner(item)" class="btn btn-outline-warning winner-button">
                        <b>{{ item.address_short }}</b>
                        <br/>
                        wins <b>{{ item.amount }}</b> SHUF
                    </button>
                </div> -->
                
                <p>
                  <font style="color: #ffd000;">Name:</font>
                  <span id="name">loading...</span>
                </p>
                <p>
                  <font style="color: #ffd000;">Symbol:</font>
                  <span id="symbol">loading...</span>
                </p>
                <p>
                  <font style="color: #ffd000;">Contract Address:</font>
                  <span id="contractAddress">loading...</span>
                </p>
                <p>
                  <font style="color: #ffd000;">Decimals:</font>
                  <span id="decimals">loading...</span> (18)
                </p>
                <p>
                  <font style="color: #ffd000;">Current Ethereum Block #:</font>
                  <span id="currentEthBlock">loading...</span>
                </p>
              </font>
            </td>
        </tr>
        </table>
      </div>

      <div class="right w3-round w3-card-4">
        <table align="center">
          <tr>
            <h4>Token Stats</h4>
            
            <td align="left">
              <font size="2">

                <p>
                  <font style="color: #ffd000;">Initial Supply:</font>
                  <span id="initialSupply">loading...</span>
                </p>
                <p>
                  <font style="color: #ffd000;">Current Circulating Supply:</font>
                  <span id="circulatingSupplyReadable">loading...</span>
                </p>
                <p>
                  <font style="color: #ffd000;">Token Burned:</font>
                  <span id="tokensBurned">loading...</span>
                </p>
                <p>
                  <font style="color: #ffd000;">Current Heap Size:</font>
                  <span id="heapSize">loading...</span> / 512
                </p>
                <p>
                  <font style="color: #ffd000;">Last address on the Heap:</font>
                  <span id="lastHeapAddress">loading...</span>

                </p>
                <p>
                  <font style="color: #ffd000;">Amount of tokens the last spot holds:</font> <span
                    id="lastHeapAmountReadable">loading...</span>
                </p>
              </font>
            </td>
          </tr>
        </table>

      </div>
    </div>
  </div>
</template>

<script>

import { readWeb3, getToken } from '../web3.js';

function shortAddress(addr) {
    return `${addr.slice(0, 5)}...${addr.slice(-5)}`;
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
  data: function() {
    return {
        winners: this.winners
    }
  },
  methods:{
      click_winner: function(item) {
        var redirectWindow = window.open(`https://etherscan.io/tx/${item.tx}`, '_blank');
        redirectWindow.location;
      },
  },
  created: async function() {
    this.winners = [];
    const reparter = getToken(readWeb3());
    reparter.events.Winner({
            fromBlock: 8617285
        }, (error, event) => {
            if (this.winners.length > 5) {
                this.winners.pop();
            }
            if (event) {
                this.winners.unshift({
                    address: event.returnValues._addr,
                    address_short: shortAddress(event.returnValues._addr),
                    amount: formatAmount(parseFloat(event.returnValues._value.toString()) / 10 ** 18),
                    tx: event.transactionHash
                });
            }
        }
    );
  }
}

    function fetchJson() {
      var xhr = new XMLHttpRequest();
      // set a callback for when the json is loaded
      xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) { // if json loaded successfully
          var data = JSON.parse(this.responseText);
          // do stuff with data
          document.querySelector("#apiVersion").innerText = data["apiVersion"];
          document.querySelector("#name").innerText = data["name"];
          document.querySelector("#symbol").innerText = data["symbol"];
          document.querySelector("#contractAddress").innerText = data["contractAddress"];
          document.querySelector("#decimals").innerText = data["decimals"];
          document.querySelector("#currentEthBlock").innerText = data["currentEthBlock"];
          document.querySelector("#initialSupply").innerText = data["initialSupply"];
          document.querySelector("#circulatingSupplyReadable").innerText = data["circulatingSupplyReadable"];
          document.querySelector("#tokensBurned").innerText = data["tokensBurned"];
          document.querySelector("#heapSize").innerText = data["heapSize"];
          document.querySelector("#lastHeapAddress").innerText = data["heapTopAddress"];
          document.querySelector("#lastHeapAmountReadable").innerText = data["heapTopAmountReadable"];

        }
      };
      // fetch the json
      xhr.open("GET", "https://api2.shuffle.monster", true);
      xhr.send();
    }
    window.onload = function () {
      fetchJson();
    };


</script>

<style scoped>

.wns {
    min-height: 430px;
}
.last {
    min-width: 320px;
}
.winner {
    margin: 20px;
}
.winner-button {
    color: #dba80d;
    border-color: #dba80d;
    width: 250px;
}
.winner-button:hover { 
    color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.auto{
    margin: auto;
}
.main-text {
    margin-left: 60px;
}
.heap {
    padding: 0;
}
.heap-wrapper {
    width: 130px;
    padding: 0;
}


@media screen and (max-width: 767px) {
    .hide-mobile {
        display: none;
    }
    .margin-mobile {
        margin: 16px;
    }
    .mobile-top-margin {
        margin-top:44px;
    }
}

</style>
