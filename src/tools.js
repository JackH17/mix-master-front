const { promisify } = require('util');
const child_process = require('child_process');

const exec = promisify(child_process.exec);

const execTest = async (arg) => new Promise((resolve) => {
    setTimeout(() => {
        console.log(arg);
        resolve()
    }, 100)
})

// checkout //
const checkoutCommand = 'git checkout -b this_is_a_test_auto_branch_again_again';

const checkout = async () => {
    try {
        const res = await exec(checkoutCommand);
        // outputs //
        // res: {
        //     stdout: 'M\tpackage.json\n',
        //     stderr: "Switched to a new branch 'this_is_a_test_auto_branch_again_again'\n"
        // }
        console.log("in try: ", res)
    } catch (err) {
        console.log('in error')
        console.log(err)
        if (err.stdout) {
            const e = await JSON.parse(err.stdout.toString())
            console.log(e)
        }
    }
}

const addCommand = 'git add .';
const commitCommand = ` git commit -m 'this is the commit message'`;
const upstreamPushCommand = `git push --set-upstream origin this_is_a_test_auto_branch`;

const createPrCommand = `gh pr create --title "This is an auto cve fix" --body "this is the auto pr body"`

const gitHubIntergration = async () => {
    try {
        //// test with console output ////

        await execTest(checkoutCommand);
        await execTest(addCommand);
        await execTest(commitCommand);
        await execTest(upstreamPushCommand);
        await execTest(createPrCommand);

        //// real command ////

        // checkout //
        // await checkout();

        // stage changes //

        try {
            console.log('Staging...');
            console.log(addCommand);
            const res = await exec(addCommand);
            // outputs //
            // res: {
            //     stdout: 'M\tpackage.json\n',
            //     stderr: "Switched to a new branch 'this_is_a_test_auto_branch_again_again'\n"
            // }
            console.log("in try: ", res)
        } catch (err) {
            console.log('in error')
            console.log(err)
            if (err.stdout) {
                const e = await JSON.parse(err.stdout.toString())
                console.log(e)
            }
        }
        // await exec(commitCommand);
        // await exec(upstreamPushCommand);
        // await exec(createPrCommand);

    } catch (error) {
        console.log({ error })
    }
}

gitHubIntergration();
