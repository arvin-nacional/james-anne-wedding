import { getPayload } from 'payload'
import config from './src/payload.config.js'

async function listUsers() {
  try {
    console.log('Connecting to PayloadCMS...')
    const payload = await getPayload({ config })

    console.log('Fetching all users...')

    const users = await payload.find({
      collection: 'users',
      limit: 50,
    })

    if (users.docs.length === 0) {
      console.log('❌ No users found in the database')
      console.log('You may need to create an admin user first.')
      process.exit(1)
    }

    console.log(`✅ Found ${users.docs.length} user(s):`)
    console.log('================================')

    users.docs.forEach((user, index) => {
      console.log(`${index + 1}. Email: ${user.email}`)
      console.log(`   ID: ${user.id}`)
      console.log(`   Created: ${user.createdAt}`)
      console.log('   ---')
    })

    console.log('\nUse one of these emails in the reset-password.mjs script.')
  } catch (error) {
    console.error('❌ Error:', error.message)
  }

  process.exit(0)
}

listUsers()
