

export const Server = {
    getRestAPIHost: function() {
        return window.location.hostname === 'localhost' ? 'http://localhost:4000' : ''
    },
    ERROR: 100
}