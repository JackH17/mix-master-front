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

const add = async () => {
    try {
        console.log('Staging...');
        console.log(addCommand);
        const res = await exec(addCommand);
        // outputs //
        // res: {
        //     stdout: '',
        //     stderr: ""
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

const commitCommand = ` git commit -m 'this is the commit message'`;

const commit = async () => {
    try {
        console.log('Commiting...');
        console.log(commitCommand);
        const res = await exec(commitCommand);
        // outputs //
        // in try:  {
        //     stdout: '[this_is_a_test_auto_branch_again_again cfee117] this ' +
        //       'is the commit message\n 2 files changed, 87 ' +
        //       'insertions(+), 1 deletion(-)\n create mode 100644 ' +
        //       'src/tools.js\n',
        //     stderr: ''
        //   }
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

const upstreamPushCommand = `git push --set-upstream origin this_is_a_test_auto_branch`;

const pushUpstream = async () => {
    try {
        console.log('Pushing upstream...');
        console.log(upstreamPushCommand);
        const res = await exec(upstreamPushCommand);
        console.log("in try: ", res)
        // output //
        // in try:  {
        //     stdout: "Branch 'this_is_a_test_auto_branch' set up to track " +
        //       "remote branch 'this_is_a_test_auto_branch' from " +
        //       "'origin'.\n",
        //     stderr: "remote: \nremote: Create a pull request for 'this_is_a_test_auto_branch' on " +
        //       'GitHub by visiting:        \nremote:      ' +
        //       'https://github.com/JackH17/mix-master-front/pull/new/this_is_a_test_auto_branch ' +
        //       '       \nremote: \nremote: GitHub found 118 vulnerabilities on ' +
        //       "JackH17/mix-master-front's default branch (18 critical, 55 high, 38 " +
        //       'moderate, 7 low). To find out more, visit:        \nremote:      ' +
        //       'https://github.com/JackH17/mix-master-front/security/dependabot        \n' +
        //       'remote: \nTo github.com:JackH17/mix-master-front.git\n * [new branch]      ' +
        //       'this_is_a_test_auto_branch -> this_is_a_test_auto_branch\n'
        //   }
    } catch (err) {
        console.log('in error')
        console.log(err)
        if (err.stdout) {
            const e = await JSON.parse(err.stdout.toString())
            console.log(e)
        }
    }
}

const createPrCommand = `gh pr create --title "This is an auto test at 10:27 cve fix" --body "this is the auto pr body"`

const createPr = async () => {
    try {
        console.log('Creating PR...');
        console.log(createPrCommand);
        const res = await exec(createPrCommand);
        console.log("in try: ", res)
        // output //
        // in try:  {
        //     stdout: "Branch 'this_is_a_test_auto_branch' set up to track " +
        //       "remote branch 'this_is_a_test_auto_branch' from " +
        //       "'origin'.\n",
        //     stderr: "remote: \nremote: Create a pull request for 'this_is_a_test_auto_branch' on " +
        //       'GitHub by visiting:        \nremote:      ' +
        //       'https://github.com/JackH17/mix-master-front/pull/new/this_is_a_test_auto_branch ' +
        //       '       \nremote: \nremote: GitHub found 118 vulnerabilities on ' +
        //       "JackH17/mix-master-front's default branch (18 critical, 55 high, 38 " +
        //       'moderate, 7 low). To find out more, visit:        \nremote:      ' +
        //       'https://github.com/JackH17/mix-master-front/security/dependabot        \n' +
        //       'remote: \nTo github.com:JackH17/mix-master-front.git\n * [new branch]      ' +
        //       'this_is_a_test_auto_branch -> this_is_a_test_auto_branch\n'
        //   }
    } catch (err) {
        console.log('in error')
        console.log(err)
        if (err.stdout) {
            const e = await JSON.parse(err.stdout.toString())
            console.log(e)
        }
    }
}

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
        // await add();

        // commit changes //
        // await commit();

        // push upstream //
        // await pushUpstream();

        // create pr //
        await createPr();
        

    } catch (error) {
        console.log({ error })
    }
}

gitHubIntergration();
