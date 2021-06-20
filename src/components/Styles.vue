<template> </template>

<script>
export default {};
</script>

<style>
@import url("../../fonts/stylesheet.css");
/* Header */
.header {
  height: 620px;
  background: url("../../img/navpic.png");
}

.navbar .navbar-brand {
  height: 50px;
  width: 38px;
  cursor: pointer;
  margin-top: -10px;
  margin-left: 100px;
}

hr.headline {
  background-color: #d8d8d8 !important;
  width: 1920px;
  height: 1px;
  margin-top: 98px;
  margin-left: -20px;
  position: absolute;
}

.navbar .navbar-nav {
  margin-top: 30px;
  margin-left: 180px;
}

.nav-link {
  height: 50px;
  width: 120px;
  text-align: center;
  color: #ffffff !important;
  font-size: 20px;
  font-family: "TT Commons";
  font-weight: 600;
  font-style: normal;
}

.navbar .nav-item a:hover {
  border-bottom: 4px solid #d8d8d8;
  color: #ffffff;
}

#headmid {
  margin-top: 220px;
}

.zg-header {
  color: #ffffff !important;
  font-size: 50px;
  font-family: "TT Commons";
  font-weight: 600;
  font-style: normal;
}

.text-header1 {
  color: #ffffff !important;
  font-size: 25px;
  font-family: "TT Commons";
  font-weight: 400;
  font-style: normal;
}
.text-header2 {
  margin-top: -15px;
  color: #ffffff !important;
  font-size: 25px;
  font-family: "TT Commons";
  font-weight: 400;
  font-style: normal;
}

.searchform {
  background-color: transparent !important;
  border-color: transparent !important;
  color: white !important;
  font-size: 22px !important;
  font-family: "TT Commons" !important;
  width: 60% !important;
  background: url(../../img/search.png) 95% 50% no-repeat;
}

.searchform:focus {
  background-color: rgba(0, 0, 0, 0.7) !important;
  border-color: white !important;
  color: white !important;
  font-size: 22px !important;
  font-family: "TT Commons" !important;
  width: 60% !important;
}

.cartlk {
  margin-left: 630px;
  margin-top: -40px;
}

.lk {
  margin-left: 40px;
}

.snet {
  float: right;
  right: 90px;
  width: 25px !important;
  top: -320px;
}

.insta-link,
.fb-link,
.fb-link,
.ok-link {
  margin-top: 30px;
}

/* Query */

.query-block {
  height: 1054px;
  background-color: white;
}

.send-block {
  height: 1054px;
  background-color: #f3f3f3;
}

#itemsearch {
  font-family: "TT Commons";
  font-weight: 600;
  font-style: normal;
  font-size: 20px;
  color: #d8d8d8;
  margin-top: 190px;
  margin-left: 385px;
}
#query-zg {
  font-family: "TT Commons";
  font-weight: 600;
  font-style: normal;
  font-size: 40px;
  color: #686d79;
  margin-top: 17px;
  margin-left: 380px;
}
#nametitle {
  font-family: "TT Commons";
  font-weight: 400;
  font-style: normal;
  font-size: 30px;
  color: #686d79;
  margin-top: 50px;
  margin-left: 380px;
}
#emailtitle {
  font-family: "TT Commons";
  font-weight: 400;
  font-style: normal;
  font-size: 30px;
  color: #686d79;
  margin-top: 40px;
  margin-left: 380px;
}
#phonetitle {
  font-family: "TT Commons";
  font-weight: 400;
  font-style: normal;
  font-size: 30px;
  color: #686d79;
  margin-top: 40px;
  margin-left: 380px;
}

.dataform {
  background-color: transparent !important;
  border-color: #979797 !important;
  color: #686d79 !important;
  font-size: 30px !important;
  font-family: "TT Commons" !important;
  height: 60px !important;
  width: 400px !important;
  margin-top: 10px;
  margin-left: 365px;
}

.form-control {
  border-radius: 0 !important;
}

.ch1 {
  margin-top: 7%;
  margin-left: 365px;
}

.ch2 {
  margin-left: 60px;
}

.ch3 {
  margin-top: 3%;
  margin-left: 365px;
}

.custom-control-input:checked ~ .custom-control-label::before {
  border-color: #712be1 !important;
  background-color: #712be1 !important;
}

.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {
  background-image: none !important;
}

.custom-checkbox .custom-control-label::before {
  border-radius: 0 !important;
}

.v-tab {
  font-family: "TT Commons" !important;
  font-weight: 400 !important;
  font-style: normal !important;
  font-size: 30px !important;
  color: #686d79 !important;
  letter-spacing: 0 !important;
  text-transform: none !important;
  background-color: #f3f3f3 !important;
  border-bottom: 2px solid #712be1 !important;
}

.v-tabs-bar {
  height: 60px !important;
}

.firsttab {
  justify-content: flex-start !important;
}

.secondtab {
  justify-content: flex-end !important;
}

.tabsblock {
  margin-top: 220px;
}

.v-tabs-slider-wrapper {
  color: #712be1 !important;
  height: 5px !important;
}

.firstcard {
  height: 716px !important;
  width: 1000px;
  background-color: #f3f3f3 !important;
}

#vintitle {
  font-family: "TT Commons";
  font-weight: 400;
  font-style: normal;
  font-size: 30px;
  color: #686d79;
  margin-top: 65px;
  margin-left: -18px;
}

#vinform {
  font-family: "TT Commons";
  font-weight: 400;
  font-style: normal;
  font-size: 30px;
  color: #686d79;
  margin-top: 20px;
}

.v-input.theme--light.v-text-field.v-text-field--is-booted.v-text-field--placeholder
  input::placeholder {
  color: #d8d8d8;
  font-size: 25px;
}

#modelstitle {
  font-family: "TT Commons";
  font-weight: 400;
  font-style: normal;
  font-size: 30px;
  color: #686d79;
  margin-top: 40px;
  margin-left: -18px;
}

#modelsform {
  font-family: "TT Commons";
  font-weight: 400;
  font-style: normal;
  font-size: 30px;
  color: #686d79;
  margin-top: 20px;
}

#yeartitle {
  font-family: "TT Commons";
  font-weight: 400;
  font-style: normal;
  font-size: 30px;
  color: #686d79;
  margin-top: 40px;
  margin-left: -18px;
}

#yearform {
  font-family: "TT Commons";
  font-weight: 400;
  font-style: normal;
  font-size: 30px;
  color: #686d79;
  margin-top: 20px;
}

#rectangle {
  text-align: left;
  width: 600px;
  height: 70px;
  background: #ffa45a url(../../img/arrow.png) 95% 50% no-repeat;
  cursor: pointer;
  margin-top: 40px;
  line-height: 2.5em;
  font-size: 17px;
  font-family: "TT Commons";
  font-weight: 400;
  font-style: normal;
  font-size: 30px;
  color: white;
}

#recp {
  margin-left: 20px;
}

.accepttext {
  font-family: "TT Commons";
  font-weight: 400;
  font-style: normal;
  font-size: 15px;
  color: #686d79;
  margin-top: 20px;
}

.secondcard {
  height: 716px !important;
  width: 1000px;
  background-color: #f3f3f3 !important;
}

.partsinput {
  background-color: transparent !important;
  border-color: black !important;
  font-family: "TT Commons" !important;
  font-weight: 400 !important;
  font-style: normal !important;
  font-size: 25px !important;
  color: #686d79 !important;
  margin-top: 20px !important;
}

.form-control::placeholder {
  color: #d8d8d8 !important;
  font-size: 25px !important;
}

/* Services */
.services-block {
  height: 1054px;
  background-color: white;
}

#services-zg {
  font-family: "TT Commons";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  margin-top: 140px;
  color: #686d79;
  text-shadow: 3px 3px 3px #d8d8d8e3;
}

.swiper {
  width: 100%;
  margin-top: 74px;
}

.card {
  height: 580px !important;
  border-radius: 0 !important;
  border-color: transparent !important;
}
.card-title {
  font-family: "TT Commons";
  font-style: normal;
  font-weight: 600;
  font-size: 25px !important;
  color: #686d79;
  text-shadow: 3px 3px 3px #d8d8d8e3;
}

.cardprice {
  font-family: "TT Commons";
  font-style: normal;
  font-weight: 600;
  font-size: 20px !important;
  color: #ff4a4a;
  text-shadow: 3px 3px 3px #d8d8d8e3;
}

.butcard {
  width: 160px;
  height: 50px;
  font-family: "TT Commons";
  font-style: normal;
  font-weight: 600;
  font-size: 23px !important;
  color: #fff;
  text-shadow: none;
  background-color: #ffa45a !important;
  border-radius: 0 !important;
  border-color: #ffa45a !important;
  line-height: 1.7 !important;
}

.card-link {
  font-family: "TT Commons";
  font-style: normal;
  font-weight: 600;
  font-size: 20px !important;
  color: #686d79;
  text-shadow: 3px 3px 3px #d8d8d8e3;
  margin-left: 20px;
}

.butnext {
  width: 40px;
  height: 40px;
  background: url(../../img/next-button.svg) 50% 50% no-repeat;
  cursor: pointer;
  position: absolute;
  right: 0px;
  top: 30%;
  z-index: 20;
}

.butprev {
  width: 40px;
  height: 40px;
  background: url(../../img/prev-button.svg) 50% 50% no-repeat;
  cursor: pointer;
  position: absolute;
  left: 0px;
  top: 30%;
  z-index: 20;
}

/* News */

.news-block {
  height: 1054px;
  background-color: white;
}

#news-zg {
  font-family: "TT Commons";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  color: #686d79;
}

#interest {
  font-family: "TT Commons";
  font-weight: 600;
  font-style: normal;
  font-size: 20px;
  color: #d8d8d8;
}

#rec-news {
  text-align: center;
  width: 165px;
  height: 50px;
  background: #712be1;
  cursor: pointer;
  line-height: 2.5em;
  font-size: 20px;
  font-family: "TT Commons";
  font-weight: 600;
  font-style: normal;
  color: white;
}

.news-cards {
  margin-top: 74px;
}

.card-columns {
  column-count: 2 !important;
  column-gap: 3rem !important;
}

.img1 {
  width: 610px !important;
}

.img23 {
  width: 210px !important;
}

.cd1 {
  margin-left: 70px;
}

.cd2 {
  margin-left: 70px;
}

.dtcdl {
  margin-left: 30px;
  margin-top: 20px;
  font-size: 20px;
  font-family: "TT Commons";
  font-weight: 400;
  font-style: normal;
  color: #fff;
  text-shadow: none;
  cursor: pointer;
}

.zgcdl {
  margin-left: 30px;
  margin-top: 220px;
  font-size: 30px;
  font-family: "TT Commons";
  font-weight: 600;
  font-style: normal;
  color: #fff;
  text-shadow: none;
  width: 70%;
  line-height: 1.3 !important;
  cursor: pointer;
}

.txtcdl {
  margin-left: 30px;
  font-size: 20px;
  font-family: "TT Commons";
  font-weight: 400;
  font-style: normal;
  color: #fff;
  text-shadow: none;
  width: 40%;
  line-height: 1.15 !important;
  cursor: pointer;
}

.dtcd {
  margin-left: -50px;
  margin-top: -15px;
  font-size: 20px;
  font-family: "TT Commons";
  font-weight: 400;
  font-style: normal;
  color: #d8d8d8;
  text-shadow: none;
  cursor: pointer;
}

.zgcd {
  margin-left: -50px;
  font-size: 20px;
  font-family: "TT Commons";
  font-weight: 600;
  font-style: normal;
  color: #686d79;
  text-shadow: none;
  width: 90%;
  line-height: 1.15 !important;
  cursor: pointer;
}

.txtcd {
  margin-left: -50px;
  font-size: 20px;
  font-family: "TT Commons";
  font-weight: 400;
  font-style: normal;
  color: #686d79;
  text-shadow: none;
  line-height: 1.15 !important;
  cursor: pointer;
}

/* Footer */

.footer-block {
  height: 780px;
  background-color: #f3f3f3;
}
</style>
