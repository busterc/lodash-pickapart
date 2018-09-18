function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function index (_) {
  _.mixin({
    pickapart: function pickapart(paths, source) {
      if (Array.isArray(paths) && !source) {
        source = _.cloneDeep(paths);
        return [].concat(_toConsumableArray(source));
      }
      var parts = _.at(source, paths);
      var remains = Array.isArray(source) ? _.toArray(_.omit(source, paths)) : _.omit(source, paths);
      return [].concat(_toConsumableArray(parts), [remains]);
    }
  });
}

export default index;
