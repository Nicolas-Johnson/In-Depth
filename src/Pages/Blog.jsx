import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs' 

const Blog = () => {
  return (
    <div>
        <h1>Blog</h1>
        <h2>Blog posts</h2>
        <div className="posts">
            <Link to={'/blog/1'}> Blog Post 01 </Link>
            <Link to={'/blog/2'}> Blog Post 02 </Link>
            <Link to={'/blog/3'}> Blog Post 03 </Link>
            <Link to={'/blog/4'}> Blog Post 04 </Link>
            <Link to={'/blog/5'}> Blog Post 05 </Link>
        </div>
        <div className="test">
          <div className="code">
              <SyntaxHighlighter className="code" language='javascript' style={atomOneDarkReasonable}>
              {"import React, { useState, useEffect, useRef } from 'react';\nimport axios from 'axios';\n\n    const Chat = () => {\n      const [input, setInput] = useState('');\n      const [messages, setMessages] = useState([]);\n      const chatWindowRef = useRef(null);\n\n        useEffect(() => {\n          chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;\n      }, [messages]);\n\n      const handleSubmit = async (e) => {\n          e.preventDefault();\n          const userMessage = input;\n          setMessages([...messages, { text: userMessage, sender: 'user' }]);\n\n            try {\n              const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {\n              prompt: userMessage,\n              max_tokens: 150,\n              }, {\n              headers: {\n                  'Authorization': Bearer ${process.env.REACT_APP_OPENAI_API_KEY},\n              },\n          });\n\n            const botMessage = response.data.choices[0].text.trim();\n              setMessages([...messages, { text: userMessage, sender: 'user' }, { text: botMessage, sender: 'bot' }]);\n          } catch (error) {\n             console.error('Error fetching response:', error);\n          }\n\n            setInput('');\n      };\n\n        return (\n              <div>\n                  <div className='chat-window' ref={chatWindowRef}>\n                      {messages.map((msg, index) => (\n                          <div key={index} className={message ${msg.sender}}>\n                              {msg.text}\n                          </div>\n                      ))}\n                  </div>\n                  <form onSubmit={handleSubmit}>\n                      <input\n                          type='text'\n                          value={input}\n                          onChange={(e) => setInput(e.target.value)}\n                          placeholder='Type your message here...'\n                      />\n                      <button type='submit'>Send</button>\n                  </form>\n                  </div>\n              );\n          };\n\nexport default Chat;"}  
              </SyntaxHighlighter>            
          </div>
        </div>
    </div>
  )
}

export default Blog