let exitRequested = false

const info = (message) => {
    console.log(message)
}

const fatal = (message) => {
    // Show the message in bold red.
    console.error(`\x1b[1;31m${message}\x1b[m`)
    exitRequested = true
}

const checkFatal = () => {
    if (exitRequested) {
        process.exit(1)
    }
}

const logDiscordMessage = (message) => {
    const {username, discriminator} = message.author
    info(
        bold(`<${username}#${discriminator}>`) + ' ' + message.cleanContent
    )
}

// Add ANSI sequences to the given string that cause a terminal to bold it.
const bold = (string) => `\x1b[1m${string}\x1b[m`

module.exports = {
    info,
    fatal,
    checkFatal,
    logDiscordMessage,
    bold,
}
