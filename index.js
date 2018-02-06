var svg = d3.select("body").append("svg")
  .attr("width",1210)
  .attr("height",600)
  .attr("border",'1px solid #ccc')
;

svg.append('svg:image')
.attr('xlink:href',"https://github.com/pavelk2/Bay-Area-Bike-Share/raw/master/README_files/figure-markdown_github/unnamed-chunk-11-1.png")
.attr("x","610px")
.attr("y","0px")
.attr("width","600px")
.attr("height","600px")
;

svg.append('svg:image')
.attr('xlink:href',"https://github.com/LiangSun617/DANDP0-Bay-Area-Bike-Share-Data-Analysis/raw/master/image/10.png")
.attr("width","600px")
.attr("height","600px")
;

d3.select("body")
.attr("align","center");