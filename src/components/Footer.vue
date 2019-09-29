<template>
<!-- Footer -->
<div class="footer">

    <div class="footer-bottom">




        <a style="text-decoration: none;" href="https://gist.github.com/GeoffedUP/13a88af4843b13a81044bb37249c0480" target="_blank">
            <h4>SHUF Developer Api Link</h4>
        </a>
    </div>
    <div class="footer-top">


        <font size="4" color="#C0392B">❤</font>&nbsp;&nbsp;<a style="text-decoration: none;"
            href="https://etherscan.io/address/0x69696562885eB3C9a609f957efd150DF93BA8c2e"
            target="_blank">0x69696562885eB3C9a609f957efd150DF93BA8c2e</a>

    </div>

    <div class="copyright">
        <p>
            <font size="1">
                The source code is licensed
                <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
                <br>The website content is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC
                    BY NC SA 4.0</a>.
            </font>
        </p>
    </div>
    <!--Start ClickToTop-->

    <div class="totop">
        <p align="right">
            <a href="#top" id="totop">
                <font size="8"><i style="opacity: 0.7;" class="fa fa-arrow-alt-circle-up"></i></font>
            </a>
        </p>
    </div>
</div>
</template>



<script>
export default {
  name: 'Footer'
}
</script>


<style scoped>
.icon{
    font-size: 33px;
    color: black;
    background-color: white;
    padding: 16px;
    margin: 16px;
}
.icon:hover {
  padding: 18px;
  margin: 14px;
  text-decoration: none;
}
.background {
    position: static;
    width: 100%;
    padding: 0;
    padding: 60px;
    background: linear-gradient(181.07deg, #21540F 9.11%, #153413 83.74%), #153312;
}
.prof {
    width: 256px;
    height: 256px;
}
.me {
    margin-left: 30px;
}
.title{
    position: static;

    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    text-align: left;
    line-height: 93.19%;
    /* or 23px */

    display: flex;
    letter-spacing: -0.02em;

    color: #FFFFFF;
}
.profile{
    position: static;

    font-family: Poppins;
    font-style: normal;
    font-size: 16px;
    text-align: left;
    /* or 23px */
    color: #FFFFFF;
}
.lk{
    text-align: left;
}
@media screen and (max-width: 767px) {
  .mobile-top-margin {
      padding-top:44px;
      margin-left: 0px;
    }
}
</style>
