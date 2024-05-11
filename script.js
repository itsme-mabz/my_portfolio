let help = `
<p class="user">Available commands:</p>
    <li><span class="orange">hello</span>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- say hello!</li>
    <li><span class="orange">about</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- about me :)</li>
    <li><span class="orange">clear</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - clear the terminal</li>
    <li><span class="orange">education</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - my educational background</li>
    <li><span class="orange">email</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - send me an Email</li>
    <li><span class="orange">skills</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - see my skills</li>
    <li><span class="orange">help</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - check available commands</li>
    <li><span class="orange">call</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - contact me</li>
    <li><span class="orange">resume</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - see my resume</li>
    <li><span class="orange">blogs</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - read my blogs</li>
    <li><span class="orange">projects</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - view projects that I've coded</li>
    <li><span class="orange">pwd</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - print current working directory</li>
    <li><span class="orange">socials</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - check out my social accounts</li>
    <li><span class="orange">welcome</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - display hero section</li>
    <li><span class="orange">whoami</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - about current user</li>
    <li><span class="orange">exit</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - close page</li>
    <li><span class="orange">Tab or Ctrl + i</span>&nbsp;&nbsp;&nbsp;&nbsp; - Auto Completes the command.</li>
    <li><span class="orange">ctrl + l</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Clear the terminal.</li>`;
let welcome = `
<span class="orange">user</span>@<span class="user">sixsense.works</span>:~$&nbsp;welcome
<Br><br>-----<br><br>
<p>Terminal? More like Terrifying:</p>
<p>Welcome to the land of blinking cursors and cryptic error messages!<Br>
  If you're looking for a user-friendly, aesthetically pleasing portfolio,<br>
  you've come to the wrong place. This is where code goes to die (and occasionally,<br>
  to live again).<br>
  <br>
  Enter at your own risk.<br>
  <br>
  Not your typical web dev. I'm more like a linguistic artist, fluent in the <br>dialects of Bash, Python, Django, HTML, CSS, and React. My canvas? The intricate realm <br>of system administration, where I engineer solutions that dance seamlessly between code and infrastructure.
<br>
  <br><br> ----<br><br>
  To access a list of available commands, simply enter <span class="orange">\`help\`</span>.</p>`;

document.addEventListener('DOMContentLoaded', function() {
    const outputContainer = document.querySelector('.output');
    outputContainer.innerHTML += welcome;
    const commandInput = document.getElementById('command-input');
    commandInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const command = commandInput.value.trim().toLowerCase();
            executeCommand(command);
            commandInput.value = '';
        }
    });
    commandInput.focus();


    let commandHistory = [];
    let historyIndex = -1;

    const availableCommands = [
        
    'help','hello', 'about', 'clear', 'echo', 'education', 'email', 'skills', 'help', 'call',
        'resume', 'blogs', 'projects', 'pwd', 'socials', 'welcome', 'whoami', 'exit'
    ];

    commandInput.addEventListener('keydown', function(event) {
        if (event.key === 'Tab' || (event.ctrlKey && event.key.toLowerCase() === 'i')) {
            event.preventDefault(); 

            const userInput = commandInput.value.trim().toLowerCase();
            const partialCommand = userInput.split(' ').pop(); 

            const matchingCommands = availableCommands.filter(command =>
                command.startsWith(partialCommand)
            );

            if (matchingCommands.length > 0) {
                const completedCommand = matchingCommands[0];
                commandInput.value = userInput.substring(0, userInput.lastIndexOf(' ') + 1) + completedCommand;
            }
        } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            if (historyIndex > 0) {
                historyIndex--;
                commandInput.value = commandHistory[historyIndex];
            }
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey && event.key.toLowerCase() === 'l') {
            outputContainer.innerHTML = '';
            event.preventDefault(); 
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const command = commandInput.value.trim().toLowerCase();
            commandHistory.unshift(command); 
            historyIndex = -1; 
        }
    });
});


function executeCommand(command) {
    const outputContainer  = document.querySelector('.output');
    const shouldScrollToBottom = outputContainer.scrollHeight - outputContainer.clientHeight <= outputContainer.scrollTop + 1;
    switch (command) {
        case 'github':
            outputContainer.innerHTML += `<p>Redirecting to GitHub...</p>`;
            window.open('https://github.com/itsme-mabz', '_blank');
            outputContainer.innerHTML += `<p>Successfully redirected to GitHub...</p>`;
            break;
        case 'hello':
            outputContainer.innerHTML += `<p>Greetings, I'm Muhammad Ahmed. How may I assist you today??<br>
            For a list of available Commands, type <span class="orange">\`help\`</span>.</p>`;
            break;
        case 'about':
            outputContainer.innerHTML += `<p>Greetings, I am Muhammad Ahmed!<br>

            I'm a Curious Engineer and a Linux Lover.<br>
            
            I love writing code. Ever since writing my first program in Python and manipulating<br>
            it to produce the desired output, I have been obsessed with the idea of using<Br>
            software to solve practical problems.<br>
            I enjoy digging into problems, generating new ideas, working with awesome people, and<br>
            devising feasible solutions to broadly relevant problems with the intersection of creativity & technology.<br><br><b>#keep building...</b>
            </p>`;
            break;
        case 'portfolio':
            outputContainer.innerHTML += `<p>Portfolio: Check out my projects...</p>`;
            break;
        case 'welcome':
            outputContainer.innerHTML = welcome;
            break;
        case 'clear':
            outputContainer.innerHTML = ''; 
            break;
        case 'help':
            outputContainer.innerHTML += help;
            break;
        case 'exit':
            window.location.href = 'about:blank';
            break;
        case 'education':
            outputContainer.innerHTML += `<br><p class="orange">My educational background: <br><br></p>
            Bachelors in Cyber Security & Digital Forensics.<br>
            Islamia University of Bahawalpur, Pakistan | <span class="user">Current</span><br><hr>
<Br>
            Intermediate in Computer Science.<br>
            Govt Sadiq Graduate College of Commerce, Pakistan | <span class="user">2021-2023</span><br><hr>

            </p>`;
            break;
        case 'email':
            outputContainer.innerHTML += `<p class="orange">hey wait! here's my email:</p><p> muhammad@sixsense.works</p>`; 
            break;
        case 'skills':
            outputContainer.innerHTML += `<br><Br><p class="orange">My Skills: <hr></p>
            Full-Stack Web Apps Development<br>
            System Administration<br>
            Web Scraping<br>
            Automation<br>
            API Integrations
            <br><br>

            <p class="orange">Languages: <hr></p>
            CSS&nbsp;&nbsp;&nbsp;&nbsp;|###############| 100%<br>
            HTML&nbsp;&nbsp;&nbsp;|###############| 100%<br>
            Bash&nbsp;&nbsp;&nbsp;|######&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| 50%<br>
            React&nbsp;&nbsp;|########&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| 60%<br>
            Django&nbsp;|#############&nbsp;&nbsp;| 80%<br>
            Python&nbsp;|#############&nbsp;&nbsp;| 80%<br>
            <Br>

            <p class="orange">Others: <hr></p>
            WordPress<br>
            Shopify<br>
            Webflow<br>
            WooCommerce
            <br>
            `; 
            break;
        case 'call':
            outputContainer.innerHTML += `<p class="orange">call me at: </p><p>+92(321)589-8380</p>`; 
            break;
        case 'resume':
            outputContainer.innerHTML += `<p class="orange">Opening my resume...</p>`; 
            setTimeout(() => {
                window.open('https://sixsense.works/my_resume.pdf', '_blank');
            }, 2000);
            
            break;
        case 'blogs':
            outputContainer.innerHTML += `<p>Redirecting to medium...</p>`; 
            setTimeout(() => {
                window.open('https://medium.com/@itsmemabz', '_blank');
            }, 2000);
            
            break;
        case 'projects':
            outputContainer.innerHTML += `<p>Redirecting to github to see projects...</p>`; 
            setTimeout(() => {
                window.open('https://github.com/itsme-mabz', '_blank');
            }, 2000);
            break;
        case 'pwd':
            outputContainer.innerHTML += `<p>/root/home</p>`; 
            break;
        case 'socials':
            outputContainer.innerHTML += `
                <p>Feel free to check out my social media profiles below!</p>
                    <li>1. GitHub</li>
                    <li>2. LinkedIn</li>
                    <li>3. Instagram</li>
                    <li>4. Medium</li>
                <p>Usage: socials go &lt;social-no&gt;</p>
                <p>eg: socials go 1</p>
            `;
            break;
        case 'whoami':
            outputContainer.innerHTML += `<p class="orange">~:$visitor</p>`; 
            break;

        case 'socials go 1':
            outputContainer.innerHTML += `<p>Redirecting to github...</p>`; 
            window.open('https://github.com/itsme-mabz', '_blank');
            break;

        case 'socials go 2':
            outputContainer.innerHTML += `<p>Redirecting to linkedin...</p>`; 
            window.open('https://linkedin.com/in/itsme-mabz', '_blank');
            break;

        case 'socials go 3':
            outputContainer.innerHTML += `<p>Redirecting to instagram...</p>`; 
            window.open('https://www.instagram.com/prose_by_ma/', '_blank');
            break;

        case 'socials go 4':
            outputContainer.innerHTML += `<p>Redirecting to medium...</p>`; 
            window.open('https://medium.com/@itsmemabz', '_blank');
            break;
        default:
            outputContainer.innerHTML += `<p>Uh oh! Command not found: ${command}</p>`;
    }

    if (shouldScrollToBottom) {
        outputContainer.scrollTop = outputContainer.scrollHeight;
    }
}
