import { Component } from "react";
import { withRouter } from "./withRouter";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./themeContext";

class Details extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
    };
  }

  async componentDidMount() {
    // console.log(this.props.params.id);
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );

    const json = await res.json();
    console.log(json.pets[0]);
    this.setState(Object.assign({ loading: false }, json.pets[0]));
  }

  // getAnimal = () => {
  //   console.log("getting animal");
  //   return "getting Animal"
  // }

  render() {
    console.log(this.state);

    if (this.state.loading) {
      return <h2>Loading....</h2>;
    }
    const { name, animal, breed, city, state, description, images } =
      this.state;
    // throw new Error("error");
    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {city}, {state}
          </h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button style={{ backgroundColor: theme }}>Adopt {name}</button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
        </div>
        {/* <p>{this.getAnimal()}</p> */}
      </div>
    );
  }
}

const DetailsWithRouter = withRouter(Details);

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <DetailsWithRouter {...props} />
    </ErrorBoundary>
  );
}
