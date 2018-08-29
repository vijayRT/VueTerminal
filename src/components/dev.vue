
<template>
  <div id='terminal'>
    <vue-headful title="terminal" />
    <pre id="terminalText">{{ terminalText }}</pre>
    <span id="prompt" v-if="displayPrompt">></span>
    <input id="cmd" v-if="displayPrompt" v-bind:value="inputCommand" v-focus v-on:input="inputCommand = $event.target.value.replace(/_/, '') + '_'"
      v-on:keyup.enter="displayOutput" />
  </div>
</template>

<script>
export default {
  name: "dev",
  data() {
    return {
      terminalText: `
 _______  __   __  _______  _______  ______      _______  _______  _______  ______    _______  _______    _______  _______  ______    __   __  ___   __    _  _______  ___     
|       ||  | |  ||       ||       ||    _ |    |       ||       ||       ||    _ |  |       ||       |  |       ||       ||    _ |  |  |_|  ||   | |  |  | ||   _   ||   |    
|  _____||  | |  ||    _  ||    ___||   | ||    |  _____||    ___||       ||   | ||  |    ___||_     _|  |_     _||    ___||   | ||  |       ||   | |   |_| ||  |_|  ||   |    
| |_____ |  |_|  ||   |_| ||   |___ |   |_||_   | |_____ |   |___ |       ||   |_||_ |   |___   |   |      |   |  |   |___ |   |_||_ |       ||   | |       ||       ||   |    
|_____  ||       ||    ___||    ___||    __  |  |_____  ||    ___||      _||    __  ||    ___|  |   |      |   |  |    ___||    __  ||       ||   | |  _    ||       ||   |___ 
 _____| ||       ||   |    |   |___ |   |  | |   _____| ||   |___ |     |_ |   |  | ||   |___   |   |      |   |  |   |___ |   |  | || ||_|| ||   | | | |   ||   _   ||       |
|_______||_______||___|    |_______||___|  |_|  |_______||_______||_______||___|  |_||_______|  |___|      |___|  |_______||___|  |_||_|   |_||___| |_|  |__||__| |__||_______|
 \nYou could type 'help' to get started\n\n`,
      inputCommand: "_",
      displayPrompt: true
    };
  },
  directives: {
    focus: {
      // directive definition
      inserted: function (el) {
        el.focus();
      }
    }
  },
  methods: {
    displayOutput: function () {
      this.displayPrompt = false;
      this.terminalText += this.executeCommand() + `\n\n`;
      this.displayPrompt = true;
      this.inputCommand = '_'
    },
    executeCommand: function () {
      let command = this.inputCommand.replace(/_/g, '');
      let commandOutput = {
        'help': `\n\nBelow is a list of available commands\ngithub\nlinkedin\nfacebook\ntwitter\nsrc`,
        'github': `\nhttps://github.com/vijayRT`,
        'linkedin': `\nhttps://www.linkedin.com/in/vijayrajasekar96`,
        'facebook': `\nhttps://www.facebook.com/vijayrajasekar96`,
      }
      return `> ${command} ${commandOutput[command] ? commandOutput[command] : "\n\nCommand not found"}`
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
html {
  background-color: black;
  font-family: monospace;
}

#terminalText {
  display: inline;
  color: rgba(170, 170, 170);
}

#prompt {
  display: inline;
  font-size: 13px;
  color: rgba(170, 170, 170);
}

#cmd {
  display: inline;
  font-family: 'Source Code Pro', monospace;
  background-color: black;
  caret-color: black;
  border: none;
  color: rgba(170, 170, 170);
  width: 80%;
  outline: none;
}
</style>
