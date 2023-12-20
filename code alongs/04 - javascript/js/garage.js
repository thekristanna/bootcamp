function runActivity() {
    // class: Car
    class Car {
        constructor(n, m, a) {
          this.name = n;
          this.manufacturer = m;
          this.acceleration = a;
          this.speed = 0; 
          this.started = false; 
        }
  
        // method: start
        start() {
            if (this.started == false) {
            this.speed = 30;
            this.started = true;
            console.log(this.name + " has started! Speed at " + this.speed);
            } else {
            console.log(this.name + " has already started!");
            }
        }
      
        // method: accelerate
        accelerate() {
            if (this.started == true) {
              this.speed += this.acceleration;
              console.log(this.name + " has accelerated! New speed: " + this.speed);
            } else {
              console.log(this.name + " has not started yet.");
            }
        }
          
  
        // method: decelerate
        decelerate() {
            if (this.started == true) {
            this.speed = Math.max(1, (this.speed / 2));
        
            if (this.speed <= 1) {
                console.log(this.name + " has reached its minimum speed.");
            } else {
                console.log(this.name + " has decelerated! New speed: " + this.speed);
            }
            } else {
            console.log(this.name + " has not started yet.");
            }
        }
  
        // method: check speed
        checkSpeed() {
            console.log("Current speed: " + this.speed);
        }
  
        // method: stop
        stop() {
            if (this.started == true) {
              this.speed = 0;
              console.log(this.name + " has stopped.");
              this.started = false;
            } else {
            console.log(this.name + " has not started yet.");
            }
          }
          
          
    }
    
    // objects
    let name = prompt(
        "Give me the car's name.");
    let manufacturer = prompt(
        "Give me the car's manufacturer.");
    let acceleration = Number(
        prompt(
        "Give me the car's acceleration."));
    let myCar = new Car(name, manufacturer, acceleration);

    let i = 0;
  
    // loop
    while (i == 0) {
        let choice = Number(
            prompt(
                "(1) Start (2) Accelerate (3) Decelerate (4) Check Speed (5) Stop (6) End program"
                )
        );
        switch (choice) {
            case 1:
            myCar.start();
            break;
            case 2:
            myCar.accelerate();
            break;
            case 3:
            myCar.decelerate();
            break;
            case 4:
            myCar.checkSpeed();
            break;
            case 5:
            myCar.stop();
            break;
            case 6:
            i = 1;
            break;
            default:
            console.log("Invalid Entry! Enter a number between 1-6.")
            }
    }

}
