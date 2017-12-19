<template>
  <div id="app">
    <button @click="testowa">Start</button>

    <p>
      * Select area, then click button:
    </p>
    <button>Change Background</button>
    <button>Change Font Size</button>
    <button>Change Font Family</button>
<br>
<hr>

    <span :style="globalStyles">

      <span v-html="msg" @blur="checkData" :style="spanFirst" ref="msg" contenteditable="true"></span>
    </span>
    <br>

    <span :style="globalStyles">


      <span v-html="msg2" @blur="checkData2" ref="msg2" contenteditable="true"></span>







      <span v-html="msg3" :style="spanSecond" @blur="checkData3" ref="msg3" contenteditable="true">

        </span>





      <span v-html="msg4" :style="spanThird" @blur="checkData4" ref="msg4" contenteditable="true">

      

      </span>
    </span>


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
     
        this.msg4 = this.entryData["inner-elements"][4].text;
        this.msg3 = this.entryData["inner-elements"][3].text;
        this.msg2 = this.entryData["inner-elements"][2].text;
        this.msg = this.entryData["inner-elements"][0].text;
      });


      







    },
    methods: {
      checkData() {
   
        this.msg = this.$refs.msg.textContent;

         String.prototype.splice = function(
            index,
            howManyToDelete,
            stringToInsert /* [, ... N-1, N] */
            ){
            var characterArray = this.split( "" );
            Array.prototype.splice.apply(
                characterArray,
                arguments
            );
            return(
                characterArray.join( "" )
            );
        };
    
this.msg = this.msg.splice(1,0,'</span></span><br><span :style="globalStyles"><span :style="spanFirst"> ')

      },
      checkData2() {
        this.msg2 = this.$refs.msg2.textContent;
      },
      checkData3() {
        this.msg3 = this.$refs.msg3.textContent;
      },
      checkData4() {
        this.msg4 = this.$refs.msg4.textContent;
        console.log(this.msg, this.msg2, this.msg3, this.msg4);
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
    beforeMount() {



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
