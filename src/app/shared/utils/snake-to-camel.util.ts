
export class SnakeToCamelUtil {
  static convert(text: string): string {
    return text.replace(/([-_][a-z])/ig, ($1) => {
      return $1.toUpperCase()
        .replace('-', '')
        .replace('_', '');
    });
  }

  static convertObject(obj: any): any {
    if (!obj) {
      throw new Error('obj must be defined');
    }
    const result = {};
    Object.keys(obj).forEach((key: string) => {
      let value = obj[key];
      if (obj[key] instanceof Object) {
        value = SnakeToCamelUtil.convertObject(obj[key]);
      }
      result[SnakeToCamelUtil.convert(key)] = value;
    });
    return result;
  }

}
