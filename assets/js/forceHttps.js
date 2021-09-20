function forceHttps() {
    if (location.protocol !== 'https:' && location.protocol !== 'file:') {
         location.replace(`https:${location.href.substring(location.protocol.length)}`);
    }
}

forceHttps();