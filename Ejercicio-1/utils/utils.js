

function rgb_to_hsv(r, g, b){
    let hue, saturation, V, delta;
   
    const R = r / 255;
    const G = g / 255;
    const B = b / 255;

    //get maximum and minimum value of the 3 colors
    const maximum = parseFloat(Math.max(R, G, B).toPrecision(2));
    const minimum = parseFloat(Math.min(R, G, B).toPrecision(2));

    //calculte saturation
    saturation = calculate_saturation(maximum, minimum) * 100;

    //calculate value
    V = maximum * 100;

    //delta
    delta = maximum - minimum;
    
    
}

function calculate_saturation(max, min){
    if(max <= 0){
        return 0;
    }

    return (max - min) / max;
}



export {rgb_to_hsv}