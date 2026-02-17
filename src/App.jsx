import { useState } from 'react'

function App() {
  const [company, setCompany] = useState('')
  const [postition, setPosition] = useState('')
  const [applications, setApplications] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    const newApplication = {
      id: Date.now(),
      company: company,
      postition: postition,
      status: 'Applied'
    }

    setApplications([...applications, newApplication])

    setCompany('')
    setPosition('')

  }

  const handleDelete = (idToDelete) => {
    setApplications(applications.filter(app => app.id !== idToDelete))
  }

  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <h1>Job Application Tracker</h1>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="text"
            placeholder='Company name'
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            style={{ width: '100%', padding: '10px', fontSize: '16px' }}
          />
        </div>
        <div>
          <input
            type='text'
            placeholder='Position'
            value={postition}
            onChange={(e) => setPosition(e.target.value)}
            style={{ width: '100%', padding: '10px', fontSize: '16px' }}
          />
        </div>

        <button type="submit" style={{ padding: '10px 20px', fontSize: '16px' }}>
          Add Application
        </button>

      </form>

      <div style={{ marginTop: '30px' }}>
        <h2>Applications ({applications.length})</h2>
        {applications.map(app => (
          <div key={app.id} style={{
            border: '1px solid #ddd',
            padding: '15px',
            marginBottom: '10px',
            borderRadius: '5px'
          }}>
            <strong>{app.company}</strong> - {app.postition}
            <div style={{ fontSize: '14px', color: '#666', marginTop: '5px' }}>
              Status: {app.status}
            </div>
            <button
              onClick={() => handleDelete(app.id)}
              style={{
                marginTop: '10px',
                padding: '5px 10px',
                backgroundColor: '#f44336',
                color: 'white',
                border: 'none',
                borderRadius: '3px',
                cursor: 'pointer'
              }}
            >
              Delete
            </button>
          </div>
        ))}

      </div>
    </div>
  )
}

export default App