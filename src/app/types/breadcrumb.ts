export interface Breadcrumb {
  url: string;
  label: string;
}

class Base {
  protected m = 10;
}
class Derived extends Base {
  override m = 15;
}
const d = new Derived();
console.log(d.m);
