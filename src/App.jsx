import { useState } from 'react'

function App() {
  const [company, setCompany] = useState('')

  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <h1>Job Application Tracker</h1>

      <div style={{ marginBottom: '15px' }}>
        <input
          type="text"
          placeholder='Company name'
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          style={{ width: '100%', padding: '10px', fontSize: '16px' }}
        />
      </div>

      <p>You typed: {company}</p>
    </div>
  )
}

export default App