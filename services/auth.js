const loggerUser = new Map();

export function setLoggerUser(id, user) {
    loggerUser.set(id, user);
}
export function getLoggerUser(id) {
    return loggerUser.get(id);
}