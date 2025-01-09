import { type AddAccount, type AddAccountModel, type AccountModel, type Encrypter, type AddAccountRepository } from './db-add-account-protocols'

export class DBAddAccount implements AddAccount {
  private readonly encrypter: Encrypter
  private readonly AddAccountRepository: AddAccountRepository

  constructor (encrypter: Encrypter, AddAccountRepository: AddAccountRepository) {
    this.encrypter = encrypter
    this.AddAccountRepository = AddAccountRepository
  }

  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const hashedPassword = await this.encrypter.encrypt(accountData.password)
    const account = await this.AddAccountRepository.add(Object.assign({}, accountData, { password: hashedPassword }))
    return account
  }
}
