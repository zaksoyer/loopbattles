
/** ****************************************************************************
 * I created this routine to test a theory, I've learned long ago when I started 
 * programming, in the mid 90s.
 * 
 * Theory : the 'for..next' loop is the most efficient loop of all.
 * 
 * So using TypeScript, I created a 8 rounds battle between 'while..do' and 
 * 'for..next', computing the same simple maths problem.
 * 
 * x = x + y 
 * 
 * where x represents an integer initialized at a value of 10 and y the amount 
 * of cycles to execute for the round.
 * 
 * Rules followed:
 *  -Keep the coding as simple it can be,
 *  -Print only results,
 *  -Start with 1000 cycles
 *  -Add 1000 cycles per round
 * 
 * I know a lot of external factors that we can't know at the moment can also
 * influence the results, but this can gives an idea when it's time to use a loop
 * handling a lots of elements.
 * 
 * HOW YOU CAN USE THiS
 * --------------------
 * 
 * Just change the processing in the loops for the one you're planning to use
 * and you can have an idea of what the results will be!
 * 
 */

const log = console.log;

interface _loops {
  round1  :number;
  round2  :number;
  round3  :number;
  round4  :number;
  round5  :number;
  round6  :number;
  round7  :number;
  round8  :number;
}

const loops :_loops = {
  round1  : 1000,
  round2  : 2000,
  round3  : 3000,
  round4  : 4000,
  round5  : 5000,
  round6  : 6000,
  round7  : 7000,
  round8  : 8000,
}

/**
 * @summary execute the for..next loop as per cycles sent in parameter.
 * @version 1.0.0 2020-06-21
 * @param   cycles and integer with the amount of loops to execute.
 * @returns a voided promise.
 */
 /*
 * Processing : Start a timer and execute the loop as per the amount of cycles
 *              received.  Then print the results in console.
 * 
 */
const forLoop = async(cycles :number) :Promise<void> => {
  let out   :number = 10;
  let test1 :string = 'forTimer' + String(cycles);

  console.time(test1);

  for (let i :number = 1; i <= cycles; i++) {
    out += i;
  }
  
  console.timeEnd(test1);
  Promise.resolve();
}

/**
 * @summary execute the 'while..do' loop as per cycles sent in parameter.
 * @version 1.0.0 2020-06-21
 * @param   cycles and integer with the amount of loops to execute.
 * @returns a voided promise.
 */
 /*
 * Processing : Start a timer and execute the loop as per the amount of cycles
 *              received.  Then print the results in console.
 * 
 */
const whileLoop = async(cycles :number) :Promise<void> => {
  let i     :number = 1;
  let out   :number = 10;
  let test1 :string = 'whileTimer' + String(cycles);

  console.time(test1);
  while (i <= cycles) {
    out += i;
    i++;
  }
  
  console.timeEnd(test1);
  Promise.resolve();
}

/**
 * @readonly @async
 * @summary execute the 9 rounds of the loops battle.
 * @version 1.0.0 2020-06-21
 * @returns a voided promise.
 */
 /**
 * Processing : Calls both 'for..next' and 'while..do' loop for each of the 
 *              8 rounds.
 * 
 * Using a loop to execute this subroutine would have given less code, righ, 
 * BUT would also has been against the reason why this was created.
 */
const GO = async () :Promise<void> => {
  log('\nRoud 1 :', loops.round1);
  log('--------------');
  await forLoop(loops.round1);
  await whileLoop(loops.round1);
  log('*************************\n');
  
  log('Round 2 :', loops.round2);
  log('--------------');
  await forLoop(loops.round2);
  await whileLoop(loops.round2);
  log('*************************\n');

  log('Round 3 :', loops.round3);
  log('--------------');
  await forLoop(loops.round3);
  await whileLoop(loops.round3);
  log('*************************\n');

  log('Round 4 :', loops.round4);
  log('--------------');
  await forLoop(loops.round4);
  await whileLoop(loops.round4);
  log('*************************\n');

  log('Round 5 :', loops.round5);
  log('--------------');
  await forLoop(loops.round5);
  await whileLoop(loops.round5);
  log('*************************\n');

  log('Round 6 :', loops.round6);
  log('--------------');
  await forLoop(loops.round6);
  await whileLoop(loops.round6);
  log('*************************\n');

  log('Round 7 :', loops.round7);
  log('--------------');
  await forLoop(loops.round7);
  await whileLoop(loops.round7);
  log('*************************\n');

  log('Round 8 :', loops.round8);
  log('--------------');
  await forLoop(loops.round8);
  await whileLoop(loops.round8);
  log('*************************\n');

  Promise.resolve();
}

// Running battle's subroutine //
GO();
