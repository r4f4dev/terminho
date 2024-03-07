var multiLineString = `
                         //  ) )                                            
    __     //___/ /   __//__      //___/ /      ___   /      ___            
  //  ) ) /____  /     //        /____  /     //   ) /     //___) ) ||  / / 
 //           / /     //             / /     //   / /     //        || / /  
//           / /     //             / /     ((___/ /     ((____     ||/ /   

Welcome to best super mupper advanced hacking app in the world!
Type help for a list of commands. [[!;;;;https://github.com/r4f4dev](c) r4f4dev]
`;

$(function () {
  $(".term").terminal(
    {
      help: function () {
        this.echo(`Available commands: 
          help - show all commands with descriptions
          sound - [on , off] - enable or disable sound
          hp - hack Pentagon!
          gc - grab a cat!
          clear - clear console
        `);
      },
      sound: function (onoff) {
         var music = document.querySelector("audio");

         music.addEventListener("ended", function () {
           music.play();
         });

        if(onoff == "on") {
          music.play();
          this.echo(`Sound: enabled`);
        }else if(onoff == "off") {
          music.pause();
          this.echo(`Sound: disabled`);
        }else {
          this.echo(`Usage: sound [on, off]`);
        }
      },
      hp: function () {
        this.echo("Process started...");

        setTimeout(() => {
          this.echo("Wait.");
        }, 1000);

        setTimeout(() => {
          this.echo("Wait..");
        }, 2000);

        setTimeout(() => {
          this.echo("Wait...");
        }, 3000);

        setTimeout(() => {
          this.echo("Wait....");
        }, 4000);

        setTimeout(() => {
          this.echo("Pentagon Hacked! Password is : qwerty123");
          this.echo("");
        }, 5000);
      },
      gc: function () {
        this.echo("[[@;;;;https://placekitten.com/300/300]]");
        this.echo("Happy hacking :)");
      },
    },
    {
      greetings: multiLineString,
    }
  );
});
