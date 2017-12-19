<template>
  <div id="app">
    <button @click="testowa">klik</button>

    <p>
      * Select area, then click button:
    </p>
    <button>Change Background</button>
    <button>Change Font Size</button>
    <button>Change Font Family</button>
<br>
<hr>

    <span @keypress.enter="checkData" :style="globalStyles" ref="msg" contenteditable="true">

      <span :style="spanFirst">{{entryData["inner-elements"][0].text}} </span>
    </span>
    <br>

    <span @keypress.enter="checkData" :style="globalStyles" ref="msg" contenteditable="true">


      <span @keypress.enter="checkData2" ref="msg2" contenteditable="true">{{entryData["inner-elements"][2].text}}</span>







      <span :style="spanSecond" @keypress.enter="checkData3" ref="msg3" contenteditable="true" class="text--purple">

        {{entryData["inner-elements"][3].text}}</span>





      <span :style="spanThird" @keypress.enter="checkData4" ref="msg4" contenteditable="true" class="text--pink">

        {{entryData["inner-elements"][4].text}}

      </span>
    </span>

    <p v-html="asdf"></p>

  </div>









</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        entryData: '',
        msg: '',
        msg2: '',
        msg3: '',
        msg4: '',
        globalStyles: '',
        spanFirst: '',
        spanSecond: '',
        spanThird: ''
      }
    },
    created() {

      fetch('https://api.myjson.com/bins/d3icz').then(function (data) {
        return data.json();
      }).then(entry => {
        this.entryData = entry;
      });










    },
    methods: {
      checkData() {
        this.msg = this.$refs.msg.textContent;
      },
      checkData2() {
        this.msg2 = this.$refs.msg2.textContent;
      },
      checkData3() {
        this.msg3 = this.$refs.msg3.textContent;
      },
      checkData4() {
        this.msg4 = this.$refs.msg4.textContent;
      },
      testowa() {
        // ================= GENERAL STYLES =========
        var stylesGlobal = ''
        for (let key in this.entryData.styles) {
          if (key !== "position") {
            stylesGlobal += `${key}: ${this.entryData.styles[key]}; `;
          }
        }
        this.globalStyles = stylesGlobal;

        // ================ FIRST SPAN  ============
        var firstSpan = ''
        for (let key in this.entryData.styles) {
          firstSpan += `${key}: ${this.entryData["inner-elements"][0].styles[key]}; `;
        }
        this.spanFirst = firstSpan;


        // =================== SECOND SPAN  ==============
        var secondSpan = ''
        for (let key in this.entryData.styles) {
          secondSpan += `${key}: ${this.entryData["inner-elements"][3].styles[key]}; `;
        }
        this.spanSecond = secondSpan;

        // ===================== THIRD SPAN =============
        var thirdSpan = ''
        for (let key in this.entryData.styles) {
          thirdSpan += `${key}: ${this.entryData["inner-elements"][4].styles[key]}; `;
        }
        this.spanThird = thirdSpan;




      }

    },
    mounted() {



    }
  }

</script>

<style lang="scss">
  #app {
    width: 100%;
    height: 100vh;
    position: relative;
    text-align: center;
  }

  span {}

  hr {
    margin: 30px;
  }
</style>
