function runActivity() {
    let choice; 

    // prompt selection
    choice = Number(prompt("Select a shape you would like to get the area of? 1: triangle, 2: circle, 3: rectangle."));

    // if process
    // triangle
    if (choice == 1) {
        base = Number(prompt("Give me the measurements of the base."));
        height = Number(prompt("Give me the measurements of the height."));
        triangle_area = (1/2 * (base * height));
        console.log("The area of the triangle is " + triangle_area);

    // circle
    } else if (choice == 2) {
        radius = Number(prompt("Give me the measurements of the radius."));
        circle_area = (3.1416 * (radius ** 2));
        console.log("The area of the circle is " + circle_area);

    // rectangle
    } else if (choice == 3) {
        length = Number(prompt("Give me the measurements of the length."));
        width = Number(prompt("Give me the measurements of the width."));
        rectangle_area = length * width;
        console.log("The area of the rectangle is " + rectangle_area);

    // invalid
    } else {
        console.error("ERROR: Invalid input!");
    }
}
