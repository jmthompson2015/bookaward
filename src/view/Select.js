/*
 * Provides an HTML select with options derived from values and the label function.
 * Optionally provide client properties which can be retrieved from the event in your onChange function.
 */
import InputValidator from "../utility/InputValidator.js";

class Select extends React.Component
{
   constructor(props)
   {
      super(props);

      this.state = {
         selectedValue: this.props.initialSelectedValue,
      };
   }

   render()
   {
      var values = this.props.values;
      InputValidator.validateNotEmpty("values", values);

      var selectProps = {
         value: this.state.selectedValue,
         onChange: this.handleChange.bind(this),
      };

      var clientProps = this.props.clientProps;

      if (clientProps)
      {
         Object.getOwnPropertyNames(clientProps).forEach(function(key)
         {
            selectProps[key] = clientProps[key];
         });
      }

      var labelFunction = this.props.labelFunction;
      var options = [];

      for (var i = 0; i < values.length; i++)
      {
         var value = values[i];
         var label = (labelFunction ? labelFunction(value) : value);

         options.push(ReactDOMFactories.option(
         {
            key: i,
            value: value,
         }, label));
      }

      return ReactDOMFactories.select(selectProps, options);
   }

   handleChange(event)
   {
      this.setState(
      {
         selectedValue: event.target.value,
      });

      var onChange = this.props.onChange;

      if (onChange)
      {
         onChange(event);
      }
   }
}

Select.propTypes = {
   // Option values. (required)
   values: PropTypes.array.isRequired,

   // Client properties. (optional)
   clientProps: PropTypes.object,
   // Initially selected value. (optional)
   initialSelectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
   // Function which returns the label for a value. Defaults to simply return the value. (optional)
   labelFunction: PropTypes.func,
   // Function called when the selection changes. (optional)
   onChange: PropTypes.func,
};

export default Select;