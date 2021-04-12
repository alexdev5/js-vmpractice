// Abstract class
export class DomListener {
  constructor($root) {
    if (!$root) {
      throw new Error(`no $root provide for DomListener`);
    }
    this.$root = $root;
  }
}