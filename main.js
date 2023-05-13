
  // Create canvas variable
  canvas = new fabric.Canvas('myCanvas');
  
 blockY=1;
 blockX=1;

 block_Image_Width = 250;
 block_Image_Height = 330;

var block_Image_Object= "";

function newImage(getImage)
{
	// para enviar imagens
	fabric.Image.fromURL(getImage,function(Img) {
		block_Image_Object = Img;
	
		block_Image_Object.scaleToWidth(block_Image_Width);
		block_Image_Object.scaleToWidth(block_Image_Height);
		block_Image_Object.set({
		top:blockY,
		left:blockX
		});
		canvas.add(block_Image_Object);
	});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '69') // adicione os códigos adequados às teclas
	{
		// enviar ranger escarlate
		blockX =200;
		newImage('rr.jpg');
		console.log("e")
	}
	if(keyPressed == '86')
	{
		blockX = 180;
		newImage('gr.png');
		console.log("v");
		// enviar ranger verde
	}
	
	if(keyPressed == '65')
	{
		blockX =350;
		newImage('yr.png');
		console.log("a");
		// enviar ranger amarelo
	}

	if(keyPressed == '82')
	{
		blockX = 600;
		newImage('pr.png');
		console.log("r");
		// enviar ranger rosa
	}

	if(keyPressed == '73')
	{
		blockX = 700;
		newImage('br.png');
		console.log("i");
	// enviar ranger índigo
	}
	
}

