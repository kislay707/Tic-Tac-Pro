		var sketchProc=function(processingInstance){ with (processingInstance){




size(500,500);
frameRate(30);
 //make a object Tile and assign it iteratively




 //make a object Tile and assign it iteratively


//abedc




var Tile = function(x, y,opi) {



    this.x = x+20;



    this.y = y+20;



    this.open= true;



    this.width = 40;



    this.able=true;



     this.op=opi+10;

     this.countx=0;

     this.counto=0;



};



var state=1;



Tile.prototype.draw= function(x,y) {



    strokeWeight(2);



    fill(90, 173, 189);



    stroke(0, 0, 0);



  rect(this.x,this.y,this.width,this.width);



    



};



Tile.prototype.drawo= function() {



    fill(90, 173, 189);


  stroke(214, 30, 30);
  ellipse(this.x+20,this.y+20,20,20);
  stroke(0, 0, 0);


  state=0;



            this.open=false;



    



};



Tile.prototype.drawx= function() {



    fill(34, 48, 201);



    textSize(35);



  text("X",this.x+7,this.y+33);



    fill(90, 173, 189);



     state=1;



          this.open=false;



};



Tile.prototype.isUnderMouse = function(x, y) {



    return x > this.x && x < this.x + this.width  &&



        y > this.y && y < this.y + this.width;



};



//to draw greex box(boxi)



Tile.prototype.boxi= function() {



    strokeWeight(4);



  stroke(87, 207, 12);



    line(this.x,this.y,this.x+120,this.y);



    line(this.x,this.y,this.x,this.y+120);



    line(this.x+120,this.y,this.x+120,this.y+120);



    line(this.x,this.y+120,this.x+120,this.y+120);



    stroke(0, 0, 0);



};



//to draw back the box white(boxo)



Tile.prototype.boxo= function() {



    



  stroke(255, 255, 255);



    line(this.x,this.y,this.x+120,this.y);



    line(this.x,this.y,this.x,this.y+120);



    line(this.x+120,this.y,this.x+120,this.y+120);



    line(this.x,this.y+120,this.x+120,this.y+120);



    stroke(0, 0, 0);



};



//no use(wer)



Tile.prototype.wer= function() {



    



  stroke(245, 8, 8);



    line(this.x,this.y,this.x+120,this.y);



    line(this.x,this.y,this.x,this.y+120);



    line(this.x+120,this.y,this.x+120,this.y+120);



    line(this.x,this.y+120,this.x+120,this.y+120);



    stroke(0, 0, 0);



};



strokeWeight(2);



var fin=[];//fin contains kth blocks which are won



var k=0;//k ranges from 0to8 each small tic tac has an index k



var p=0;



var arrx=[];//stores X won indexes



var arro=[];//stores O won indexes



var tiles =[];//tiles is a 2d array 036|147|258



var i=0;



var j=0;



var z=0;



var e=1800;



var f=1800;



var time=0;



var mode=2;



var count=0;



var ran1=0;



var ran2=0;

var ne=3;

var cona=10;

var conb=10;

var conc=10;

var cond=10;

var cone=10;
var conf=10;

var compx=0;
var compy=0;
var dona=10;
var donb=10;

var donc=10;

var dond=10;

var done=10;
var donf=10;




//initializing tiles



var scene=1;



for(var a=0;a<3;a++)



 {   



   for(var b=0;b<3;b++)



   { tiles[k]=[];



    for(var c=0;c<3;c++)



    {



     for(var d=0;d<3;d++)



       {  



           tiles[k].push(new Tile(120*a+40*c,120*b+40*d,p));



          p++;



       }



    } k++;



   }



 }

var check=function( a)
{
    for(b=0;b<9;b++)

                    {

                     if(b===0 && tiles[a][b].open)

                     { 

                         

                       if((tiles[a][1].op===tiles[a][2].op)||(tiles[a][3].op===tiles[a][6].op)||(tiles[a][4].op===tiles[a][8].op))

                       {

                         return false;

                       }

                     }

                     if(b===1 && tiles[a][b].open)

                     {  


                       if((tiles[a][0].op===tiles[a][2].op)||(tiles[a][4].op===tiles[a][7].op))

                       {

                         return false ;
                           

                       }

                     }

                     if(b===2 && tiles[a][b].open)

                     {   

                         

                       if((tiles[a][1].op===tiles[a][0].op)||(tiles[a][5].op===tiles[a][8].op)||(tiles[a][4].op===tiles[a][6].op))

                       {

                      return false;

                       }

                     }

                     if(b===3 && tiles[a][b].open)

                     {  

                       if((tiles[a][0].op===tiles[a][6].op)||(tiles[a][4].op===tiles[a][5].op))

                       {

                     return false;

                       }

                     }

                     if(b===4 && tiles[a][b].open)

                     {   

                         

                       if((tiles[a][1].op===tiles[a][7].op)||(tiles[a][3].op===tiles[a][5].op)||(tiles[a][0].op===tiles[a][8].op)||(tiles[a][2].op===tiles[a][6].op))

                       {

                       return false;

                       }

                     }

                     if(b===5 && tiles[a][b].open)

                     {    

                        

                       if((tiles[a][2].op===tiles[a][8].op)||(tiles[a][3].op===tiles[a][4].op))

                       { 

                           

                       return false;
                       }

                     }

                     if(b===6 && tiles[a][b].open)

                     {  

                        

                       if((tiles[a][0].op===tiles[a][3].op)||(tiles[a][7].op===tiles[a][8].op)||(tiles[a][2].op===tiles[a][4].op))

                       {

                        return false;

                       }

                     }

                     if(b===7 && tiles[a][b].open)

                     {   


                       if((tiles[a][1].op===tiles[a][4].op)||(tiles[a][6].op===tiles[a][8].op))

                       {

                       return false;

                       }

                     }

                     if(b===8 && tiles[a][b].open)

                     {  

                         

                       if((tiles[a][0].op===tiles[a][4].op)||(tiles[a][2].op===tiles[a][5].op)||(tiles[a][6].op===tiles[a][7].op))

                       {

                       return false;

                       }

                     }

                     

                    } 
                   // print("truee");
                    return true;
    
};


 var drawScene1 = function() {



   



  scene = 1;



  



  background(8, 66, 33);



 



    



  fill(255, 255, 255);



   



  textSize(55);



  



   text("TIC TAC TOE", 27, 152);



    textSize(20);



   text("with a twist",258,180);



   



   textSize(20);



   fill(194, 146, 132);



   text("(click to start)" ,115,320);



   textSize(35);



   



};



var drawScene2 = function() {



   



  scene = 2;



  



  background(113, 135, 85);







   // noStroke();



  fill(255, 255, 255);



   



  textSize(32);



  



   text("Choose Your Opponent", 27, 152);



   fill(135, 209, 38);



    textSize(20);



    rect(150,200,100,35);



    rect(150,250,100,35);



     fill(19, 20, 18);



   text(" Computer",151,225);



   text("    Human",149,272);



   textSize(20);



  



   //text("(click to start)" ,115,320);



   textSize(35);



   



};


var drawScene5 = function() {



   



  scene = 5;



  



  background(113, 135, 85);







   // noStroke();



  fill(255, 255, 255);



   



  textSize(32);



  



   text("Select Computer Level", 27, 152);



   fill(135, 209, 38);



    textSize(20);



    rect(150,200,100,35);



    rect(150,250,100,35);



     fill(19, 20, 18);



   text(" Easy",151,225);



   text("   Hard",149,272);



   textSize(20);



  



   //text("(click to start)" ,115,320);



   textSize(35);



   



};

var drawScene3 = function() {



   



  scene = 3;



  



  background(52, 77, 20);







   // noStroke();



  fill(255, 255, 255);



   



  textSize(36);



  



   text("Select Game Time", 46, 152);



   fill(135, 209, 38);



    textSize(20);



    rect(147,171,117,34);



    rect(147,297,118,34);



    rect(147,212,117,34);



    rect(147,253,118,34);



     fill(19, 20, 18);



   text("1- No time",159,195);



   text("2- 2 minutes",151,237);



   text("3- 3 minutes",151,276);



   text("4- 4 minutes",153,322);



   textSize(20);



  



   //text("(click to start)" ,115,320);



   textSize(35);



   



};



// drawing tiles



var drawScene4 = function() 



{   strokeWeight(2);



    scene=4;



    background(255, 129, 66);



    for(var i=0;i<9;i++)



    {



        for(var j=0;j<9;j++)



        {



          tiles[i][j].draw();



        }



    } //fill(242, 197, 159);



    // drawing white lines



    stroke(255, 255, 255);



    strokeWeight(4);



    line(20,20,20,380);



    line(20,20,377,20);



    line(381,20,381,380);



    line(20,381,380,381);



    



    line(20+120,20,20+120,380);



    line(20,20+120,380,20+120);



    line(380-120,20,380-120,380);



    line(20,380-120,380,380-120);



    strokeWeight(4);



    stroke(0, 0, 0);







};







//z stores the index of next click



drawScene1();



mouseClicked = function() 



{  // tiles[][0].boxo();



   



   if(scene===4)



   {  



       if(mode===0 || mode===2)



       { 



           for (var i = 0; i < 9; i++)



        {   



            count=0;



            for(var j=0;j<9;j++)



            {



              if(tiles[i][j].open===false)



              {



                count++;



              }



            }



            if(count===9 && fin.indexOf(i)===-1)



             {



              fin.push(i);



             }



            for(var j=0;j<9;j++)



            {



            if (tiles[i][j].isUnderMouse(mouseX, mouseY) && tiles[i][j].open && tiles[i][j].able )



            {  



               



                tiles[z][0].boxo();//draws white box



                



              if(state===1)



               {



                tiles[i][j].drawo();

                tiles[i][0].counto++;   

                tiles[i][j].op=0;

                ne=j;

                 // println(ne);

                if(((tiles[i][0].op === tiles[i][1].op) &&                          (tiles[i][2].op===tiles[i][0].op))||                         ((tiles[i][3].op === tiles[i][4].op) &&                          (tiles[i][3].op===tiles[i][5].op))||                         ((tiles[i][6].op === tiles[i][7].op) &&                          (tiles[i][6].op===tiles[i][8].op))||



                      ((tiles[i][0].op === tiles[i][3].op) &&                          (tiles[i][0].op===tiles[i][6].op))||                         ((tiles[i][1].op === tiles[i][4].op) &&                          (tiles[i][4].op===tiles[i][7].op))||                         ((tiles[i][2].op === tiles[i][5].op) &&                          (tiles[i][2].op===tiles[i][8].op))||



                        ((tiles[i][0].op === tiles[i][4].op) &&                          (tiles[i][0].op===tiles[i][8].op))||                         ((tiles[i][2].op === tiles[i][4].op) &&                          (tiles[i][2].op===tiles[i][6].op))) 



              { fin.push(i);//stores won index



              //closes the winning block



               for(k=0;k<9;k++)



               {



                 tiles[i][k].open=false;



               }fill(255, 255, 255);



               //rect(tiles[i][0].x,tiles[i][0].y,120,120);



               //draws big O  



                   textSize(140);



                   text("O",tiles[i][0].x+7,tiles[i][0].y+110);



                  // tiles[i][0].wer();



                   arro.push(i);



                



               



            }



               }

               count=0;

            for(var cl=0;cl<9;cl++)

            {

              if(tiles[i][cl].open===false)

              {

                count++;

              }

            }

            if(count===9 && fin.indexOf(i)===-1)

             {

              fin.push(i);

             }



              

                





              // Comp AI

              

             } //match   



            }//j



        }//i



       }  //mode==0



       



       



       



       



       



       



       



        // now human player 



       if(mode===1)



       {



      



       



       for (var i = 0; i < 9; i++)



        {   



            count=0;



            for(var j=0;j<9;j++)



            {



              if(tiles[i][j].open===false)



              {



                count++;



              }



            }



            if(count===9)



             {



              fin.push(i);



             }



            for(var j=0;j<9;j++)



            {



            if (tiles[i][j].isUnderMouse(mouseX, mouseY) && tiles[i][j].open && tiles[i][j].able )



            {  



               



                tiles[z][0].boxo();//draws white box



                



              if(state===1)



               {



                tiles[i][j].drawo();



                tiles[i][j].op=0;



               }



             else



              {



              tiles[i][j].drawx();



              tiles[i][j].op=1;



              } 



             // for(var t=0;t<9;t++)



             



              // println(tiles[i][t].op);



             // checks for winning condition



                  if(((tiles[i][0].op === tiles[i][1].op) &&                          (tiles[i][2].op===tiles[i][0].op))||                         ((tiles[i][3].op === tiles[i][4].op) &&                          (tiles[i][3].op===tiles[i][5].op))||                         ((tiles[i][6].op === tiles[i][7].op) &&                          (tiles[i][6].op===tiles[i][8].op))||



                      ((tiles[i][0].op === tiles[i][3].op) &&                          (tiles[i][0].op===tiles[i][6].op))||                         ((tiles[i][1].op === tiles[i][4].op) &&                          (tiles[i][4].op===tiles[i][7].op))||                         ((tiles[i][2].op === tiles[i][5].op) &&                          (tiles[i][2].op===tiles[i][8].op))||



                        ((tiles[i][0].op === tiles[i][4].op) &&                          (tiles[i][0].op===tiles[i][8].op))||                         ((tiles[i][2].op === tiles[i][4].op) &&                          (tiles[i][2].op===tiles[i][6].op))) 



              { fin.push(i);//stores won index



              //closes the winning block



               for(k=0;k<9;k++)



               {



                 tiles[i][k].open=false;



               }fill(255, 255, 255);



               //rect(tiles[i][0].x,tiles[i][0].y,120,120);



               if(state===0)//draws big O



                {  



                   textSize(140);



                   text("O",tiles[i][0].x+7,tiles[i][0].y+110);



                  // tiles[i][0].wer();



                   arro.push(i);



                }



               else  // draws big X



               { 



                   textSize(140);



                   text("X",tiles[i][0].x+7,tiles[i][0].y+110);



                   arrx.push(i);



                } fill(90, 173, 189);



            }



              



              for(a=0;a<9;a++)



               {



                 for(b=0;b<9;b++)



                 {



                    



                     tiles[a][b].able =true;



                    



                 }



               }



               z=j;



               // draws green box if box not won



                if(fin.indexOf(j)===-1)



                    {



                    tiles[j][0].boxi(); 



                    }



              /*  else{



                    for(var w=0;w<9;w++)



                     { if(fin.indexOf(w)===-1)



                        {



                            tiles[w][0].boxi();



                        }



                     }



                }  */  



                // ables only the next block



              for(a=0;a<9;a++)



               {



                 for(b=0;b<9;b++)



                 {



                   if( fin.indexOf(j)===-1 )



                   { if(a!==j)



                     { 



                     tiles[a][b].able =false;



                     }



                   }



                   //else



                   //{



                   // tiles[a][b].able=true;



                  // }



                 }



               }



            }//match



            



            }//j



            



        }//i



       }//mode 1



   }



   if(scene===3)



    {   



     if(mouseX >=147 && mouseX <=264 && mouseY>=171 && mouseY<=205 )



        {



            time=1;



            



            drawScene4();



        }



     if(mouseX >=147 && mouseX <=264 && mouseY>=212 && mouseY<=246 )



        {



            e=120;



             f=120;



            drawScene4();



        }



     if(mouseX >=147 && mouseX <=264 && mouseY>=253 && mouseY<=287 )



        {



             e=180;



             f=180;



            drawScene4();



        }



    if(mouseX >=147 && mouseX <=264 && mouseY>=297 && mouseY<=330 )



        {



             e=240;



             f=240;



            drawScene4();



        }    



        



        



        



        



        



        



       // drawScene4();



    }
    if(scene===5)



    {



        if(mouseX >=150 && mouseX <=250 && mouseY>=200 && mouseY<=235 )



        {



            mode=0;



            



            drawScene3();



        }



        if(mouseX >=150 && mouseX <=250 && mouseY>=250 && mouseY<=285 )



        {



            mode=2;



            



            drawScene3();



        }



        



    }



   if(scene===2)



    {



        if(mouseX >=150 && mouseX <=250 && mouseY>=200 && mouseY<=235 )



        {



            



            



            drawScene5();



        }



        if(mouseX >=150 && mouseX <=250 && mouseY>=250 && mouseY<=285 )



        {



            mode=1;



            



            drawScene3();



        }



        



    }



   if(scene===1)



    {



        drawScene2();



    }



   



};







draw = function() {

     
       
    // the whole block only checks the winning condition



    if((e<=0 || f<=0)&& time===0)



   { 



      if(f<=0)



           { background(78, 224, 102);



            textSize(100);



            fill(186, 26, 26);



            text("O WIN",60,233);}



       if(e<=0)



           {background(78, 224, 102);



            textSize(100);



            fill(186, 26, 26);



            text("X WIN",60,233);



           }



   }



   else{



   if(state===1 && scene===4 && time===0)



   {



    noStroke();



    fill(255, 229, 66);



    rect(410,70,80,50);



    fill(0,0,0);



     textSize(20);



   // var e=180-floor(millis()/1000);



    e=(e-(0.0333));



    text(round(e),420,100);



     textSize(35);



   //var f=180-e;



   }



    if(state===0 && scene===4 && time===0)



   {



    noStroke();



    fill(255, 229, 66);



    rect(410,130,80,50);



    fill(0,0,0);



     textSize(20);



    // e=180-floor(millis()/1000);



    f=f-(0.0333);



    text(round(f),420,150);



     textSize(35);



   }



   }



    arro.sort();



    for(i=0;i<arro.length;i++)



    {



      if(arro.indexOf(4)!==-1)



        {



         if((arro.indexOf(1)!==-1 && arro.indexOf(7)!==-1) ||              (arro.indexOf(3)!==-1 && arro.indexOf(5)!==-1) ||



            (arro.indexOf(0)!==-1 && arro.indexOf(8)!==-1) ||              (arro.indexOf(2)!==-1 && arro.indexOf(6)!==-1))



           {background(78, 224, 102);



            textSize(100);



            fill(186, 26, 26);



            text("O WIN",60,233);



           }



           



        }



        if(arro.indexOf(0)!==-1)



        {



         if((arro.indexOf(1)!==-1 && arro.indexOf(2)!==-1) ||              (arro.indexOf(3)!==-1 && arro.indexOf(6)!==-1))



           {



            background(78, 224, 102);



            textSize(100);



            fill(186, 26, 26);



            text("O WIN",60,233);



           }



           



        }



        if(arro.indexOf(8)!==-1)



        {



         if((arro.indexOf(6)!==-1 && arro.indexOf(7)!==-1) ||              (arro.indexOf(2)!==-1 && arro.indexOf(5)!==-1))



           {



            background(78, 224, 102);



            textSize(100);



            fill(186, 26, 26);



            text("O WIN",60,233);



           }



           



        }



    }



    arrx.sort();



    for(j=0;j<arrx.length;j++)



    {



       if(arrx.indexOf(4)!==-1)



        {



         if((arrx.indexOf(1)!==-1 && arrx.indexOf(7)!==-1) ||              (arrx.indexOf(3)!==-1 && arrx.indexOf(5)!==-1) ||



            (arrx.indexOf(0)!==-1 && arrx.indexOf(8)!==-1) ||              (arrx.indexOf(2)!==-1 && arrx.indexOf(6)!==-1))



           {



            background(78, 224, 102);



            textSize(100);



            fill(186, 26, 26);



            text("X WIN",60,233);



           }



           



        }



        if(arrx.indexOf(0)!==-1)



        {



         if((arrx.indexOf(1)!==-1 && arrx.indexOf(2)!==-1) ||              (arrx.indexOf(3)!==-1 && arrx.indexOf(6)!==-1))



           {



            background(78, 224, 102);



            textSize(100);



            fill(186, 26, 26);



            text("X WIN",60,233);



           }



           



        }



        if(arrx.indexOf(8)!==-1)



        {



         if((arrx.indexOf(6)!==-1 && arrx.indexOf(7)!==-1) ||              (arrx.indexOf(2)!==-1 && arrx.indexOf(5)!==-1))



           {



            background(78, 224, 102);



            textSize(100);



            fill(186, 26, 26);



            text("X WIN",60,233);



           }



           



        }



    }
    // hard comp ai
     if(mode===2 && state===0)

     {   var c=millis();

         while(millis()>=c)

                {  

                   // println("hi");

                 //   println(c);

                  if((millis()-c)>=1000)

                  { // println(millis());

                    //  println("we");

                    break;

                  }

                   

                }

       if(state===0)



              {

                // println(ne);

              



               if(fin.indexOf(ne)===-1)



               {   

                   cona=10;

                    conb=10;

                    conc=10;

                    cond=10;

                    cone=10;
                    conf=10;
                     
                     compy=ne;
                    
                    for(var t=0;t<9;t++)
                    {
                      if(tiles[t][0].countx===1 &&               tiles[t][0].counto===1 && tiles[ne][t].open )
                      {
                          conf=t;
                      }
                    }

                   if(tiles[ne][0].countx<=2)

                   {

                     for(var t=0;t<3;t++)

                       {

                          if( tiles[ne][t].op===1 && tiles[ne][t+3].open && check(t+3) && tiles[ne][t+6].open && fin.indexOf(t+3)===-1)

                            { 

                             cond=t+3;

                            }

                       }

                       for(var t=3;t<6;t++)

                       {

                          

                            if( tiles[ne][t].op===1 && tiles[ne][t+3].open && check(t+3) && tiles[ne][t-3].open && fin.indexOf(t+3)===-1)

                            {

                             cond=t+3;

                            }

                       }
                       for(var t=6;t<9;t++)

                       {

                          

                            if( tiles[ne][t].op===1 && tiles[ne][t-3].open && check(t-3) && tiles[ne][t-6].open && fin.indexOf(t-3)===-1 )

                            {

                             cond=t-3;

                            }

                       }
                       for(var t=0;t<9;t=t+3)

                       {

                          

                            if( tiles[ne][t].op===1 && tiles[ne][t+1].open && check(t+1) && tiles[ne][t+2].open && fin.indexOf(t+1)===-1 )

                            {

                             cond=t+1;

                            }

                       }
                       for(var t=1;t<9;t=t+3)

                       {

                          

                            if( tiles[ne][t].op===1 && tiles[ne][t+1].open && check(t+1) && tiles[ne][t-1].open && fin.indexOf(t+1)===-1 )

                            {

                             cond=t+1;

                            }

                       }
                       for(var t=2;t<9;t=t+3)

                       {

                          

                            if( tiles[ne][t].op===1 && tiles[ne][t-1].open && check(t-1) && tiles[ne][t-2].open && fin.indexOf(t-1)===-1 )

                            {

                             cond=t-1;

                            }

                       }
                       
                       

                   }

                    

                  for(j=0;j<9;j++)

                    { 
                       // println(check(j));

                     if(j===0 && tiles[ne][j].open)

                     {   
                         
                        if(check(j) && fin.indexOf(j)===-1 )
                        {
                       
                        
                         if(tiles[j][0].counto===0)

                         {

                          cone=j;

                         }

                       if(tiles[j][0].countx>tiles[j][0].counto)     {

                           conc=j;

                       }
                        }

                       if(((tiles[ne][1].op===tiles[ne][2].op)&&(tiles[ne][1].op===1))||((tiles[ne][3].op===tiles[ne][6].op)&& (tiles[ne][3].op===1))||((tiles[ne][4].op===tiles[ne][8].op)&& (tiles[ne][4].op===1)))

                       {

                         
                            cona=j;

                           }

                        if(((tiles[ne][1].op===tiles[ne][2].op)&&(tiles[ne][1].op===0))||((tiles[ne][3].op===tiles[ne][6].op)&& (tiles[ne][3].op===0))||((tiles[ne][4].op===tiles[ne][8].op)&& (tiles[ne][4].op===0)))
                           {
                             if(check(j))
                        { 
                            conb=j;
                        }

                           }

                       

                     }

                     if(j===1 && tiles[ne][j].open)

                     {  
                          if(check(j) && fin.indexOf(j)===-1)
                        {

                         if(tiles[j][0].counto===0)

                         {

                          cone=j;

                         }

                         if(tiles[j][0].countx>tiles[j][0].counto)     {

                           conc=j;

                       }
                        }

                       if(((tiles[ne][0].op===tiles[ne][2].op)&&(tiles[ne][0].op===1))||((tiles[ne][4].op===tiles[ne][7].op)&&(tiles[ne][4].op===1)))

                       {

                      

                            cona=j;

                           }

                       if(((tiles[ne][0].op===tiles[ne][2].op)&&(tiles[ne][0].op===0))||((tiles[ne][4].op===tiles[ne][7].op)&&(tiles[ne][4].op===0)))

                           {
                                if(check(j))
                        {

                            conb=j;
                        }

                           }

                       

                     }

                     if(j===2 && tiles[ne][j].open)

                     {   
                           if(check(j) && fin.indexOf(j)===-1)
                        {
                         if(tiles[j][0].counto===0)

                         {

                          cone=j;

                         }

                         if(tiles[j][0].countx>=tiles[j][0].counto)     {

                           conc=j;

                       }
                        }

                       if(((tiles[ne][1].op===tiles[ne][0].op)&&(tiles[ne][1].op===1))||((tiles[ne][5].op===tiles[ne][8].op)&&(tiles[ne][5].op===1))||((tiles[ne][4].op===tiles[ne][6].op)&&(tiles[ne][4].op===1)))

                       {

                     

                            cona=j;

                           }

                      if(((tiles[ne][1].op===tiles[ne][0].op)&&(tiles[ne][1].op===0))||((tiles[ne][5].op===tiles[ne][8].op)&&(tiles[ne][5].op===0))||((tiles[ne][4].op===tiles[ne][6].op)&&(tiles[ne][4].op===0)))


                           {
                              if(check(j))
                        {
                            conb=j;
                        }

                           }

                       

                     }

                     if(j===3 && tiles[ne][j].open)

                     { 
                          if(check(j) && fin.indexOf(j)===-1)
                        {if(tiles[j][0].counto===0)

                         {

                          cone=j;

                         }

                         if(tiles[j][0].countx>tiles[j][0].counto)     {

                           conc=j;

                       }
                        }

                       if(((tiles[ne][0].op===tiles[ne][6].op)&&(tiles[ne][0].op===1))||((tiles[ne][4].op===tiles[ne][5].op)&&(tiles[ne][4].op===1)))

                       {

                    

                            cona=j;

                           }

                      if(((tiles[ne][0].op===tiles[ne][6].op)&&(tiles[ne][0].op===0))||((tiles[ne][4].op===tiles[ne][5].op)&&(tiles[ne][4].op===0)))

                           {
                                if(check(j))
                        {

                            conb=j;
                        }

                           }

                       

                     }

                     if(j===4 && tiles[ne][j].open)

                     {   
                          if(check(j) && fin.indexOf(j)===-1)
                        {

                         if(tiles[j][0].counto===0)

                         {

                          cone=j;

                         }

                         if(tiles[j][0].countx>tiles[j][0].counto)     {

                           conc=j;

                       }
                        }

                       if(((tiles[ne][1].op===tiles[ne][7].op)&&(tiles[ne][1].op===1))||((tiles[ne][3].op===tiles[ne][5].op)&&(tiles[ne][3].op===1))||((tiles[ne][0].op===tiles[ne][8].op)&&(tiles[ne][0].op===1))||((tiles[ne][2].op===tiles[ne][6].op)&&(tiles[ne][2].op===1)))

                       {

                    

                            cona=j;

                           }

                        if(((tiles[ne][1].op===tiles[ne][7].op)&&(tiles[ne][1].op===0))||((tiles[ne][3].op===tiles[ne][5].op)&&(tiles[ne][3].op===0))||((tiles[ne][0].op===tiles[ne][8].op)&&(tiles[ne][0].op===0))||((tiles[ne][2].op===tiles[ne][6].op)&&(tiles[ne][2].op===0)))

                           {
                                if(check(j))
                        {

                            conb=j;
                        }

                           }

                       

                     }

                     if(j===5 && tiles[ne][j].open)

                     { 
                          if(check(j) && fin.indexOf(j)===-1)
                        {

                         if(tiles[j][0].counto===0)

                         {

                          cone=j;

                         }

                         if(tiles[j][0].countx>tiles[j][0].counto)     {

                           conc=j;

                       }
                        }

                       if(((tiles[ne][2].op===tiles[ne][8].op)&&(tiles[ne][2].op===1))||((tiles[ne][3].op===tiles[ne][4].op)&&(tiles[ne][3].op===1)))

                       { 


                            cona=j;

                           }

                       if(((tiles[ne][2].op===tiles[ne][8].op)&&(tiles[ne][2].op===0))||((tiles[ne][3].op===tiles[ne][4].op)&&(tiles[ne][3].op===0)))

                           {
                                if(check(j))
                        {

                            conb=j;
                        }

                           }

                       

                     }

                     if(j===6 && tiles[ne][j].open)

                     {  
                          if(check(j) && fin.indexOf(j)===-1)
                        {

                         if(tiles[j][0].counto===0)

                         {

                          cone=j;

                         }

                         if(tiles[j][0].countx>tiles[j][0].counto)     {

                           conc=j;

                       }
                        }
                       

                       if(((tiles[ne][0].op===tiles[ne][3].op)&&(tiles[ne][0].op===1))||((tiles[ne][7].op===tiles[ne][8].op)&&(tiles[ne][7].op===1))||((tiles[ne][2].op===tiles[ne][4].op)&&(tiles[ne][2].op===1)))

                       {
                            cona=j;

                           }

                        
                         if(((tiles[ne][0].op===tiles[ne][3].op)&&(tiles[ne][0].op===0))||((tiles[ne][7].op===tiles[ne][8].op)&&(tiles[ne][7].op===0))||((tiles[ne][2].op===tiles[ne][4].op)&&(tiles[ne][2].op===0)))

                           {
                                if(check(j))
                        {

                            conb=j;
                        }

                           }

                       

                     }

                     if(j===7 && tiles[ne][j].open)

                     {   
                          if(check(j) && fin.indexOf(j)===-1)
                        {
                         if(tiles[j][0].counto===0)

                         {

                          cone=j;

                         }

                         if(tiles[j][0].countx>tiles[j][0].counto)     {

                           conc=j;

                       }
                        }

                       if(((tiles[ne][1].op===tiles[ne][4].op)&&(tiles[ne][1].op===1))||((tiles[ne][6].op===tiles[ne][8].op)&&(tiles[ne][6].op===1)))

                       {

                            cona=j;

                           }

                         if(((tiles[ne][1].op===tiles[ne][4].op)&&(tiles[ne][1].op===0))||((tiles[ne][6].op===tiles[ne][8].op)&&(tiles[ne][6].op===0)))

                           {
                                if(check(j))
                        {

                            conb=j;
                        }

                           }

                       

                     }

                     if(j===8 && tiles[ne][j].open)

                     {  
                          if(check(j) && fin.indexOf(j)===-1)
                        {

                         if(tiles[j][0].counto===0)

                         {

                          cone=j;

                         }

                         if(tiles[j][0].countx>tiles[j][0].counto)     {

                           conc=j;

                       }
                        }

                       if(((tiles[ne][0].op===tiles[ne][4].op)&&(tiles[ne][0].op===1))||((tiles[ne][2].op===tiles[ne][5].op)&&(tiles[ne][2].op===1))||((tiles[ne][6].op===tiles[ne][7].op)&&(tiles[ne][6].op===1)))

                       {

                       

                            cona=j;

                           }

                      
                          if(((tiles[ne][0].op===tiles[ne][4].op)&&(tiles[ne][0].op===0))||((tiles[ne][2].op===tiles[ne][5].op)&&(tiles[ne][2].op===0))||((tiles[ne][6].op===tiles[ne][7].op)&&(tiles[ne][6].op===0)))
                           {
                                if(check(j))
                        {

                            conb=j;
                        }

                           }

                       

                     }

                     

                    } //j loop (x or y win)

                   

                  if(cona!==10)

                    {  

                        println("cona");

                      compx=cona;

                    }

                 else{

                     if(conb!==10)

                     {  println("conb");

                       compx=conb;

                     }

                     else

                     {

                       if(cone!==10)

                        {    

                            println("cone");

                         compx=cone;

                        }

                        else

                        {  

                            if(cond!==10)

                            {  

                                println("cond");

                               compx=cond;

                            }

                            else

                           {

                              if(conf!==10)

                              {

                                println("conf");

                                compx=conf;

                              }

                             else 

                             {
                            if(conc!==10)
                              {
                                println("conc");

                                compx=conc;
                              }
                                 
                             else
                             {
                            
                             
                             k=0;



                           while(k===0)

                               {

                               ran1=round(random(0,8));

                           if(tiles[ne][ran1].open===true)

                            {

                             k=1;

                            }

                         }

                         println("ran1");

                         compx=ran1;
                             }

                             }

                           }

                        }

                     }

                 }

                

                

                 tiles[ne][compx].drawx();



                 tiles[ne][compx].op=1;

                 tiles[ne][0].countx++;

                 



               } // if ne is not in fin



               else {
                   dona=10;

                    donb=10;

                    donc=10;

                    dond=10;

                    done=10;
                    donf=10;
                    cona=10;

                    conb=10;

                    conc=10;

                    cond=10;

                    cone=10;
                    conf=10;
                  for(var l=0;l<9;l++)
                  {  
                      if(fin.indexOf(l)===-1)
                      {
                         ne=l;
                         

                   
                    for(var t=0;t<9;t++)
                    {
                      if(tiles[t][0].countx===1 &&               tiles[t][0].counto===1 && tiles[ne][t].open )
                      {
                          conf=t;
                          donf=ne;
                      }
                    }

                   if(tiles[ne][0].countx<=2)

                   {

                     for(var t=0;t<3;t++)

                       {

                          if( tiles[ne][t].op===1 && tiles[ne][t+3].open && check(t+3) && tiles[ne][t+6].open && fin.indexOf(t+3)===-1)

                            { 

                             cond=t+3; 
                             dond=ne;

                            }

                       }

                       for(var t=3;t<6;t++)

                       {

                          

                            if( tiles[ne][t].op===1 && tiles[ne][t+3].open && check(t+3) && tiles[ne][t-3].open && fin.indexOf(t+3)===-1)

                            {

                             cond=t+3;
                             dond=ne;

                            }

                       }
                       for(var t=6;t<9;t++)

                       {

                          

                            if( tiles[ne][t].op===1 && tiles[ne][t-3].open && check(t-3) && tiles[ne][t-6].open && fin.indexOf(t-3)===-1 )

                            {

                             cond=t-3;
                             dond=ne;

                            }

                       }
                       for(var t=0;t<9;t=t+3)

                       {

                          

                            if( tiles[ne][t].op===1 && tiles[ne][t+1].open && check(t+1) && tiles[ne][t+2].open && fin.indexOf(t+1)===-1 )

                            {

                             cond=t+1;
                             dond=ne;

                            }

                       }
                       for(var t=1;t<9;t=t+3)

                       {

                          

                            if( tiles[ne][t].op===1 && tiles[ne][t+1].open && check(t+1) && tiles[ne][t-1].open && fin.indexOf(t+1)===-1 )

                            {

                             cond=t+1;
                             dond=ne;

                            }

                       }
                       for(var t=2;t<9;t=t+3)

                       {

                          

                            if( tiles[ne][t].op===1 && tiles[ne][t-1].open && check(t-1) && tiles[ne][t-2].open && fin.indexOf(t-1)===-1 )

                            {

                             cond=t-1;
                             dond=ne;

                            }

                       }
                       
                       

                   }

                    

                  for(j=0;j<9;j++)

                    { 
                       // println(check(j));

                     if(j===0 && tiles[ne][j].open)

                     {   
                         
                        if(check(j) && fin.indexOf(j)===-1 )
                        {
                       
                        
                         if(tiles[j][0].counto===0)

                         {

                          cone=j;
                          done=ne;

                         }

                       if(tiles[j][0].countx>tiles[j][0].counto)     {

                           conc=j;
                           donc=ne;

                       }
                        }

                       if(((tiles[ne][1].op===tiles[ne][2].op)&&(tiles[ne][1].op===1))||((tiles[ne][3].op===tiles[ne][6].op)&& (tiles[ne][3].op===1))||((tiles[ne][4].op===tiles[ne][8].op)&& (tiles[ne][4].op===1)))

                       {

                         
                            cona=j;
                            dona=ne;

                           }

                        if(((tiles[ne][1].op===tiles[ne][2].op)&&(tiles[ne][1].op===0))||((tiles[ne][3].op===tiles[ne][6].op)&& (tiles[ne][3].op===0))||((tiles[ne][4].op===tiles[ne][8].op)&& (tiles[ne][4].op===0)))
                           {
                             if(check(j))
                        { 
                            conb=j;
                            donb=ne;
                        }

                           }

                       

                     }

                     if(j===1 && tiles[ne][j].open)

                     {  
                          if(check(j) && fin.indexOf(j)===-1)
                        {

                         if(tiles[j][0].counto===0)

                         {

                          cone=j;
                          done=ne;

                         }

                         if(tiles[j][0].countx>tiles[j][0].counto)     {

                           conc=j;
                           donc=ne;

                       }
                        }

                       if(((tiles[ne][0].op===tiles[ne][2].op)&&(tiles[ne][0].op===1))||((tiles[ne][4].op===tiles[ne][7].op)&&(tiles[ne][4].op===1)))

                       {

                      

                            cona=j;
                            dona=ne;

                           }

                       if(((tiles[ne][0].op===tiles[ne][2].op)&&(tiles[ne][0].op===0))||((tiles[ne][4].op===tiles[ne][7].op)&&(tiles[ne][4].op===0)))

                           {
                                if(check(j))
                        {

                            conb=j;
                            donb=ne;
                        }

                           }

                       

                     }

                     if(j===2 && tiles[ne][j].open)

                     {   
                           if(check(j) && fin.indexOf(j)===-1)
                        {
                         if(tiles[j][0].counto===0)

                         {

                          cone=j;
                          done=ne;

                         }

                         if(tiles[j][0].countx>=tiles[j][0].counto)     {

                           conc=j;
                           donc=ne;

                       }
                        }

                       if(((tiles[ne][1].op===tiles[ne][0].op)&&(tiles[ne][1].op===1))||((tiles[ne][5].op===tiles[ne][8].op)&&(tiles[ne][5].op===1))||((tiles[ne][4].op===tiles[ne][6].op)&&(tiles[ne][4].op===1)))

                       {

                     

                            cona=j;
                            dona=ne;

                           }

                      if(((tiles[ne][1].op===tiles[ne][0].op)&&(tiles[ne][1].op===0))||((tiles[ne][5].op===tiles[ne][8].op)&&(tiles[ne][5].op===0))||((tiles[ne][4].op===tiles[ne][6].op)&&(tiles[ne][4].op===0)))


                           {
                              if(check(j))
                        {
                            conb=j;
                            donb=ne;
                        }

                           }

                       

                     }

                     if(j===3 && tiles[ne][j].open)

                     { 
                          if(check(j) && fin.indexOf(j)===-1)
                        {if(tiles[j][0].counto===0)

                         {

                          cone=j;
                          done=ne;

                         }

                         if(tiles[j][0].countx>tiles[j][0].counto)     {

                           conc=j;
                           donc=ne;

                       }
                        }

                       if(((tiles[ne][0].op===tiles[ne][6].op)&&(tiles[ne][0].op===1))||((tiles[ne][4].op===tiles[ne][5].op)&&(tiles[ne][4].op===1)))

                       {

                    

                            cona=j;
                            dona=ne;

                           }

                      if(((tiles[ne][0].op===tiles[ne][6].op)&&(tiles[ne][0].op===0))||((tiles[ne][4].op===tiles[ne][5].op)&&(tiles[ne][4].op===0)))

                           {
                                if(check(j))
                        {

                            conb=j;
                            donb=ne;
                        }

                           }

                       

                     }

                     if(j===4 && tiles[ne][j].open)

                     {   
                          if(check(j) && fin.indexOf(j)===-1)
                        {

                         if(tiles[j][0].counto===0)

                         {

                          cone=j;
                          done=ne;

                         }

                         if(tiles[j][0].countx>tiles[j][0].counto)     {

                           conc=j;
                           donc=ne;

                       }
                        }

                       if(((tiles[ne][1].op===tiles[ne][7].op)&&(tiles[ne][1].op===1))||((tiles[ne][3].op===tiles[ne][5].op)&&(tiles[ne][3].op===1))||((tiles[ne][0].op===tiles[ne][8].op)&&(tiles[ne][0].op===1))||((tiles[ne][2].op===tiles[ne][6].op)&&(tiles[ne][2].op===1)))

                       {

                    

                            cona=j;
                            dona=ne;

                           }

                        if(((tiles[ne][1].op===tiles[ne][7].op)&&(tiles[ne][1].op===0))||((tiles[ne][3].op===tiles[ne][5].op)&&(tiles[ne][3].op===0))||((tiles[ne][0].op===tiles[ne][8].op)&&(tiles[ne][0].op===0))||((tiles[ne][2].op===tiles[ne][6].op)&&(tiles[ne][2].op===0)))

                           {
                                if(check(j))
                        {

                            conb=j;
                            donb=ne;
                        }

                           }

                       

                     }

                     if(j===5 && tiles[ne][j].open)

                     { 
                          if(check(j) && fin.indexOf(j)===-1)
                        {

                         if(tiles[j][0].counto===0)

                         {

                          cone=j;
                          done=ne;

                         }

                         if(tiles[j][0].countx>tiles[j][0].counto)     {

                           conc=j;
                           donc=ne;

                       }
                        }

                       if(((tiles[ne][2].op===tiles[ne][8].op)&&(tiles[ne][2].op===1))||((tiles[ne][3].op===tiles[ne][4].op)&&(tiles[ne][3].op===1)))

                       { 


                            cona=j;
                            dona=ne;

                           }

                       if(((tiles[ne][2].op===tiles[ne][8].op)&&(tiles[ne][2].op===0))||((tiles[ne][3].op===tiles[ne][4].op)&&(tiles[ne][3].op===0)))

                           {
                                if(check(j))
                        {

                            conb=j;
                            donb=ne;
                        }

                           }

                       

                     }

                     if(j===6 && tiles[ne][j].open)

                     {  
                          if(check(j) && fin.indexOf(j)===-1)
                        {

                         if(tiles[j][0].counto===0)

                         {

                          cone=j;
                          done=ne;

                         }

                         if(tiles[j][0].countx>tiles[j][0].counto)     {

                           conc=j;
                           donc=ne;

                       }
                        }
                       

                       if(((tiles[ne][0].op===tiles[ne][3].op)&&(tiles[ne][0].op===1))||((tiles[ne][7].op===tiles[ne][8].op)&&(tiles[ne][7].op===1))||((tiles[ne][2].op===tiles[ne][4].op)&&(tiles[ne][2].op===1)))

                       {
                            cona=j;
                            dona=ne;

                           }

                        
                         if(((tiles[ne][0].op===tiles[ne][3].op)&&(tiles[ne][0].op===0))||((tiles[ne][7].op===tiles[ne][8].op)&&(tiles[ne][7].op===0))||((tiles[ne][2].op===tiles[ne][4].op)&&(tiles[ne][2].op===0)))

                           {
                                if(check(j))
                        {

                            conb=j;
                            donb=ne;
                        }

                           }

                       

                     }

                     if(j===7 && tiles[ne][j].open)

                     {   
                          if(check(j) && fin.indexOf(j)===-1)
                        {
                         if(tiles[j][0].counto===0)

                         {

                          cone=j;
                          done=ne;

                         }

                         if(tiles[j][0].countx>tiles[j][0].counto)     {

                           conc=j;
                           donc=ne;

                       }
                        }

                       if(((tiles[ne][1].op===tiles[ne][4].op)&&(tiles[ne][1].op===1))||((tiles[ne][6].op===tiles[ne][8].op)&&(tiles[ne][6].op===1)))

                       {

                            cona=j;
                            dona=ne;

                           }

                         if(((tiles[ne][1].op===tiles[ne][4].op)&&(tiles[ne][1].op===0))||((tiles[ne][6].op===tiles[ne][8].op)&&(tiles[ne][6].op===0)))

                           {
                                if(check(j))
                        {

                            conb=j;
                            donb=ne;
                        }

                           }

                       

                     }

                     if(j===8 && tiles[ne][j].open)

                     {  
                          if(check(j) && fin.indexOf(j)===-1)
                        {

                         if(tiles[j][0].counto===0)

                         {

                          cone=j;
                          done=ne;

                         }

                         if(tiles[j][0].countx>tiles[j][0].counto)     {

                           conc=j;
                           donc=ne;

                       }
                        }

                       if(((tiles[ne][0].op===tiles[ne][4].op)&&(tiles[ne][0].op===1))||((tiles[ne][2].op===tiles[ne][5].op)&&(tiles[ne][2].op===1))||((tiles[ne][6].op===tiles[ne][7].op)&&(tiles[ne][6].op===1)))

                       {

                       

                            cona=j;
                            dona=ne;

                           }

                      
                          if(((tiles[ne][0].op===tiles[ne][4].op)&&(tiles[ne][0].op===0))||((tiles[ne][2].op===tiles[ne][5].op)&&(tiles[ne][2].op===0))||((tiles[ne][6].op===tiles[ne][7].op)&&(tiles[ne][6].op===0)))
                           {
                                if(check(j))
                        {

                            conb=j;
                        }

                           }

                       

                     }


                    } //j loop (x or y win)

                      

                      }

                  

                

                 

                 

                
                 
                 
                  } // l waala loop
                  if(cona!==10)

                    {  

                        println("2cona");

                      compx=cona;
                      compy=dona;

                    }

                 else{

                     if(conb!==10)

                     {  println("2conb");

                       compx=conb;
                       compy=donb;
                     }

                     else

                     {

                       if(cone!==10)

                        {    

                            println("2cone");

                         compx=cone;
                         compy=done;

                        }

                        else

                        {  

                            if(cond!==10)

                            {  

                                println("2cond");

                               compx=cond;
                               compy=dond;

                            }

                            else

                           {

                              if(conc!==10)

                              {

                                println("2conc");

                                compx=conc;
                                compy=donc;

                              }

                             else 

                             {

                                 k=0;



                                  while(k===0)



                             {
            
            
            
                               ran2=round(random(0,8));
            
            
            
                               if(fin.indexOf(ran2)===-1)



                                             {
                        
                        
                        
                                              k=1;
                        
                        
                        
                                             }



                                     }



                             k=0;
            
            
            
                              while(k===0)
            
            
            
                             {
            
            
            
                               ran1=round(random(0,8));
            
            
            
                               if(tiles[ran2][ran1].open===true)
            
            
            
                                 {
            
            
            
                                  k=1;
            
            
            
                                 }

                             
                             }


                           

                         println("2ran1");

                         compx=ran1;
                         compy=ran2;

                             }

                           }

                        }

                     }

                 }
                  
                tiles[compy][compx].drawx();



                 tiles[compy][compx].op=1;

                 tiles[compy][0].countx++;

                
               }  // else condition

                 



                 



                 i=compy;



                 if(((tiles[i][0].op === tiles[i][1].op) &&                          (tiles[i][2].op===tiles[i][0].op))||                         ((tiles[i][3].op === tiles[i][4].op) &&                          (tiles[i][3].op===tiles[i][5].op))||                         ((tiles[i][6].op === tiles[i][7].op) &&                          (tiles[i][6].op===tiles[i][8].op))||



                      ((tiles[i][0].op === tiles[i][3].op) &&                          (tiles[i][0].op===tiles[i][6].op))||                         ((tiles[i][1].op === tiles[i][4].op) &&                          (tiles[i][4].op===tiles[i][7].op))||                         ((tiles[i][2].op === tiles[i][5].op) &&                          (tiles[i][2].op===tiles[i][8].op))||



                        ((tiles[i][0].op === tiles[i][4].op) &&                          (tiles[i][0].op===tiles[i][8].op))||                         ((tiles[i][2].op === tiles[i][4].op) &&                          (tiles[i][2].op===tiles[i][6].op))) 



              { fin.push(i);//stores won index



              //closes the winning block



               for(k=0;k<9;k++)



               {



                 tiles[i][k].open=false;



               }fill(255, 255, 255);



               //rect(tiles[i][0].x,tiles[i][0].y,120,120);



               



                   textSize(140);



                   text("X",tiles[i][0].x+7,tiles[i][0].y+110);



                   arrx.push(i);



                



            }



            for(a=0;a<9;a++)



               {



                 for(b=0;b<9;b++)



                 {



                    



                     tiles[a][b].able =true;



                    



                 }



               }



               z=compx;



               // draws green box if box not won



                if(fin.indexOf(compx)===-1)



                    {



                    tiles[compx][0].boxi(); 



                    }



              



              for(a=0;a<9;a++)



               {



                 for(b=0;b<9;b++)



                 {



                   if( fin.indexOf(compx)===-1 )



                   { if(a!==compx)



                     { 



                     tiles[a][b].able =false;



                     }



                   }



                   



                 }



               }



            



              



              } // mode 2 ka state 0



       

     }

     

     

     

     

     // easy comp ai

     

     

     if(mode===0 && state===0)

     {   var c=millis();

         while(millis()>=c)

                {  

                   // println("hi");

                 //   println(c);

                  if((millis()-c)>=1000)

                  { // println(millis());

                    //  println("we");

                    break;

                  }

                   

                }

       if(state===0)



              {

                // println(ne);

              



               if(fin.indexOf(ne)===-1)



               {



                   k=0;



                



                 while(k===0)



                 {



                   ran1=round(random(0,8));



                   if(tiles[ne][ran1].open===true)



                     {



                      k=1;



                     }



                 }



                 



                 



               }



               else



               {



                  k=0;



                  while(k===0)



                 {



                   ran2=round(random(0,8));



                   if(fin.indexOf(ran2)===-1)



                     {



                      k=1;



                     }



                 }



                 k=0;



                  while(k===0)



                 {



                   ran1=round(random(0,8));



                   if(tiles[ran2][ran1].open===true)



                     {



                      k=1;



                     }



                 }



                 ne=ran2;



                 



               }

                     println("mode 0");

                 tiles[ne][ran1].drawx();



                 tiles[ne][ran1].op=1;



                 



                 i=ne;



                 if(((tiles[i][0].op === tiles[i][1].op) &&                          (tiles[i][2].op===tiles[i][0].op))||                         ((tiles[i][3].op === tiles[i][4].op) &&                          (tiles[i][3].op===tiles[i][5].op))||                         ((tiles[i][6].op === tiles[i][7].op) &&                          (tiles[i][6].op===tiles[i][8].op))||



                      ((tiles[i][0].op === tiles[i][3].op) &&                          (tiles[i][0].op===tiles[i][6].op))||                         ((tiles[i][1].op === tiles[i][4].op) &&                          (tiles[i][4].op===tiles[i][7].op))||                         ((tiles[i][2].op === tiles[i][5].op) &&                          (tiles[i][2].op===tiles[i][8].op))||



                        ((tiles[i][0].op === tiles[i][4].op) &&                          (tiles[i][0].op===tiles[i][8].op))||                         ((tiles[i][2].op === tiles[i][4].op) &&                          (tiles[i][2].op===tiles[i][6].op))) 



              { fin.push(i);//stores won index



              //closes the winning block



               for(k=0;k<9;k++)



               {



                 tiles[i][k].open=false;



               }fill(255, 255, 255);



               //rect(tiles[i][0].x,tiles[i][0].y,120,120);



               



                   textSize(140);



                   text("X",tiles[i][0].x+7,tiles[i][0].y+110);



                   arrx.push(i);



                



            }



            for(a=0;a<9;a++)



               {



                 for(b=0;b<9;b++)



                 {



                    



                     tiles[a][b].able =true;



                    



                 }



               }



               z=ran1;



               // draws green box if box not won



                if(fin.indexOf(ran1)===-1)



                    {



                    tiles[ran1][0].boxi(); 



                    }



              



              for(a=0;a<9;a++)



               {



                 for(b=0;b<9;b++)



                 {



                   if( fin.indexOf(ran1)===-1 )



                   { if(a!==ran1)



                     { 



                     tiles[a][b].able =false;



                     }



                   }



                   



                 }



               }



            



              



              } // mode 0 ka state 0



       

     }




    



};





















}};
