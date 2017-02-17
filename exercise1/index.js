const fs = require('fs');
const assert = require('assert');

fs.readFile('plans.csv', 'utf8', function ( err, data ) {
    if (err) return -1;

    var plans = [];
    const lines = data.split('\n');

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

    console.log(plans);

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
});
