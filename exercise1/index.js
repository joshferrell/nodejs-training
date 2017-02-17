var fs = require('fs');
var assert = require('assert');

var f = fs.readFileSync('plans.csv', 'utf8');

console.log(f);

var plans = [];
var lines = f.split('\n');

for (var i = 0; i < lines.length; i++) {
    // fill in the missing logic here
}

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
