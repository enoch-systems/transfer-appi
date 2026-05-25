const userRepository = require('../repositories/userRepository')

function execute({ senderId, receiverId, amount }) {
  // fetch both users
  const sender = userRepository.findById(senderId)
  const receiver = userRepository.findById(receiverId)

  // rule 1 — do both users exist?
  if (!sender) throw new Error('Sender not found')
  if (!receiver) throw new Error('Receiver not found')

  // rule 2 — is amount valid?
  if (amount <= 0) throw new Error('Amount must be greater than zero')

  // rule 3 — does sender have enough balance?
  if (sender.balance < amount) throw new Error('Insufficient funds')

  // deduct from sender
  userRepository.updateBalance(senderId, sender.balance - amount)

  // credit receiver
  userRepository.updateBalance(receiverId, receiver.balance + amount)

  return {
    message: 'Transfer successful',
    sender: sender.name,
    receiver: receiver.name,
    amount
  }
}

module.exports = { execute }