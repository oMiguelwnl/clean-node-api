import { type AddAccountModel } from '../../domain/useCases/add-account'
import { type AccountModel } from '../useCases/add-account/db-add-account-protocols'

export interface AddAccountRepository {
  add: (accountData: AddAccountModel) => Promise<AccountModel>
}
