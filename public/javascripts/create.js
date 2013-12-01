// Generated by CoffeeScript 1.6.3
(function() {
  $(document).ready(function() {
    var extract_fields, has_errors;
    extract_fields = function(form) {
      var values;
      values = {};
      form.each(function() {
        return values[this.name] = $(this).val();
      });
      return values;
    };
    has_errors = function(inputs) {
      var error_flag, key, value, _i, _len;
      error_flag = false;
      for (key = _i = 0, _len = inputs.length; _i < _len; key = ++_i) {
        value = inputs[key];
        if (value === "") {
          error_flag = true;
        }
      }
      console.log("error?", error_flag);
      return error_flag;
    };
    return $("#pollSubmit").click(function() {
      var inputs;
      inputs = extract_fields($("#pollForm :input"));
      if (!has_errors(inputs)) {
        return $("#pollForm").submit();
      }
    });
  });

}).call(this);
