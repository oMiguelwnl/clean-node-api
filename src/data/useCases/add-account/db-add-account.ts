import { type AddAccount, type AddAccountModel, type AccountModel, type Encrypter } from './db-add-account-protocols'

export class DBAddAccount implements AddAccount {
  private readonly encrypter: Encrypter

  constructor (encrypter: Encrypter) {
    this.encrypter = encrypter
  }

  async add (account: AddAccountModel): Promise<AccountModel> {
    await this.encrypter.encrypt(account.password)
    const fakeAccount: AccountModel = {
      id: 'valid_id',
      name: account.name,
      email: account.email,
      password: account.password
    }
    return new Promise(resolve => { resolve(fakeAccount) })
  }
}
