import { MongoClient, type Collection } from 'mongodb'

export const MongoHelper = {
  client: null as MongoClient | null,
  uri: null as string | null,

  async connect (uri: string): Promise<void> {
    this.uri = uri
    this.client = await MongoClient.connect(uri)
  },

  async disconnect (): Promise<void> {
    if (this.client) {
      await this.client.close()
      this.client = null
    }
  },

  getCollection (name: string): Collection {
    if (!this.client) {
      throw new Error('MongoDB client is not connected')
    }
    return this.client.db().collection(name)
  }
}
