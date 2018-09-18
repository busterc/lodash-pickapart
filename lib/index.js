export default function(_) {
  _.mixin({
    pickapart: function(paths, source) {
      if (Array.isArray(paths) && !source) {
        source = _.cloneDeep(paths);
        return [...source];
      }
      const parts = _.at(source, paths);
      const remains = Array.isArray(source)
        ? _.toArray(_.omit(source, paths))
        : _.omit(source, paths);
      return [...parts, remains];
    }
  });
}
