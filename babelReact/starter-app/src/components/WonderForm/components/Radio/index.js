import React from 'react'

class Radio extends React.Component {

   constructor(props) {
       super(props);

       this.state = {
           values: props.values,
           activeValue: props.defaultValue
       }
   }

   onValueChange = e => {
       let value = e.target.value
       const { onChange, name } = this.props
       onChange(name, value)
       this.setState({ activeValue: value })
   }

   render() {
       const { values, activeValue } = this.state
       const { name } = this.props

       return (
           <div>
               {values.map((value, i) => {
                   return (
                       <div>
                           {value}
                           <input
                               key={i}
                               name={name}
                               type="radio"
                               value={value}
                               checked={value === activeValue}
                               onClick={this.onValueChange}
                           />
                       </div>
                   )
               })}
           </div>
       );
   }
}

export default Radio;

