import React from 'react'

const MarkdownEditor = () => {
  return (
    <div>MarkdownEditor</div>
  )
}

export default MarkdownEditor

// import React, { useState } from 'react';
// import ReactMarkdown from 'react-markdown';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import './MarkdownEditor.css'

// const MarkdownEditor = () => {
//   const [markdownText, setMarkdownText] = useState('');

//   const components = {
//     code({node, inline, className, children, ...props}: any) {
//       const match = /language-(\w+)/.exec(className || '')
//       return !inline && match ? (
//         <SyntaxHighlighter style={solarizedlight} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
//       ) : (
//         <code className={className} {...props}>
//           {children}
//         </code>
//       )
//     }
//   }

//   return (
//     <div className='for-text'>
//       <textarea 
//         value={markdownText} 
//         onChange={e => setMarkdownText(e.target.value)} 
//         style={{ width: '300px', height: '100px' }}
//       />

//       <ReactMarkdown components={components} children={markdownText} />
//     </div>
//   );
// };

// export default MarkdownEditor;
