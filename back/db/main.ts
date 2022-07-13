import * as IPFS from 'ipfs';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const OrbitDB = require('orbit-db');
import 'dotenv/config';

async function setupDatabase() {
  const ipfsOptions = {
    repo: './ipfs',
    privateKey: process.env['IPFS_PRIVATE_KEY'],
  };
  const ipfs = await IPFS.create(ipfsOptions);

  // Create OrbitDB instance
  const orbitdb = await OrbitDB.createInstance(ipfs);
  const options = {
    // Give write access to ourselves
    accessController: {
      write: [process.env['IPFS_PUBLIC_KEY']],
    },
  };

  // Create a new databases
  const sections = await orbitdb.docs('sections', options);
  const users = await orbitdb.docs('users', options);
  const history = await orbitdb.log('history', options);

  return {
    sections: sections.address,
    users: users.address,
    history: history.address,
  };
}

setupDatabase().then(console.log);
