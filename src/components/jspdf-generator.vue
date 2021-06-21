<template>
<div>
Hoiii
</div>
</template>

<script>
import { jsPDF } from "jspdf";
import 'jspdf-autotable';  

export default{
    name: 'jspdfgenerator',
    props:[
        'pdfData',
        'fileName',
        'lineSpace',
        'sectionSpace',
        'xCordinate',
        'yCordinate',
        'pdfContentSize',
        'pdfTableContentSize',
        'header',
        'footer',
        'footerHeight',
    ],
    mounted(){
        this.generationFunction();
    },
    methods:{
        generationFunction(){
           
            const doc = new jsPDF({lineHeight: 1.5});
            var pageSize = doc.internal.pageSize;
            var pageWidth = pageSize.width ? pageSize.width: pageSize.getWidth();
            let pageNumber = 1;
            var x = this.xCordinate;
            let y = this.yCordinate;
            doc.setFontSize(this.pdfContentSize);

            if(this.header!=null){
                
                doc.setFontSize(this.header.mainHeadingFontSize);
                var xCordinateForMainHeading = (pageWidth/2);
                doc.text(xCordinateForMainHeading, y, this.header.mainHeading, { align: 'center' });
                //y = y+;
                y = y+this.header.mainHeadingFontSize/2;
                doc.setFontSize(this.header.subHeadingFontSize);
                var xCordinateFOrSubHeading = (pageWidth/2);
                doc.text(xCordinateFOrSubHeading, y, this.header.subHeading,this.header.headingStyle);
                y = y+this.header.subHeadingFontSize/2;
                if(this.header.horizontalMargin == true){
                    var x2 = (pageWidth-x);
                    doc.line(x, y, x2, y);
                }
               
                y = y+(2*this.sectionSpace);
                
                
                doc.setFontSize(this.pdfContentSize);
            }
            this.pdfData.forEach(data =>{
               
                console.log(typeof data);
                
                if(data.type == "image")
                {
                    var img = new Image();
                    img.src = data.location;
                    
                    
                }
                else if(data.type == "table")
                {
                    console.log(data.tableData.length);
                    
                    doc.autoTable({
                        head: data.tableHeaders,
                        body: data.tableData,
                        autoSize: true,
                        startY: y,
                        theme: data.tableStyle,
                        headStyles: data.headerStyle,
                       
                        printHeaders : true,
                        columnStyles: {
                        columnWidth: 'auto'
                        },
                        styles: {
                        fontSize: this.pdfTableContentSize,
                        },
                    });
                    console.log(y);
                    y = y + (data.tableData.length*(this.pdfTableContentSize+1));
                    y = y + (3*this.lineSpace);
                    
                    console.log(y);
                }
                else{
                    var splitTitle = doc.splitTextToSize(data.paraData, 180);
                    var stringLength = (data.paraData.length/180);
                   
                    doc.text(x, y, splitTitle);
                    console.log(stringLength);
                    y = y + (stringLength*(this.pdfContentSize+1));
                   
                    console.log(y);
                }

                if(y>= doc.internal.pageSize.getHeight()-(this.footerHeight)){
                    doc.setFontSize(this.footer.footerTextSize);
                    var footerYCordinate = doc.internal.pageSize.getHeight()-5;
                    if(this.footer.addFooter == true){
                        if(this.footer.addPageLeft==true){
                            
                            
                            var footerXCordinate = doc.internal.pageSize.getWidth()-(this.xCordinate);
                            var str = 'Page '+pageNumber;
                            console.log(str);
                            console.log(footerXCordinate);
                            doc.text(footerXCordinate, footerYCordinate, str, {align: 'right'});
                        }

                        if(this.footer.addPageRight==true){
                            
                            
                            
                            var strRight = 'Page '+pageNumber;
                            console.log(str);
                            
                            doc.text(this.xCordinate, footerYCordinate, strRight, {align: 'left'});
                        }

                        if(this.footer.addTextRight!=null){
                            
                            
                            
                            var rightText = this.footer.addTextRight;
                            console.log(str);
                            console.log(footerXCordinate);
                            doc.text(this.xCordinate, footerYCordinate, rightText, {align: 'left'});
                        }

                        if(this.footer.addTextLeft!=null){
                            
                            
                            var footerXCordinateText = doc.internal.pageSize.getWidth()-(this.xCordinate);
                            var leftText = this.footer.addTextLeft;
                            
                            console.log(footerXCordinate);
                            doc.text(footerXCordinateText, footerYCordinate, leftText, {align: 'right'});
                        }


                        doc.setFontSize(this.pdfContentSize);
                    }
                    doc.addPage();
                    pageNumber = pageNumber+1;
                    y = this.yCordinate;
                    if(this.header!=null){

                            if(this.header.headerOnEachPage == true)
                            {
                                doc.setFontSize(this.header.mainHeadingFontSize);
                                var xCordinateForMainHeading = (pageWidth/2);
                                doc.text(xCordinateForMainHeading, y, this.header.mainHeading, { align: 'center' });
                                //y = y+;
                                y = y+this.header.mainHeadingFontSize/2;
                                doc.setFontSize(this.header.subHeadingFontSize);
                                var xCordinateFOrSubHeading = (pageWidth/2);
                                doc.text(xCordinateFOrSubHeading, y, this.header.subHeading,this.header.headingStyle);
                                y = y+this.header.subHeadingFontSize/2;
                                if(this.header.horizontalMargin == true){
                                    var x2 = (pageWidth-x);
                                    doc.line(x, y, x2, y);
                                }
                            // doc.line()
                                y = y+(2*this.sectionSpace);
                                //y = y+this.lineSpace;
                                
                                doc.setFontSize(this.pdfContentSize);
                            }
                        }
                }
                y = y+this.sectionSpace;

            })
            
           
            doc.save(this.fileName+".pdf");
        }
    }
}
</script>
