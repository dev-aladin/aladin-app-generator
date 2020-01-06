import { UserSession, AppConfig } from 'aladinjs'

export const appConfig = new AppConfig(['store_write', 'publish_data'])
export const userSession = new UserSession({ appConfig })
window.userSession = userSession
