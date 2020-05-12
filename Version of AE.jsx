//Notes
/*
    sourceRectAtTime is an Expression that gives you an ability to Get Layer Margins (according to [Width,Height] )
    this is availibe CC 2014 & Later
    */

var win = new Window("palette","Version of Application",undefined); //Window
win.orientation = "column";

var Btn1 = win.add("button",undefined); //Button
Btn1.text = "Show version";

win.center();
win.show();

//Functionallity

Btn1.onClick = function(){
Btn1.text = ""+app.version+"";

if(parseFloat(app.version) == 11.0){ //After Effects CS6
    alert("you are using After Effects v"+parseFloat(app.version)+"\n"+"sourceRectAtTime() is not availibe in this Version of AE");
    }else if(parseFloat(app.version) == 17.0){ //After Effects 2020
    alert("you are using After Effects v"+parseFloat(app.version)+"\n"+"sourceRectAtTime() is availibe in this Version of AE");
        }else{
            alert("check Button for Version");
            }
}
