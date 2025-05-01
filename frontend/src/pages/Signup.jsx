/*import  { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setSuccess('')
        const auth = getAuth()
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            setSuccess('Signup successful! You can now log in.')
            setEmail('')
            setPassword('')
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <div style={{ maxWidth: 400, margin: '0 auto', padding: 20 }}>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div style={{ marginTop: 10 }}>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" style={{ marginTop: 20 }}>Sign Up</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
        </div>
    )
}

export default Signup*/
