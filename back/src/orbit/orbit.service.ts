import { Injectable } from '@nestjs/common';
import * as IPFS from 'ipfs';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const OrbitDB = require('orbit-db');

async function setupDatabase() {
  const ipfsOptions = { repo: './ipfs' };
  const ipfs = await IPFS.create(ipfsOptions);

  // Create OrbitDB instance
  const orbitdb = await OrbitDB.createInstance(ipfs);
  return orbitdb;
}
setupDatabase().then((orbitdb) => {
  console.log(orbitdb);
});
@Injectable()
export class OrbitService {}
