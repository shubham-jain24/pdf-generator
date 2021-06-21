<template>
<div>
  <button @click="updateFlag()">Generate PDF</button>
  <div v-if="pdfFlag">
  <jspdf-autogenerator
    :pdfData="data" 
    :fileName="name" 
    :lineSpace="2" 
    :sectionSpace="5" 
    :xCordinate="15" 
    :yCordinate="20"
    :pdfContentSize = "12"
    :pdfTableContentSize="8"
    :header="header1"
    :footer="footer"
    :footerHeight="50"
     />
</div>
</div>
</template>

<script>
//import jspdfgenerator from './components/jspdf-generator.vue'
import JspdfAutogenerator from 'jspdf-autogenerator';

export default {
  name: 'App',
  components: {
    //jspdfgenerator,
    JspdfAutogenerator,
  },
  data(){
    return{
      pdfFlag: false,
      footer:{
        addFooter: true,
        addPageRight: true,
        addTextLeft: "Shubham Jain",
        footerTextSize: 8
        
      },
      header1: {type: "header",
      mainHeading:"This is Main Heading",
      subHeading: "This is sub heading",
      horizontalMargin: true,
      mainHeadingFontSize: 15,
      subHeadingFontSize: 10,
      headingStyle: {align: 'center'},
      headerOnEachPage: true
      },
      table1: {type: "table", 
      tableHeaders:[{name: "Name", age: "Age", gender: "Gender"}], 
      tableData: [
        {name: "Shubham Jain", age:"22", gender: "Male"},
        {name: "Saloni Jain", age:"23", gender: "Female"},
        {name: "Satish Jain", age:"50", gender: "Male"},
        {name: "Savita Jain", age:"49", gender: "Female"}],
      tableStyle: "grid",
      headerStyle: {fillColor: 'red', textColor: 'yellow'}
      },
      table2:{type: "table", 
      tableHeaders:[{line1: "Address Line 1", line2: "Address Line 2", state: "State", country: "Country", zip: "Pincode"}], 
      tableData: [
        {line1: "ABC 123", line2: "Uuuu Line 2", state: "Delhi", country: "India", zip: "112299"},
        {line1: "DEF 456", line2: "Ppppp Line 2", state: "Haryana", country: "India", zip: "332211"},
        {line1: "GHI 789", line2: "yrrrrr Line 2", state: "Rajisthan", country: "India", zip: "998877"}
        ]
      },
      para1: {type: "paragraph", 
      paraData:"this is a simple paragraph that is meant to be nice and easy to type which is why there will be mommas no periods or any capital letters so i guess this means that it cannot really be considered a paragraph but just a series of run on sentences this should help you get faster at typing as im trying not to use too many difficult words in it although i think that i might start making it hard by including some more difficult letters I'm typing pretty quickly so forgive me for any mistakes i think that i will not just tell you a story about the time i went to the zoo and found a monkey and a fox playing together they were so cute and i think that they were not supposed to be in the same cage but they"
      },
      para2: {
        type: "paragraph",
        paraData: "Please Refer Address Table Below:"
      },
      
      image1: {
        type: "image",
        location: './assets/sampleImage.jpg',
        format: 'JPEG',
        align: 'Center',
        width: 80,
        height: 60
      },
      data: [],
      name: "myPdf"
    }
  },
  methods:{
    updateFlag(){
      this.pdfFlag = true;
    },
    stringToBase64(str){
      let data = str;
      let buff = new Buffer(data);
      let stringToBase64 = buff.toString('base64');
      return stringToBase64;
    }
  },
  mounted(){
    //this.data.push(this.header1);
    this.data.push(this.para1);
    this.data.push(this.table1);
    this.data.push(this.para2);
    this.data.push(this.table2);
    this.data.push(this.para1);
    this.data.push(this.table1);
    this.data.push(this.para2);
    this.data.push(this.table2);
    this.data.push(this.para1);
    this.data.push(this.table1);
    this.data.push(this.para2);
    this.data.push(this.table2);
    this.data.push(this.para1);
    this.data.push(this.table1);
    this.data.push(this.para2);
    this.data.push(this.table2);
    this.data.push(this.para1);
    this.data.push(this.table1);
    this.data.push(this.para2);
    this.data.push(this.table2);
    
    //this.data.push(this.image1);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
