export const blogs = [
    {
        id: 1,
        title: 'Getting Started with WebGL: Creating My First 3D Scene',
        date: '01/15/2024',
        content: [
            {type: 'headeing', content: 'Creating My First 3D Scene'},
            {type: 'paragraf', content: "Hey there! Today, I decided to dive into the world of WebGL and create my very first 3D scene. I thought it would be fun to journal my experience, sharing both the triumphs and the inevitable hiccups along the way. If you're interested in WebGL or just want to see someone else’s learning process, stick around!"},
            {type: 'subhead', content: "Day 1: Setting Up"},
            {type: 'paragraf', content: "First things first, I needed to set up my environment. I fired up Visual Studio Code (my go-to text editor) and made sure I had Google Chrome ready to roll. I also installed the Live Server extension for VS Code, so I could easily view my changes in real-time."},
            {type: 'paragraf', content: "Tip: If you're doing this too, make sure your browser is up to date. Some older versions might not support WebGL fully."},
            {type: 'subhead', content: "The HTML Skeleton"},
            {type: 'paragraf', content: "I started with a basic HTML file to host the WebGL canvas. Nothing fancy, just the essentials:"},
            {type: 'code', content: "<!DOCTYPE html>\n<html lang='en'>\n    <head>\n        <meta charset='UTF-8'>\n        <meta name='viewport' content='width=device-width, initial-scale=1.0'>\n        <title>My First WebGL Scene</title>\n       <style>\n           body, html { margin: 0; padding: 0; } canvas { display: block; }\n      </style>\n  </head>\n   <body>\n        <canvas id='glCanvas'></canvas>\n       <script src='main.js'></script>\n   </body>\n</html>", language: "html"},
            {type: 'paragraf', content: "This code sets up a full-screen canvas element, which WebGL will use for rendering."},
            {type: 'subhead', content: "Step 2: Initializing WebGL"},
            {type: 'paragraf', content: "Next, create a JavaScript file named main.js and add the following code to initialize WebGL:"},
            {type: 'code', content: "window.onload = function() {\n const canvas = document.getElementById('glCanvas');\n   const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');\n\n   if (!gl) {\n        alert('Unable to initialize WebGL. Your browser may not support it.');\n        return;\n   }\n\n   // Set clear color to black, fully opaque\n gl.clearColor(0.0, 0.0, 0.0, 1.0);\n    // Clear the color buffer with specified clear color\n  gl.clear(gl.COLOR_BUFFER_BIT);\n};", language: "javascript"},
            {type: 'paragraf', content: "This script selects the canvas element and attempts to initialize a WebGL context. If successful, it sets the clear color to black and clears the canvas."},
            {type: 'subhead', content: "Step 3: Creating Shaders"},
            {type: 'paragraf', content: "WebGL uses shaders written in GLSL (OpenGL Shading Language) to process vertices and pixels. We need two shaders: a vertex shader and a fragment shader."},
            {type: 'paragraf', content: "Add the following code to main.js to create the shaders:"},
            {type: 'code', content: "function createShader(gl, type, source) {\n  const shader = gl.createShader(type);\n  gl.shaderSource(shader, source);\n  gl.compileShader(shader);\n\n    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {\n             console.error('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));\n      gl.deleteShader(shader);\n      return null;\n  }\n  return shader;\n}\n\nconst vertexShaderSource = `\n  attribute vec4 aVertexPosition;\n  void main(void) {\n      gl_Position = aVertexPosition;\n  }\n`;\n\nconst fragmentShaderSource = `\n  void main(void) {\n      gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n  }\n`;\n\nconst vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);\nconst fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);", language: 'javascript'},
            {type: 'paragraf', content: "Pain Point: I kept getting an error about compiling shaders. Turns out, I missed a semicolon in the GLSL code. Syntax matters!"},
            {type: 'subhead', content: "Linking Shaders to a Program"},
            {type: 'paragraf', content: "With the shaders ready, I created a shader program and linked the shaders:"},
            {type: 'code', content: "function createProgram(gl, vertexShader, fragmentShader) {\n  const program = gl.createProgram();\n  gl.attachShader(program, vertexShader);\n  gl.attachShader(program, fragmentShader);\n  gl.linkProgram(program);\n\n    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {\n      console.error('Unable to initialize the shader program: ' + gl.getProgramInfoLog(program));\n      return null;\n  }\n  return program;\n}\n\nconst shaderProgram = createProgram(gl, vertexShader, fragmentShader);\ngl.useProgram(shaderProgram);", language: 'javascript'},
            {type: 'paragraf', content: "Note to Self: I forgot to call gl.useProgram(shaderProgram) initially. Don't forget to activate your shader program!"},
            {type: 'subhead', content: "Defining Geometry"},
            {type: 'paragraf', content: "Time to define the geometry. I started with a simple triangle:"},
            {type: 'code', content: "const vertices = new Float32Array([\n  0.0,  1.0,\n   -1.0, -1.0,\n  1.0, -1.0\n]);\n\nconst vertexBuffer = gl.createBuffer();\ngl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);\ngl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);\n\nconst position = gl.getAttribLocation(shaderProgram, 'aVertexPosition');\ngl.enableVertexAttribArray(position);\ngl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);", language: 'javascript'},
            {type: 'paragraf', content: "Challenge: I initially forgot to use gl.enableVertexAttribArray(position), which led to an invisible triangle. Remember to enable your vertex attributes!"},
            {type: 'subhead', content: "Drawing the Scene"},
            {type: 'paragraf', content: "Finally, I cleared the canvas and drew the triangle:"},
            {type: 'code', content: "gl.clear(gl.COLOR_BUFFER_BIT);\ngl.drawArrays(gl.TRIANGLES, 0, 3);", language: 'javascript'},
            {type: 'paragraf', content: "Victory: It worked! A white triangle appeared on a black background. Simple, but it felt like magic."},
            {type: 'headeing', content: "Wrapping Up"},
            {type: 'paragraf', content: "Creating my first 3D scene with WebGL was a fun and rewarding experience. There were a few bumps along the way, but each mistake was a learning opportunity. I’m excited to dive deeper into 3D transformations, lighting, and textures in future projects."},
            {type: 'paragraf', content: "Stay tuned for more adventures in WebGL and JavaScript. If you've got any questions or ideas for what I should tackle next, drop a comment below. Until next time, Happy Hacking!"},
        ]
    }, {
        id: 2,
        title: 'How to Integrate ChatGPT into a React App?',
        date: '02/10/2024',
        content: [
            {type: 'headeing', content: "How Do I Integrate ChatGPT into My React App?"},
            {type: 'paragraf', content: "Hey everyone! Today, I embarked on a mission to integrate ChatGPT into my React app. It was a bit of a rollercoaster, but I learned a ton and I'm excited to share the journey with you. If you’re looking to add a powerful AI chatbot to your web application, follow along as I walk you through the process!"},
            {type: 'subhead', content: "Setting Up"},
            {type: 'paragraf', content: "First things first, I needed to set up my React environment. If you haven’t already, you can use Create React App to bootstrap a new project:"},
            {type: 'code', content: "npx create-react-app chatgpt-integration\ncd chatgpt-integration\nnpm start", language: 'bash'},
            {type: 'paragraf', content: "This command set up a fresh React app and launched it in the browser. Now, we’re ready to start coding!"},
            {type: 'subhead', content: "Getting API Access"},
            {type: 'paragraf', content: "To use ChatGPT, you need API access from OpenAI. I signed up on the OpenAI website, created an API key, and saved it in a secure place. Make sure you don’t share this key publicly!"},
            {type: 'paragraf', content: "Tip: Store your API key in environment variables for security. Create a .env file in the root of your project:"},
            {type: 'code', content: "REACT_APP_OPENAI_API_KEY=your-api-key-here", language: 'javascript'},
            {type: 'subhead', content: "Setting Up Axios", language: 'javascript'},
            {type: 'paragraf', content: "To make HTTP requests to the OpenAI API, I decided to use Axios. I installed it using npm:"},
            {type: 'code', content: "npm install axios", language: 'bash'},
            {type: 'subhead', content: "Creating the Chat Component"},
            {type: 'paragraf', content: "Next, I created a Chat component where users can interact with ChatGPT. Here’s what my initial Chat.js file looked like:"},
            {type: 'code', content: "import React, { useState } from 'react';\nimport axios from 'axios';\n\n    const Chat = () => {\n      const [input, setInput] = useState('');\n      const [messages, setMessages] = useState([]);\n\n        const handleSubmit = async (e) => {\n          e.preventDefault();\n          const userMessage = input;\n          setMessages([...messages, { text: userMessage, sender: 'user' }]);\n\n            try {\n              const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {\n              prompt: userMessage,\n              max_tokens: 150,\n              }, {\n              headers: {\n              'Authorization': Bearer ${process.env.REACT_APP_OPENAI_API_KEY},\n          },\n          });\n              const botMessage = response.data.choices[0].text.trim();\n              setMessages([...messages, { text: userMessage, sender: 'user' }, { text: botMessage, sender: 'bot' }]);\n              } catch (error) {\n              console.error('Error fetching response:', error);\n              }\n          setInput('');\n          };\n\n        return (\n          <div>\n          <div className='chat-window'>\n          {messages.map((msg, index) => (\n      <div key={index} className={message ${msg.sender}}>\n      {msg.text}\n      </div>\n          ))}\n          </div>\n          <form onSubmit={handleSubmit}>\n          <input\n          type='text'\n          value={input}\n          onChange={(e) => setInput(e.target.value)}\n          placeholder='Type your message here...'\n          />\n          <button type='submit'>Send</button>\n          </form>\n          </div>\n          );\n  };\n\nexport default Chat;", language: 'javascript'},
            {type: 'paragraf', content: "Obstacle: I kept getting CORS errors initially. A quick Google search and I found that adding mode: 'cors' to the Axios request options fixed it."},
            {type: 'subhead', content: "Styling the Chat Interface"},
            {type: 'paragraf', content: "To make the chat interface more user-friendly, I added some basic styles:"},
            {type: 'code', content: "/* Chat.css */\n  .chat-window {\n      border: 1px solid #ccc;\n      padding: 10px;\n      height: 400px;\n      overflow-y: scroll;\n  }\n\n    .message {\n      margin: 5px 0;\n      padding: 10px;\n      border-radius: 5px;\n  }\n\n    .message.user {\n      background-color: #d1ffd6;\n      text-align: right;\n  }\n\n        .message.bot {\n      background-color: #f1f1f1;\n  }", language: 'css'},
            {type: 'paragraf', content: "And imported this CSS file in my Chat.js:"},
            {type: 'code', content: "import './Chat.css';", language: 'javascript'},
            {type: 'subhead', content: "Testing the Chat"},
            {type: 'paragraf', content: "After setting up the component and styling, it was time to test it. I typed a few messages and waited for ChatGPT’s responses. It worked, but there were a few hiccups."},
            {type: 'paragraf', content: "Issue: Sometimes the API response was slow, and the chat window didn’t scroll automatically. To fix the scrolling, I added a useEffect hook:"},
            {type: 'code', content: "import React, { useState, useEffect, useRef } from 'react';\nimport axios from 'axios';\n\n    const Chat = () => {\n      const [input, setInput] = useState('');\n      const [messages, setMessages] = useState([]);\n      const chatWindowRef = useRef(null);\n\n        useEffect(() => {\n          chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;\n      }, [messages]);\n\n      const handleSubmit = async (e) => {\n          e.preventDefault();\n          const userMessage = input;\n          setMessages([...messages, { text: userMessage, sender: 'user' }]);\n\n            try {\n              const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {\n              prompt: userMessage,\n              max_tokens: 150,\n              }, {\n              headers: {\n                  'Authorization': Bearer ${process.env.REACT_APP_OPENAI_API_KEY},\n              },\n          });\n\n            const botMessage = response.data.choices[0].text.trim();\n              setMessages([...messages, { text: userMessage, sender: 'user' }, { text: botMessage, sender: 'bot' }]);\n          } catch (error) {\n      console.error('Error fetching response:', error);\n          }\n\n            setInput('');\n      };\n\n        return (\n              <div>\n                  <div className='chat-window' ref={chatWindowRef}>\n                      {messages.map((msg, index) => (\n                          <div key={index} className={message ${msg.sender}}>\n                              {msg.text}\n                          </div>\n                      ))}\n                  </div>\n                  <form onSubmit={handleSubmit}>\n                      <input\n                          type='text'\n                          value={input}\n                          onChange={(e) => setInput(e.target.value)}\n                          placeholder='Type your message here...'\n                      />\n                      <button type='submit'>Send</button>\n                  </form>\n                  </div>\n              );\n          };\n\nexport default Chat;", language: 'javascript'},
            {type: 'headeing', content: "Wrapping Up"},
            {type: 'paragraf', content: "Integrating ChatGPT into my React app was a fun and challenging project. From setting up the environment to handling API calls and styling the interface, I learned a lot along the way. There were a few bumps, but with some perseverance (and a lot of Googling), I got it working smoothly."},
            {type: 'paragraf', content: "I hope this post helps you if you’re looking to add ChatGPT to your app. If you have any questions or run into any issues, feel free to drop a comment below. Until next time, happy coding!"},
        ]
        
    }
]

export const services = [
    {
        id: 1,
        title: 'Business Website',
        description: 'If your bussiness does not yet have a a website, then it is time to have an online presence that comunicates the brand of your company as well as that displays information abaout services and products.',
        moreAbout: [{type: 'paragraf', content: 'As a web design specialist, I provide premium, custom web design services that cater to the unique needs of each client. I work closely with my clients throughout the design process to ensure their vision is brought to life and their website stands out from the competition.'}, {type: 'paragraf', content: 'I use the latest design techniques and best practices to create visually stunning and user-friendly websites that drive results.'}, {type: 'list', content: ['Interactive Features', 'User-friendly', 'UX & UI Implementation', '100% SEO optimized', 'Custom website design tailored to your brand', 'Mobile optimization and responsive design']}]
    },
    {
        id: 2,
        title: 'Content & SEO',
        description: 'Great SEO levarages powerful analytics and keyword analysis to draw eligible trafic to your company website, improvine your sales potential and make it a money-making machine!',
        moreAbout: [{type: 'paragraf', content: 'As a content creator and SEO specialist, I offer comprehensive services that help businesses build a strong online presence. I create high-quality, engaging content that resonates with the target audience and drives conversions'}, {type: 'paragraf', content: "Additionally, I optimize the content for search engines, making it easier for my clients' websites to rank higher in search results. By combining quality content creation and SEO, I help businesses attract and engage their ideal customers, ultimately driving growth and success."}, {type: 'list', content: ['Website audit', 'Extensive Keywords Research', 'On-page optimization']}],
    },
    {
        id: 3,
        title: 'e-Commerce Website',
        description: 'Launch an economical, conversion-focused mini theme targeting crucial action pages. Designed to maximize your budget and conversion potential.',
        moreAbout: [{type: 'paragraf', content: 'Seize the oportunity to use our services to design the best e-Commerce website for your company, further helping you to increase your sales!'}, {type: 'paragraf', content: "Implement a cost-effective theme that evolves with your business by analyzing user interactions on key pages, guiding future enhancements for sustained growth."}, {type: 'list', content: ['Payment integrations', 'highly Secure Checkout', 'User-friendly', 'Interactive website', 'Mobile Optimized', '100% SEO optimied']}],
    },
    {
        id: 4,
        title: '3d Services',
        description: 'High Quality Digital Content, From Picture to Photoreal 3d, Elevate your online store with immersive 3D images and captivate your audience.',
        moreAbout: [{type: 'paragraf', content: 'Place your product in any scene of your choice to showcase it in the most appealing and captivating manner.'}, {type: 'paragraf', content: "Bring your products to life with captivating 3D animations, setting you apart from competitors"}, {type: 'paragraf', content: '3D animations are a fantastic way to capture attention and enhance the impact of your marketing campaigns.'}, {type: 'paragraf', content: "Unlock the power to convey complex ideas, products, or concepts. Create visually stunning content that stands out in today's competitive landscape."}, {type: 'list', content: ['Immersive 3D images', 'Product in any scene of your choice', 'Captivating 3D animations', 'Interactive website', 'Mobile Optimized', '100% SEO optimied']}],
    }
]

export const works = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
]