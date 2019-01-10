import React from "react";
import { Container, Text } from "./styles";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      gender: '',
      pronoun: '',
      hometown: '',
      food_1: '',
      food_2: '',
      food_3: '',
      birthday: '',
      id: '',
      concentration: '',
      submitted: false,
    }
  }
  
    handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value});
    }
    
    handleSubmit = (e) => {
      this.setState({submitted: true});
    }

    render () {
      return(
        <React.Fragment>
          <div>
            Name: <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
          </div>
          <div>
            Gender: <input name="gender" type="text" value={this.state.gender} onChange={this.handleChange} />
          </div>
          <div>
            Pronoun: <input name="pronoun" type="text" value={this.state.pronoun} onChange={this.handleChange} />
          </div>
          <div>
            Hometown: <input name="hometown" type="text" value={this.state.hometown} onChange={this.handleChange} />
          </div>
          <div>
            Favorite Food #1: <input name="food_1" type="text" value={this.state.food_1} onChange={this.handleChange} />
          </div>
          <div>
            Favorite Food #2: <input name="food_2" type="text" value={this.state.food_2} onChange={this.handleChange} />
          </div>
          <div>
            Favorite Food #3: <input name="food_3" type="text" value={this.state.food_3} onChange={this.handleChange} />
          </div>
          <div>
            Birthday: <input name="birthday" type="text" value={this.state.birthday} onChange={this.handleChange} />
          </div>
          <div>
            HUID: <input name="id" type="text" value={this.state.id} onChange={this.handleChange} />
          </div>
          <div>
            Concentration: <input name="concentration" type="text" value={this.state.concentration} onChange={this.handleChange} />
          </div>
          <button onClick={() => this.handleSubmit()}>Submit</button>
          {this.state.submitted &&
            <div>
              {`User's name is ${this.state.name}, and ${this.state.pronoun} are from ${this.state.hometown}. ${this.state.pronoun} was born on ${this.state.birthday}, and ${this.state.pronoun} favorite foods are ${this.state.food_1}, ${this.state.food_2}, and ${this.state.food_3}. At Harvard, ${this.state.name} studies ${this.state.concentration}.`}
            </div>
          }
        </React.Fragment>
      )
    }
  }

export default Form;
