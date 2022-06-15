export default class SettingError extends Error {
  constructor(...params) {
    super(...params)
    this.name = "SettingError"
  }
}
