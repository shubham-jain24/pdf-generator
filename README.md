# [jspdf-autogenerator](https://www.npmjs.com/package/jspdf-autogenerator)

![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?logo=vue.js&logoColor=white)

NPM - Package - For Downloading PDF (Vue JS)<br>
Dependency - [JSPDF](https://www.npmjs.com/package/jspdf) and [JSPDF AutoTable](https://www.npmjs.com/package/jspdf-autotable)

Installing through CLI

 ```
 npm i jspdf-autogenerator
 ```
 
 Importing package in the project file
 
 ```
 import JspdfAutogenerator from 'jspdf-autogenerator'
 ```
 
 Registering the package under component
 
 ```
 components: {
    JspdfAutogenerator,
  }
  ```
  
  Calling the Components in the template
  
  
  ```html
  <template>
    <div>
      <jspdf-autogenerator/>
    </div>
  </template>
  ```
  
  ```
  Output - Basic PDF
  ```
  ![image](https://user-images.githubusercontent.com/28873147/122807226-ecadf080-d2e8-11eb-9eff-e30c84315f57.png)

  
  ## Properties
  'generatedXCordinate',
        'generatedYCordinate'
  
  ### Line Space
  - Default value set to be as 3
  - Property Name = **generatedPdfLineSpace**
  For Adding Customize Value Add following code
  ```
  <jspdf-autogenerator 
  :generatedPdfLineSpace="4"/>
  ```
  
  
  ### Section Space
  - Default Value set to be as 5
  - Property Name = **generatedSectionSpace**
  For Adding Customize Value Add following code
  ```
  <jspdf-autogenerator 
    :generatedSectionSpace="10"/>
  ```
  
  
  ### Starting Point (X and Y Cordinate)
  - Default Value for X-Cordinate = 15
  - Default Value for Y-Cordinate = 20
  - Property Name for X-Cordinate = **generatedXCordinate**
  - Property Name for Y-Cordinate = **generatedYCordinate**
  
  For Adding Customize Value Add following code
  ```
  <jspdf-autogenerator 
    :generatedXCordinate="10"
    :generatedYCordinate="30"/>
  ```


  ### Paragraph
  ```
  para2: {
        type: "paragraph",
        paraData: "Please Enter the paragraph details and it will display the data in the form of paragraph.",
        paraStyle: {
        color: 'red',
        textSize: 20,
      }
      }
      
```
  - Property Name = **generatedPdfData**   
  - type = "paragraph" (Keyword for writing paragraph in PDF)
  - paraData = Here goes the content of the paragraph. A paragraph should be of minimum one line
  - paraStyle = where we can set the style of the paragraph like Color, textSize(Font Size) for that particular paragraph
  
  
  ### Header
  ```
   header1: {type: "header",
      mainHeading:"This is Main Heading",
      subHeading: "This is sub heading",
      horizontalMargin: true,
      mainHeadingFontSize: 15,
      subHeadingFontSize: 10,
      headingStyle: {align: 'center'},
      headerOnEachPage: true
      }
  
  ```
  
  Header Mainly Contain two heading in this current version i.e Heading and Sub Heading
  - Property Name = **generatedPdfheader**  
  - mainHeading = "Main Heading Title goes Here"
  - subHeading = "Sub Heading Title Goes Here"
  - horizontalMargin = Set this property to true if user wants to draw the line after adding header
  - mainHeadingFontSize = set this property if you want to customize main Heading size
  - subHeadingFontSize = set this property if you want to customize sub heading font size
  -headerOnEachPage = set this flag to true if you want to add headers on each page
  - headerStyle = Use this property to align the text various options available are
      * center
      * left
      * right
      * justify

  ### Footer
  ```
  footer:{
        addFooter: true,
        addPageRight: true,
        addTextLeft: "Footer Extra Text (Eg-Document Name) goes here",
        footerTextSize: 8
      }
```
  
  - Property Name = **generatedPdffooter**
  - addFooter = set this flag to true if user wants to display footer
  - footerTextSize = user can customize the size of the footer data
  - addPageRight = this property set true if user wants to add page number at the right of the page
  - addPageLeft = this property set true if user wants to add page number at the left of the page
  - addTextLeft = Random Text can be added (eg: Document Name) at the left of the page.
  - addTextRight= Random Text can be added (eg: Document Name) at the right of the page.
 
  
   

  
 

