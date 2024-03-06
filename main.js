var multiLineString = `
                         //  ) )                                            
    __     //___/ /   __//__      //___/ /      ___   /      ___            
  //  ) ) /____  /     //        /____  /     //   ) /     //___) ) ||  / / 
 //           / /     //             / /     //   / /     //        || / /  
//           / /     //             / /     ((___/ /     ((____     ||/ /   

Welcome to Terminal.This is a best hacking app in the world!
Type help for a list of commands. [[!;;;;https://github.com/r4f4dev](c) r4f4dev]
`;

$(function () {
  $(".term").terminal(
    {
      help: function () {
        this.echo(`Available commands: 
          help - show all commands with descriptions
          hp - hack Pentagon!
          gc - hack a cat!
          clear - clear console
        `);
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
        this.echo("im hacked :(");
      },
    },
    {
      greetings: multiLineString, // Установка приветственного сообщения
    }
  );
});
