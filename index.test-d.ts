import {expectType} from 'tsd';
import chalk from 'chalk';
import chalkTemplate, {template, chalkTemplateStderr, templateStderr} from './index.js';

// -- Template literal --
expectType<string>(chalkTemplate``);
const name = 'John';
expectType<string>(chalkTemplate`Hello {bold.red ${name}}`);
expectType<string>(chalkTemplate`Works with numbers {bold.red ${1}}`);

expectType<string>(template('Today is {bold.red hot}'));

// -- Complex template literal --
expectType<string>(chalk.red.bgGreen.bold(chalkTemplate`Hello {italic.blue ${name}}`));
expectType<string>(chalk.strikethrough.cyanBright.bgBlack(chalkTemplate`Works with {reset {bold numbers}} {bold.red ${1}}`));

// -- Stderr Types --
expectType<typeof chalkTemplate>(chalkTemplateStderr);
expectType<typeof template>(templateStderr);
