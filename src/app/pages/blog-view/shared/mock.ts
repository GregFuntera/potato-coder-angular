export const MOCK = {
  body: "<p style=\"text-align: center;\">\"Easily deploy your angular project using heroku. Creating your heroku account and deploying your project through CLI. Adding scripts in package.json to build and deploy your project in heroku.\"</p>\n<p style=\"text-align: center;\">&nbsp;</p>\n<p style=\"text-align: center;\"><iframe src=\"//www.youtube.com/embed/hE1i_LhL_Nc?t=38s\" width=\"892\" height=\"500\" allowfullscreen=\"allowfullscreen\"></iframe></p>\n<p style=\"text-align: center;\">&nbsp;</p>\n<h3>Create Heroku Account</h3>\n<p>First you need to have a heroku account. You can sign up&nbsp;<a href=\"https://signup.heroku.com/?c=70130000001x9jFAAQ\">here</a>&nbsp;to create an account. Please have a valid email when creating an account because you need to confirm your registration at your email.</p>\n<p>After creating an account you should be able to login and will be redirected to your dashboard.</p>\n<p><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"https://i.imgur.com/XcICrm9.png\" alt=\"Account Dashboard\" width=\"626\" height=\"350\" /></p>\n<p>&nbsp;</p>\n<h3>Create An Angular Project</h3>\n<p>Go to to your working directory and create a new angular project through CLI.</p>\n<p>For this demo i'll be creating a new angular project named <strong>demo-deploy</strong></p>\n<p><strong><img src=\"https://i.imgur.com/THvlVAM.png\" alt=\"CLI Command\" width=\"677\" height=\"37\" /></strong></p>\n<p>After successfully creating your project go to the <strong>demo-deploy</strong> folder by typing in the terminal<strong><em> cd demo-deploy/</em></strong></p>\n<p>and test your application locally type in <em><strong>ng serve&nbsp;</strong></em>and open your browser at&nbsp;<strong><em>http://localhost:4200/</em></strong></p>\n<p style=\"text-align: center;\"><img src=\"https://i.imgur.com/GNYhKm1.png\" alt=\"Angular Application\" width=\"684\" height=\"384\" /></p>\n<p style=\"text-align: left;\">&nbsp;</p>\n<h3 style=\"text-align: left;\">Install Express in Your Angular Project</h3>\n<p>You must be in your project root folder and install express to do that run in your terminal</p>\n<p><em><strong>npm install express --save</strong></em></p>\n<p><em><strong><img src=\"https://i.imgur.com/any4OKf.png\" alt=\"npm install express --save\" width=\"623\" height=\"46\" /></strong></em></p>\n<p>While writing this guide the current version of the express is 4.16.3 it might be different for you.</p>\n<h3>Using Express as Server</h3>\n<p>Create a<em><strong> server.js</strong> </em>file in the root folder of your project.</p>\n<p><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"https://i.imgur.com/j9o5Xrp.png\" alt=\"server.js\" width=\"697\" height=\"436\" /></p>\n<p>In your server.js file copy this code below:</p>\n<pre class=\"language-javascript\"><code>//Install express server\nconst express = require('express');\nconst path = require('path');\n\nconst app = express();\n\n// Serve only the static files form the dist directory\n// Replace the '/dist/&lt;to_your_project_name&gt;'\napp.use(express.static(__dirname + '/dist/demo-deploy'));\n\napp.get('*', function(req,res) {\n  // Replace the '/dist/&lt;to_your_project_name&gt;/index.html'\n  res.sendFile(path.join(__dirname+ '/dist/demo-deploy/index.html'));\n});\n// Start the app by listening on the default Heroku port\napp.listen(process.env.PORT || 8080);\n</code></pre>\n<p><em>*Take note of the&nbsp;<strong>app.use(express.static(__dirname + '/dist/&lt;your_project_name&gt;'));&nbsp;&nbsp;</strong>Replace with the</em></p>\n<p><em>folder name of your project.</em></p>\n<p><em>Do the same with<strong>&nbsp;</strong><strong>res.sendFile(path.join(__dirname+ '/dist/&lt;your_project_name&gt;/index.html'));</strong></em></p>\n<p><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"https://i.imgur.com/sx3iwgV.png\" alt=\"server code\" width=\"647\" height=\"428\" /></p>\n<p>&nbsp;</p>\n<h3>Configure package.json</h3>\n<p>Go to your <strong>package.json.</strong></p>\n<p>Change the \"<em><strong>start\": \"ng serve\" </strong></em>in the <em><strong>\"scripts: \" {....}&nbsp;</strong></em>to <strong>\"start\": \"node server.js\"&nbsp;</strong>this command will run the</p>\n<p>server.js file through the server.</p>\n<p>Add also in the <strong>script</strong> section&nbsp;<em><strong>\"postinstall\": \"ng build --aot --prod\"</strong></em></p>\n<p style=\"text-align: center;\"><img src=\"https://i.imgur.com/sDODDZZ.png\" alt=\"package.json\" width=\"674\" height=\"298\" /></p>\n<p style=\"text-align: left;\">To know what version of node and npm that needs to be run on the server insert \"<strong>engines\"</strong></p>\n<p style=\"text-align: left;\">Put inside in the <em><strong>engines</strong></em> your<strong><em> node</em></strong> version and <strong><em>npm</em></strong> version</p>\n<p style=\"text-align: left;\"><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"https://i.imgur.com/4BtLzgy.png\" alt=\"engines\" width=\"424\" height=\"209\" /></p>\n<p style=\"text-align: left;\">To know what version of <em>node</em> and <em>npm</em> you are using type in your terminal <strong>node -v </strong>and<strong> npm -v</strong></p>\n<p style=\"text-align: left;\">Here's what my package.json looks like:</p>\n<pre class=\"language-javascript\"><code>{\n  \"name\": \"demo-deploy\",\n  \"version\": \"0.0.0\",\n  \"scripts\": {\n    \"ng\": \"ng\",\n    \"start\": \"node server.js\",\n    \"build\": \"ng build\",\n    \"test\": \"ng test\",\n    \"lint\": \"ng lint\",\n    \"e2e\": \"ng e2e\",\n    \"postinstall\": \"ng build --aot --prod\"\n  },\n  \"private\": true,\n  \"dependencies\": {\n    \"@angular/animations\": \"^6.0.0\",\n    \"@angular/common\": \"^6.0.0\",\n    \"@angular/compiler\": \"^6.0.0\",\n    \"@angular/core\": \"^6.0.0\",\n    \"@angular/forms\": \"^6.0.0\",\n    \"@angular/http\": \"^6.0.0\",\n    \"@angular/platform-browser\": \"^6.0.0\",\n    \"@angular/platform-browser-dynamic\": \"^6.0.0\",\n    \"@angular/router\": \"^6.0.0\",\n    \"core-js\": \"^2.5.4\",\n    \"express\": \"^4.16.3\",\n    \"rxjs\": \"^6.0.0\",\n    \"zone.js\": \"^0.8.26\"\n  },\n  \"devDependencies\": {\n    \"@angular/compiler-cli\": \"^6.0.0\",\n    \"@angular-devkit/build-angular\": \"~0.6.0\",\n    \"typescript\": \"~2.7.2\",\n    \"@angular/cli\": \"~6.0.0\",\n    \"@angular/language-service\": \"^6.0.0\",\n    \"@types/jasmine\": \"~2.8.6\",\n    \"@types/jasminewd2\": \"~2.0.3\",\n    \"@types/node\": \"~8.9.4\",\n    \"codelyzer\": \"~4.2.1\",\n    \"jasmine-core\": \"~2.99.1\",\n    \"jasmine-spec-reporter\": \"~4.2.1\",\n    \"karma\": \"~1.7.1\",\n    \"karma-chrome-launcher\": \"~2.2.0\",\n    \"karma-coverage-istanbul-reporter\": \"~1.4.2\",\n    \"karma-jasmine\": \"~1.1.1\",\n    \"karma-jasmine-html-reporter\": \"^0.2.2\",\n    \"protractor\": \"~5.3.0\",\n    \"ts-node\": \"~5.0.1\",\n    \"tslint\": \"~5.9.1\"\n  },\n  \"engines\": {\n    \"node\" : \"~8.9.1\",\n    \"npm\" : \"~6.0.0\"\n  }\n}\n</code></pre>\n<h3 style=\"text-align: left;\">Pushing To Live</h3>\n<p>To finally push your project to live</p>\n<h4>1. Create Heroku Project</h4>\n<p>Open a <strong>new terminal</strong> and create a new heroku project. To do this type in your terminal:</p>\n<p><em><strong>heroku create &lt;project_name&gt;</strong></em></p>\n<p><em><strong><img src=\"https://i.imgur.com/H0r4qTw.png\" alt=\"heroku create\" width=\"1158\" height=\"100\" /></strong></em></p>\n<h4>2. Adding the project to the remote repository</h4>\n<p>Still in your <strong>terminal</strong> locate through your <strong>angular project folder</strong>. In which mine is demo-deploy.</p>\n<p>Then add the remote repository by typing in the terminal:</p>\n<p><em><strong>heroku git:remote -a &lt;project_name&gt;</strong></em></p>\n<p><img src=\"https://i.imgur.com/jEqam2l.png\" alt=\"heroku remote\" width=\"1154\" height=\"63\" /></p>\n<h4>3. Commit and Deploy</h4>\n<p>Commit to your project and push to heroku:</p>\n<p><em><strong>git add .</strong></em></p>\n<p><em><strong>git commit -m 'First Commit'</strong></em></p>\n<p><em><strong>git push heroku master</strong></em></p>\n<p><em><strong><img src=\"https://i.imgur.com/lvlQQ0T.png\" alt=\"pushing to heroku master\" width=\"618\" height=\"114\" /></strong></em></p>\n<p><em>*To view your project in live website just type in the terminal:</em></p>\n<p><strong><em>heroku open</em></strong></p>\n<p><strong><em><img src=\"https://i.imgur.com/7ZK9miS.png\" alt=\"\" width=\"516\" height=\"31\" /></em></strong></p>\n<p>To Know more about creating and deploying projects through heroku you can visit these pages:</p>\n<p><a href=\"https://devcenter.heroku.com/articles/creating-apps\">https://devcenter.heroku.com/articles/creating-apps</a></p>\n<p><a href=\"https://devcenter.heroku.com/articles/git\">https://devcenter.heroku.com/articles/git</a></p>\n<p>&nbsp;</p>\n<p style=\"text-align: center;\"><em>\"Hoping that this guide helped you to deploy your angular projects using heroku\"</em></p>","featured_photo":"https://i.imgur.com/z2Fuw94.png","summary":"Easily deploy your angular project using heroku. Creating your heroku account and deploying your project through CLI. Adding scripts in package.json to build and deploy your project in heroku."
};