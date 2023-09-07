import { DataItem, IRuntime, Validator } from '@kyvejs/protocol';
import { name, version } from '../package.json';

// Your runtime pool config
interface IConfig {
  my_config: any
}

export default class Tendermint implements IRuntime {
  public name = name;
  public version = version;
  public config!: IConfig;

  async validateSetConfig(rawConfig: string): Promise<void> {
    const config: IConfig = JSON.parse(rawConfig);

    this.config = config;
  }

  async getDataItem(_: Validator, key: string): Promise<DataItem> {
    // IMPLEMENT
    return null;
  }

  async prevalidateDataItem(_: Validator, item: DataItem): Promise<boolean> {
    // IMPLEMENT
    return true;
  }

  async transformDataItem(_: Validator, item: DataItem): Promise<DataItem> {
    // IMPLEMENT
    return null;
  }

  async validateDataItem(
    _: Validator,
    proposedDataItem: DataItem,
    validationDataItem: DataItem
  ): Promise<boolean> {
    // IMPLEMENT
    return true
  }

  async summarizeDataBundle(_: Validator, bundle: DataItem[]): Promise<string> {
    // IMPLEMENT
    return '';
  }

  async nextKey(_: Validator, key: string): Promise<string> {
    // IMPLEMENT
    return '';
  }
}
