require('dotenv').config()

async function sendSMS({ to, message }) {
  const response = await fetch('https://v3.api.termii.com/api/sms/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      to,
      from: 'generic',
      sms: message,
      type: 'plain',
      channel: 'generic',
      api_key: process.env.TERMII_API_KEY
    })
  })

  const data = await response.json()
  console.log('[SMS] Response:', data)
  return data
}

module.exports = { sendSMS }