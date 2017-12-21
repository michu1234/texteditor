Vue.component('text-editor', {
    render: function (createElement) {
        return createElement(this.jsonFILE["inner-elements"][0].type, {
                style: this.jsonFILE.styles,
                attrs: {
                    contentEditable: "true"
                }
            },

           [
            this.jsonFILE["inner-elements"][0].text,
            createElement('br', ''),
            createElement(this.jsonFILE["inner-elements"][3].type, this.jsonFILE["inner-elements"][2].text),
            createElement(this.jsonFILE["inner-elements"][3].type, {
                style: this.jsonFILE["inner-elements"][3].styles
            }, this.jsonFILE["inner-elements"][3].text),
            createElement(this.jsonFILE["inner-elements"][4].type, {
                style: this.jsonFILE["inner-elements"][4].styles
            }, this.jsonFILE["inner-elements"][4].text)
        ]

        )},
    data() {
        return {
            content: 'dasfasdfsdf',
            jsonFILE: {
                type: 'text',
                id: 'textKoRpo0y7',
                action: {
                    click: []
                },
                body: [],
                styles: {
                    display: '',
                    color: '#fff',
                    opacity: '1',
                    'border-radius': '6px 6px 6px 6px',
                    transform: 'rotate(0deg)',
                    border: '0px solid #4690f7',
                    'background-color': 'rgb(248, 187, 208)',
                    height: '112px',
                    width: '295px',
                    padding: '10px',
                    'text-align': 'center',
                    'letter-spacing': '0px',
                    'font-size': '31px',
                    'font-family': 'Aileron Thin',
                    'font-weight': '300',
                    'text-decoration': 'none',
                    'box-shadow': '0px 0px 0px 0px #000000',
                    'text-transform': 'initial',
                    'font-style': 'normal',
                    top: '237px',
                    left: '51px',
                    'z-index': '2000',
                    'text-shadow': 'rgba(0,0,0,0.2) 2px 2px 0px',
                    'line-height': '2.7em'
                },
                text: 'Ompa Cool story text goes Here',
                'inner-elements': [{
                        type: 'span',
                        text: 'Ompa',
                        styles: {
                            color: '#eaeaea'
                        }
                    },
                    {
                        type: 'br'
                    },
                    {
                        type: 'text',
                        text: 'Cool story text'
                    },
                    {
                        type: 'span',
                        text: 'goes ',
                        styles: {
                            color: 'rgb(136, 14, 79)',
                            'font-size': '54px'
                        }
                    },
                    {
                        type: 'span',
                        text: 'Here',
                        styles: {
                            color: 'rgb(186, 104, 200)',
                            'background-color': 'rgb(248, 187, 0)'
                        }
                    }
                ]
            }
        }
    },
    created() {
        // fetch('https://api.myjson.com/bins/d3icz').then(function (data) {
        //     return data.json();
        // }).then(entry => {
        //     this.entryData = entry;

        //     this.msg4 = this.entryData["inner-elements"][4].text;
        //     this.msg3 = this.entryData["inner-elements"][3].text;
        //     this.msg2 = this.entryData["inner-elements"][2].text;
        //     this.msg = this.entryData["inner-elements"][0].text;

        //     this.span1 = this.entryData["inner-elements"][0].type;
        //     document.querySelector('#app').innerHTML = `<span v-html="${this.msg}"></span>`;
        // });


    },
    methods: {
        checkData() {

            this.msg = this.$refs.msg.textContent;

            String.prototype.splice = function (
                index,
                howManyToDelete,
                stringToInsert /* [, ... N-1, N] */
            ) {
                var characterArray = this.split("");
                Array.prototype.splice.apply(
                    characterArray,
                    arguments
                );
                return (
                    characterArray.join("")
                );
            };

            this.msg = this.msg.splice(1, 0, '</span><br><span :style="globalStyles"> ')

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
    }
})




new Vue({
    el: "#app"
})