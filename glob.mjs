import { promise } from 'glob-promise';

const test = await promise('./src/**/index.ts');
console.log(test);
const aliasRegexp = /^\.\/src\/(.+)(\.ts)$/g;

test.forEach((v) => console.log(aliasRegexp.exec(v)));
