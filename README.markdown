# Ereshkigal

This is a [Discord](https://discord.com/) bot designed to help with administrative tasks in the [*Caves of Qud* official server](https://discord.gg/cavesofqud). It's open source; see [LICENSE](LICENSE).

The bot's primary design principle is *explicitness*: If something is to be allowed, it needs to be stated unambiguously. It should be difficult to do anything, especially anything with great consequences, by accident.

The bot is named after a [*Caves of Qud* character](https://wiki.cavesofqud.com/wiki/Ereshkigal).

## Usage

### Setup

This section gives instructions on how to set up the bot for the first time.

These instructions assume some knowledge of Discord, command line, git, and JSON; and that `node` and `npm` commands can be found by your shell.

1. Clone this repository and set it as the working directory. (All commands are assumed to be run in the root of this repository.)
2. Run `npm ci` to install dependencies. (*Do not* run `npm install`; this can fetch different versions of the dependencies than the ones that were developed against.)
3. Run `node .`. Follow the directions in your new `config.toml` file as well as the ones printed to the terminal.
    - Read the whole config file! You need to uncomment the commented out fields (indicated in the file) and add at least one role to give command permissions to.
    - If you would rather disable a plugin than follow its instructions, delete the file of the appropriate name from `plugins/` or else move it elsewhere. You can re-enable it later by recreating the file, e.g., with `git reset`.
4. Run `node .` again. If `Done.` appears in the output, the bot has successfully booted and connected to Discord.

Once the bot is running, it will give some useful information if you post `!help` where it can see it and reply. (`!` is the *default* command prefix; if you've changed it, put whatever you changed it to in front of `help` instead.)

### Updating

Once the bot has already been setup, follow these instructions to update it to a new version.

1. Fetch the new version, e.g., with `git pull`.
2. Run `npm ci` to update dependencies.

If all went well, you may now run `node .` to run the new version of the bot. Note that there may be additional required config fields.

## Acknowledgments

The plugin-based architecture is inspired by that of [LHBot](https://github.com/mindset-tk/LHBot). This bot's predecessor is a fork of LHBot, which it's designed to replace, although it deliberately doesn't come with much of the functionality of LHBot.
