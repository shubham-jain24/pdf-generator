<script>
import { defineComponent } from 'vue';
import JspdfAutogenerator from '@/jspdf-autogenerator.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    JspdfAutogenerator
  },
  data(){
    return{
      generateFlag: false,
      footer:{
        addFooter: true,
        addPageRight: true,
        addTextLeft: "Footer Extra data",
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
        {name: "Steven Watson", age:"22", gender: "Male"},
        {name: "Tabee weese", age:"23", gender: "Female"},
        {name: "John kale", age:"50", gender: "Male"},
        {name: "Susi pox", age:"49", gender: "Female"}],
      tableStyle: "grid",
      headerStyle: {fillColor: 'red', textColor: 'yellow'}
      },
      table2:{type: "table", 
      tableHeaders:[{line1: "Address Line 1", line2: "Address Line 2", state: "State", country: "Country", zip: "Pincode"}], 
      tableData: [
        {line1: "ABC 123", line2: "Uuuu Line 2", state: "State1", country: "Country1", zip: "112299"},
        {line1: "DEF 456", line2: "Ppppp Line 2", state: "State2", country: "Country2", zip: "332211"},
        {line1: "GHI 789", line2: "yrrrrr Line 2", state: "State3", country: "Country3", zip: "998877"}
        ]
      },
      para1: {type: "paragraph", 
      paraData:"this is a simple paragraph with sample data - sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data- sample data"
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
      name: "pdfName"
    }
  },
  methods:{
    updateFlag(){
      this.generateFlag = true;
    }
  },
  mounted(){
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
  },
});
</script>

<template>
  <div id="app">
  <button @click="updateFlag()">Generate PDF</button>
  <div v-if="generateFlag">
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
