var fs = require('fs');
var assert = require('assert');

var f = fs.readFileSync('plans.csv', 'utf8');

console.log(f);

var plans = [];
var lines = f.split('\n');

plans = lines
    .filter(line => line !== "")
    .map(line => {
        let tmp = line.split(',');
        return Object.assign({}, {
            planName: tmp[0],
            planBenefits: tmp[1],
            group: tmp[2]
        });
    });

assert.deepEqual(plans,
    [{
        planName: 'Great HMO',
        planBenefits: 'benefits package 1',
        group: 'UCD'
    },
    {
        planName: 'Silver PPO',
        planBenefits: 'benefits package 2',
        group: 'WHA'
    }]
);
